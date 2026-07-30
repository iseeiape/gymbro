#!/usr/bin/env node
// Build all 100 diet data entries and write data.ts

const fs = require('fs');
const path = require('path');

// Diet definitions: [slug, objective, objectiveName, profile, profileName, caloriesMin, caloriesMax, proteinPct, carbsPct, fatPct]
const dietDefs = [
  // SLĂBIT (25)
  ["slabire-incepatori","slabire","Slăbit Sustenabil","incepatori","Pentru Începători",1400,1700,30,45,25],
  ["slabire-intermediari","slabire","Slăbit Sustenabil","intermediari","Nivel Intermediar",1500,1800,35,40,25],
  ["slabire-avansati","slabire","Slăbit Sustenabil","avansati","Nivel Avansat",1300,2000,40,35,25],
  ["slabire-femei","slabire","Slăbit pentru Femei","femei","Pentru Femei",1300,1600,30,45,25],
  ["slabire-barbati","slabire","Slăbit pentru Bărbați","barbati","Pentru Bărbați",1800,2200,35,40,25],
  ["slabire-30-ani","slabire","Slăbit după 30 de Ani","30-ani","Vârsta 30+",1500,1800,35,40,25],
  ["slabire-40-ani","slabire","Slăbit după 40 de Ani","40-ani","Vârsta 40+",1400,1700,35,40,25],
  ["slabire-50-ani","slabire","Slăbit după 50 de Ani","50-ani","Vârsta 50+",1300,1600,35,40,25],
  ["slabire-vegana","slabire","Slăbit Vegan","vegana","Dietă Vegană",1400,1700,25,55,20],
  ["slabire-vegetariana","slabire","Slăbit Vegetarian","vegetariana","Dietă Vegetariană",1400,1700,28,50,22],
  ["slabire-keto","slabire","Slăbit Keto","keto","Dietă Ketogenică",1500,1800,25,5,70],
  ["slabire-low-carb","slabire","Slăbit Low-Carb","low-carb","Low-Carb",1500,1800,35,20,45],
  ["slabire-mediteraneana","slabire","Slăbit Mediteranean","mediteraneana","Dieta Mediteraneană",1600,2000,20,50,30],
  ["slabire-proteica","slabire","Slăbit cu Proteine Ridicate","proteica","Dietă Hiperproteică",1500,1800,40,35,25],
  ["slabire-pentru-sportivi","slabire","Slăbit pentru Sportivi","sportivi","Pentru Sportivi",1800,2400,30,45,25],
  ["slabire-intermittent-fasting","slabire","Slăbit prin Post Intermitent","intermittent-fasting","Intermittent Fasting",1500,1800,35,40,25],
  ["slabire-sustenabila","slabire","Slăbit Sustenabil","sustenabila","Sustenabil pe Termen Lung",1600,2000,30,45,25],
  ["slabire-rapida","slabire","Slăbit Rapid","rapida","Rapid (Termen Scurt)",1200,1500,40,35,25],
  ["slabire-acasa","slabire","Slăbit Acasă","acasa","Acasă (Fără Sală)",1500,1800,30,45,25],
  ["slabire-la-sala","slabire","Slăbit la Sală","la-sala","Antrenament la Sală",1700,2100,35,40,25],
  ["slabire-pentru-mame","slabire","Slăbit Post-Natal","mame","Pentru Mame",1600,2000,30,45,25],
  ["slabire-pentru-studenti","slabire","Slăbit pentru Studenți","studenti","Pentru Studenți",1500,1800,28,50,22],
  ["slabire-pentru-birou","slabire","Slăbit la Birou","birou","Pentru Birou",1500,1800,30,45,25],
  ["slabire-5-zile","slabire","Plan Slăbit 5 Zile","5-zile","Plan 5 Zile",1400,1700,32,45,23],
  ["slabire-7-zile","slabire","Plan Slăbit 7 Zile","7-zile","Plan 7 Zile",1400,1700,32,45,23],
  // MASA MUSCULARĂ (20)
  ["masa-incepatori","masa","Masă Musculară","incepatori","Pentru Începători",2500,3000,30,50,20],
  ["masa-intermediari","masa","Masă Musculară","intermediari","Nivel Intermediar",2800,3200,30,50,20],
  ["masa-avansati","masa","Masă Musculară","avansati","Nivel Avansat",3000,4000,28,52,20],
  ["masa-femei","masa","Masă Musculară pentru Femei","femei","Pentru Femei",2000,2500,30,50,20],
  ["masa-barbati","masa","Masă Musculară pentru Bărbați","barbati","Pentru Bărbați",3000,3500,30,50,20],
  ["masa-vegana","masa","Masă Musculară Vegană","vegana","Dietă Vegană",2500,3000,25,55,20],
  ["masa-vegetariana","masa","Masă Musculară Vegetariană","vegetariana","Dietă Vegetariană",2500,3000,28,50,22],
  ["masa-keto","masa","Masă Musculară Keto","keto","Dietă Ketogenică",2500,3000,30,10,60],
  ["masa-low-carb","masa","Masă Musculară Low-Carb","low-carb","Low-Carb",2500,3000,35,25,40],
  ["masa-mediteraneana","masa","Masă Musculară Mediteraneană","mediteraneana","Dieta Mediteraneană",2500,3000,25,50,25],
  ["masa-proteica","masa","Masă Musculară Hiperproteică","proteica","Dietă Hiperproteică",2800,3200,35,45,20],
  ["masa-pentru-sportivi","masa","Masă Musculară pentru Sportivi","sportivi","Pentru Sportivi",3000,4000,28,52,20],
  ["masa-rapida","masa","Masă Musculară Rapidă","rapida","Rapid (Dirty Bulk)",3500,4500,25,55,20],
  ["masa-fara-suplimente","masa","Masă Musculară Fără Suplimente","fara-suplimente","Fără Suplimente",2800,3200,30,50,20],
  ["masa-pe-buget","masa","Masă Musculară pe Buget","pe-buget","Pe Buget",2500,3000,30,50,20],
  ["masa-acasa","masa","Masă Musculară Acasă","acasa","Acasă",2500,3000,30,50,20],
  ["masa-la-sala","masa","Masă Musculară la Sală","la-sala","La Sală",2800,3500,30,50,20],
  ["masa-5-zile","masa","Plan Masă 5 Zile","5-zile","Plan 5 Zile",2800,3200,30,50,20],
  ["masa-7-zile","masa","Plan Masă 7 Zile","7-zile","Plan 7 Zile",2800,3200,30,50,20],
  ["masa-definitie","masa","Masă Musculară cu Definiție","definitie","Masă + Definiție",2500,3000,32,45,23],
  // DEFINIRE (15)
  ["definire-incepatori","definire","Definire Musculară","incepatori","Pentru Începători",1600,2000,35,40,25],
  ["definire-intermediari","definire","Definire Musculară","intermediari","Nivel Intermediar",1700,2100,37,38,25],
  ["definire-avansati","definire","Definire Musculară","avansati","Nivel Avansat",1600,2200,40,35,25],
  ["definire-femei","definire","Definire pentru Femei","femei","Pentru Femei",1400,1700,35,40,25],
  ["definire-barbati","definire","Definire pentru Bărbați","barbati","Pentru Bărbați",1800,2200,37,38,25],
  ["definire-vegana","definire","Definire Vegană","vegana","Dietă Vegană",1600,1900,28,50,22],
  ["definire-keto","definire","Definire Keto","keto","Dietă Ketogenică",1600,1900,28,7,65],
  ["definire-low-carb","definire","Definire Low-Carb","low-carb","Low-Carb",1600,2000,38,22,40],
  ["definire-intermittent-fasting","definire","Definire IF","intermittent-fasting","Intermittent Fasting",1700,2000,37,38,25],
  ["definire-pentru-sportivi","definire","Definire pentru Sportivi","sportivi","Pentru Sportivi",2000,2500,32,43,25],
  ["definire-5-zile","definire","Plan Definire 5 Zile","5-zile","Plan 5 Zile",1700,2000,37,38,25],
  ["definire-7-zile","definire","Plan Definire 7 Zile","7-zile","Plan 7 Zile",1700,2000,37,38,25],
  ["definire-fara-cardio","definire","Definire Fără Cardio","fara-cardio","Fără Cardio",1600,1900,40,35,25],
  ["definire-cu-cardio","definire","Definire cu Cardio","cu-cardio","Cu Cardio Intensiv",1800,2200,35,40,25],
  ["definire-pe-buget","definire","Definire pe Buget","pe-buget","Pe Buget",1700,2000,35,40,25],
  // MENȚINERE (10)
  ["mentinere-femei","mentinere","Menținere Greutate","femei","Pentru Femei",1700,2000,28,47,25],
  ["mentinere-barbati","mentinere","Menținere Greutate","barbati","Pentru Bărbați",2200,2600,28,47,25],
  ["mentinere-30-ani","mentinere","Menținere după 30","30-ani","Vârsta 30+",1800,2200,28,47,25],
  ["mentinere-40-ani","mentinere","Menținere după 40","40-ani","Vârsta 40+",1700,2100,28,47,25],
  ["mentinere-vegana","mentinere","Menținere Vegană","vegana","Dietă Vegană",1800,2200,22,56,22],
  ["mentinere-vegetariana","mentinere","Menținere Vegetariană","vegetariana","Dietă Vegetariană",1800,2200,25,52,23],
  ["mediteraneana","mentinere","Dieta Mediteraneană","mediteraneana","Stil de Viață Mediteranean",1800,2300,20,50,30],
  ["echilibrata","mentinere","Dietă Echilibrată","echilibrata","Echilibrată",1800,2300,25,50,25],
  ["mentinere-pentru-sportivi","mentinere","Menținere pentru Sportivi","sportivi","Pentru Sportivi",2500,3000,28,47,25],
  ["mentinere-buget","mentinere","Menținere pe Buget","buget","Pe Buget",1800,2200,25,50,25],
  // FORȚĂ (10)
  ["forta-incepatori","forta","Dietă pentru Forță","incepatori","Pentru Începători",2500,3000,30,50,20],
  ["forta-intermediari","forta","Dietă pentru Forță","intermediari","Nivel Intermediar",2800,3500,30,50,20],
  ["forta-avansati","forta","Dietă pentru Forță","avansati","Nivel Avansat",3000,4500,28,52,20],
  ["forta-femei","forta","Forță pentru Femei","femei","Pentru Femei",2000,2500,30,50,20],
  ["forta-barbati","forta","Forță pentru Bărbați","barbati","Pentru Bărbați",3000,4000,30,50,20],
  ["forta-keto","forta","Forță Ketogenică","keto","Dietă Ketogenică",2800,3500,30,10,60],
  ["forta-proteica","forta","Forță Hiperproteică","proteica","Hiperproteică",3000,3500,35,45,20],
  ["forta-pentru-powerlifters","forta","Nutriție Powerlifting","powerlifters","Powerlifting",3500,5000,25,55,20],
  ["forta-pentru-calistenici","forta","Forță Calistenie","calistenici","Calistenie",2500,3000,30,50,20],
  ["forta-pentru-culturisti","forta","Nutriție Culturism","culturisti","Culturism",3000,4500,30,50,20],
  // ENERGIE (10)
  ["energie-incepatori","energie","Energie și Vitalitate","incepatori","Pentru Începători",1800,2200,25,55,20],
  ["energie-femei","energie","Energie pentru Femei","femei","Pentru Femei",1700,2000,25,55,20],
  ["energie-barbati","energie","Energie pentru Bărbați","barbati","Pentru Bărbați",2200,2600,25,55,20],
  ["energie-vegana","energie","Energie Vegană","vegana","Dietă Vegană",1800,2200,22,60,18],
  ["energie-vegetariana","energie","Energie Vegetariană","vegetariana","Dietă Vegetariană",1800,2200,23,58,19],
  ["energie-pe-buget","energie","Energie pe Buget","pe-buget","Pe Buget",1800,2200,22,58,20],
  ["energie-pentru-studenti","energie","Energie pentru Studenți","studenti","Pentru Studenți",1900,2300,22,58,20],
  ["energie-pentru-birou","energie","Energie la Birou","birou","Birou",1800,2200,23,55,22],
  ["energie-matinala","energie","Energie Matinală","matinala","Energizare Dimineață",1800,2200,23,57,20],
  ["energie-pentru-sportivi","energie","Energie pentru Sportivi","sportivi","Sportivi",2500,3500,25,55,20],
  // KETO (5)
  ["keto-incepatori","keto","Dietă Ketogenică","incepatori","Pentru Începători",1500,2000,25,5,70],
  ["keto-vegana","keto","Keto Vegan","vegana","Dietă Vegană",1500,1900,20,10,70],
  ["keto-low-carb","keto","Keto Low-Carb Moderat","low-carb","Low-Carb Moderat",1600,2000,30,15,55],
  ["keto-pentru-femei","keto","Keto pentru Femei","femei","Pentru Femei",1400,1800,25,5,70],
  ["keto-pentru-barbati","keto","Keto pentru Bărbați","barbati","Pentru Bărbați",1800,2400,25,5,70],
  // VEGETARIAN & VEGAN (5)
  ["vegetariana-slabire","vegetariana","Vegetarian — Slăbit","slabire","Slăbit Vegetarian",1400,1700,28,50,22],
  ["vegetariana-masa","vegetariana","Vegetarian — Masă Musculară","masa","Masă Musculară",2500,3000,28,52,20],
  ["vegetariana-mantinere","vegetariana","Vegetarian — Menținere","mantinere","Menținere",1800,2200,25,52,23],
  ["vegana-slabire","vegana","Vegan — Slăbit","slabire","Slăbit Vegan",1400,1700,25,55,20],
  ["vegana-masa","vegana","Vegan — Masă Musculară","masa","Masă Musculară Vegană",2500,3000,25,55,20],
];

