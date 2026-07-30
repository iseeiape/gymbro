#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'content/blog/post-intermitent-ghid-complet.mdx');
let content = fs.readFileSync(filePath, 'utf8');

// Listă de imagini valide pentru nutrition/fitness (toate de pe Unsplash)
const validImages = [
  // Nutrition & Food images
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=400&fit=crop',
  
  // Fitness & Wellness images
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop',
  
  // Larger images for featured sections
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop',
  
  // Cover image sizes
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=630&fit=crop',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&h=630&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=630&fit=crop'
];

console.log('Fixing broken images in post-intermitent-ghid-complet.mdx...\n');

// Extrage toate imaginile
const imageRegex = /!\[(.*?)\]\((https:\/\/images\.unsplash\.com\/[^)]+)\)/g;
const matches = [...content.matchAll(imageRegex)];

console.log(`Found ${matches.length} images in the article`);

// Înlocuiește fiecare imagine cu una validă
let replacementCount = 0;
matches.forEach((match, index) => {
  const [fullMatch, altText, oldUrl] = match;
  
  // Alege o imagine validă (rotind prin lista)
  const newUrl = validImages[index % validImages.length];
  
  // Înlocuiește
  const newImage = `![${altText}](${newUrl})`;
  content = content.replace(fullMatch, newImage);
  
  console.log(`Replaced: ${oldUrl.substring(0, 60)}...`);
  console.log(`With:     ${newUrl.substring(0, 60)}...\n`);
  replacementCount++;
});

// Verifică și coverImage din frontmatter
const coverImageMatch = content.match(/coverImage:\s*"([^"]+)"/);
if (coverImageMatch) {
  const oldCover = coverImageMatch[1];
  const newCover = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=630&fit=crop';
  content = content.replace(`coverImage: "${oldCover}"`, `coverImage: "${newCover}"`);
  console.log(`Fixed coverImage: ${newCover.substring(0, 60)}...\n`);
  replacementCount++;
}

// Scrie fișierul reparat
fs.writeFileSync(filePath, content);

console.log(`✅ Fixed ${replacementCount} images total`);
console.log('✅ All images now have valid Unsplash URLs');
console.log('\nNext step: Run npm run build and deploy to make fixes live.');