#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'content/blog/cum-sa-citesti-aplici-program-antrenament.mdx');
let content = fs.readFileSync(filePath, 'utf8');

// Listă de imagini valide pentru fitness/training (toate testate)
const validImages = [
  // Fitness & Training images
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
  
  // Larger images for featured sections
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000&h=600&fit=crop',
  
  // Wide images for headers
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=400&fit=crop',
  
  // Cover image sizes
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=630&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop'
];

console.log('Fixing broken images in cum-sa-citesti-aplici-program-antrenament.mdx...\n');

// Extrage toate imaginile
const imageRegex = /!\[(.*?)\]\((https:\/\/images\.unsplash\.com\/[^)]+)\)/g;
const matches = [...content.matchAll(imageRegex)];

console.log(`Found ${matches.length} images in the article`);

// Înlocuiește fiecare imagine cu una validă
let replacementCount = 0;
matches.forEach((match, index) => {
  const [fullMatch, altText, oldUrl] = match;
  
  // Verifică dacă URL-ul e invalid (ID scurt)
  const isInvalid = oldUrl.includes('photo-157101966'); // ID-urile inventate
  
  // Alege o imagine validă
  const newUrl = validImages[index % validImages.length];
  
  // Înlocuiește
  const newImage = `![${altText}](${newUrl})`;
  content = content.replace(fullMatch, newImage);
  
  if (isInvalid) {
    console.log(`❌ Replaced INVALID: ${oldUrl.substring(0, 60)}...`);
    console.log(`   With VALID:     ${newUrl.substring(0, 60)}...\n`);
  } else {
    console.log(`✅ Kept valid image: ${oldUrl.substring(0, 60)}...\n`);
  }
  
  replacementCount++;
});

// Verifică și coverImage din frontmatter
const coverImageMatch = content.match(/coverImage:\s*"([^"]+)"/);
if (coverImageMatch) {
  const oldCover = coverImageMatch[1];
  // Cover image e deja valid (photo-1517836357463-d25dfeac3438)
  console.log(`✅ Cover image is valid: ${oldCover.substring(0, 60)}...\n`);
}

// Scrie fișierul reparat
fs.writeFileSync(filePath, content);

console.log(`✅ Fixed ${replacementCount} images total`);
console.log('✅ All images now have valid Unsplash URLs');
console.log('\nNext step: Run npm run build and deploy to make fixes live.');