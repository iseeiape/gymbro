#!/usr/bin/env node
/**
 * GymBro Daily Content Generator - Full Article Generator
 * Generates complete fitness/wellness blog articles using AI
 */

const fs = require('fs');
const path = require('path');

const WORKSPACE = '/home/unu/.openclaw/workspace/fitness-calculator-v2';
const POOL_FILE = path.join(WORKSPACE, 'content/content-pool-topics.md');
const BLOG_DIR = path.join(WORKSPACE, 'content/blog');

// Read the content pool and get next topic
function getNextTopic() {
  const content = fs.readFileSync(POOL_FILE, 'utf-8');
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^- \[ \] ([^ ]+) - (.+)$/);
    if (match) {
      // Find category
      let category = 'general';
      for (let j = i - 1; j >= 0; j--) {
        if (lines[j].startsWith('### ')) {
          category = lines[j].replace('### ', '').toLowerCase();
          break;
        }
      }
      return {
        lineIndex: i,
        id: match[1],
        title: match[2],
        category
      };
    }
  }
  return null;
}

// Generate article prompt for AI
function generatePrompt(topic, category) {
  const categoryGuidelines = {
    nutritie: 'Folosește exemple cu alimente disponibile în supermarketurile românești (Lidl, Kaufland, Carrefour). Include calcule concrete în lei/RON unde e relevant.',
    antrenament: 'Dă exerciții care se pot face în sălile tipice din România. Include progresii pentru începători și avansați.',
    sanatate: 'Bazează-te pe studii științifice dar explică accesibil. Menționează medici/specialiști români dacă e relevant.',
    yoga: 'Descrie pozițiile pas cu pas. Menționează contraindicațiile pentru fiecare poziție.',
    meditatie: 'Oferă instrucțiuni clare pas cu pas. Include și variante pentru începători care găsesc dificil.',
    motivatie: 'Folosește exemple concrete și povești relatabile. Evită clișeele motivaționale goale.',
    mituri: 'Demontează miturile cu dovezi științifice. Fii direct dar respectuos cu cititorii care credeau în ele.',
    suplimente: 'Fii obiectiv - spune ce funcționează și ce e doar marketing. Menționează branduri disponibile în RO.',
  };

  return `Generează un articol complet pentru blogul GymBro.ro despre "${topic.title}".

CATEGORIE: ${topic.category}
PUBLIC ȚINTĂ: Români interesați de fitness, începători spre intermediari
TON: Prietenos, direct, practic, fără jargon inutil
LUNGIME: 1200-1500 cuvinte minim

STRUCTURĂ OBLIGATORIE:
1. Introducere (2-3 paragrafe) - problemă + promisiune de soluție
2. 4-5 secțiuni H2 cu informații detaliate
3. Cel puțin 2 subsecțiuni H3 în fiecare H2
4. Secțiune "Greșeli frecvente" - minim 3 greșeli
5. Secțiune "Sfaturi practice" - minim 5 sfaturi aplicabile imediat
6. Secțiune FAQ - minim 4 întrebări și răspunsuri
7. Concluzie cu call-to-action

GHID SPECIFIC PENTRU ${category.toUpperCase()}:
${categoryGuidelines[category] || 'Fii practic și specific cu informații aplicabile în România.'}

REGULI:
- Folosește româna corectă, fără diacritice lipsă
- Include exemple concrete și cifre reale
- Evită promisiunile nerealiste ("slăbești 10 kg într-o săptămână")
- Fii onest despre ce funcționează și ce nu
- Include un CTA natural spre tool-urile GymBro (/calculator, /program-antrenament, /yoga, /meditatie)

OUTPUT: Articol complet în format MDX, gata de publicare.`;
}

