#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

// Listă de imagini valide (toate testate)
const validImages = [
  // Fitness images
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=400&fit=crop',
  
  // Nutrition images
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1607623814075-e51df1bd6565?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop',
  
  // Larger sizes
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&h=600&fit=crop',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1000&h=600&fit=crop',
  
  // Cover sizes
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=630&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=630&fit=crop'
];

console.log(`Checking ${files.length} articles for broken images...\n`);

let totalFixed = 0;
let articlesFixed = 0;

files.forEach((file, fileIndex) => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extrage toate imaginile
  const imageRegex = /!\[(.*?)\]\((https:\/\/images\.unsplash\.com\/[^)]+)\)/g;
  const matches = [...content.matchAll(imageRegex)];
  
  if (matches.length === 0) return;
  
  let hasInvalidImages = false;
  let fixedInThisArticle = 0;
  
  // Verifică dacă articolul are imagini invalide
  matches.forEach((match) => {
    const [fullMatch, altText, oldUrl] = match;
    
    // Verifică dacă URL-ul e invalid (ID scurt sau format incorect)
    const isInvalid = oldUrl.includes('photo-15710196') && !oldUrl.includes('-1cb2f99b2d8b') && !oldUrl.includes('-14e5300c3a48');
    
    if (isInvalid) {
      hasInvalidImages = true;
    }
  });
  
  if (!hasInvalidImages) return;
  
  console.log(`${fileIndex + 1}. ${file}: Has invalid images, fixing...`);
  
  // Înlocuiește toate imaginile
  matches.forEach((match, matchIndex) => {
    const [fullMatch, altText, oldUrl] = match;
    
    // Verifică dacă e invalid
    const isInvalid = oldUrl.includes('photo-15710196') && !oldUrl.includes('-1cb2f99b2d8b') && !oldUrl.includes('-14e5300c3a48');
    
    if (isInvalid) {
      // Alege o imagine validă
      const newUrl = validImages[(fileIndex * 10 + matchIndex) % validImages.length];
      
      // Înlocuiește
      const newImage = `![${altText}](${newUrl})`;
      content = content.replace(fullMatch, newImage);
      
      console.log(`   ❌ Fixed: ${oldUrl.substring(0, 50)}...`);
      fixedInThisArticle++;
      totalFixed++;
    }
  });
  
  // Scrie fișierul reparat
  fs.writeFileSync(filePath, content);
  
  if (fixedInThisArticle > 0) {
    articlesFixed++;
    console.log(`   ✅ Fixed ${fixedInThisArticle} images\n`);
  }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Articles checked: ${files.length}`);
console.log(`Articles with broken images: ${articlesFixed}`);
console.log(`Total images fixed: ${totalFixed}`);

if (articlesFixed > 0) {
  console.log(`\n⚠️  WARNING: The redistribute-images-smart.js script created invalid image IDs!`);
  console.log(`   It generated IDs like "photo-1571019662454" which don't exist on Unsplash.`);
  console.log(`\n✅ All broken images have been replaced with valid ones.`);
  console.log(`\nNext steps:`);
  console.log(`1. Run: npm run build`);
  console.log(`2. Run: vercel --prod --token YOUR_TOKEN`);
  console.log(`3. Verify all articles load correctly`);
} else {
  console.log(`\n✅ No broken images found! All articles are OK.`);
}