// Meal templates per objective
function getMeals(objective, profile, calMin, calMax) {
  const total = Math.round((calMin + calMax) / 2);
  const breakfastPct = 0.22, snack1Pct = 0.10, lunchPct = 0.32, snack2Pct = 0.09, dinnerPct = 0.27;
  
  const mealSets = {
    slabire: [
      { name: "Micul dejun", description: "Ovăz cu lapte degresat, fructe de pădure și 2 ouă fierte", calories: Math.round(total * breakfastPct) },
      { name: "Gustare dimineață", description: "Iaurt grecesc 0% cu migdale și scorțișoară", calories: Math.round(total * snack1Pct) },
      { name: "Prânz", description: "Piept de pui la grătar cu orez brun și broccoli la abur", calories: Math.round(total * lunchPct) },
      { name: "Gustare după-amiază", description: "Morcovi cu hummus sau 1 fruct proaspăt", calories: Math.round(total * snack2Pct) },
      { name: "Cină", description: "Somon la cuptor cu legume la abur și salată verde", calories: Math.round(total * dinnerPct) },
    ],
    masa: [
      { name: "Micul dejun", description: "4 ouă omletă cu brânza, pâine integrală și lapte integral", calories: Math.round(total * 0.22) },
      { name: "Gustare dimineată", description: "Shake proteic cu lapte integral, banană și unt de arahide", calories: Math.round(total * 0.14) },
      { name: "Prânz", description: "200g piept de pui cu orez brun (200g), legume și salată", calories: Math.round(total * 0.28) },
      { name: "Pre/Post-workout", description: "Shake proteic cu carbohidrați sau banane cu nuci", calories: Math.round(total * 0.14) },
      { name: "Cină", description: "Carne slabă (200g) cu paste integrale, sos de roșii și parmezan", calories: Math.round(total * 0.22) },
    ],
    definire: [
      { name: "Micul dejun", description: "Albuș de ou (4-5) cu spanac, roșii și pâine integrală", calories: Math.round(total * 0.22) },
      { name: "Gustare dimineată", description: "Shake proteic cu apă sau brânza cottage cu fructe", calories: Math.round(total * 0.10) },
      { name: "Prânz", description: "Piept de pui sau pește cu quinoa și legume verzi", calories: Math.round(total * 0.32) },
      { name: "Gustare după-amiaza", description: "Ouă fierte sau nuci (porție mică)", calories: Math.round(total * 0.08) },
      { name: "Cina", description: "Proteina slabă cu legume abundente și carbohidrat mic", calories: Math.round(total * 0.28) },
    ],
    mentinere: [
      { name: "Micul dejun", description: "Ovăz cu lapte, fructe și nuci sau ouă cu toast integral", calories: Math.round(total * 0.22) },
      { name: "Gustare dimineata", description: "Iaurt cu fructe sau un fruct și brânza", calories: Math.round(total * 0.10) },
      { name: "Prânz", description: "Masă echilibrată: proteina + carbohidrat + legume (1/2 farfurie)", calories: Math.round(total * 0.35) },
      { name: "Gustare dupa-amiaza", description: "Nuci sau legume crude cu dip sănătos", calories: Math.round(total * 0.08) },
      { name: "Cina", description: "Proteina + legume și carbohidrat moderat", calories: Math.round(total * 0.25) },
    ],
    forta: [
      { name: "Micul dejun", description: "5 ouă întregi cu avocado, bacon slab și pâine integrală", calories: Math.round(total * 0.22) },
      { name: "Pre-workout", description: "Carbohidrați complecși (ovăz, banane) + proteina moderata", calories: Math.round(total * 0.15) },
      { name: "Post-workout", description: "Shake proteic rapid (whey) + dextroză sau banane + orez", calories: Math.round(total * 0.18) },
      { name: "Prânz", description: "Carne de vită sau pui cu orez sau cartofi și legume", calories: Math.round(total * 0.25) },
      { name: "Cina", description: "Proteina bogată (400-500g carne/pește), carbohidrați, legume", calories: Math.round(total * 0.20) },
    ],
    energie: [
      { name: "Micul dejun energizant", description: "Smoothie verde cu spanac, banana, ghimbir, proteina vegetala", calories: Math.round(total * 0.20) },
      { name: "Gustare dimineata", description: "Fructe de pădure cu granola și iaurt", calories: Math.round(total * 0.12) },
      { name: "Prânz", description: "Salată consistentă sau bol cu proteina, carbohidrati si legume", calories: Math.round(total * 0.35) },
      { name: "Gustare energizanta", description: "Dactile cu nuci sau bar energetic de casă", calories: Math.round(total * 0.10) },
      { name: "Cina", description: "Masă ușoară dar nutritivă cu proteina și legume", calories: Math.round(total * 0.23) },
    ],
    keto: [
      { name: "Micul dejun", description: "Ouă prăjite în unt cu bacon, avocado și brânza", calories: Math.round(total * 0.30) },
      { name: "Gustare dimineata", description: "Nuci de macadamia sau brânza cheddar cu castraveți", calories: Math.round(total * 0.10) },
      { name: "Prânz", description: "Salada cu pui sau ton, ulei de masline, parmezan si legume keto", calories: Math.round(total * 0.28) },
      { name: "Gustare dupa-amiaza", description: "Smântâna cu legume sau 2-3 ouă fierte", calories: Math.round(total * 0.08) },
      { name: "Cina", description: "Somon sau carne de vita cu unt de lamaie si legume keto", calories: Math.round(total * 0.24) },
    ],
    vegetariana: [
      { name: "Micul dejun", description: "Omeleta cu 3 oua, branza feta, rosii si busuioc", calories: Math.round(total * 0.22) },
      { name: "Gustare dimineata", description: "Iaurt grecesc cu granola si miere", calories: Math.round(total * 0.10) },
      { name: "Pranz", description: "Supă de fasole albă sau linte cu pâine integrală", calories: Math.round(total * 0.32) },
      { name: "Gustare dupa-amiaza", description: "Brânza cottage cu legume crude", calories: Math.round(total * 0.08) },
      { name: "Cina", description: "Tofu stir-fry cu legume și tăiței de orez sau quinoa", calories: Math.round(total * 0.28) },
    ],
    vegana: [
      { name: "Micul dejun", description: "Smoothie cu proteina vegetala, spanac, banana si lapte de migdale", calories: Math.round(total * 0.22) },
      { name: "Gustare dimineata", description: "Hummus cu legume crude colorate", calories: Math.round(total * 0.09) },
      { name: "Pranz", description: "Buddha bowl cu quinoa, tofu la gratar, avocado si legume", calories: Math.round(total * 0.33) },
      { name: "Gustare dupa-amiaza", description: "Fructe de padure cu seminte de chia", calories: Math.round(total * 0.08) },
      { name: "Cina", description: "Curry de linte rosie cu lapte de cocos si orez brun", calories: Math.round(total * 0.28) },
    ],
  };
  return mealSets[objective] || mealSets.slabire;
}

