#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

console.log(`Analyzing ${files.length} blog articles...\n`);

let totalArticles = 0;
let articlesWithDuplicates = 0;
let totalDuplicates = 0;
let allImageUrls = new Set();
let urlUsageCount = {};

// Analizează fiecare articol
files.forEach((file, index) => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extrage toate imaginile
  const imageRegex = /!\[.*?\]\((https:\/\/[^)]+)\)/g;
  const matches = [...content.matchAll(imageRegex)];
  
  if (matches.length > 0) {
    totalArticles++;
    
    // Verifică duplicate în acest articol
    const articleUrls = new Map();
    const duplicatesInArticle = [];
    
    matches.forEach((match) => {
      const url = match[2];
      if (!url) return;
      const baseUrl = url.split('?')[0]; // Ignoră parametrii de dimensiune
      
      // Track pentru articol
      if (articleUrls.has(baseUrl)) {
        duplicatesInArticle.push(baseUrl);
      } else {
        articleUrls.set(baseUrl, true);
      }
      
      // Track global
      allImageUrls.add(baseUrl);
      urlUsageCount[baseUrl] = (urlUsageCount[baseUrl] || 0) + 1;
    });
    
    if (duplicatesInArticle.length > 0) {
      articlesWithDuplicates++;
      totalDuplicates += duplicatesInArticle.length;
      
      console.log(`${index + 1}. ${file}`);
      console.log(`   Images: ${matches.length}, Duplicates: ${duplicatesInArticle.length}`);
      
      // Afișează duplicatele
      const uniqueDups = [...new Set(duplicatesInArticle)];
      uniqueDups.forEach(dup => {
        const count = matches.filter(m => m[2].split('?')[0] === dup).length;
        console.log(`   - ${dup.substring(0, 60)}... (appears ${count} times)`);
      });
      console.log('');
    }
  }
});

// Analiză globală
console.log('\n=== GLOBAL IMAGE ANALYSIS ===');
console.log(`Total articles: ${files.length}`);
console.log(`Articles with images: ${totalArticles}`);
console.log(`Articles with duplicates: ${articlesWithDuplicates} (${Math.round(articlesWithDuplicates/totalArticles*100)}%)`);
console.log(`Total duplicate images found: ${totalDuplicates}`);

// Cele mai folosite imagini
const sortedUrls = Object.entries(urlUsageCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

console.log('\nTop 10 most used images:');
sortedUrls.forEach(([url, count], index) => {
  console.log(`${index + 1}. ${url.substring(0, 60)}... (used ${count} times)`);
});

// Statistici generale
const totalImages = Object.values(urlUsageCount).reduce((a, b) => a + b, 0);
const uniqueImages = Object.keys(urlUsageCount).length;

console.log('\n=== IMAGE DIVERSITY STATS ===');
console.log(`Total image instances: ${totalImages}`);
console.log(`Unique images: ${uniqueImages}`);
console.log(`Reuse ratio: ${(totalImages / uniqueImages).toFixed(2)}x (higher = more reuse)`);
console.log(`Image diversity: ${Math.round(uniqueImages/totalImages*100)}%`);

// Recomandări
console.log('\n=== RECOMMENDATIONS ===');
if (sortedUrls[0][1] > 5) {
  console.log(`⚠️  "${sortedUrls[0][0].substring(0, 50)}..." is used ${sortedUrls[0][1]} times!`);
  console.log('   Consider finding alternative images for articles using this.');
}

if (articlesWithDuplicates > 0) {
  console.log(`\n🔧 ${articlesWithDuplicates} articles need image deduplication.`);
  console.log('   Run the fix script to replace duplicate images with unique ones.');
}

console.log('\n✅ Analysis complete!');