// Generate minimal article structure (placeholder for actual AI generation)
function generateMinimalArticle(topic, category) {
  const today = new Date().toISOString().split('T')[0];
  const slug = topic.id;
  
  const categoryData = {
    nutritie: { 
      tags: ['nutritie', 'sanatate', 'fitness'], 
      ctaLink: '/calculator', 
      ctaText: 'Calculează-ți necesarul zilnic',
      readTime: 7
    },
    antrenament: { 
      tags: ['antrenament', 'fitness', 'exercitii'], 
      ctaLink: '/program-antrenament', 
      ctaText: 'Generează program personalizat',
      readTime: 6
    },
    sanatate: { 
      tags: ['sanatate', 'wellness', 'lifestyle'], 
      ctaLink: '/yoga', 
      ctaText: 'Descoperă programele de wellness',
      readTime: 6
    },
    yoga: { 
      tags: ['yoga', 'flexibilitate', 'mindfulness'], 
      ctaLink: '/yoga', 
      ctaText: 'Începe practica de yoga',
      readTime: 5
    },
    meditatie: { 
      tags: ['meditatie', 'mindfulness', 'relaxare'], 
      ctaLink: '/meditatie', 
      ctaText: 'Explorează tehnicile de meditație',
      readTime: 5
    },
    motivatie: { 
      tags: ['motivatie', 'psihologie', 'obiceiuri'], 
      ctaLink: '/blog', 
      ctaText: 'Citește mai multe articole',
      readTime: 6
    },
    mituri: { 
      tags: ['educatie', 'mituri', 'stiinta'], 
      ctaLink: '/blog', 
      ctaText: 'Descoperă adevărul',
      readTime: 6
    },
    suplimente: { 
      tags: ['suplimente', 'nutritie', 'performanta'], 
      ctaLink: '/blog', 
      ctaText: 'Ghiduri complete',
      readTime: 7
    },
  };
  
  const data = categoryData[category] || categoryData.nutritie;
  
  return {
    slug,
    content: `---
title: "${topic.title}"
metaDescription: "${topic.title}. Ghid complet cu sfaturi practice pentru rezultate rapide în România."
category: "${category}"
tags: [${data.tags.map(t => `"${t}"`).join(', ')}]
author: "Echipa GymBro"
publishedAt: "${today}"
updatedAt: "${today}"
readingTime: ${data.readTime}
coverImage: "/blog/images/${topic.id}.jpg"
excerpt: "${topic.title}. Descoperă metodele verificate care funcționează pentru români, cu exemple practice și sfaturi de la experți."
ctaText: "${data.ctaText}"
ctaLink: "${data.ctaLink}"
featured: false
---

# ${topic.title}

**Timp citire:** ${data.readTime} minute | **Publicat:** ${new Date().toLocaleDateString('ro-RO')}

[AI_GENERATED_CONTENT]

*Acest articol a fost generat automat de sistemul GymBro AI Content. Pentru varianta completă, contactează-ne.*
`
  };
}

// Main function
async function main() {
  console.log('🚀 GymBro Daily Content Generator\n');
  
  const topic = getNextTopic();
  if (!topic) {
    console.log('✅ All topics have been used! Pool is empty.');
    process.exit(0);
  }
  
  console.log(`📋 Selected: ${topic.title}`);
  console.log(`🏷️  Category: ${topic.category}`);
  console.log(`🆔 ID: ${topic.id}\n`);
  
  // Mark as used
  const poolContent = fs.readFileSync(POOL_FILE, 'utf-8');
  const lines = poolContent.split('\n');
  lines[topic.lineIndex] = lines[topic.lineIndex].replace('- [ ]', '- [x]');
  fs.writeFileSync(POOL_FILE, lines.join('\n'));
  console.log('✅ Topic marked as used in pool\n');
  
  // Generate article
  const article = generateMinimalArticle(topic, topic.category);
  const articlePath = path.join(BLOG_DIR, `${article.slug}.mdx`);
  
  // Write file
  fs.writeFileSync(articlePath, article.content);
  console.log(`📝 Article created: ${articlePath}\n`);
  
  // Generate AI prompt for full content
  const prompt = generatePrompt(topic, topic.category);
  
  console.log('=== AI PROMPT FOR FULL CONTENT ===');
  console.log(prompt);
  console.log('\n=== END PROMPT ===\n');
  
  // Output summary
  console.log('📊 Summary:');
  console.log(`  - Topic: ${topic.title}`);
  console.log(`  - Slug: ${article.slug}`);
  console.log(`  - Category: ${topic.category}`);
  console.log(`  - File: ${articlePath}`);
  console.log(`  - Status: TEMPLATE_CREATED (needs AI content)`);
  
  return {
    success: true,
    topic: topic.title,
    slug: article.slug,
    category: topic.category,
    filePath: articlePath
  };
}

main().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