function getFoods(objective, profile) {
  const foodSets = {
    slabire: ["Piept de pui", "Somon", "Ouă", "Broccoli", "Spanac", "Ovăz", "Orez brun", "Iaurt grecesc", "Linte", "Legume verzi", "Cartofi dulci", "Afine"],
    masa: ["Piept de pui", "Carne de vită", "Ouă", "Lapte integral", "Orez brun", "Ovăz", "Banane", "Unt de arahide", "Brânza de vaci", "Leguminoase", "Avocado", "Proteina din zer"],
    definire: ["Piept de pui", "Albuș de ou", "Ton", "Brânza cottage", "Broccoli", "Sparanghel", "Quinoa", "Spanac", "Castraveți", "Ardei gras", "Roșii cherry", "Iaurt grecesc 0%"],
    mentinere: ["Ovăz", "Ouă", "Piept de pui", "Somon", "Orez brun", "Legume diverse", "Fructe sezon", "Iaurt", "Nuci", "Ulei de masline", "Leguminoase", "Pâine integrala"],
    forta: ["Carne de vita", "Piept de pui", "Oua", "Orez brun", "Cartofi", "Unt de arahide", "Lapte", "Banane", "Proteina din zer", "Creatina", "Ovaz", "Seminte de dovleac"],
    energie: ["Afine", "Spanac", "Banane", "Ovaz", "Quinoa", "Migdale", "Seminte de chia", "Ghimbir", "Turmeric", "Citrice", "Sfecla rosie", "Iaurt"],
    keto: ["Oua", "Bacon slab", "Avocado", "Somon", "Branza grasime", "Nuci de macadamia", "Unt", "Smantana", "Broccoli", "Spanac", "Sparanghel", "Ulei de cocos"],
    vegetariana: ["Oua", "Branza feta", "Iaurt grecesc", "Tofu", "Linte", "Fasole", "Broccoli", "Rosii", "Ardei gras", "Paine integrala", "Orez brun", "Seminte"],
    vegana: ["Tofu", "Tempeh", "Linte", "Naut", "Quinoa", "Avocado", "Seminte de chia", "Spanac", "Afine", "Nuci de caju", "Lapte de cocos", "Seminte de canepa"],
  };
  // Override for specific profiles
  if (profile === 'vegana') return foodSets.vegana;
  if (profile === 'vegetariana') return foodSets.vegetariana;
  if (profile === 'keto') return foodSets.keto;
  return foodSets[objective] || foodSets.slabire;
}

