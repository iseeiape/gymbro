#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'content/blog/cold-exposure.mdx');
let content = fs.readFileSync(filePath, 'utf8');

// Lista de imagini alternative pentru cold exposure (toate valide)
const alternativeImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?w=800&h=600&fit=crop'
];

// Extrage toate imaginile
const imageRegex = /!\[(.*?)\]\((https:\/\/[^)]+)\)/g;
const matches = [...content.matchAll(imageRegex)];

console.log(`Found ${matches.length} images in article`);

// Verifică duplicatele
const urlMap = new Map();
const replacements = [];

for (const [fullMatch, altText, url] of matches) {
  const baseUrl = url.split('?')[0]; // Ignoră parametrii de dimensiune
  if (urlMap.has(baseUrl)) {
    console.log(`Duplicate found: ${baseUrl}`);
    console.log(`  Alt text: "${altText}"`);
    
    // Găsește o imagine alternativă care nu e folosită
    let newUrl = alternativeImages.find(img => {
      const imgBase = img.split('?')[0];
      return !Array.from(urlMap.values()).some(used => used.baseUrl === imgBase);
    });
    
    if (!newUrl) {
      // Dacă nu găsim una nefolosită, luăm prima disponibilă
      newUrl = alternativeImages[0];
    }
    
    replacements.push({
      old: fullMatch,
      new: `![${altText}](${newUrl})`
    });
    
    const newBaseUrl = newUrl.split('?')[0];
    urlMap.set(newBaseUrl, { baseUrl: newBaseUrl, altText });
  } else {
    urlMap.set(baseUrl, { baseUrl, altText });
  }
}

// Aplică înlocuirile
if (replacements.length > 0) {
  console.log(`\nMaking ${replacements.length} replacements:`);
  replacements.forEach((rep, i) => {
    console.log(`${i+1}. ${rep.old.substring(0, 80)}...`);
    console.log(`   -> ${rep.new.substring(0, 80)}...`);
    content = content.replace(rep.old, rep.new);
  });
  
  // Scrie fișierul
  fs.writeFileSync(filePath, content);
  console.log('\n✅ File updated successfully!');
} else {
  console.log('\n✅ No duplicates found!');
}

// Verifică rezultatul final
console.log('\nFinal image check:');
const finalMatches = [...content.matchAll(imageRegex)];
const finalUrls = finalMatches.map(m => m[2]);
const finalCounts = {};

finalUrls.forEach(url => {
  const baseUrl = url.split('?')[0];
  finalCounts[baseUrl] = (finalCounts[baseUrl] || 0) + 1;
});

let hasDuplicates = false;
Object.entries(finalCounts).forEach(([url, count]) => {
  if (count > 1) {
    console.log(`❌ ${url} - appears ${count} times`);
    hasDuplicates = true;
  } else {
    console.log(`✅ ${url}`);
  }
});

if (hasDuplicates) {
  console.log('\n❌ Still have duplicates!');
} else {
  console.log('\n✅ All images are unique!');
}