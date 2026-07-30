#!/usr/bin/env node
/**
 * GymBro Real Content Generator
 * Uses pre-generated AI articles from data/articles.json
 */

const fs = require('fs');
const path = require('path');

const WORKSPACE = '/home/unu/.openclaw/workspace/fitness-calculator-v2';
const ARTICLES_FILE = path.join(WORKSPACE, 'data/articles.json');
const POOL_FILE = path.join(WORKSPACE, 'content/content-pool-topics.md');
const BLOG_DIR = path.join(WORKSPACE, 'content/blog');

// Read all articles
const articlesData = JSON.parse(fs.readFileSync(ARTICLES_FILE, 'utf8'));

// Track which articles have been used
const USED_ARTICLES_FILE = path.join(WORKSPACE, 'data/used-articles.json');
let usedArticles = [];
if (fs.existsSync(USED_ARTICLES_FILE)) {
  usedArticles = JSON.parse(fs.readFileSync(USED_ARTICLES_FILE, 'utf8'));
}

// Find unused article
function findUnusedArticle() {
  for (const article of articlesData) {
    if (!usedArticles.includes(article.id)) {
      return article;
    }
  }
  return null;
}

// Convert article to MDX format
function articleToMDX(article) {
  const today = new Date().toISOString().split('T')[0];
  
  return `---
title: "${article.title}"
metaDescription: "${article.metaDescription}"
category: "${article.category}"
tags: [${article.tags.map(t => `"${t}"`).join(', ')}]
author: "${article.author}"
publishedAt: "${today}"
updatedAt: "${today}"
readingTime: ${article.readingTime}
coverImage: "${article.coverImage}"
excerpt: "${article.excerpt}"
ctaText: "${article.ctaText}"
ctaLink: "${article.ctaLink}"
featured: ${article.featured || false}
---

# ${article.title}

**Timp citire:** ${article.readingTime} minute | **Publicat:** ${new Date().toLocaleDateString('ro-RO')}

${article.content}

---

*Articol generat de GymBro AI Content System*  
*Pentru întrebări sau feedback, contactează-ne la contact@gymbro.ro*`;
}

// Mark topic as used in pool
function markTopicAsUsed(topicId) {
  const poolContent = fs.readFileSync(POOL_FILE, 'utf-8');
  const lines = poolContent.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^- \[ \] ([^ ]+) - (.+)$/);
    if (match && match[1] === topicId) {
      lines[i] = lines[i].replace('- [ ]', '- [x]');
      fs.writeFileSync(POOL_FILE, lines.join('\n'));
      console.log(`Marked topic ${topicId} as used in pool`);
      return true;
    }
  }
  return false;
}

// Main execution
async function main() {
  try {
    console.log('Looking for unused article...');
    
    const article = findUnusedArticle();
    
    if (!article) {
      console.log('No unused articles found in articles.json');
      console.log('Total articles:', articlesData.length);
      console.log('Used articles:', usedArticles.length);
      process.exit(0);
    }
    
    console.log(`Found unused article: ${article.title} (ID: ${article.id})`);
    
    // Create slug from article data
    const slug = article.slug;
    const articlePath = path.join(BLOG_DIR, `${slug}.mdx`);
    
    // Check if file already exists
    if (fs.existsSync(articlePath)) {
      console.log(`Article file already exists: ${articlePath}`);
      console.log('Marking as used anyway...');
    } else {
      // Convert to MDX and write
      const mdxContent = articleToMDX(article);
      fs.writeFileSync(articlePath, mdxContent);
      console.log(`Article created: ${articlePath}`);
    }
    
    // Mark article as used
    usedArticles.push(article.id);
    fs.writeFileSync(USED_ARTICLES_FILE, JSON.stringify(usedArticles, null, 2));
    
    // Try to mark topic in pool (if we can find it)
    // Extract topic ID from slug (remove date suffix if present)
    const topicMatch = article.slug.match(/^([^-]+-[^-]+)/);
    if (topicMatch) {
      const topicId = topicMatch[1];
      markTopicAsUsed(topicId);
    }
    
    console.log('\n=== ARTICLE_GENERATED ===');
    console.log(JSON.stringify({
      id: article.id,
      title: article.title,
      slug: article.slug,
      category: article.category,
      filePath: articlePath,
      usedArticlesCount: usedArticles.length,
      totalArticles: articlesData.length
    }, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();