function getAvoid(objective) {
  const avoidSets = {
    slabire: ["Fast food", "Băuturi carbogazoase cu zahăr", "Dulciuri procesate", "Chips-uri", "Pâine albă în exces", "Alcool"],
    masa: ["Alcool", "Junk food ca sursă de calorii", "Zahăr simplu în exces", "Grăsimi trans", "Sărirea meselor", "Mese rare (sub 3/zi)"],
    definire: ["Alcool", "Carbohidrați rafinați", "Zahăr", "Grăsimi saturate în exces", "Fast food", "Sosuri și dressinguri calorice"],
    mentinere: ["Alimentele ultra-procesate", "Zahăr adăugat în exces", "Alcool în exces", "Fast food frecvent", "Porții supradimensionate", "Gustări mindless"],
    forta: ["Alcool (inhibă recuperarea)", "Diete de slăbit în perioadele de forță", "Prea mult cardio", "Zahăr simplu înainte de antrenament", "Suplimente dubioase"],
    energie: ["Zahăr rafinat (crash energetic)", "Cafeina în exces", "Alcool", "Alimente procesate", "Mese sărite", "Deshidratare"],
    keto: ["Pâine și cereale", "Orez și paste", "Cartofi și rădăcini amidonoase", "Zahăr și dulciuri", "Fructe cu zahăr ridicat", "Leguminoase"],
    vegetariana: ["Carne și pește", "Fast food", "Dulciuri procesate", "Pâine albă", "Sucuri cu zahăr", "Vegetarian junk food"],
    vegana: ["Produse animale (carne, lactate, ouă)", "Alimente vegane procesate cu zahăr", "Uleiuri rafinate în exces", "Zahăr rafinat", "Băuturi cu zahăr", "Chips-uri"],
  };
  return avoidSets[objective] || avoidSets.slabire;
}

