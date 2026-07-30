#!/usr/bin/env node
/**
 * GymBro Daily Content Generator
 * Generates one fitness/wellness blog article per day
 */

const fs = require('fs');
const path = require('path');

const WORKSPACE = '/home/unu/.openclaw/workspace/fitness-calculator-v2';
const POOL_FILE = path.join(WORKSPACE, 'content/content-pool-topics.md');
const BLOG_DIR = path.join(WORKSPACE, 'content/blog');

// Topic definitions with metadata
const TOPIC_DEFINITIONS = {
  // Nutriție
  'cum-sa-calculezi-proteina-zilnica': { category: 'nutritie', tags: ['proteina', 'macros', 'nutritie'], readTime: 7, ctaLink: '/calculator', ctaText: 'Calculează-ți proteina zilnică' },
  'top-10-alimente-proteice-ieftine': { category: 'nutritie', tags: ['proteina', 'alimentatie', 'buget'], readTime: 6, ctaLink: '/meal-prep', ctaText: 'Generează plan de masă' },
  'carbohidrati-buni-vs-rei': { category: 'nutritie', tags: ['carbohidrati', 'diete', 'sanatate'], readTime: 5, ctaLink: '/calculator', ctaText: 'Calculează macros' },
  'post-intermitent-ghid-complet': { category: 'nutritie', tags: ['fasting', 'slabit', 'metabolism'], readTime: 8, ctaLink: '/calculator', ctaText: 'Calculează caloriile pentru fasting' },
  'hidratare-sportivi': { category: 'nutritie', tags: ['apa', 'hidratare', 'performanta'], readTime: 5, ctaLink: '/blog', ctaText: 'Vezi toate articolele' },
  'meal-prep-saptamanal': { category: 'nutritie', tags: ['meal-prep', 'organizare', 'timp'], readTime: 6, ctaLink: '/meal-prep', ctaText: 'Generează planul tău' },
  'superalimente-romania': { category: 'nutritie', tags: ['superfoods', 'sanatate', 'alimentatie'], readTime: 6, ctaLink: '/calculator', ctaText: 'Calculează nutrienții' },
  'grasimi-sanatoase': { category: 'nutritie', tags: ['grasimi', 'omega-3', 'nutritie'], readTime: 5, ctaLink: '/calculator', ctaText: 'Calculează grăsimile zilnice' },
  'mic-dejun-fitness': { category: 'nutritie', tags: ['mic-dejun', 'retete', 'energie'], readTime: 6, ctaLink: '/meal-prep', ctaText: 'Vezi idei de meal prep' },
  'mancat-seara': { category: 'nutritie', tags: ['metabolism', 'slabit', 'obiceiuri'], readTime: 5, ctaLink: '/calculator', ctaText: 'Află câte calorii ai nevoie' },
  
  // Antrenament
  'split-vs-full-body': { category: 'antrenament', tags: ['split', 'full-body', 'programe'], readTime: 7, ctaLink: '/program-antrenament', ctaText: 'Generează programul tău' },
  'cum-sa-cresti-la-squat': { category: 'antrenament', tags: ['squat', 'technica', 'picioare'], readTime: 6, ctaLink: '/program-antrenament', ctaText: 'Program pentru picioare' },
  'exercitii-compuse': { category: 'antrenament', tags: ['compuse', 'masa-musculara', 'eficienta'], readTime: 6, ctaLink: '/program-antrenament', ctaText: 'Generează program compus' },
  'cardio-vs-hiit': { category: 'antrenament', tags: ['cardio', 'hiit', 'slabit'], readTime: 7, ctaLink: '/calculator', ctaText: 'Calculează arderile' },
  'recupereare-muschii': { category: 'antrenament', tags: ['recuperare', 'odihna', 'crestere'], readTime: 5, ctaLink: '/yoga', ctaText: 'Yoga pentru recuperare' },
  'progresie-sala': { category: 'antrenament', tags: ['progresie', 'overload', 'rezultate'], readTime: 7, ctaLink: '/program-antrenament', ctaText: 'Generează program avansat' },
  'antrenament-acasa-fara-echipament': { category: 'antrenament', tags: ['acasa', 'fara-echipament', 'rapid'], readTime: 5, ctaLink: '/program-antrenament', ctaText: 'Generează program acasă' },
  'stretching-dupa-antrenament': { category: 'antrenament', tags: ['stretching', 'recuperare', 'flexibilitate'], readTime: 5, ctaLink: '/yoga', ctaText: 'Programe de stretching' },
  'forma-corecta-exercitii': { category: 'antrenament', tags: ['technica', 'forma', 'preventie'], readTime: 7, ctaLink: '/program-antrenament', ctaText: 'Programe cu video' },
  'perioada-de-incarcare': { category: 'antrenament', tags: ['deload', 'recuperare', 'planificare'], readTime: 5, ctaLink: '/program-antrenament', ctaText: 'Planifică-ți ciclurile' },
  
  // Sănătate
  'somn-si-muschi': { category: 'sanatate', tags: ['somn', 'recuperare', 'hormoni'], readTime: 6, ctaLink: '/meditatie', ctaText: 'Tehnici pentru somn' },
  'stres-cortizol': { category: 'sanatate', tags: ['stres', 'cortizol', 'hormoni'], readTime: 6, ctaLink: '/meditatie', ctaText: 'Meditație pentru stres' },
  'mobilitate-articulatii': { category: 'sanatate', tags: ['mobilitate', 'articulatii', 'longevitate'], readTime: 6, ctaLink: '/yoga', ctaText: 'Yoga pentru mobilitate' },
  'sistem-imunitar-fitness': { category: 'sanatate', tags: ['imunitate', 'sanatate', 'sport'], readTime: 5, ctaLink: '/blog', ctaText: 'Mai multe sfaturi' },
  'durere-musculara-intarziata': { category: 'sanatate', tags: ['doms', 'durere', 'recuperare'], readTime: 5, ctaLink: '/yoga', ctaText: 'Recuperare cu yoga' },
  'respiratie-corecta-sport': { category: 'sanatate', tags: ['respiratie', 'oxigen', 'performanta'], readTime: 5, ctaLink: '/meditatie', ctaText: 'Tehnici de respirație' },
  'postura-corecta': { category: 'sanatate', tags: ['postura', 'birou', 'spate'], readTime: 6, ctaLink: '/yoga', ctaText: 'Yoga pentru postură' },
  'dureri-de-spate-solutii': { category: 'sanatate', tags: ['spate', 'dureri', 'exercitii'], readTime: 7, ctaLink: '/yoga', ctaText: 'Yoga pentru spate' },
  'metabolism-boost': { category: 'sanatate', tags: ['metabolism', 'metabolism', 'slabit'], readTime: 6, ctaLink: '/calculator', ctaText: 'Verifică-ți TDEE' },
  'sanatate-mintala-fitness': { category: 'sanatate', tags: ['sanatate-mintala', 'motivatie', 'endoftine'], readTime: 7, ctaLink: '/meditatie', ctaText: 'Îmbunătățește starea' },
  
  // Yoga
  'yoga-pentru-spate': { category: 'yoga', tags: ['yoga', 'spate', 'dureri'], readTime: 5, ctaLink: '/yoga', ctaText: 'Programe complete' },
  'yoga-dimineata-rutina': { category: 'yoga', tags: ['yoga', 'dimineata', 'energie'], readTime: 4, ctaLink: '/yoga/yoga-incepatori', ctaText: 'Yoga pentru începători' },
  'yoga-pentru-flexibilitate': { category: 'yoga', tags: ['yoga', 'flexibilitate', 'mobilitate'], readTime: 6, ctaLink: '/yoga/yoga-flexibilitate', ctaText: 'Program flexibilitate' },
  'yoga-seara-pentru-somn': { category: 'yoga', tags: ['yoga', 'seara', 'somn'], readTime: 5, ctaLink: '/yoga/yoga-stres', ctaText: 'Yoga pentru relaxare' },
  'yoga-pentru-atingeri': { category: 'yoga', tags: ['yoga', 'flexibilitate', 'preamire'], readTime: 6, ctaLink: '/yoga/yoga-flexibilitate', ctaText: 'Crește flexibilitatea' },
  'respiratie-pranayama': { category: 'yoga', tags: ['respiratie', 'pranayama', 'avansat'], readTime: 7, ctaLink: '/meditatie', ctaText: 'Tehnici avansate' },
  'yoga-pentru-stres-cronic': { category: 'yoga', tags: ['yoga', 'stres', 'anxietate'], readTime: 6, ctaLink: '/yoga/yoga-stres', ctaText: 'Yoga anti-stres' },
  'sun-salutation-ghid': { category: 'yoga', tags: ['yoga', 'salutul-soarelui', 'flow'], readTime: 5, ctaLink: '/yoga/yoga-incepatori', ctaText: 'Începe aici' },
  'yoga-pentru-core': { category: 'yoga', tags: ['yoga', 'core', 'abdomen'], readTime: 6, ctaLink: '/yoga/yoga-slabire', ctaText: 'Yoga pentru tonifiere' },
  'yoga-pentru-alergatori': { category: 'yoga', tags: ['yoga', 'alergare', 'stretching'], readTime: 6, ctaLink: '/yoga/yoga-flexibilitate', ctaText: 'Stretching pentru runneri' },
  
  // Meditație
  'meditatie-pentru-incepatori': { category: 'meditatie', tags: ['meditatie', 'mindfulness', 'incepatori'], readTime: 6, ctaLink: '/meditatie', ctaText: 'Toate tehnicile' },
  'breathing-techniques': { category: 'meditatie', tags: ['respiratie', 'relaxare', 'technici'], readTime: 7, ctaLink: '/meditatie/respiratie-4-7-8', ctaText: 'Începe cu 4-7-8' },
  'meditatie-pentru-focus': { category: 'meditatie', tags: ['meditatie', 'focus', 'productivitate'], readTime: 6, ctaLink: '/meditatie/box-breathing', ctaText: 'Box breathing' },
  'body-scan-detailed': { category: 'meditatie', tags: ['meditatie', 'body-scan', 'relaxare'], readTime: 6, ctaLink: '/meditatie/body-scan', ctaText: 'Ghiday body scan' },
  'meditatie-merse': { category: 'meditatie', tags: ['meditatie', 'mers', 'mindfulness'], readTime: 5, ctaLink: '/meditatie', ctaText: 'Descoperă tehnicile' },
  'gratitude-meditation': { category: 'meditatie', tags: ['meditatie', 'recunostinta', 'stare'], readTime: 5, ctaLink: '/meditatie/morning-meditation', ctaText: 'Rutina de dimineață' },
  'loving-kindness-metta': { category: 'meditatie', tags: ['meditatie', 'compasiune', 'metta'], readTime: 6, ctaLink: '/meditatie', ctaText: 'Explorează tehnicile' },
  'chakra-meditation-ghid': { category: 'meditatie', tags: ['meditatie', 'chakre', 'energie'], readTime: 8, ctaLink: '/meditatie', ctaText: 'Începe călătoria' },
  'meditatie-pentru-emoții': { category: 'meditatie', tags: ['meditatie', 'emotii', 'reglare'], readTime: 6, ctaLink: '/meditatie/body-scan', ctaText: 'Body scan pentru emoții' },
  'mindful-eating': { category: 'meditatie', tags: ['mindfulness', 'alimentatie', 'sanatate'], readTime: 6, ctaLink: '/calculator', ctaText: 'Fii conștient de calorii' },
  
  // Motivație
  'cum-sa-formezi-obiceiuri': { category: 'motivatie', tags: ['obiceiuri', 'psihologie', 'schimbare'], readTime: 7, ctaLink: '/blog', ctaText: 'Mai multe articole' },
  'depaseste-platoul': { category: 'motivatie', tags: ['platou', 'progres', 'strategii'], readTime: 6, ctaLink: '/program-antrenament', ctaText: 'Schimbă programul' },
  'motive-renuntat-sala': { category: 'motivatie', tags: ['abandon', 'psihologie', 'solutii'], readTime: 6, ctaLink: '/blog', ctaText: 'Citește mai mult' },
  'transformare-inspiratie': { category: 'motivatie', tags: ['povesti', 'succes', 'comunitate'], readTime: 5, ctaLink: '/blog', ctaText: 'Comunitatea GymBro' },
  'disciplina-vs-motivatie': { category: 'motivatie', tags: ['disciplina', 'motivatie', 'sistem'], readTime: 7, ctaLink: '/program-antrenament', ctaText: 'Construiește obiceiuri' },
  'cum-sa-ramai-consecvent': { category: 'motivatie', tags: ['consecventa', 'lung', 'rezultate'], readTime: 6, ctaLink: '/blog', ctaText: 'Sfaturi practice' },
  'fitness-mentalitate': { category: 'motivatie', tags: ['mentalitate', 'atlet', 'crestere'], readTime: 7, ctaLink: '/blog', ctaText: 'Dezvoltare personală' },
  'obiective-smart': { category: 'motivatie', tags: ['obiective', 'smart', 'planificare'], readTime: 6, ctaLink: '/calculator', ctaText: 'Setează obiective' },
  'tracking-progres': { category: 'motivatie', tags: ['tracking', 'progres', 'rezultate'], readTime: 6, ctaLink: '/progress', ctaText: 'Urmărește progresul' },
  'comunitate-sport': { category: 'motivatie', tags: ['comunitate', 'suport', 'grup'], readTime: 5, ctaLink: '/blog', ctaText: 'Alătură-te' },
  
  // Mituri
  'mitul-lipidelor': { category: 'mituri', tags: ['grasimi', 'mituri', 'nutritie'], readTime: 6, ctaLink: '/calculator', ctaText: 'Calculează grăsimile' },
  'mitul-abdominalelor': { category: 'mituri', tags: ['abdomen', 'mituri', 'exercitii'], readTime: 6, ctaLink: '/program-antrenament', ctaText: 'Program corect' },
  'mitul-suplimentelor': { category: 'mituri', tags: ['suplimente', 'mituri', 'marketing'], readTime: 7, ctaLink: '/blog', ctaText: 'Adevărul despre suplimente' },
  'mitul-cardio-post-antrenament': { category: 'mituri', tags: ['cardio', 'mituri', 'ordine'], readTime: 5, ctaLink: '/program-antrenament', ctaText: 'Structură corectă' },
  'mitul-pastarilor-cu-orez': { category: 'mituri', tags: ['metabolism', 'mituri', 'ora'], readTime: 6, ctaLink: '/calculator', ctaText: 'Verifică-ți TDEE' },
  'mitul-transpiratiei': { category: 'mituri', tags: ['transpiratie', 'mituri', 'intensitate'], readTime: 5, ctaLink: '/blog', ctaText: 'Citește mai mult' },
  'mitul-femeilor-si-greutatilor': { category: 'mituri', tags: ['femei', 'mituri', 'masa'], readTime: 6, ctaLink: '/program-antrenament', ctaText: 'Program pentru femei' },
  'mitul-detoxului': { category: 'mituri', tags: ['detox', 'mituri', 'sanatate'], readTime: 5, ctaLink: '/calculator', ctaText: 'Nutriție reală' },
  'mitul-batoanelor-proteice': { category: 'mituri', tags: ['proteine', 'mituri', 'batoane'], readTime: 6, ctaLink: '/meal-prep', ctaText: 'Alternativa naturală' },
  'mitul-maselor-gramaje': { category: 'mituri', tags: ['greutate', 'mituri', 'compozitie'], readTime: 6, ctaLink: '/calculator', ctaText: 'Calculează compoziția' },
  
  // Suplimente
  'creatina-ghid-complet': { category: 'suplimente', tags: ['creatina', 'suplimente', 'performanta'], readTime: 8, ctaLink: '/blog', ctaText: 'Mai multe ghiduri' },
  'proteina-tipuri': { category: 'suplimente', tags: ['proteina', 'suplimente', 'whey'], readTime: 7, ctaLink: '/calculator', ctaText: 'Calculează necesarul' },
  'omega-3-beneficii': { category: 'suplimente', tags: ['omega-3', 'sanatate', 'inflamatie'], readTime: 6, ctaLink: '/blog', ctaText: 'Ghiduri suplimente' },
  'vitamina-d-sportivi': { category: 'suplimente', tags: ['vitamina-d', 'suplimente', 'imunitate'], readTime: 6, ctaLink: '/blog', ctaText: 'Vezi toate ghidurile' },
  'pre-workout-sau-nu': { category: 'suplimente', tags: ['pre-workout', 'suplimente', 'energie'], readTime: 7, ctaLink: '/blog', ctaText: 'Află adevărul' },
  'bcaa-necesari': { category: 'suplimente', tags: ['bcaa', 'suplimente', 'aminoacizi'], readTime: 6, ctaLink: '/blog', ctaText: 'Analize complete' },
  'suplimente-imunitate': { category: 'suplimente', tags: ['imunitate', 'suplimente', 'sanatate'], readTime: 6, ctaLink: '/blog', ctaText: 'Ghid imunitate' },
  'cafeina-performanta': { category: 'suplimente', tags: ['cafeina', 'performanta', 'strategie'], readTime: 6, ctaLink: '/blog', ctaText: 'Folosește inteligent' },
  'beta-alanina': { category: 'suplimente', tags: ['beta-alanina', 'suplimente', 'rezistenta'], readTime: 6, ctaLink: '/blog', ctaText: 'Detalii complete' },
  'multivitamine-necesare': { category: 'suplimente', tags: ['multivitamine', 'suplimente', 'micronutrienti'], readTime: 7, ctaLink: '/blog', ctaText: 'Află dacă ai nevoie' },
};

