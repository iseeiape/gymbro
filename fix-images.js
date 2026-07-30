#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'content/blog/cold-exposure.mdx');
let content = fs.readFileSync(filePath, 'utf8');

// Lista de imagini alternative pentru cold exposure
const alternativeImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1576671414120-4f3ea0e5f5c5?w=800&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop'
];

// Extrage toate URL-urile de imagini
const imageRegex = /!\[.*?\]\((https:\/\/[^)]+)\)/g;
const matches = [...content.matchAll(imageRegex)];
const imageUrls = matches.map(m => m[1]);

// Verifică duplicate
const urlCounts = {};
imageUrls.forEach(url => {
  urlCounts[url] = (urlCounts[url] || 0) + 1;
});

console.log('Duplicate images found:');
Object.entries(urlCounts).forEach(([url, count]) => {
  if (count > 1) {
    console.log(`  ${url} - appears ${count} times`);
  }
});

// Înlocuiește duplicatele
let usedUrls = new Set();
let currentIndex = 0;

content = content.replace(/!\[(.*?)\]\((https:\/\/[^)]+)\)/g, (match, altText, url) => {
  if (usedUrls.has(url)) {
    // Găsește o imagine alternativă nefolosită
    let newUrl = alternativeImages[currentIndex % alternativeImages.length];
    while (usedUrls.has(newUrl)) {
      currentIndex++;
      newUrl = alternativeImages[currentIndex % alternativeImages.length];
    }
    console.log(`Replacing duplicate: ${url} -> ${newUrl}`);
    usedUrls.add(newUrl);
    currentIndex++;
    return `![${altText}](${newUrl})`;
  } else {
    usedUrls.add(url);
    return match;
  }
});

// Scrie fișierul corectat
fs.writeFileSync(filePath, content);
console.log('\nFile fixed successfully! All images are now unique.');

// Verifică rezultatul final
const finalContent = fs.readFileSync(filePath, 'utf8');
const finalMatches = [...finalContent.matchAll(imageRegex)];
const finalUrls = finalMatches.map(m => m[1]);
const finalCounts = {};
finalUrls.forEach(url => {
  finalCounts[url] = (finalCounts[url] || 0) + 1;
});

console.log('\nFinal image count:');
Object.entries(finalCounts).forEach(([url, count]) => {
  console.log(`  ${count}x ${url.substring(0, 60)}...`);
});