function getTips(objective, profile) {
  const tipSets = {
    slabire: [
      "Creați un deficit caloric de 300-500 kcal pe zi pentru slăbit sustenabil",
      "Bea 2-2.5L de apă pe zi — setea poate fi confundată cu foamea",
      "Prioritizează proteina la fiecare masă pentru sațietate maximă",
      "Antrenamentele de forță preservă masa musculară în deficit caloric",
      "Dormiti 7-8 ore pe noapte — privarea de somn crește foamea cu 30%"
    ],
    masa: [
      "Surplus de 300-500 kcal, nu mai mult — mai puțin grăsime acumulată",
      "Proteina 1.6-2g/kg corp este esențială pentru construcția musculară",
      "Mănâncă la fiecare 3-4 ore pentru a maximiza sinteza proteică",
      "Carbohidrați post-workout pentru refacerea glicogenului muscular",
      "Urmăreste forța la exerciții de bază, nu doar greutatea corporală"
    ],
    definire: [
      "Deficit caloric moderat cu proteina ridicată pentru a păstra masa musculară",
      "Cardio HIIT de 3x/săptămână accelerează arderea grăsimii",
      "Distribuite proteina la toate mesele (30-40g per masă principală)",
      "Hidratarea optimă (3L/zi) îmbunătățește aspectul muscular vizual",
      "Răbdare: definirea vizibilă apare în 8-12 săptămâni de consistență"
    ],
    mentinere: [
      "Menținerea necesită aceeași atenție ca slăbitul — nu te relaxa complet",
      "Regulă 80/20: mănâncă sănătos 80% din timp, te bucuri 20%",
      "Cântăreste-te săptămânal — +/-2 kg față de țintă este ok",
      "Activitatea fizică regulată este pilonul menținerii pe termen lung",
      "Monitoring caloric periodic (1 săptămână/trimestru) previne derapajul"
    ],
    forta: [
      "Caloriile și proteina sunt esențiale — forța necesită energie",
      "Carbohidrați înainte și după antrenamentele de forță pentru performanță",
      "Creatina monohidrată 5g/zi crește forța cu 10-15% în 4-8 săptămâni",
      "Somnul este anabolic — recuperarea se întâmplă în somn, nu la sală",
      "Urmăreste recorduri personale (PR) la exerciții de baza, nu greutatea"
    ],
    energie: [
      "Micul dejun bogat în nutrienți este esential pentru energie tot ziua",
      "Hidratarea optimă reduce oboseala cu 20-30%",
      "Evita zahărul rafinat — dă energie de scurtă durată urmată de crash",
      "Carbohidrații complecși oferă energie susținută pe parcursul zilei",
      "Fierul adecvat (din carne, linte, spanac) previne oboseala cronică"
    ],
    keto: [
      "Limitați carbohidrații la sub 20-50g net pe zi pentru cetoză fermă",
      "Electroliții (sodiu, potasiu, magneziu) previn 'keto flu'",
      "Grăsimile sanatoase sunt 70% din calorii — nu le restricționati",
      "Testati cetoza cu bandelete sau glucometru cetone în primele săptămâni",
      "Adaptarea keto durează 4-8 săptămâni — răbdare în această perioadă"
    ],
    vegetariana: [
      "Combinați surse de proteina (ouă + lactate + leguminoase) pentru aminoacizi complet",
      "Vitamina B12 din ouă și lactate este adecvată — monitorizați anual",
      "Fierul non-hem (din plante) se absoarbe mai slab — asociați cu vitamina C",
      "Calciul din lactate și vegetarianismul sunt compatibile — fără griji",
      "Planificați mesele pentru a atinge targetul de proteina zilnic"
    ],
    vegana: [
      "Suplimentați obligatoriu cu B12 (250-500mcg zilnic) — nu se găseste în plante",
      "Vitamina D3 (vegan) este esențiala, mai ales în anotimpul rece",
      "Combinați leguminoase cu cereale la aceeași masă pentru proteine complete",
      "Fierul, zincul și omega-3 (din alge) necesită atenție sporită pe dietă vegană",
      "Tempeh și tofu fermentat au biodisponibilitate mai bună a nutrienților"
    ],
  };
  const base = tipSets[objective] || tipSets.slabire;
  return base;
}

