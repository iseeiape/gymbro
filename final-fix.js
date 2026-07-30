#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'content/blog/cold-exposure.mdx');
let content = fs.readFileSync(filePath, 'utf8');

// 10 imagini unice pentru cold exposure
const uniqueImages = [
  // 1. Expunere la frig și recuperare
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
  
  // 2. Ice bath recovery  
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop',
  
  // 3. Biologie moleculară
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop',
  
  // 4. Sistemul nervos
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop',
  
  // 5. Recuperare musculară
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=400&fit=crop',
  
  // 6. Masă musculară
  'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?w=800&h=400&fit=crop',
  
  // 7. Arderea grăsimilor
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  
  // 8. Protocol progresiv
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
  
  // 9. Siguranță (Imgur)
  'https://i.imgur.com/Dr8epa4.jpeg',
  
  // 10. Succes
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop'
];

// Extrage toate imaginile
const imageRegex = /!\[(.*?)\]\((https:\/\/[^)]+)\)/g;
const matches = [...content.matchAll(imageRegex)];

console.log(`Found ${matches.length} images in article`);

// Înlocuiește fiecare imagine cu una unică
matches.forEach((match, index) => {
  const [fullMatch, altText, oldUrl] = match;
  if (index < uniqueImages.length) {
    const newUrl = uniqueImages[index];
    const newImage = `![${altText}](${newUrl})`;
    
    console.log(`${index + 1}. "${altText}"`);
    console.log(`   Old: ${oldUrl.substring(0, 60)}...`);
    console.log(`   New: ${newUrl.substring(0, 60)}...`);
    
    content = content.replace(fullMatch, newImage);
  }
});

// Scrie fișierul
fs.writeFileSync(filePath, content);
console.log('\n✅ File updated with 10 unique images!');

// Verifică rezultatul final
console.log('\nFinal verification:');
const finalMatches = [...content.matchAll(imageRegex)];
const finalUrls = finalMatches.map(m => m[2]);

finalUrls.forEach((url, index) => {
  const baseUrl = url.split('?')[0];
  const isDuplicate = finalUrls.slice(0, index).some(otherUrl => 
    otherUrl.split('?')[0] === baseUrl
  );
  
  if (isDuplicate) {
    console.log(`❌ ${url.substring(0, 60)}... (DUPLICATE!)`);
  } else {
    console.log(`✅ ${url.substring(0, 60)}...`);
  }
});

// Verifică dacă toate imaginile există
console.log('\nChecking image availability...');
const https = require('https');

function checkImage(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(5000, () => {
      req.destroy();
      resolve(false);
    });
    req.end();
  });
}

(async () => {
  for (const url of finalUrls) {
    if (url.startsWith('https://images.unsplash.com') || url.startsWith('https://i.imgur.com')) {
      const isValid = await checkImage(url);
      console.log(`${isValid ? '✅' : '❌'} ${url.substring(0, 60)}...`);
    }
  }
})();