// Generate article structure based on category
function generateArticleStructure(topicId, title, category) {
  const today = new Date().toISOString().split('T')[0];
  const meta = TOPIC_DEFINITIONS[topicId] || { 
    category: category, 
    tags: [category], 
    readTime: 6,
    ctaLink: '/',
    ctaText: 'Explorează GymBro'
  };
  
  const slug = `${topicId}-${today.replace(/-/g, '')}`;
  
  return {
    slug,
    frontmatter: `---
title: "${title}"
metaDescription: "${title}. Ghid complet cu sfaturi practice pentru rezultate rapide în România."
category: "${meta.category}"
tags: [${meta.tags.map(t => `"${t}"`).join(', ')}]
author: "Echipa GymBro"
publishedAt: "${today}"
updatedAt: "${today}"
readingTime: ${meta.readTime}
coverImage: "/blog/images/${topicId}.jpg"
excerpt: "${title}. Descoperă metodele verificate care funcționează pentru români, cu exemple practice și sfaturi de la experți."
ctaText: "${meta.ctaText}"
ctaLink: "${meta.ctaLink}"
featured: false
---`,
    intro: generateIntro(title, category),
  };
}

function generateIntro(title, category) {
  const intros = {
    nutritie: `Dacă vrei să vezi rezultate reale la sală, nutriția contează la fel de mult ca antrenamentele. ${title} este unul dintre subiectele care generează cele mai multe întrebări în comunitatea GymBro.`,
    antrenament: `Indiferent dacă ești începător sau avansat, să știi cum să te antrenezi corect face diferența între progres și stagnare. ${title} poate fi cheia către rezultatele pe care le cauți.`,
    sanatate: `Fitness-ul nu e doar despre cum arăți, ci și despre cum te simți. ${title} este esențial pentru o viață echilibrată și sănătoasă pe termen lung.`,
    yoga: `Yoga e mai mult decât stretching - e un instrument puternic pentru corp și minte. ${title} îți poate transforma practica și beneficiile pe care le obții.`,
    meditatie: `Într-o lume agitată, abilitatea de a-ți calma mintea e un superpower. ${title} te ajută să găsești liniștea și claritatea de care ai nevoie.`,
    motivatie: `Cel mai bun program e cel pe care îl faci constant. ${title} îți poate oferi perspectivele și strategiile necesare să rămâi pe drumul cel bun.`,
    mituri: `Internetul e plin de informații false despre fitness. ${title} demontează miturile și îți arată adevărul științific.`,
    suplimente: `Suplimentele pot ajuta, dar doar dacă știi ce și cum să iei. ${title} îți dă informațiile necesare pentru decizii inteligente.`,
  };
  
  return intros[category] || `${title}. Articol complet cu informații verificate și aplicabile în România.`;
}