function getFAQs(objective, profile, slug) {
  const faqSets = {
    slabire: [
      { q: "Câte kilograme pot slăbi pe săptămână cu această dietă?", a: "Un ritm sănătos și sustenabil este de 0.5-1 kg pe săptămână. Un deficit de 500 kcal zilnic înseamnă aproximativ 0.5 kg pierdut pe săptămână din grăsime." },
      { q: "Trebuie să fac sport pentru a slăbi cu această dietă?", a: "Sportul accelerează procesul și îmbunătățește compoziția corporală, dar 70-80% din pierderea de grăsime vine din dietă. Chiar și 30 minute de mers pe jos zilnic ajută semnificativ." },
      { q: "Pot să mănânc carbohidrați când slăbesc?", a: "Da! Carbohidrații nu sunt dușmanul. Consumați cu moderație și din surse integrale (ovăz, orez brun, cartofi dulci), aceștia furnizează energie și mențin glicemia stabilă." }
    ],
    masa: [
      { q: "Câtă masă musculară pot pune pe lună cu această dietă?", a: "Depinde de nivelul de experiență. Începătorii: 1-2 kg/lună. Intermediarii: 0.5-1 kg/lună. Avansații: 200-400g/lună. Creșterile mai mari includ și grăsime." },
      { q: "Trebuie neapărat să iau suplimente pentru masa musculară?", a: "Nu sunt obligatorii. Alimentele integrale pot acoperi toate nevoile. Proteina din zer și creatina sunt singurele suplimente cu beneficii bine documentate." },
      { q: "Cât de important este timing-ul meselor pentru masă musculară?", a: "Distribuiți proteina la 4-5 mese pe zi cu 25-40g per masă. Proteina post-workout în 2h este importantă, dar 'anabolic window' nu este la fel de strict cum se credea." }
    ],
    definire: [
      { q: "Cât durează să obțin definiție musculară vizibilă?", a: "Depinde de cantitatea de grăsime corporală. La 15-20% grăsime corporală: 8-16 săptămâni de deficit constant. La 20-25%: 4-6 luni. Consistența este cheia." },
      { q: "Trebuie să merg la 0 carbohidrați pentru definiție maximă?", a: "Nu. O abordare low-carb moderată (100-150g/zi) cu proteina ridicată este mai sustenabilă și mai eficientă pe termen lung decât eliminarea totală a carbohidraților." },
      { q: "Cardio sau antrenament cu greutăți pentru definiție?", a: "Greutățile construiesc mușchii care creează aspectul definit. Cardioul arde calorii. Combinația este optimă: 3-4 zile forță + 2-3 zile cardio/HIIT." }
    ],
    mentinere: [
      { q: "Cum știu că am atins greutatea de menținere?", a: "Greutatea de menținere este TDEE-ul tău — caloriile necesare fără pierdere sau câștig. Dacă greutatea rămâne stabilă 2-3 săptămâni cu aportul curent, ești la menținere." },
      { q: "Menținerea greutății este mai grea decât slăbitul?", a: "Paradoxal, da. Studiile arată că 80% din cei care slăbesc revin la greutatea inițială. Menținerea necesită obiceiuri permanente, nu restricții temporare." },
      { q: "Pot mânca orice la menținere dacă nu depășesc caloriile?", a: "Teoretic da, dar calitatea alimentelor contează pentru sănătate, energie și compoziție corporală. 80% alimente nutritive + 20% plăceri este echilibrul optim." }
    ],
    forta: [
      { q: "Cât de mult mă pot întări cu o dietă optimă pentru forță?", a: "Progresul la forță este influențat 40% de antrenament, 40% de nutriție și 20% de genetică și recuperare. Nutriția corectă poate accelera câștigurile cu 20-30%." },
      { q: "Creatina este necesară pentru forță?", a: "Nu necesară, dar extrem de utilă. Creatina monohidrată (3-5g/zi) este suplimentul cu cel mai bun raport preț/eficiență pentru forță și masă musculară." },
      { q: "Trebuie să mănânc mult pentru a deveni puternic?", a: "Da, pentru sport de forță ai nevoie de surplus caloric sau cel puțin de menținere calorică. Deficitul caloric limiteaza câștigurile de forță semnificativ." }
    ],
    energie: [
      { q: "Ce alimente îmi dau energie susținută toată ziua?", a: "Carbohidrații complecși (ovăz, orez brun, cartofi dulci), proteinele slabe și grăsimile sănătoase (avocado, nuci) oferă energie susținută. Evitați zahărul rafinat." },
      { q: "Cafeaua este bună sau rea pentru energie?", a: "Cafeina în doze moderate (200-400mg/zi, echivalentul a 2-4 cafele) îmbunătățește alertness și performanța fizică. Abuzul duce la anxietate și tulburări de somn." },
      { q: "De ce mă simt obosit după masă?", a: "Post-prandial dip apare din cauza creșterii insulinei și redistribuirii sângelui spre digestie. Mese mai mici, mai frecvente și carbohidrați complecși reduc acest efect." }
    ],
    keto: [
      { q: "Cât timp durează până intru în cetoză?", a: "Dacă limitezi carbohidrații la sub 20-50g/zi, intri în cetoză în 2-4 zile. Dacă mai mănânci puțini carbohidrați, poate dura 1-2 săptămâni." },
      { q: "Ce este keto flu și cum îl evit?", a: "Keto flu: oboseală, cefalee, iritabilitate în primele 3-7 zile. Cauza: eliminarea glicogenului și a apei, scăderea electroliților. Soluție: bea apă, ia sodiu, potasiu și magneziu." },
      { q: "Pot face sport pe dietă ketogenică?", a: "Da, după adaptarea keto (4-8 săptămâni). Sportul de anduranță funcționează bine. Sportul exploziv și de forță poate suferi ușor datorită lipsei glucozei rapide." }
    ],
    vegetariana: [
      { q: "Pot construi masă musculară fără să mănânc carne?", a: "Da! Ouăle, lactatele și leguminoasele oferă proteine complete de calitate. Mulți sportivi de forță sunt vegetarieni și obțin rezultate excelente." },
      { q: "Vegetarienii au deficiențe nutriționale?", a: "Cu planificare, nu. Riscurile principale: fier non-hem (absorbit mai slab), zinc, omega-3 și B12 (adecvat din ouă și lactate, dar monitorizați). Analize anuale recomandate." },
      { q: "Câte proteine pot obține dintr-o dietă vegetariană?", a: "Destule! La 80 kg corp: 128-160g proteina. Ouă (78g/6 ouă), iaurt grec 500g (85g), brânza cottage 300g (33g) = 196g proteine din alimente comune." }
    ],
    vegana: [
      { q: "Este dieta vegană suficient de hrănitoare?", a: "Cu planificare atentă, da. Suplimentarea cu B12, D3 și posibil omega-3 din alge este esențiala. Fierul, calciul și zincul necesită atenție sporită la surse." },
      { q: "Pot fi atlet de performanță pe dietă vegană?", a: "Absolut. Numeroși sportivi de top (Novak Djokovic, Lewis Hamilton, Venus Williams) urmează diete plant-based. Cheia: calorii suficiente și proteine complete." },
      { q: "Ce substitut de proteina este cel mai bun pentru vegani?", a: "Proteina din mazăre + orez (combinație completă), proteina din cânepă și proteina din soia sunt cele mai studiate și accesibile. Vizate 25-30g per shake." }
    ],
  };
  return faqSets[objective] || faqSets.slabire;
}

function getRelatedSlugs(slug, objective, allSlugs) {
  // Find slugs with same objective
  const sameObj = allSlugs.filter(s => s !== slug && s.startsWith(objective) || 
    (objective === 'keto' && s.startsWith('keto')) ||
    (objective === 'vegana' && s.startsWith('vegana')) ||
    (objective === 'vegetariana' && s.startsWith('vegetariana'))
  );
  const result = [];
  // Take up to 3 related
  if (sameObj.length >= 3) {
    result.push(sameObj[0], sameObj[1], sameObj[2]);
  } else {
    // Cross-objective
    const others = allSlugs.filter(s => s !== slug && !result.includes(s));
    for (let i = 0; i < 3 && i < others.length; i++) {
      result.push(others[i]);
    }
  }
  return result.slice(0, 3);
}

function getTitle(objectiveName, h1, slug) {
  const title = `${h1} | GymBro.ro`;
  return title.length > 65 ? title.substring(0, 62) + '...' : title;
}

function getH1(objectiveName, profileName, objective) {
  const patterns = {
    slabire: `Plan Alimentar pentru ${profileName} — ${objectiveName}`,
    masa: `Plan Masă Musculară ${profileName}`,
    definire: `Plan Definire ${profileName}`,
    mentinere: `Plan Menținere ${profileName}`,
    forta: `Plan Nutriție Forță ${profileName}`,
    energie: `Plan Energie și Vitalitate ${profileName}`,
    keto: `Plan Ketogenic ${profileName}`,
    vegetariana: `Plan Vegetarian ${objectiveName}`,
    vegana: `Plan Vegan ${objectiveName}`,
  };
  return patterns[objective] || `${objectiveName} — ${profileName}`;
}

function getIntro(objectiveName, profileName, objective, calMin, calMax) {
  const intros = {
    slabire: `Acest plan de ${objectiveName} este special conceput pentru ${profileName.toLowerCase()}. Cu un interval caloric de ${calMin}-${calMax} kcal pe zi, vei crea deficitul necesar pentru a pierde grăsime sustenabil. Proteinele ridicate și alimentele nutritive te vor menține sătul și plin de energie.`,
    masa: `Planul de ${objectiveName} pentru ${profileName.toLowerCase()} furnizează ${calMin}-${calMax} kcal pe zi — un surplus caloric optim pentru construcția musculară fără acumulare excesivă de grăsime. Proteina ridicată și carbohidrații complecși vor alimenta antrenamentele și recuperarea.`,
    definire: `Definirea musculară combină deficitul caloric cu aportul ridicat de proteina pentru a sculpta corpul dorit. La ${calMin}-${calMax} kcal pe zi, acest plan pentru ${profileName.toLowerCase()} maximizează pierderea de grăsime în timp ce preservă mușchii construiți.`,
    mentinere: `Menținerea greutății ideale este adesea mai dificilă decât pierderea ei. Acest plan de ${calMin}-${calMax} kcal pe zi pentru ${profileName.toLowerCase()} te ghidează spre un echilibru nutrițional sustenabil pe termen lung.`,
    forta: `Forța maximă necesită combustibil adecvat. La ${calMin}-${calMax} kcal pe zi, acest plan pentru ${profileName.toLowerCase()} furnizează energia și nutrienții necesari pentru a sparge recorduri la antrenamente și a recupera optim.`,
    energie: `Energia și vitalitatea provin din nutriție de calitate. Acest plan de ${calMin}-${calMax} kcal pe zi pentru ${profileName.toLowerCase()} furnizează carbohidrați complecși, vitamine și minerale pentru a te menține alert și plin de vitalitate.`,
    keto: `Dieta ketogenică pentru ${profileName.toLowerCase()} pune corpul în cetoză — arderea grăsimii ca principal combustibil. La ${calMin}-${calMax} kcal pe zi cu sub 50g carbohidrați, experimentezi claritate mentală și energie stabilă fără fluctuații glicemice.`,
    vegetariana: `Dieta vegetariană ${objectiveName.toLowerCase()} dovedește că nu ai nevoie de carne pentru rezultate excelente. La ${calMin}-${calMax} kcal pe zi, ouăle și lactatele de calitate asigură proteina necesară obiectivelor tale.`,
    vegana: `Dieta vegană ${objectiveName.toLowerCase()} arată că plantele pot hrăni performanța și sănătatea optimă. La ${calMin}-${calMax} kcal pe zi, sursele proteice vegetale și varietatea culorilor din farfurie asigură toți nutrienții necesari.`,
  };
  return intros[objective] || intros.slabire;
}