// Main execution
async function main() {
  try {
    // Read pool file
    const poolContent = fs.readFileSync(POOL_FILE, 'utf-8');
    
    // Find first unused topic
    const lines = poolContent.split('\n');
    let selectedLine = -1;
    let topicId = '';
    let topicTitle = '';
    let category = '';
    
    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^- \[ \] ([^ ]+) - (.+)$/);
      if (match) {
        topicId = match[1];
        topicTitle = match[2];
        // Extract category from context (line before section)
        for (let j = i - 1; j >= 0; j--) {
          if (lines[j].startsWith('### ')) {
            category = lines[j].replace('### ', '').toLowerCase();
            break;
          }
        }
        selectedLine = i;
        break;
      }
    }
    
    if (selectedLine === -1) {
      console.log('No unused topics found in pool');
      process.exit(0);
    }
    
    console.log(`Selected topic: ${topicId} - ${topicTitle}`);
    
    // Mark as used
    lines[selectedLine] = lines[selectedLine].replace('- [ ]', '- [x]');
    fs.writeFileSync(POOL_FILE, lines.join('\n'));
    
    // Generate article structure
    const article = generateArticleStructure(topicId, topicTitle, category);
    
    // Create article content with prompts for AI completion
    const articleContent = `${article.frontmatter}

# ${topicTitle}

**Timp citire:** ${article.readingTime} minute | **Publicat:** ${new Date().toLocaleDateString('ro-RO')}

${article.intro}

## Ce vei învăța din acest articol

- [CONTENT_TO_GENERATE: Key learning point 1]
- [CONTENT_TO_GENERATE: Key learning point 2]
- [CONTENT_TO_GENERATE: Key learning point 3]
- [CONTENT_TO_GENERATE: Key learning point 4]

## [CONTENT_TO_GENERATE: Main Section Title]

[AI_CONTENT: Detailed explanation with Romanian context, practical examples, and actionable advice]

## [CONTENT_TO_GENERATE: Practical Section]

### [CONTENT_TO_GENERATE: Subsection 1]
[AI_CONTENT: Specific steps or information]

### [CONTENT_TO_GENERATE: Subsection 2]
[AI_CONTENT: Specific steps or information]

### [CONTENT_TO_GENERATE: Subsection 3]
[AI_CONTENT: Specific steps or information]

## Greșeli frecvente de evitat

[AI_CONTENT: Common mistakes Romanians make regarding this topic]

## Sfaturi pentru implementare

[AI_CONTENT: Practical tips for applying the knowledge]

## Concluzie

[AI_CONTENT: Summary and call to action]

---

**Articol generat automat de GymBro AI Content System**  
*Dacă ai întrebări sau feedback, contactează-ne la contact@gymbro.ro*
`;
    
    // Write article file
    const articlePath = path.join(BLOG_DIR, `${article.slug}.mdx`);
    fs.writeFileSync(articlePath, articleContent);
    
    console.log(`Article created: ${articlePath}`);
    console.log(`Slug: ${article.slug}`);
    
    // Output for further processing
    console.log('\n=== ARTICLE_READY ===');
    console.log(JSON.stringify({
      topicId,
      title: topicTitle,
      slug: article.slug,
      category,
      filePath: articlePath
    }, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