function getMetaDesc(objectiveName, profileName, calMin, calMax, objective) {
  const base = `Plan alimentar ${objectiveName.toLowerCase()} pentru ${profileName.toLowerCase()}. ${calMin}-${calMax} kcal pe zi`;
  const extras = {
    slabire: `. Slăbești sănătos și sustenabil cu alimente nutritive și un deficit caloric optim.`,
    masa: `. Construiești masă musculară curată cu surplus caloric controlat și proteine de calitate.`,
    definire: `. Definești musculatura cu deficit moderat și proteine ridicate pentru sculptura ideală.`,
    mentinere: `. Menții greutatea ideală cu obiceiuri alimentare echilibrate și sustenabile pe termen lung.`,
    forta: `. Crești forța și performanța cu nutriție optimizată pentru antrenamente intense.`,
    energie: `. Boost de energie naturală cu alimente nutritive, fără zahăr rafinat și stimulante artificiale.`,
    keto: `. Intri în cetoză și arzi grăsime ca combustibil principal cu macro-uri ketogenice perfecte.`,
    vegetariana: `. Nutriție vegetariană completă cu ouă și lactate pentru performanță și sănătate optimă.`,
    vegana: `. Nutriție vegană completă din plante cu proteine adecvate și toate vitaminele esențiale.`,
  };
  const full = base + (extras[objective] || extras.slabire);
  // Trim to 160 chars
  return full.length > 160 ? full.substring(0, 157) + '...' : full;
}

// Get CTA text/link
function getCTA(objective) {
  const ctas = {
    slabire: ["Calculează-ți Caloriile pentru Slăbit", "/calculator"],
    masa: ["Calculează-ți Surplusul Caloric", "/calculator"],
    definire: ["Calculează-ți Macro-urile pentru Definiție", "/calculator"],
    mentinere: ["Calculează-ți TDEE-ul de Menținere", "/calculator"],
    forta: ["Calculează-ți Caloriile pentru Forță", "/calculator"],
    energie: ["Calculează-ți Necesarul Caloric", "/calculator"],
    keto: ["Calculează-ți Macro-urile Keto", "/calculator"],
    vegetariana: ["Calculează-ți Caloriile Vegetarian", "/calculator"],
    vegana: ["Calculează-ți Caloriile Vegan", "/calculator"],
  };
  return ctas[objective] || ctas.slabire;
}

// Generate all slugs list
const allSlugs = dietDefs.map(d => d[0]);

// Build the data
const dietPages = dietDefs.map(([slug, objective, objectiveName, profile, profileName, calMin, calMax, proteinPct, carbsPct, fatPct]) => {
  const h1 = getH1(objectiveName, profileName, objective);
  const [ctaText, ctaLink] = getCTA(objective);
  
  // Related slugs: 3 from same objective
  const sameObjSlugs = allSlugs.filter(s => s !== slug && dietDefs.find(d => d[0] === s && d[1] === objective));
  const related = sameObjSlugs.slice(0, 3);
  // If not enough, add from other objectives
  if (related.length < 3) {
    const others = allSlugs.filter(s => s !== slug && !related.includes(s));
    while (related.length < 3 && others.length > 0) {
      related.push(others.shift());
    }
  }
  
  return {
    slug,
    objective,
    objectiveName,
    profile,
    profileName,
    title: `${h1} | GymBro.ro`,
    metaDescription: getMetaDesc(objectiveName, profileName, calMin, calMax, objective),
    h1,
    intro: getIntro(objectiveName, profileName, objective, calMin, calMax),
    calories: { min: calMin, max: calMax },
    macros: { protein: `${proteinPct}%`, carbs: `${carbsPct}%`, fat: `${fatPct}%` },
    meals: getMeals(objective, profile, calMin, calMax),
    foods: getFoods(objective, profile),
    avoid: getAvoid(objective),
    tips: getTips(objective, profile),
    faqs: getFAQs(objective, profile, slug),
    relatedSlugs: related,
    ctaText,
    ctaLink,
  };
});

// Generate TypeScript content
const tsContent = `// AUTO-GENERATED: 100 diet pages for GymBro.ro Programmatic SEO
// DO NOT EDIT MANUALLY — run scripts/build-diete-data.js to regenerate

export interface DietPage {
  slug: string
  objective: string
  objectiveName: string
  profile: string
  profileName: string
  title: string
  metaDescription: string
  h1: string
  intro: string
  calories: { min: number; max: number }
  macros: { protein: string; carbs: string; fat: string }
  meals: { name: string; description: string; calories: number }[]
  foods: string[]
  avoid: string[]
  tips: string[]
  faqs: { q: string; a: string }[]
  relatedSlugs: string[]
  ctaText: string
  ctaLink: string
}

export const dietPages: DietPage[] = ${JSON.stringify(dietPages, null, 2)}
`;

// Write the file
const outPath = path.join(__dirname, '../app/diete/data.ts');
require('fs').mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, tsContent, 'utf8');

console.log(`✅ Generated ${dietPages.length} diet pages`);
console.log(`📄 Written to: ${outPath}`);
console.log('Slugs:', dietPages.map(d => d.slug).join(', '));
