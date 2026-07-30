#!/usr/bin/env node
// Generator for 100 diet pages data

const diets = [
  // ===== SLĂBIT (25) =====
  {
    slug: "slabire-incepatori",
    objective: "slabire", objectiveName: "Slăbit Sustenabil",
    profile: "incepatori", profileName: "Pentru Începători",
    title: "Dietă Slăbit Începători — Plan Alimentar Complet | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru începători. Meniu simplu, alimente accesibile și sfaturi practice pentru a slăbi sănătos în primul tău an de dietă.",
    h1: "Dietă de Slăbit pentru Începători — Ghid Complet",
    intro: "Dacă ești la primul pas în journey-ul tău de slăbit, ai nevoie de un plan simplu și sustenabil. Această dietă se bazează pe alimente obișnuite, ușor de găsit, fără sacrificii extreme. Vei slăbi 0.5-1 kg pe săptămână cu un deficit caloric moderat de 500 kcal pe zi.",
    calories: { min: 1400, max: 1700 },
    macros: { protein: "30%", carbs: "45%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "Ovăz cu lapte, o banană și 2 ouă fierte", calories: 350 },
      { name: "Gustare dimineață", description: "Iaurt grecesc cu fructe de pădure", calories: 150 },
      { name: "Prânz", description: "Piept de pui la grătar cu orez brun și salată", calories: 480 },
      { name: "Gustare după-amiază", description: "Morcovi cu hummus", calories: 120 },
      { name: "Cină", description: "Somon la cuptor cu legume la abur și cartofi dulci", calories: 400 }
    ],
    foods: ["Piept de pui", "Ouă", "Ovăz", "Orez brun", "Broccoli", "Spanac", "Mere", "Banane", "Iaurt grecesc", "Somon", "Cartofi dulci", "Leguminoase"],
    avoid: ["Fast food", "Băuturi carbogazoase cu zahăr", "Dulciuri procesate", "Chips-uri", "Pâine albă în exces", "Sucuri ambalate"],
    tips: [
      "Cântărește alimentele în primele 2 săptămâni pentru a înțelege porțiile",
      "Bea 2-2.5L de apă pe zi — setea poate fi confundată cu foamea",
      "Gătește în avans duminica pentru a evita alegerile impulsive în cursul săptămânii",
      "Nu sări peste micul dejun — setează metabolismul pentru restul zilei",
      "Dormi 7-8 ore pe noapte — privarea de somn crește foamea cu până la 30%"
    ],
    faqs: [
      { q: "Câte kilograme pot slăbi pe săptămână ca începător?", a: "Un ritm sănătos și sustenabil este de 0.5-1 kg pe săptămână. Un deficit de 500 kcal zilnic înseamnă aproximativ 0.5 kg pierdut pe săptămână din grăsime." },
      { q: "Trebuie să fac sport obligatoriu?", a: "Nu este obligatoriu pentru slăbit, dar sportul accelerează procesul și îmbunătățește compoziția corporală. Încearcă să faci minim 30 minute de mers pe jos zilnic." },
      { q: "Pot mânca carbohidrați când slăbesc?", a: "Da! Carbohidrații nu sunt dușmanul. Consumați cu moderație și din surse integrale (ovăz, orez brun, cartofi dulci), aceștia furnizează energie și mențin glicemia stabilă." }
    ],
    relatedSlugs: ["slabire-intermediari", "slabire-femei", "slabire-sustenabila"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-intermediari",
    objective: "slabire", objectiveName: "Slăbit Sustenabil",
    profile: "intermediari", profileName: "Nivel Intermediar",
    title: "Dietă Slăbit Intermediari — Plan Alimentar Avansat | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru cei cu experiență. Deficit caloric optimizat, macro tracking și strategii avansate pentru a depăși platoul de slăbit.",
    h1: "Dietă de Slăbit pentru Nivel Intermediar",
    intro: "Ești deja familiarizat cu bazele dietei și ai obținut rezultate, dar acum ai atins un platou? Această dietă te ajută să optimizezi fiecare calorie consumată. Combinăm deficit caloric ciclic cu prioritizarea proteinei pentru a maximiza pierderea de grăsime.",
    calories: { min: 1500, max: 1800 },
    macros: { protein: "35%", carbs: "40%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "Ouă scramble cu spanac și roșii cherry + pâine integrală", calories: 380 },
      { name: "Gustare dimineață", description: "Shake proteic cu lapte de migdale și căpșuni", calories: 200 },
      { name: "Prânz", description: "Salată niçoise cu ton, ouă fierte, fasole verde și dressing de lămâie", calories: 450 },
      { name: "Gustare după-amiază", description: "Brânză de vaci cu nuci și 1 măr", calories: 180 },
      { name: "Cină", description: "Cod la cuptor cu quinoa și legume mediteraneene la grătar", calories: 420 }
    ],
    foods: ["Ton", "Cod", "Ouă", "Brânză de vaci", "Quinoa", "Fasole verde", "Spanac", "Roșii cherry", "Castraveți", "Ardei gras", "Nuci", "Semințe de chia"],
    avoid: ["Alcool", "Deserturi", "Pâine albă", "Paste rafinate", "Sosuri cumpărate din comerț", "Cereale cu zahăr"],
    tips: [
      "Trackuiește macronutrienții, nu doar caloriile — calitatea contează la fel de mult ca cantitatea",
      "Implementează refeeding day o dată la 2 săptămâni pentru a reseta leptina",
      "Variază sursa de cardio pentru a preveni adaptarea metabolică",
      "Prioritizează proteina la fiecare masă — minim 30g per porție",
      "Folosește meal prep agresiv duminica — gătește pentru toată săptămâna"
    ],
    faqs: [
      { q: "De ce am atins un platou de slăbit?", a: "Corpul se adaptează la deficitul caloric în timp. Metabolismul scade cu 5-15% după câteva săptămâni de dietă. Soluția: variază deficitul, crește proteina și adaugă antrenamente de forță." },
      { q: "Ar trebui să fac carb cycling?", a: "Carb cycling poate fi util la nivel intermediar. În zilele de antrenament intens consumi mai mulți carbohidrați (200-250g), în zilele de repaus mai puțini (100-150g)." },
      { q: "Cât de mult cardio este optim?", a: "150-200 minute pe săptămână de cardio moderat sau 75-100 minute de cardio intens sunt recomandate pentru slăbit eficient la nivel intermediar." }
    ],
    relatedSlugs: ["slabire-incepatori", "slabire-avansati", "slabire-proteica"],
    ctaText: "Calculează-ți Deficitul", ctaLink: "/calculator"
  },
  {
    slug: "slabire-avansati",
    objective: "slabire", objectiveName: "Slăbit Sustenabil",
    profile: "avansati", profileName: "Nivel Avansat",
    title: "Dietă Slăbit Avansați — Strategii Pro pentru Pierdere de Grăsime | GymBro.ro",
    metaDescription: "Strategii avansate de dietă pentru slăbit: carb cycling, deficit agresiv controlat, periodizare nutrițională și tehnici de recompunere corporală.",
    h1: "Dietă de Slăbit Avansată — Strategii Pro",
    intro: "La nivel avansat, slăbitul devine o știință precisă. Folosim periodizare nutrițională, deficit agresiv în faze scurte și refeeduri strategice pentru a minimiza pierderea musculară. Scopul: maxim grăsime pierdută, minimum masă musculară sacrificată.",
    calories: { min: 1300, max: 2000 },
    macros: { protein: "40%", carbs: "35%", fat: "25%" },
    meals: [
      { name: "Micul dejun (pre-workout)", description: "Albuș de ou (6 buc) cu ovăz + cafea neagră", calories: 350 },
      { name: "Post-workout", description: "Shake proteic cu banană și 30g carbohidrați rapizi", calories: 280 },
      { name: "Prânz", description: "Piept de curcan cu orez basmati și broccoli la abur", calories: 520 },
      { name: "Gustare", description: "Cazeină cu apă sau lapte degresat", calories: 150 },
      { name: "Cină", description: "Pesce spada sau ton cu salată verde și avocado", calories: 400 }
    ],
    foods: ["Albuș de ou", "Piept de curcan", "Pesce spada", "Orez basmati", "Ovăz", "Broccoli", "Avocado", "Fasole neagră", "Semințe de cânepă", "Spirulină", "Quinoa", "Sparanghel"],
    avoid: ["Grăsimi saturate în exces", "Carbohidrați rafinați", "Fructoză în exces", "Alcool complet", "Sucuri și smoothie-uri cu calorii", "Lactate grase"],
    tips: [
      "Folosește deficit de 20-25% în zilele normale și deficit de 30-35% în zilele de repaus",
      "Prioritizează masa musculară: 2.2-2.5g proteină per kg de greutate corporală",
      "Fă refeed la fiecare 7-10 zile cu 100-150% din necesarul caloric cu focus pe carbohidrați",
      "Monitorizează greutatea la aceeași oră zilnic și fă media săptămânală",
      "Consideră intermittent fasting 16:8 pentru a simplifica deficitul caloric"
    ],
    faqs: [
      { q: "Cum evit pierderea musculară în deficit agresiv?", a: "Proteina ridicată (2.2-2.5g/kg), antrenamentele de forță menținute și refeedurile regulate sunt pilonii pentru preservarea masei musculare în deficit caloric agresiv." },
      { q: "Este HIIT sau LISS mai eficient pentru slăbit avansat?", a: "Combinația este optimă: 2-3 sesiuni HIIT pe săptămână pentru efectul EPOC, plus 2-3 sesiuni LISS (mers rapid, înot) pentru burn caloric direct fără suprasolicitare." },
      { q: "Când știu că am ajuns la setpoint și ce fac?", a: "Setpoint-ul se manifestă prin platou persistent (2+ săptămâni). Soluția: diet break de 2 săptămâni la TDEE, resetarea leptinei, apoi reluarea deficitului." }
    ],
    relatedSlugs: ["slabire-intermediari", "slabire-intermittent-fasting", "slabire-proteica"],
    ctaText: "Calculează-ți TDEE", ctaLink: "/calculator"
  },
  {
    slug: "slabire-femei",
    objective: "slabire", objectiveName: "Slăbit pentru Femei",
    profile: "femei", profileName: "Pentru Femei",
    title: "Dietă de Slăbit pentru Femei — Plan Alimentar Complet 2024 | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit special pentru femei. Ține cont de hormonii feminini, ciclul menstrual și nevoile nutriționale specifice femeilor active.",
    h1: "Dietă de Slăbit pentru Femei — Plan Personalizat",
    intro: "Metabolismul feminin are particularități unice față de cel masculin, iar hormonii joacă un rol crucial în procesul de slăbit. Această dietă este calibrată pentru nevoile nutriționale ale femeilor, cu accent pe fier, calciu și proteine de calitate. Slăbești sănătos, fără să-ți afectezi energia sau sănătatea hormonală.",
    calories: { min: 1300, max: 1600 },
    macros: { protein: "30%", carbs: "45%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "Smoothie bowl cu spanac, fructe de pădure, proteină și semințe de in", calories: 320 },
      { name: "Gustare dimineață", description: "Iaurt grecesc (0% grăsime) cu miere și nuci", calories: 180 },
      { name: "Prânz", description: "Salată cu pui la grătar, năut, roșii uscate și dressing citric", calories: 430 },
      { name: "Gustare după-amiază", description: "Mere cu unt de arahide natural", calories: 170 },
      { name: "Cină", description: "Somon cu legume la cuptor și orez brun", calories: 400 }
    ],
    foods: ["Spanac", "Linte roșie", "Năut", "Somon", "Piept de pui", "Iaurt grecesc", "Ouă", "Semințe de in", "Broccoli", "Fructe de pădure", "Quinoa", "Tofu"],
    avoid: ["Alcool", "Alimente procesate cu sodiu ridicat", "Fast food", "Îndulcitori artificiali în exces", "Diete crash sub 1200 kcal", "Deserturi"],
    tips: [
      "Sincronizează dieta cu ciclul menstrual: mai mulți carbohidrați în faza luteală când pofta crește",
      "Consumă alimente bogate în fier (linte, spanac) mai ales în perioada menstruației",
      "Nu neglija calciul: lactate degresate, broccoli, migdale pentru sănătatea oaselor",
      "Gestionează stresul prin yoga sau meditație — cortizolul ridicat sabotează slăbitul",
      "Dozează antrenamentele în funcție de ciclu: antrenamente intense în faza foliculară"
    ],
    faqs: [
      { q: "De ce slăbesc mai greu decât bărbații?", a: "Femeile au în medie 5-10% mai puță masă musculară (principalul motor al metabolismului) și au hormoni (estrogen) care promovează stocarea grăsimii. Un deficit mai mic dar consecvent este mai eficient." },
      { q: "Este normal să nu slăbesc în săptămâna premenstruală?", a: "Da, total normal. Retenția de apă poate adăuga 1-3 kg înainte de menstruație. Nu este grăsime reală. Monitorizează trendul lunar, nu săptămânal." },
      { q: "Pot slăbi alăptând?", a: "Da, dar necesarul caloric crește cu 400-500 kcal pe zi în alăptare. Nu face un deficit agresiv — minim 1800 kcal și consultă medicul înainte de orice dietă." }
    ],
    relatedSlugs: ["slabire-incepatori", "slabire-30-ani", "slabire-pentru-mame"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-barbati",
    objective: "slabire", objectiveName: "Slăbit pentru Bărbați",
    profile: "barbati", profileName: "Pentru Bărbați",
    title: "Dietă de Slăbit pentru Bărbați — Plan Alimentar Eficient | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru bărbați. Deficit caloric optimizat, proteine ridicate și strategii pentru a scăpa de grăsimea abdominală rapid și sănătos.",
    h1: "Dietă de Slăbit pentru Bărbați — Ghid Practic",
    intro: "Bărbații tind să acumuleze grăsime viscerală în zona abdominală, cel mai periculos tip de grăsime pentru sănătatea cardiovasculară. Această dietă combină deficit caloric susținut cu aport ridicat de proteine pentru a topa grăsimea abdominală și a menține masa musculară.",
    calories: { min: 1800, max: 2200 },
    macros: { protein: "35%", carbs: "40%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "4 ouă omletă cu bacon slab, roșii și pâine integrală", calories: 480 },
      { name: "Gustare dimineață", description: "Shake proteic cu lapte degresat și banana", calories: 280 },
      { name: "Prânz", description: "Pulpă de pui dezosată cu cartofi dulci la cuptor și salată verde", calories: 620 },
      { name: "Gustare după-amiază", description: "Brânză de vaci cu nuci de caju și afine", calories: 220 },
      { name: "Cină", description: "Friptura de vită slabă (200g) cu broccoli și morcovi la abur", calories: 520 }
    ],
    foods: ["Carne de vită slabă", "Piept de pui", "Ouă", "Brânză de vaci", "Cartofi dulci", "Orez brun", "Broccoli", "Spanac", "Ceapă", "Usturoi", "Avocado", "Nuci"],
    avoid: ["Bere și alcool", "Fast food", "Pâine albă", "Pizza", "Carne procesată (cârnați, salam)", "Sucuri și băuturi energizante"],
    tips: [
      "Grăsimea viscerală (burtă) răspunde cel mai bine la deficitul caloric + cardio HIIT",
      "Consumă proteine la fiecare masă: minim 40-50g per masă principală",
      "Antrenamentele de forță sunt esențiale — masa musculară arde calorii și în repaus",
      "Limitați alcoolul complet: berea adaugă calorii goale și inhibă arderea grăsimilor",
      "Testosteronul scade cu privarea de somn — prioritizează 7-8 ore pe noapte"
    ],
    faqs: [
      { q: "Cum scap de burta de bere?", a: "Deficitul caloric combinat cu antrenamente HIIT de 20-30 minute de 3 ori pe săptămână și reducerea drastică a alcoolului este cel mai eficient protocol pentru grăsimea abdominală." },
      { q: "Câte proteine am nevoie pe zi?", a: "Pentru slăbit optim, vizați 1.6-2.2g proteină per kg de greutate corporală. La 90 kg, asta înseamnă 145-200g proteină pe zi." },
      { q: "Pot slăbi fără să pierd și musculatură?", a: "Da, cu aport ridicat de proteine (2g/kg), antrenamente de forță menținute și deficit moderat (nu mai mare de 20% din TDEE) poți pierde predominant grăsime." }
    ],
    relatedSlugs: ["slabire-la-sala", "slabire-proteica", "slabire-intermittent-fasting"],
    ctaText: "Calculează-ți TDEE", ctaLink: "/calculator"
  },
  {
    slug: "slabire-30-ani",
    objective: "slabire", objectiveName: "Slăbit după 30 de Ani",
    profile: "30-ani", profileName: "Vârsta 30+",
    title: "Dietă Slăbit după 30 de Ani — Plan Alimentar Adaptat | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru persoane de 30+ ani. Strategii adaptate pentru metabolism mai lent, hormoni în schimbare și stilul de viață ocupat.",
    h1: "Dietă de Slăbit după 30 de Ani",
    intro: "După 30 de ani, metabolismul începe să încetinească cu aproximativ 2-3% pe deceniu, iar recuperarea după sport durează mai mult. Această dietă ține cont de aceste schimbări fiziologice, punând accent pe calitatea alimentelor și sustenabilitate pe termen lung.",
    calories: { min: 1500, max: 1800 },
    macros: { protein: "35%", carbs: "40%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "Chia pudding cu lapte de cocos, fructe proaspete și migdale", calories: 340 },
      { name: "Gustare dimineață", description: "2 ouă fierte tari cu legume crude", calories: 160 },
      { name: "Prânz", description: "Supă de linte cu legume și o felie de pâine integrală", calories: 420 },
      { name: "Gustare după-amiază", description: "Iaurt grecesc cu semințe de in și scorțișoară", calories: 150 },
      { name: "Cină", description: "Piept de pui cu quinoa și legume mediteraneene la cuptor", calories: 450 }
    ],
    foods: ["Linte", "Năut", "Piept de pui", "Somon", "Semințe de chia", "Quinoa", "Avocado", "Broccoli", "Afine", "Iaurt grecesc", "Ouă", "Migdale"],
    avoid: ["Alcool în exces", "Alimente ultra-procesate", "Zahăr adăugat", "Grăsimi trans", "Fast food", "Bauturi energizante"],
    tips: [
      "Acceptă un ritm mai lent de slăbit: 0.3-0.5 kg/săptămână este optim după 30 de ani",
      "Adaugă antrenamente de forță de 2-3 ori pe săptămână pentru a combate pierderea musculară",
      "Gestionează stresul profesional — cortizolul cronic depozitează grăsime abdominal",
      "Prioritizează somnul: recuperarea e mai lentă după 30, iar somnul e esențial",
      "Fă analize medicale anuale pentru a monitoriza colesterol, glicemie și hormoni"
    ],
    faqs: [
      { q: "De ce e mai greu să slăbești după 30 de ani?", a: "Metabolismul scade, masa musculară se reduce natural (sarcopenie), hormonii se modifică și stilul de viață devine mai sedentar. Soluția: mai multă mișcare și nutriție mai atentă." },
      { q: "Pot să fac sport intens după 30 de ani?", a: "Absolut, cu recuperare adecvată. Mixul ideal: 3 antrenamente de forță + 2 cardio moderate pe săptămână. Evitați 7 zile de antrenamente intense consecutiv." },
      { q: "Ce suplimente sunt utile după 30 de ani?", a: "Vitamina D3, Omega-3, Magneziu și posibil proteină din zer (pentru completarea aportului) sunt cele mai studiate și benefice suplimente pentru această grupă de vârstă." }
    ],
    relatedSlugs: ["slabire-40-ani", "slabire-femei", "slabire-sustenabila"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-40-ani",
    objective: "slabire", objectiveName: "Slăbit după 40 de Ani",
    profile: "40-ani", profileName: "Vârsta 40+",
    title: "Dietă Slăbit după 40 de Ani — Strategii Eficiente | GymBro.ro",
    metaDescription: "Plan alimentar optimizat pentru slăbit după 40 de ani. Ținând cont de premenopauză, andropauză și metabolism, te ajutăm să obții rezultate reale.",
    h1: "Dietă de Slăbit după 40 de Ani — Ghid Complet",
    intro: "La 40+ ani, schimbările hormonale devin mai pronunțate — la femei premenopauza, la bărbați scăderea testosteronului. Metabolismul este cu 5-10% mai lent decât la 30 de ani. Această dietă este special calibrată pentru aceste provocări, cu alimente antiinflamatorii și nutrienți care susțin echilibrul hormonal.",
    calories: { min: 1400, max: 1700 },
    macros: { protein: "35%", carbs: "40%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "Ouă cu avocado pe pâine integrală și smoothie de legume verzi", calories: 400 },
      { name: "Gustare dimineață", description: "Nuci și o portocală", calories: 140 },
      { name: "Prânz", description: "Salată mediteraneană cu ton, măsline, roșii și feta slabă", calories: 420 },
      { name: "Gustare după-amiază", description: "Ceai verde și 2 prune uscate cu migdale", calories: 120 },
      { name: "Cină", description: "Pui la abur cu linte verde și sfeclă roșie coaptă", calories: 430 }
    ],
    foods: ["Somon", "Ton", "Ouă", "Avocado", "Linte verde", "Sfeclă roșie", "Nuci", "Afine", "Usturoi", "Turmeric", "Broccoli", "Semințe de dovleac"],
    avoid: ["Zahăr rafinat", "Alcool", "Grăsimi trans", "Carne procesată", "Alimente cu index glicemic ridicat", "Sare în exces"],
    tips: [
      "Consumă alimente antiinflamatorii zilnic: afine, turmeric, somon, semințe",
      "Reduceri hormonale înseamnă mai puțin loc pentru erori — fii consistent 80% din timp",
      "Antrenamentele de forță sunt CRITICE la 40+ pentru a menține masa musculară și densitatea osoasă",
      "Consultă un endocrinolog dacă suspectezi disfuncții tiroidiene sau hormonale",
      "Intermittent fasting 12:12 (12 ore mâncat, 12 ore post) poate fi o strategie eficientă și ușoară"
    ],
    faqs: [
      { q: "Menopauza îngreunează slăbitul?", a: "Da, scăderea estrogenului redistribuie grăsimea spre abdomen și scade metabolismul. Antrenamentele de forță, proteinele ridicate și reducerea zahărului sunt esențiale în această perioadă." },
      { q: "Trebuie să iau hormoni pentru a slăbi?", a: "Nu neapărat. Nutriția și exercițiile adecvate pot compensa parțial efectele hormonale. Terapia hormonală este o decizie medicală, nu nutritivă." },
      { q: "Pot slăbi și cu tiroidă leneșă?", a: "Da, dar procesul este mai lent. Hipotiroidismul tratat medicamentos + deficit caloric moderat + exerciții regulate funcționează. Consultă medicul pentru a optimiza medicația." }
    ],
    relatedSlugs: ["slabire-30-ani", "slabire-50-ani", "slabire-femei"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-50-ani",
    objective: "slabire", objectiveName: "Slăbit după 50 de Ani",
    profile: "50-ani", profileName: "Vârsta 50+",
    title: "Dietă Slăbit după 50 de Ani — Plan Alimentar Sănătos | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru persoane de 50+ ani. Nutriție adaptată pentru menopauză, andropauză, sănătatea articulară și cardiovasculară.",
    h1: "Dietă de Slăbit după 50 de Ani",
    intro: "La 50+ ani, slăbitul este despre sănătate, nu doar estetică. Această dietă prioritizează nutrienții care protejează inima, oasele și funcția cognitivă, în timp ce creează un deficit caloric modest pentru pierderea graduală de grăsime.",
    calories: { min: 1300, max: 1600 },
    macros: { protein: "35%", carbs: "40%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "Terci de ovăz cu semințe de in, nuci și afine proaspete", calories: 350 },
      { name: "Gustare dimineață", description: "Ceai verde cu lămâie și 1 banana mică", calories: 90 },
      { name: "Prânz", description: "Supă cremă de legume + piept de pui la grătar cu salată", calories: 440 },
      { name: "Gustare după-amiază", description: "Kefir sau iaurt natural cu semințe de chia", calories: 130 },
      { name: "Cină", description: "Somon la cuptor cu sparanghel și cartofi dulci fierți", calories: 410 }
    ],
    foods: ["Ovăz", "Somon", "Afine", "Semințe de in", "Nuci", "Broccoli", "Spanac", "Sparanghel", "Linte", "Iaurt", "Cartofi dulci", "Ouă"],
    avoid: ["Sare în exces (risc HTA)", "Zahăr", "Alcool", "Carne roșie procesată", "Grăsimi saturate în exces", "Cafeina în exces"],
    tips: [
      "Reduceți sodiul sub 2000mg/zi pentru a proteja tensiunea arterială",
      "Calciul și vitamina D sunt esențiale: lactate, sardine, broccoli, expunere solară",
      "Sportul cu impact scăzut (înot, mers pe jos, yoga) protejează articulațiile",
      "Hidratarea e crucială — senzația de sete scade cu vârsta, bea regulat",
      "Vizitați cardiologul, diabetologul și ginecologul/urologul anual"
    ],
    faqs: [
      { q: "Câte kilograme pot slăbi la 50+ ani?", a: "Un ritm realist și sigur este 0.3-0.5 kg pe săptămână. Deficite mai mari cresc riscul de pierdere musculară și deficiențe nutriționale." },
      { q: "Ce exerciții sunt sigure la 50+ ani?", a: "Mersul pe jos 30-45 min zilnic, înotul, yoga, pilates și antrenamentele ușoare cu greutăți sunt ideale. Evitați exercițiile cu impact ridicat dacă aveți probleme articulare." },
      { q: "Diabetul de tip 2 afectează slăbitul?", a: "Da, rezistența la insulină face slăbitul mai dificil. Reducerea carbohidraților rafinați, activitatea fizică regulată și medicația adecvată sunt esențiale. Consultați diabetologul." }
    ],
    relatedSlugs: ["slabire-40-ani", "slabire-mediteraneana", "slabire-sustenabila"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-vegana",
    objective: "slabire", objectiveName: "Slăbit Vegan",
    profile: "vegana", profileName: "Dietă Vegană",
    title: "Dietă Vegană pentru Slăbit — Plan Alimentar Complet | GymBro.ro",
    metaDescription: "Plan vegan de slăbit. Proteine din plante, deficit caloric optim și ghid complet pentru a slăbi sănătos eliminând complet produsele animale.",
    h1: "Dietă Vegană pentru Slăbit — Plan Complet",
    intro: "Dieta vegană poate fi extrem de eficientă pentru slăbit — studiile arată că veganii au în medie un IMC mai mic. Secretul constă în densitatea nutritivă ridicată și calorică scăzută a alimentelor vegetale. Această dietă asigură toate proteinele și micronutrienții necesari.",
    calories: { min: 1400, max: 1700 },
    macros: { protein: "25%", carbs: "55%", fat: "20%" },
    meals: [
      { name: "Micul dejun", description: "Smoothie verde cu spanac, banana, proteină vegetală și lapte de migdale", calories: 320 },
      { name: "Gustare dimineață", description: "Hummus cu legume crude (ardei, castraveți, morcovi)", calories: 150 },
      { name: "Prânz", description: "Buddha bowl cu quinoa, tofu la grătar, avocado și legume colorate", calories: 480 },
      { name: "Gustare după-amiază", description: "Fructe de pădure cu semințe de chia", calories: 130 },
      { name: "Cină", description: "Curry de linte roșie cu lapte de cocos și orez brun", calories: 420 }
    ],
    foods: ["Tofu", "Tempeh", "Linte", "Năut", "Quinoa", "Avocado", "Semințe de chia", "Spanac", "Broccoli", "Afine", "Nuci de caju", "Lapte de cocos"],
    avoid: ["Unt de arahide procesat (mult zahăr)", "Alimente vegane procesate (burgeri vegani industriali)", "Uleiuri vegetale rafinate în exces", "Zahăr rafinat", "Băuturi vegane cu zahăr", "Chips-uri de legume prăjite"],
    tips: [
      "Combină surse de proteine vegetale pentru aminoacizi complet (leguminoase + cereale)",
      "Suplimentezi obligatoriu cu B12 și vitamin D — nu se găsesc în plante",
      "Fă analize pentru fier și zinc la 6 luni — deficiențele sunt comune la vegani",
      "Caloriile vegetale pot înșela: avocado, nuci și semințele sunt calorice",
      "Fibrele ridicate din dietă vegana ajută la sațietate și digestie"
    ],
    faqs: [
      { q: "Pot obține suficiente proteine dintr-o dietă vegană?", a: "Da! Tofu, tempeh, leguminoase, quinoa și semințele oferă proteine complete. Vizează 1.6g proteine/kg corp. Un smoothie proteic vegan poate ajuta." },
      { q: "Veganii slăbesc mai repede?", a: "Studiile arată că veganii pierd în medie mai mult în greutate decât omnivorii cu același deficit caloric, posibil datorită fibrelor ridicate și densității calorice scăzute." },
      { q: "Ce fac cu B12 pe dieta vegana?", a: "B12 nu se găsește în plante. Suplementarea cu 250-500mcg de B12 zilnic sau 2000mcg săptămânal este obligatorie pentru vegani." }
    ],
    relatedSlugs: ["slabire-vegetariana", "vegana-slabire", "slabire-incepatori"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-vegetariana",
    objective: "slabire", objectiveName: "Slăbit Vegetarian",
    profile: "vegetariana", profileName: "Dietă Vegetariană",
    title: "Dietă Vegetariană pentru Slăbit — Plan Complet | GymBro.ro",
    metaDescription: "Plan vegetarian de slăbit cu ouă și lactate. Meniuri echilibrate, proteine din surse lacto-ovo-vegetariene și deficit caloric pentru pierdere de grăsime.",
    h1: "Dietă Vegetariană pentru Slăbit",
    intro: "Dieta lacto-ovo-vegetariană combină beneficiile nutriției vegetale cu versatilitatea ouălor și lactatelor. Este una dintre dietele cele mai ușor de urmat și sustenabile pe termen lung. Această versiune este optimizată pentru slăbit, cu accent pe proteine de calitate și fibre saturante.",
    calories: { min: 1400, max: 1700 },
    macros: { protein: "28%", carbs: "50%", fat: "22%" },
    meals: [
      { name: "Micul dejun", description: "Omletă cu 3 ouă, brânză feta, roșii și busuioc", calories: 350 },
      { name: "Gustare dimineață", description: "Iaurt grecesc cu granola de casă (fără zahăr)", calories: 180 },
      { name: "Prânz", description: "Supă de fasole albă cu legume + felie de pâine integrală", calories: 420 },
      { name: "Gustare după-amiază", description: "Brânză cottage cu ardei gras și castravete", calories: 130 },
      { name: "Cină", description: "Tofu stir-fry cu legume și tăiței de orez", calories: 400 }
    ],
    foods: ["Ouă", "Brânză cottage", "Iaurt grecesc", "Tofu", "Linte", "Fasole albă", "Broccoli", "Roșii", "Ardei gras", "Pâine integrală", "Orez brun", "Semințe de floarea soarelui"],
    avoid: ["Carne și pește", "Fastfood", "Dulciuri procesate", "Pâine albă în exces", "Băuturi cu zahăr", "Uleiuri rafinate"],
    tips: [
      "Ouăle sunt proteine de înaltă calitate — include 1-2 la fiecare masă principală",
      "Lactatele degresate (iaurt, brânză cottage) sunt excelente surse de proteină și calciu",
      "Fii atent la alimente etichetate 'vegetarian' dar bogate în zahăr sau grăsimi",
      "Planifică mesele în avans — vegetarianismul neplanificat duce la carbohidrați în exces",
      "Vitamina B12 este adecvată din lactate și ouă, dar monitorizează nivelul anual"
    ],
    faqs: [
      { q: "Este dieta vegetariană eficientă pentru slăbit?", a: "Da, studiile arată că vegetarienii au în medie un IMC mai mic. Fibrele ridicate și densitatea calorică mai mică ajută la crearea deficitului necesar." },
      { q: "Cum îmi asigur proteina suficientă fără carne?", a: "Ouă (6g proteină/ou), iaurt grecesc (17g/100g), brânză cottage (11g/100g), tofu (8g/100g) și leguminoase sunt surse excelente. Combinate, poți atinge ușor 1.6g/kg." },
      { q: "Pot să-mi construiesc masă musculară vegetarian?", a: "Absolut! Dieta vegetariană cu proteine suficiente și antrenamente de forță regulat construiește masă musculară eficient. Mulți sportivi de performanță sunt vegetarieni." }
    ],
    relatedSlugs: ["slabire-vegana", "vegetariana-slabire", "slabire-incepatori"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-keto",
    objective: "slabire", objectiveName: "Slăbit Keto",
    profile: "keto", profileName: "Dietă Ketogenică",
    title: "Dietă Keto pentru Slăbit — Plan Ketogenic Complet | GymBro.ro",
    metaDescription: "Plan ketogenic pentru slăbit. Intri în cetoză în 3-5 zile și arzi grăsime ca principal combustibil. Meniuri keto, macro-uri și sfaturi pentru keto flu.",
    h1: "Dietă Keto pentru Slăbit — Plan Ketogenic",
    intro: "Dieta ketogenică pune corpul în cetoză — o stare metabolică în care arzi grăsime ca principal combustibil în loc de glucoză. Cu sub 50g carbohidrați pe zi, ficatul produce corpuri cetonice care alimentează creierul și mușchii. Rezultatul: pierdere rapidă de grăsime, mai ales în primele săptămâni.",
    calories: { min: 1500, max: 1800 },
    macros: { protein: "25%", carbs: "5%", fat: "70%" },
    meals: [
      { name: "Micul dejun", description: "Ouă prăjite în unt cu bacon și avocado", calories: 480 },
      { name: "Gustare dimineață", description: "Brânză cheddar cu nuci de macadamia", calories: 200 },
      { name: "Prânz", description: "Salată cu pui la grătar, bacon, ou fiert, ulei de măsline și parmezan", calories: 520 },
      { name: "Gustare după-amiază", description: "Ceapă verde cu smântână sau guacamole", calories: 120 },
      { name: "Cină", description: "Somon la cuptor cu unt de lămâie și sparanghel", calories: 480 }
    ],
    foods: ["Ouă", "Bacon slab", "Avocado", "Somon", "Brânzeturi grase", "Nuci de macadamia", "Unt", "Smântână", "Ulei de cocos", "Broccoli", "Sparanghel", "Spanac"],
    avoid: ["Pâine și cereale", "Orez și paste", "Cartofi", "Fructe (exceptând fructe de pădure mici)", "Zahăr", "Leguminoase", "Lapte"],
    tips: [
      "Keto flu apare în primele 3-7 zile — bea electroliți (sodiu, potasiu, magneziu)",
      "Urmărește sub 20-50g carbohidrați neti pe zi pentru cetoză fiabilă",
      "Testează cetoza cu bandellete sau glucometru cu cetonemie în primele săptămâni",
      "Mănâncă destule grăsimi — senzația de foame este semnalul că ai mâncat insuficient",
      "Cafeaua neagră cu unt (bulletproof coffee) este compatibilă keto și susține energia"
    ],
    faqs: [
      { q: "Cât de repede slăbesc pe keto?", a: "Primele 1-2 săptămâni: 2-5 kg rapid (în principal apă și glicogen). După: 0.5-1 kg de grăsime pe săptămână cu deficit caloric adecvat." },
      { q: "Este keto sigur pe termen lung?", a: "Keto pe termen lung (2+ ani) nu are suficiente date de siguranță. Cicluri de 2-3 luni urmate de o perioadă de reintroducere a carbohidraților este mai prudent pentru majoritatea persoanelor." },
      { q: "Pot face sport pe keto?", a: "Da, după adaptarea keto (4-8 săptămâni), performanța în eforturi de anduranță poate fi comparabilă. Sporturile explosive (haltere, sprint) pot suferi datorită absenței glucozei rapide." }
    ],
    relatedSlugs: ["keto-incepatori", "slabire-low-carb", "keto-pentru-femei"],
    ctaText: "Calculează-ți Macro-urile Keto", ctaLink: "/calculator"
  },
  {
    slug: "slabire-low-carb",
    objective: "slabire", objectiveName: "Slăbit Low-Carb",
    profile: "low-carb", profileName: "Low-Carb",
    title: "Dietă Low-Carb pentru Slăbit — Plan Alimentar | GymBro.ro",
    metaDescription: "Plan alimentar low-carb pentru slăbit. Mai flexibil decât keto, sub 100g carbohidrați pe zi pentru a pierde grăsime fără a intra în cetoză strictă.",
    h1: "Dietă Low-Carb pentru Slăbit",
    intro: "Low-carb este mai flexibil decât keto — cu 50-100g carbohidrați pe zi, reduci insulina, controlezi glicemia și slăbești eficient fără a intra în cetoză strictă. Poți mânca mai multă varietate și e mai ușor de menținut social.",
    calories: { min: 1500, max: 1800 },
    macros: { protein: "35%", carbs: "20%", fat: "45%" },
    meals: [
      { name: "Micul dejun", description: "Ouă scramble cu avocado, somon afumat și ceapă roșie", calories: 420 },
      { name: "Gustare dimineață", description: "Nuci mixte (30g) și o mână de afine", calories: 160 },
      { name: "Prânz", description: "Piept de pui cu salată de varză, morcov, maioneză light", calories: 450 },
      { name: "Gustare după-amiază", description: "Ouă fierte cu sare și piper", calories: 120 },
      { name: "Cină", description: "Carne tocată de vită cu legume sautée și cartofi dulci (porție mică)", calories: 480 }
    ],
    foods: ["Piept de pui", "Carne de vită", "Ouă", "Somon afumat", "Avocado", "Nuci", "Afine", "Varză", "Spanac", "Broccoli", "Cartofi dulci (porții mici)", "Brânzeturi"],
    avoid: ["Pâine albă", "Orez alb și paste", "Zahăr", "Sucuri", "Biscuiți și prăjituri", "Cereale din comerț"],
    tips: [
      "Sub 100g carbohidrați pe zi — numără dar nu fi obsesiv ca la keto",
      "Alege carbohidrați de calitate: legume, fructe de pădure, leguminoase în loc de cereale rafinate",
      "Proteina ridicată + grăsimi sănătoase = sațietate bună și pofte controlate",
      "Low-carb funcționează excelent pentru cei cu rezistență la insulină sau diabet tip 2",
      "Reintroduceți carbohidrați complex treptat dacă aveți performanță sportivă mai slabă"
    ],
    faqs: [
      { q: "Cât de repede funcționează low-carb?", a: "Primele 1-2 săptămâni: pierdere rapidă de 1-3 kg (apă și glicogen). Ulterior, ritm stabil de 0.5-1 kg/săptămână cu deficit caloric menținut." },
      { q: "Low-carb vs keto — ce aleg?", a: "Dacă vrei mai multă flexibilitate și poți funcționa cu 50-100g carbohidrați, low-carb. Dacă vrei efecte metabolice maxime și control strict al insulinei, keto strict (sub 20-50g)." },
      { q: "Pot mânca fructe pe low-carb?", a: "Da! Fructele de pădure (căpșuni, afine, mure) sunt low-carb și excelente. Fructele cu zahăr mai mult (banane, struguri, mango) sunt de evitat sau limitat." }
    ],
    relatedSlugs: ["slabire-keto", "keto-low-carb", "slabire-proteica"],
    ctaText: "Calculează-ți Macro-urile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-mediteraneana",
    objective: "slabire", objectiveName: "Slăbit Mediteranean",
    profile: "mediteraneana", profileName: "Dieta Mediteraneană",
    title: "Dieta Mediteraneană pentru Slăbit — Plan Complet | GymBro.ro",
    metaDescription: "Slăbește cu dieta mediteraneană: ulei de măsline, pește, legume și vin roșu cu moderație. Cea mai studiată dietă pentru longevitate și pierdere de grăsime.",
    h1: "Dieta Mediteraneană pentru Slăbit",
    intro: "Dieta mediteraneană este consecvent clasata ca cea mai sănătoasă dietă din lume de experți în nutriție. Nu este o dietă restrictivă, ci un stil de viață bazat pe pește, legume, ulei de măsline și plăcerea meselor în familie. Slăbești gradualist dar sustenabil.",
    calories: { min: 1600, max: 2000 },
    macros: { protein: "20%", carbs: "50%", fat: "30%" },
    meals: [
      { name: "Micul dejun", description: "Pâine integrală cu ulei de măsline, roșii și brânză feta", calories: 320 },
      { name: "Gustare dimineață", description: "O mână de nuci amestecate și o portocală", calories: 150 },
      { name: "Prânz", description: "Doradă la grătar cu legume mediteraneene și tabouleh", calories: 480 },
      { name: "Gustare după-amiază", description: "Hummus cu lipie integrală și legume crude", calories: 200 },
      { name: "Cină", description: "Spanakopita (plăcintă cu spanac și feta) cu salată grecească", calories: 380 }
    ],
    foods: ["Ulei de măsline extra virgin", "Doradă", "Ton", "Năut", "Linte", "Roșii", "Castraveți", "Brânză feta", "Măsline", "Pâine integrală", "Nuci", "Portocale"],
    avoid: ["Ulei de palmier", "Carne procesată", "Zahăr adăugat", "Băuturi carbogazoase", "Alimente ultra-procesate", "Grăsimi trans"],
    tips: [
      "Folosește ulei de măsline extra virgin ca principal ulei de gătit",
      "Mănâncă pește de 2-3 ori pe săptămână — bogat în Omega-3 antiinflamator",
      "Vinul roșu (1 pahar) cu masa de seară este compatibil — nu depăși această cantitate",
      "Mâncatul lent și în familie reduce supraalimentarea cu 20-30%",
      "Fructele și nucile sunt gustările ideale în loc de procesate"
    ],
    faqs: [
      { q: "Pot mânca paste pe dieta mediteraneană?", a: "Da! Pastele al dente (nu prea fierte) au un indice glicemic mai mic. Porțiile moderate (80-100g uscate) cu sos de roșii și pești/legume sunt perfect mediteraneene." },
      { q: "Dieta mediteraneană ajută la colesterol?", a: "Absolut. Studii extinse arată că reduce LDL (colesterolul rău) și crește HDL (cel bun) datorită grăsimilor mononesaturate din ulei de măsline și Omega-3 din pești." },
      { q: "Câte zile până văd rezultate?", a: "Primele schimbări în energie și digestie apar în 2-3 săptămâni. Pierderea vizibilă de grăsime: 4-8 săptămâni cu deficit caloric menținut." }
    ],
    relatedSlugs: ["mediteraneana", "slabire-vegana", "slabire-50-ani"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-proteica",
    objective: "slabire", objectiveName: "Slăbit cu Proteine Ridicate",
    profile: "proteica", profileName: "Dietă Hiperproteică",
    title: "Dietă Hiperproteică pentru Slăbit — Plan Alimentar | GymBro.ro",
    metaDescription: "Plan alimentar bogat în proteine pentru slăbit. Proteina ridicată păstrează masa musculară, reduce foamea și accelerează metabolismul în deficit caloric.",
    h1: "Dietă Hiperproteică pentru Slăbit",
    intro: "Proteina este cel mai satiant macronutrient și are cel mai mare efect termic al alimentelor — corpul arde 20-30% din caloriile proteice pentru a le digera. Această dietă pune proteina în centru pentru a maximiza pierderea de grăsime și a minimiza pierderea musculară.",
    calories: { min: 1500, max: 1800 },
    macros: { protein: "40%", carbs: "35%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "Omletă cu 4 albușuri + 2 ouă întregi cu spanac și brânză cottage", calories: 350 },
      { name: "Gustare dimineață", description: "Shake proteic (30g proteină) cu apă sau lapte degresat", calories: 150 },
      { name: "Prânz", description: "200g piept de pui la grătar cu orez brun și broccoli", calories: 520 },
      { name: "Gustare după-amiază", description: "150g brânză de vaci cu nuci și 1 măr", calories: 200 },
      { name: "Cină", description: "200g somon la cuptor cu salată verde și roșii cherry", calories: 420 }
    ],
    foods: ["Piept de pui", "Albuș de ou", "Somon", "Ton", "Brânză de vaci", "Brânză cottage", "Proteină din zer", "Orez brun", "Broccoli", "Spanac", "Roșii cherry", "Iaurt grecesc 0%"],
    avoid: ["Grăsimi saturate în exces", "Alcool", "Zahăr", "Produse de patiserie", "Carne procesată", "Fast food"],
    tips: [
      "Vizează 2-2.2g proteine per kg de greutate corporală pentru slăbit optim",
      "Distribuie proteina uniform la toate mesele (30-50g per masă)",
      "Proteina lichidă (shake-uri) nu este la fel de satianta ca proteina solidă — prioritizează alimentele întregi",
      "Rinichii sănătoși tolerează perfect aportul ridicat de proteine — mituri dezminite clinic",
      "Înlocuiește gustările cu snacks proteice: ouă fierte, brânzetele slabe, carne jerky"
    ],
    faqs: [
      { q: "Câtă proteină e prea multă?", a: "Pentru adulți sănătoși, până la 3g/kg corp nu prezintă riscuri renale. Scopul realist de 2-2.5g/kg este perfect sigur și eficient pentru slăbit." },
      { q: "Shake-urile proteice ajută la slăbit?", a: "Sunt un instrument, nu o soluție magică. Ajută la atingerea targetului proteic zilnic ușor și rapid. Nu înlocuiesc mesele complete dar completează dieta eficient." },
      { q: "Carnea roșie este permisă pe dieta hiperproteică?", a: "Da, cu moderație. Carne de vită slabă (mușchi, antricot fără grăsime) de 2-3 ori pe săptămână este excelentă. Evitați procesatele (mezeluri, cârnați)." }
    ],
    relatedSlugs: ["slabire-avansati", "masa-proteica", "slabire-barbati"],
    ctaText: "Calculează-ți Proteina", ctaLink: "/calculator"
  },
  {
    slug: "slabire-pentru-sportivi",
    objective: "slabire", objectiveName: "Slăbit pentru Sportivi",
    profile: "sportivi", profileName: "Pentru Sportivi",
    title: "Dietă Slăbit pentru Sportivi Activi — Plan Alimentar | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru sportivi. Deficit caloric inteligent care păstrează performanța, energia și masa musculară în timp ce elimini grăsimea.",
    h1: "Dietă de Slăbit pentru Sportivi",
    intro: "Slăbitul pentru sportivi este o balanță delicată: ai nevoie de deficit caloric pentru a pierde grăsime, dar ai și nevoie de energie suficientă pentru antrenamente și recuperare. Această dietă aplică periodizarea nutrițională — mai mulți carbohidrați în zilele de antrenament, mai puțini în zilele de recuperare.",
    calories: { min: 1800, max: 2400 },
    macros: { protein: "30%", carbs: "45%", fat: "25%" },
    meals: [
      { name: "Pre-workout (1-2h înainte)", description: "Banana cu unt de arahide și ovăz rapid", calories: 280 },
      { name: "Post-workout (30 min după)", description: "Shake proteic cu banană și lapte degresat", calories: 300 },
      { name: "Prânz", description: "Pui cu orez brun, fasole neagră și legume", calories: 580 },
      { name: "Gustare după-amiază", description: "Iaurt grecesc cu granola low-sugar și căpșuni", calories: 220 },
      { name: "Cină", description: "Somon cu quinoa și sparanghel la cuptor", calories: 480 }
    ],
    foods: ["Piept de pui", "Somon", "Orez brun", "Fasole neagră", "Banane", "Ovăz", "Iaurt grecesc", "Ouă", "Quinoa", "Cartofi dulci", "Sparanghel", "Căpșuni"],
    avoid: ["Alcool", "Fast food", "Zahăr înainte de antrenament", "Mese grele pre-workout", "Grăsimi în exces post-workout"],
    tips: [
      "Carbohidrați mai mulți în zilele cu antrenament intens, mai puțini în zilele de recuperare",
      "Nu face deficit caloric în ziua de competiție sau testare a performanței",
      "Post-workout window: 30g proteină + 60-80g carbohidrați rapid în 30 de minute",
      "Hidratarea este performanță: 400-600ml apă în 2h înainte de antrenament",
      "Monitorizează performanța — dacă scade dramatic, crești aportul caloric temporar"
    ],
    faqs: [
      { q: "Cât de mare poate fi deficitul caloric la sportivi?", a: "Maximum 300-400 kcal deficit pe zi pentru sportivi activi. Mai mult compromite performanța și riscă pierderea musculară." },
      { q: "Trebuie să iau creatina când slăbesc?", a: "Creatina este benefică inclusiv în faza de slăbit — ajută la menținerea puterii și masei musculare. 3-5g pe zi, zilnic, fără cycling." },
      { q: "Cum slăbesc și mențin performanța?", a: "Periodizare nutrițională: deficit moderat în zilele ușoare, alimentație de menținere sau surplus mic în zilele cu antrenament intens. Proteina ridicată întotdeauna." }
    ],
    relatedSlugs: ["slabire-la-sala", "definire-pentru-sportivi", "masa-pentru-sportivi"],
    ctaText: "Calculează-ți Caloriile Sport", ctaLink: "/calculator"
  },
  {
    slug: "slabire-intermittent-fasting",
    objective: "slabire", objectiveName: "Slăbit prin Post Intermitent",
    profile: "intermittent-fasting", profileName: "Intermittent Fasting",
    title: "Dietă Intermittent Fasting pentru Slăbit — Ghid 16:8 | GymBro.ro",
    metaDescription: "Ghid complet de intermittent fasting 16:8 pentru slăbit. Ferestre de alimentație, ce poți mânca, beneficii metabolice și plan alimentar practic.",
    h1: "Intermittent Fasting pentru Slăbit — Ghid 16:8",
    intro: "Postul intermitent 16:8 înseamnă mâncat în 8 ore și post 16 ore. Nu contează CÂND mănânci, ci ce mănânci în acea fereastră. Beneficii: sensibilitate la insulină îmbunătățită, autofagie (curățarea celulelor), control natural al caloriilor și simplitate.",
    calories: { min: 1500, max: 1800 },
    macros: { protein: "35%", carbs: "40%", fat: "25%" },
    meals: [
      { name: "Prima masă (12:00)", description: "Masă mare: pui la grătar cu orez brun, legume și salată", calories: 600 },
      { name: "A doua masă (15:00)", description: "Gustare: nuci, fructe și iaurt grecesc", calories: 350 },
      { name: "A treia masă (19:00)", description: "Ultima masă: somon sau carne slabă cu legume la cuptor", calories: 550 },
      { name: "Post (20:00 - 12:00)", description: "Apă, cafea neagră, ceai fără zahăr — nu se consuma calorii", calories: 0 },
      { name: "Hidratare", description: "2-3L apă pe zi, distribuiți în tot intervalul de post și alimentație", calories: 0 }
    ],
    foods: ["Piept de pui", "Somon", "Ouă", "Orez brun", "Cartofi dulci", "Broccoli", "Avocado", "Nuci", "Afine", "Leguminoase", "Iaurt grecesc", "Spanac"],
    avoid: ["Calorii în fereastra de post (lapte în cafea, gumă cu zahăr)", "Alimentele procesate în fereastra de mâncat", "Alcool", "Zahăr", "Mese de compensare excesivă în fereastra de mâncat"],
    tips: [
      "Programul 12:00-20:00 este cel mai populat — sari peste micul dejun, mănânci prânz și cină",
      "Cafeaua neagră în dimineața nu rupe postul și reduce foamea",
      "Primele 1-2 săptămâni pot fi dificile — foamea matinală se adaptează rapid",
      "IF nu este magic — tot trebuie un deficit caloric în fereastra de mâncat",
      "Antrenamentele dimineața (în post) stimulează arderea grăsimilor pentru cei adaptați"
    ],
    faqs: [
      { q: "Ce pot consuma în fereastra de post?", a: "Apă (plată sau minerală), cafea neagră fără zahăr sau lapte, ceai verde sau negru fără zahăr, electroliți fără calorii. Nimic altceva dacă vrei să menții starea de post." },
      { q: "Postul intermitent funcționează fără dietă?", a: "Parțial. Reduce natural aportul caloric prin limitarea timpului de mâncat, dar dacă compensezi cu mâncat excesiv în fereastra de 8 ore, nu slăbești." },
      { q: "Este sigur pentru toată lumea?", a: "Nu pentru: femei însărcinate, persoane cu tulburări alimentare, diabetici pe insulină fără supraveghere medicală, adolescenți. Consultați medicul dacă aveți afecțiuni cronice." }
    ],
    relatedSlugs: ["slabire-avansati", "slabire-barbati", "keto-incepatori"],
    ctaText: "Calculează-ți Fereastra Calorică", ctaLink: "/calculator"
  },
  {
    slug: "slabire-sustenabila",
    objective: "slabire", objectiveName: "Slăbit Sustenabil",
    profile: "sustenabila", profileName: "Sustenabil pe Termen Lung",
    title: "Dietă Sustenabilă pentru Slăbit — Fără Yo-Yo | GymBro.ro",
    metaDescription: "Plan alimentar sustenabil pentru slăbit permanent. Fără diete crash, fără interdicții extreme. Schimbări de stil de viață care funcționează pe termen lung.",
    h1: "Dietă Sustenabilă pentru Slăbit — Fără Efect Yo-Yo",
    intro: "95% din cei care slăbesc rapid revin la greutatea inițială în 1-5 ani. Motivul: diete nesustenabile care nu pot fi menținute. Această abordare se bazează pe schimbări graduale, regula 80/20 și construirea de obiceiuri sănătoase permanente.",
    calories: { min: 1600, max: 2000 },
    macros: { protein: "30%", carbs: "45%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "Ovăz cu lapte, fructe de sezon și o mână de nuci", calories: 380 },
      { name: "Gustare", description: "Fruct proaspăt sau iaurt", calories: 100 },
      { name: "Prânz", description: "Masă echilibrată: proteină + carbohidrat + legume (1/2 farfurie legume)", calories: 500 },
      { name: "Gustare după-amiază", description: "Nuci sau brânzetele slabe cu un fruct", calories: 150 },
      { name: "Cină", description: "Proteină cu legume, carbohidrat mai mic", calories: 400 }
    ],
    foods: ["Oricare aliment natural, neprocesate", "Ovăz", "Orez brun", "Cartofi", "Toate legumele", "Toate fructele", "Proteine slabe", "Leguminoase", "Nuci", "Ulei de măsline", "Lactate naturale"],
    avoid: ["Diete crash sub 1200 kcal", "Eliminarea completă a alimentelor preferate", "Suplimente magice", "Detoxuri", "Diete de 7 zile", "Reguli rigide fără flexibilitate"],
    tips: [
      "Regula 80/20: mănâncă sănătos 80% din timp, bucură-te de mâncarea preferată 20%",
      "Un cheat meal pe săptămână nu-ți strică progresul — 1 masă din 21 este 5%",
      "Construiește obiceiuri mici: un pas la un moment dat, nu 10 schimbări simultan",
      "Cântăreste-te o dată pe săptămână, dimineața, la aceeași oră — nu zilnic",
      "Focusează-te pe performanță (cât de bine te simți, cât de mult poți mișca) nu doar pe cântar"
    ],
    faqs: [
      { q: "Cât ar trebui să slăbesc pentru a fi sustenabil?", a: "0.5 kg pe săptămână sau 2 kg pe lună este ritmul optim pentru pierdere permanentă de grăsime, cu minimizarea yo-yo-ului." },
      { q: "Ce fac când am o zi/săptămână proastă?", a: "Nimic special. Revii la obiceiuri normale a doua zi. Un weekend rău nu strică luna. Consistența pe termen lung bate perfecțiunea sporadică." },
      { q: "Cât durează să adopt un stil de viață sănătos?", a: "Studiile arată că formarea unui obicei durează 66 de zile în medie (nu 21 cum se crede). Primele 3 luni sunt critice — după aceea devine natural." }
    ],
    relatedSlugs: ["slabire-incepatori", "slabire-mediteraneana", "echilibrata"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-rapida",
    objective: "slabire", objectiveName: "Slăbit Rapid",
    profile: "rapida", profileName: "Rapid (Termen Scurt)",
    title: "Dietă Slăbit Rapid — Pierde 5 kg în 30 de Zile | GymBro.ro",
    metaDescription: "Plan de slăbit rapid pentru evenimente speciale. Deficit caloric agresiv pe termen scurt, cu protecția masei musculare și reintroducere caloriică planificată.",
    h1: "Dietă de Slăbit Rapid — 5 kg în 30 de Zile",
    intro: "Ai un eveniment important în 4 săptămâni? Slăbitul rapid este posibil cu un deficit agresiv bine planificat. Atenție: aceasta NU este o dietă pentru tot restul vieții — este un sprint de 4 săptămâni urmat obligatoriu de o perioadă de menținere.",
    calories: { min: 1200, max: 1500 },
    macros: { protein: "40%", carbs: "35%", fat: "25%" },
    meals: [
      { name: "Micul dejun", description: "Ouă albe (5) cu spanac și roșii + cafea fără zahăr", calories: 250 },
      { name: "Prânz", description: "Salată mare cu pui la grătar, ton sau somon", calories: 380 },
      { name: "Gustare", description: "Proteine shake cu apă + nuci (15g)", calories: 180 },
      { name: "Cina", description: "Piept de pui sau pește cu legume la abur (fără ulei)", calories: 350 },
      { name: "Hidratare", description: "3L apă, ceai verde, cafea fără zahăr", calories: 0 }
    ],
    foods: ["Albuș de ou", "Piept de pui fiert/la grătar", "Somon", "Ton", "Broccoli", "Spanac", "Castraveți", "Ardei gras", "Roșii", "Cafea neagră", "Ceai verde", "Lămâie"],
    avoid: ["Carbohidrați rafinați", "Zahăr", "Alcool", "Grăsimi saturate", "Lapte și lactate grase", "Sosuri și dressinguri calorice"],
    tips: [
      "Deficit de 700-1000 kcal pe zi pentru pierdere de 0.7-1 kg/săptămână",
      "Proteina ridicată (minim 2g/kg) protejează masa musculară în deficit agresiv",
      "Nu depăși 4-6 săptămâni cu deficit atât de agresiv — crește riscul de yo-yo",
      "Adaugă cardio zilnic: 30-45 minute mers rapid sau HIIT de 20 minute",
      "Cântărește-te zilnic dimineața și fă media săptămânală pentru a ignora fluctuațiile de apă"
    ],
    faqs: [
      { q: "Este sigur să slăbesc 5 kg în 30 de zile?", a: "Depinde. 5 kg includ apă, glicogen și grăsime. Pierdere realistă de grăsime: 2-3 kg, restul apă. Cu protocoale corecte este sigur pentru oameni sănătoși pe termen scurt." },
      { q: "Ce fac după 30 de zile?", a: "Obligatoriu: creșteți caloriile treptat la TDEE în 2-3 săptămâni pentru a preveni rebound-ul. Nu reveniți brusc la mâncatul normal." },
      { q: "Pierderea de apă contează?", a: "Vizual și pe cântar da, dar este temporară. Dacă revii la carbohidrați normali, 1-2 kg vor reveni instant (glicogen + apă). Este normal și nu înseamnă eșec." }
    ],
    relatedSlugs: ["slabire-intermittent-fasting", "slabire-keto", "slabire-proteica"],
    ctaText: "Calculează-ți Deficitul", ctaLink: "/calculator"
  },
  {
    slug: "slabire-acasa",
    objective: "slabire", objectiveName: "Slăbit Acasă",
    profile: "acasa", profileName: "Acasă (Fără Sală)",
    title: "Dietă Slăbit Acasă — Fără Sală, Fără Scuze | GymBro.ro",
    metaDescription: "Plan de slăbit complet acasă — nutriție optimă și antrenamente fără echipament. Slăbești eficient fără abonament la sală.",
    h1: "Dietă de Slăbit Acasă — Fără Echipament",
    intro: "Slăbitul acasă este la fel de eficient ca la sală, cu nutriție corectă și antrenamente cu greutatea corpului. Această dietă este proiectată pentru viața ocupată de acasă — rețete simple, gătit eficient și snacks inteligente pentru ziua de lucru de acasă.",
    calories: { min: 1500, max: 1800 },
    macros: { protein: "30%", carbs: "45%", fat: "25%" },
    meals: [
      { name: "Micul dejun (5 min)", description: "Ouă fierte + toast integral + cafea", calories: 320 },
      { name: "Gustare dimineață", description: "Fruct + brânză de vaci", calories: 140 },
      { name: "Prânz (15 min prep)", description: "Salată cu ton din conservă, legume și ulei de măsline", calories: 400 },
      { name: "Gustare după-amiază", description: "Nuci + ceai verde", calories: 120 },
      { name: "Cină (20 min prep)", description: "Orez brun cu pui la tigaie și broccoli congelat la microunde", calories: 450 }
    ],
    foods: ["Ton conservă", "Ouă", "Pui congelat", "Orez brun", "Ovăz", "Conserve leguminoase", "Legume congelate", "Brânză de vaci", "Nuci", "Fructe de sezon", "Ulei de măsline", "Iaurt"],
    avoid: ["Livrări de mâncare prea frecvente", "Gustări nesănătoase la birou de acasă", "Chips-uri", "Biscuiți", "Sucuri", "Mâncat în fața ecranului (mănânci mai mult)"],
    tips: [
      "Gătești în weekend pentru toată săptămâna — 2h de prep = 5 zile de mâncare sănătoasă",
      "Păstrează numai alimente sănătoase în casă — ce nu există, nu tentează",
      "Antrenamente acasă: 3x30 min body-weight (flotări, genuflexiuni, planke)",
      "Schimbă locul de muncă (birou) de locul de mâncat — prevenire mâncat mindless",
      "Apa pe birou tot timpul — reduce confuzia foame/sete"
    ],
    faqs: [
      { q: "Pot slăbi fără sală, doar cu dietă?", a: "Da! 70-80% din pierderea de grăsime vine din dietă. Adaugă mersul pe jos 30-45 min zilnic și exerciții cu greutatea corpului pentru rezultate mai rapide." },
      { q: "Ce antrenamente pot face acasă?", a: "Circuit training cu greutatea corpului: 10 flotări, 20 genuflexiuni, 30 sec planck, 20 reverse lunges, 10 burpees. 3 runde, 30-40 minute total." },
      { q: "Cum evit gustele proaste cand lucrez de acasă?", a: "Pregătisți snacks sănătoase în avans (nuci, legume tăiate, iaurt). Mâncați la masă, nu la birou. Beți apă între mese. Nu păstrați biscuiți sau chips în casă." }
    ],
    relatedSlugs: ["slabire-incepatori", "slabire-pentru-studenti", "slabire-pentru-birou"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-la-sala",
    objective: "slabire", objectiveName: "Slăbit la Sală",
    profile: "la-sala", profileName: "Antrenament la Sală",
    title: "Dietă Slăbit la Sală — Nutriție pentru Ardere Maximă | GymBro.ro",
    metaDescription: "Plan alimentar optimizat pentru slăbit cu antrenamente la sală. Pre și post-workout nutrition, recuperare și strategii pentru maximizarea arderilor.",
    h1: "Dietă de Slăbit la Sală — Nutriție Optimă",
    intro: "Antrenamentele la sală multiplică eficiența dietei de slăbit. Această abordare sincronizează nutriția cu programul de antrenament — energie pentru performanță și recuperare, dar și deficit caloric pentru arderea grăsimii.",
    calories: { min: 1700, max: 2100 },
    macros: { protein: "35%", carbs: "40%", fat: "25%" },
    meals: [
      { name: "Pre-workout (1.5h înainte)", description: "Ovăz cu proteină sau pâine integrală cu unt de arahide", calories: 380 },
      { name: "Post-workout (imediat după)", description: "Shake proteic + banană", calories: 280 },
      { name: "Prânz", description: "Orez brun cu piept de pui și legume colorate", calories: 560 },
      { name: "Gustare după-amiază", description: "Brânza de vaci cu fructe de pădure", calories: 180 },
      { name: "Cina", description: "Cod sau somon cu quinoa și salată de avocado", calories: 450 }
    ],
    foods: ["Ovăz", "Pâine integrală", "Unt de arahide", "Piept de pui", "Orez brun", "Banane", "Proteina din zer", "Ouă", "Somon", "Brânza de vaci", "Quinoa", "Avocado"],
    avoid: ["Mâncate grele pre-workout (2h)", "Alcool post-workout", "Fast food", "Zahăr simplu post-workout (dacă nu ești în faza de forță)", "Sare în exces care retenționează apă"],
    tips: [
      "Pre-workout: carbohidrați complecși + proteina moderată cu 1.5h înainte",
      "Post-workout (45 min): proteina rapidă + carbohidrați simpli pentru refacerea glicogenului",
      "Zilele de antrenament = mai mulți carbohidrați; zilele de repaus = mai puțini",
      "Recuperarea este la fel de importantă ca antrenamentul — dormi 7-8h",
      "Creatina 5g/zi îmbunătățește puterea și recuperarea chiar și în deficit caloric"
    ],
    faqs: [
      { q: "Câte zile pe săptămână ar trebui să merg la sală pentru slăbit?", a: "3-4 zile de antrenament cu greutăți + 2-3 sesiuni de cardio (separate sau combinate) este optim pentru pierderea de grăsime." },
      { q: "Ce e mai bun pentru slăbit: cardio sau greutăți?", a: "Greutățile construiesc masă musculară care arde calorii în repaus (metabolism mai ridicat). Cardioul arde calorii direct. Combinația e optimă: 3 zile forță + 2 zile cardio." },
      { q: "Ar trebui să fac cardio pe stomacul gol?", a: "Fasted cardio poate creste oxidarea grăsimilor ușor, dar studiile arată că diferența față de cardioul post-masă este minimă pe termen lung. Alegeți ce vă permite performanță mai bună." }
    ],
    relatedSlugs: ["slabire-pentru-sportivi", "slabire-barbati", "slabire-intermediari"],
    ctaText: "Calculează-ți Caloriile Sala", ctaLink: "/calculator"
  },
  {
    slug: "slabire-pentru-mame",
    objective: "slabire", objectiveName: "Slăbit Post-Natal",
    profile: "mame", profileName: "Pentru Mame",
    title: "Dietă Slăbit Post-Natal pentru Mame — Plan Alimentar | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru mame după naștere. Siguranță pentru alăptare, revenire la greutatea ideală și energie pentru îngrijirea bebelușului.",
    h1: "Dietă de Slăbit pentru Mame după Naștere",
    intro: "Corpul tău a trecut prin schimbări extraordinare în sarcină. Revenirea la greutatea ideală după naștere necesită răbdare și nutriție inteligentă. Această dietă respectă nevoile specifice ale post-partumului — mai ales dacă alăptezi — și prioritizează sănătatea ta pe termen lung.",
    calories: { min: 1600, max: 2000 },
    macros: { protein: "30%", carbs: "45%", fat: "25%" },
    meals: [
      { name: "Micul dejun (rapid)", description: "Ovăz peste noapte cu fructe și semințe de in — gata dimineața", calories: 380 },
      { name: "Gustare (în timp ce bebe doarme)", description: "Iaurt grecesc cu nuci și miere", calories: 200 },
      { name: "Prânz", description: "Supă de pui cu legume și fidea — ușor de gătit", calories: 420 },
      { name: "Gustare", description: "Fructe proaspete + brânza de vaci", calories: 150 },
      { name: "Cina (când vine partenerul)", description: "Somon cu legume la cuptor și orez brun", calories: 450 }
    ],
    foods: ["Somon (Omega-3 pentru lapte matern)", "Ovăz (galactogouge)", "Brânza de vaci", "Spanac (fier)", "Semințe de in", "Linte (fier, proteine)", "Nuci", "Banane", "Ouă", "Lapte integral", "Cartofi dulci", "Iaurt grecesc"],
    avoid: ["Alcool (atenție la alăptare)", "Prea mult cafeina (max 200mg/zi în alăptare)", "Diete crash", "Suplimente neaprobate", "Fructe de mare crude", "Brânzeturi moi nepasteurizate"],
    tips: [
      "Dacă alăptezi, adaugă 400-500 kcal față de necesarul normal de slăbit",
      "Focusează-te pe calitatea alimentelor, nu pe restricție calorică agresivă",
      "Odihneste-te când poți — privarea de somn crește pofta de mâncat",
      "Plimbările cu căruciorul 30-45 min zilnic sunt un cardio excelent și non-stresant",
      "Cere ajutor — nu trebuie să faci totul singură, inclusiv gătit"
    ],
    faqs: [
      { q: "Când pot începe dieta după naștere?", a: "Minimum 6 săptămâni după naștere naturală, 8-12 săptămâni după cezariană. Dacă alăptezi, nu intra în deficit până la 3 luni post-partum." },
      { q: "Slăbitul în alăptare este sigur?", a: "Da, cu un deficit moderat de 300-400 kcal și calitate nutrițională ridicată. Evitați deficite mai mari care reduc producția de lapte și epuizează mamele." },
      { q: "Burtica post-partum dispare prin dietă?", a: "Burtica post-partum are 2 componente: grăsimea care slăbeste prin dietă și diastaza (separarea mușchilor abdominali) care necesită exerciții specifice, nu dietă." }
    ],
    relatedSlugs: ["slabire-femei", "slabire-30-ani", "slabire-acasa"],
    ctaText: "Calculează-ți Caloriile Post-Natal", ctaLink: "/calculator"
  },
  {
    slug: "slabire-pentru-studenti",
    objective: "slabire", objectiveName: "Slăbit pentru Studenți",
    profile: "studenti", profileName: "Pentru Studenți",
    title: "Dietă Slăbit pentru Studenți — Ieftin și Eficient | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru studenți cu buget limitat. Alimente ieftine, rețete rapide și strategii de slăbit fără să dai faliment.",
    h1: "Dietă de Slăbit pentru Studenți — Buget Mic",
    intro: "Ești student, ai bani puțini, timp și mai puțin și vrei totuși să slăbești? Se poate! Aceasta dietă se bazează pe cele mai ieftine și mai nutritive alimente disponibile — ouă, leguminoase, ovăz, orez și legume congelate — la un cost de 3-5€ pe zi.",
    calories: { min: 1500, max: 1800 },
    macros: { protein: "28%", carbs: "50%", fat: "22%" },
    meals: [
      { name: "Micul dejun (1€/porție)", description: "Ovăz cu apă sau lapte, banană și 1 lingură unt de arahide", calories: 340 },
      { name: "Gustare", description: "1-2 ouă fierte tari", calories: 120 },
      { name: "Prânz (1.5€/porție)", description: "Fasole roșie cu orez brun și legume congelate la tigaie", calories: 430 },
      { name: "Gustare", description: "Morcovi și hummus din conservă", calories: 130 },
      { name: "Cina (1.5€/porție)", description: "Ouă scramble cu cartofi fierți și salată verde", calories: 400 }
    ],
    foods: ["Ouă (sursa ieftina de proteina)", "Fasole roșie/albă din conservă", "Năut", "Linte", "Ovăz", "Orez brun", "Cartofi", "Morcovi", "Varza", "Banane", "Legume congelate", "Ulei de floarea soarelui"],
    avoid: ["Takeaway zilnic", "Băuturi energizante", "Fast food la cantina", "Gustări din automate", "Băuturi alcoolice (calorii + bani)", "Cereale colorate cu zahăr"],
    tips: [
      "Gătești o oală mare de leguminoase duminica — mâncare pentru 3-4 zile cu ~3€",
      "Ouăle (6-pack ~3€) = 6 mese proteice — cel mai ieftin aliment proteic",
      "Legumele congelate costă mai puțin decât proaspete, sunt la fel de nutritive",
      "Apa de la robinet sau sticle mari de 5L vs apa îmbuteliata mică",
      "Invata 5 rețete simple și găteste-le pe rotație — nu ai nevoie de varietate infinită"
    ],
    faqs: [
      { q: "Pot slăbi cu 5€ pe zi pentru mâncare?", a: "Da! Baza dietei studentești ieftine: ouă (3€/12 buc), fasole/linte (1€/conservă), ovăz (2€/kg), orez (1€/kg), legume congelate (2€/kg). Aceste alimente costă puțin și hrănesc mult." },
      { q: "Cum fac față tentațiilor din cămin?", a: "Ai mereu în cameră nuci, fructe și brânza de vaci. Când vine foamea seara, ai o alternativă la chips-uri. Nu ține alimente tentante în cameră." },
      { q: "Mersul la cursuri ține loc de sport?", a: "Dacă mergi 6000-10000 pași pe zi la cursuri, ai un cardio decent. Adaugă 2-3 sesiuni de body-weight pe săptămână în cameră pentru rezultate mai bune." }
    ],
    relatedSlugs: ["slabire-acasa", "slabire-pe-buget", "slabire-incepatori"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-pentru-birou",
    objective: "slabire", objectiveName: "Slăbit la Birou",
    profile: "birou", profileName: "Pentru Birou",
    title: "Dietă Slăbit la Birou — Fără Foame, Fără Greșeli | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru persoane care lucrează la birou. Meniuri meal prep, snacks inteligente și strategii pentru a evita mâncatul emoțional.",
    h1: "Dietă de Slăbit la Birou",
    intro: "8 ore la birou, sedentarism involuntar, gustări tentante și stres constant — cocktailul perfect pentru îngrășat. Această dietă este proiectată special pentru job-ul de birou: mese planificate, snacks satianți și strategii pentru a rezista automatelor și comenzilor la birou.",
    calories: { min: 1500, max: 1800 },
    macros: { protein: "30%", carbs: "45%", fat: "25%" },
    meals: [
      { name: "Micul dejun acasă", description: "Overnight oats cu fructe de pădure și semințe de chia — gata din seara", calories: 350 },
      { name: "Prânz (meal prep)", description: "Salată mason jar: quinoa, pui, legume, dressing pe baza de ulei de măsline", calories: 480 },
      { name: "Gustare dimineată la birou", description: "Nuci (20g) + un fruct", calories: 120 },
      { name: "Gustare după-amiaza la birou", description: "Iaurt grecesc sau brânza de vaci", calories: 130 },
      { name: "Cina", description: "Masă ușoară: pește sau ou cu legume și carbohidrat complex", calories: 420 }
    ],
    foods: ["Quinoa", "Ouă", "Piept de pui", "Brânza de vaci", "Iaurt grecesc", "Nuci", "Fructe de pădure", "Legume crude tăiate", "Ovăz", "Hummus", "Ton conservă", "Avocado"],
    avoid: ["Automatul de la birou", "Pizza de birou", "Comenzi zilnice takeaway", "Cafele cu lapte și sirop", "Gustările de stres", "Sandvișuri de la magazin"],
    tips: [
      "Meal prep duminica — gătești prânzurile pentru toată săptămâna în 2h",
      "Ține la birou: nuci, migdale, conserve de ton — alternative la automat",
      "Sticla de apă pe birou vizibilă — reaminteș te să bei 8 pahare pe zi",
      "Plimbare de 10-15 minute la prânz — ruperea sedentarismului, nu negociabil",
      "Cafeaua neagră sau ceaiul fără zahăr sunt aliați în deficit caloric"
    ],
    faqs: [
      { q: "Cum evit mâncatul emoțional de stres la birou?", a: "Identifica triggerele (stres, plictiseală, oboseală). Când simți impulsul, bea un pahar de apă și fă o scurtă plimbare. Dacă încă vrei să mănânci, ia o gustare sănătoasă pregătită dinainte." },
      { q: "Prânzul la restaurant cu colegii sabotează dieta?", a: "Nu dacă faci alegeri inteligente: salată cu proteina, supa, pui la grătar în loc de pizza. Limitați prânzurile la restaurant la 2-3x săptămână, nu zilnic." },
      { q: "Sedentarismul de la birou poate fi compensat?", a: "Parțial. Standing desk, plimbări scurte la fiecare oră, mers pe jos la muncă/spre muncă și antrenament după program compensează parțial, dar nu elimină riscurile sedentarismului extins." }
    ],
    relatedSlugs: ["slabire-acasa", "slabire-30-ani", "slabire-pentru-studenti"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-5-zile",
    objective: "slabire", objectiveName: "Plan Slăbit 5 Zile",
    profile: "5-zile", profileName: "Plan 5 Zile",
    title: "Plan Alimentar Slăbit 5 Zile — Meniu Detaliat | GymBro.ro",
    metaDescription: "Plan alimentar complet de slăbit pentru 5 zile. Meniu detaliat pentru luni-vineri cu liste de cumpărături și prep guide.",
    h1: "Plan Alimentar de Slăbit 5 Zile",
    intro: "Planul de 5 zile elimina nevoia de a decide zilnic ce mănânci. Totul este planificat de luni până vineri, cu lista de cumpărături și ghid de prep. Urmărești planul, numeri caloriile și rezultatele vin.",
    calories: { min: 1400, max: 1700 },
    macros: { protein: "32%", carbs: "45%", fat: "23%" },
    meals: [
      { name: "Ziua 1-2: Micul dejun", description: "Ouă cu avocado pe toast integral", calories: 360 },
      { name: "Ziua 1-2: Prânz", description: "Salată cu pui la grătar și quinoa", calories: 460 },
      { name: "Ziua 3-4: Micul dejun", description: "Ovăz cu fructe și iaurt", calories: 340 },
      { name: "Ziua 3-4: Prânz", description: "Supă cremă de legume cu pui", calories: 380 },
      { name: "Cina orice zi", description: "Proteina slabă (pui/pește) cu legume și carbohidrat complex", calories: 430 }
    ],
    foods: ["Ouă", "Avocado", "Pui", "Ton", "Somon", "Quinoa", "Ovăz", "Orez brun", "Broccoli", "Spanac", "Roșii", "Iaurt grecesc"],
    avoid: ["Fast food", "Zahăr", "Alcool", "Sucuri", "Alimente procesate", "Prăjeli"],
    tips: [
      "Duminica: faci toată prep-ul pentru săptămâna în 2-3 ore",
      "Gătești pui în vrac: 1.5kg pui la cuptor = 5 prânzuri",
      "Legumele congelate sunt mai ușor de folosit în plan — nu se strică",
      "Fiecare zi are cam 1500 kcal — ajustează porțiile dacă ai nevoie de mai mult sau mai puțin",
      "Weekendul: mănânci similar dar ai mai multă flexibilitate"
    ],
    faqs: [
      { q: "Pot repeta planul de 5 zile la nesfârșit?", a: "Da, poți urma același plan săptămânal. Adaugă varietate schimbând sursa de proteina (pui/pește/leguminoase) și legumele pentru a evita monotonia și a asigura diversitate nutrițională." },
      { q: "Ce fac în weekend în afara planului?", a: "Weekendul: mânâncă similar dar mai relaxat. Un cheat meal este ok, nu o zi întreagă de exces. Revenite la plan luni dimineața." },
      { q: "Planul de 5 zile este suficient pentru a slăbi?", a: "5 zile de deficit caloric + 2 zile de menținere sau deficite mici = deficit săptămânal de 3000-3500 kcal = aproximativ 0.5 kg pe săptămână." }
    ],
    relatedSlugs: ["slabire-7-zile", "slabire-acasa", "slabire-sustenabila"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },
  {
    slug: "slabire-7-zile",
    objective: "slabire", objectiveName: "Plan Slăbit 7 Zile",
    profile: "7-zile", profileName: "Plan 7 Zile",
    title: "Plan Alimentar Slăbit 7 Zile — Meniu Complet Săptămânal | GymBro.ro",
    metaDescription: "Plan alimentar de slăbit pentru o săptămână completă. Meniu zilnic detaliat de luni până duminică cu prep guide și liste de cumpărături.",
    h1: "Plan Alimentar de Slăbit 7 Zile — Săptămâna Completă",
    intro: "Planul de 7 zile te ghidează zi cu zi timp de o săptămână completă, eliminând incertitudinea și deciziile impulsive. Este proiectat să fie variat, satiant și sub caloriile de menținere — simplu de urmărit chiar și cu un program ocupat.",
    calories: { min: 1400, max: 1700 },
    macros: { protein: "32%", carbs: "45%", fat: "23%" },
    meals: [
      { name: "Luni-Miercuri: Micul dejun", description: "Smoothie proteic cu spanac, banana și proteina", calories: 320 },
      { name: "Joi-Duminica: Micul dejun", description: "Ouă fierte cu toast integral și avocado", calories: 370 },
      { name: "Prânz (orice zi)", description: "Proteina + carb complex + 2 mâini de legume", calories: 480 },
      { name: "Gustari", description: "Iaurt + nuci sau fructe + brânza", calories: 150 },
      { name: "Cina", description: "Proteina slabă + legume abundant + carb mic sau absent", calories: 400 }
    ],
    foods: ["Piept pui", "Somon", "Ton", "Ouă", "Spanac", "Broccoli", "Ovăz", "Orez brun", "Cartofi dulci", "Avocado", "Iaurt grecesc", "Nuci"],
    avoid: ["Alcool pe durata planului", "Fast food", "Zahăr", "Prăjeli", "Pâine albă", "Sucuri"],
    tips: [
      "Urmăriti planul 80% din timp — nu trebuie să fie perfect pentru a funcționa",
      "Dacă pierzi o zi, reiei a doua zi fără autopedepsire",
      "Fotografiaza mesele — vizualizarea te face mai conștient de ce mânânci",
      "La finalul săptămânii: cântăreste-te dimineata și nota progresul",
      "Evaluează ce a funcționat și ce nu — adaptează planul pentru săptămâna viitoare"
    ],
    faqs: [
      { q: "Cât slăbesc în 7 zile?", a: "Realist: 0.5-1 kg. Din care 200-400g grăsime reală și restul apă/glicogen. Nu vă așteptați la mai mult — transformarea corpului este un maraton, nu un sprint." },
      { q: "Ce fac dacă mi-e foame în planul de 7 zile?", a: "Bea un pahar de apă, așteaptă 15 minute. Dacă tot îți este foame, mărește porția de legume (aproape zero calorii, mult volum). Adaugă o proteina slabă (albuș de ou, ton)." },
      { q: "Pot adapt planul de 7 zile dacă sunt vegetarian?", a: "Da! Înlocuiești proteina animală cu tofu, tempeh, ouă, brânza, leguminoase. Caloric e similar, nutrițional similar dacă combini sursele proteice vegetale." }
    ],
    relatedSlugs: ["slabire-5-zile", "slabire-incepatori", "slabire-sustenabila"],
    ctaText: "Calculează-ți Caloriile", ctaLink: "/calculator"
  },

  // ===== MASA MUSCULARA (20) =====
  {
    slug: "masa-incepatori",
    objective: "masa", objectiveName: "Masă Musculară",
    profile: "incepatori", profileName: "Pentru Începători",
    title: "Dietă Masă Musculară Începători — Bulk Curat | GymBro.ro",
    metaDescription: "Plan alimentar pentru masă musculară pentru începători. Surplus caloric optim, macro-uri corecte și alimente pentru a pune masă musculară fără prea multă grăsime.",
    h1: "Dietă Masă Musculară pentru Începători",
    intro: "Ca începător la masă musculară, ai avantajul 'newbie gains' — corpul tău răspunde rapid la stimulii de antrenament și poate pune masă musculară chiar și cu un surplus caloric mic. Această dietă creează un surplus de 300-500 kcal peste TDEE pentru masă musculară curată.",
    calories: { min: 2500, max: 3000 },
    macros: { protein: "30%", carbs: "50%", fat: "20%" },
    meals: [
      { name: "Micul dejun", description: "4 ouă + 2 felii de pâine integrală + lapte + fructe", calories: 600 },
      { name: "Gustare dimineată", description: "Shake proteic cu lapte integral și banană", calories: 400 },
      { name: "Prânz", description: "200g pui cu 200g orez brun gătit și legume", calories: 650 },
      { name: "Pre-workout", description: "Banana cu unt de arahide", calories: 280 },
      { name: "Post-workout și cina", description: "Shake proteic + orez brun cu carne tocată și roșii", calories: 600 }
    ],
    foods: ["Piept de pui", "Ouă", "Lapte integral", "Orez brun", "Paste integrale", "Cartofi", "Banane", "Unt de arahide", "Carne tocată slabă", "Broccoli", "Avocado", "Proteina din zer"],
    avoid: ["Calorii goale (alcool, zaharuri)", "Mâncare junk food pentru 'calorie surplus'", "Grăsimi trans", "Mâncat excesiv fără a pune masă musculară"],
    tips: [
      "Surplus caloric de 300-500 kcal, nu 1000+ — mai puțin grăsime, mai mult mușchi",
      "Proteina: 1.6-2g per kg corp — pe asta nu o negocia",
      "Mănâncă la fiecare 3-4 ore pentru a maximiza sinteza proteică",
      "Antrenamentul de forță este 50% din ecuație — fără antrenamente, surplusul devine grăsime",
      "Urmăreste progresul la greutăți (nu doar la cântar) — dacă crești la bench, funcționează"
    ],
    faqs: [
      { q: "Câtă masă musculară pot pune ca începător pe lună?", a: "Un începător poate pune 1-2 kg de masă musculară pe lună în primele 6-12 luni. Dacă pui mai mult, e și grăsime. Dacă pui mai puțin, crești caloriile sau îmbunătățești antrenamentul." },
      { q: "Trebuie să mănânc mult grăsime pentru testosteron?", a: "Grăsimile sănătoase (20-25% din calorii) susțin producția hormonală. Sub 20% grăsimi poate reduce testosteronul. Surse: avocado, nuci, ulei de măsline, ouă." },
      { q: "Pot mânca paste și pâine la bulk?", a: "Absolut! La bulk ai nevoie de calorii și carbohidrați pentru energie și refacerea glicogenului. Pastele și pâinea integrală sunt excelente surse." }
    ],
    relatedSlugs: ["masa-intermediari", "masa-barbati", "masa-fara-suplimente"],
    ctaText: "Calculează-ți Surplusul Caloric", ctaLink: "/calculator"
  },
  {
    slug: "masa-intermediari",
    objective: "masa", objectiveName: "Masă Musculară",
    profile: "intermediari", profileName: "Nivel Intermediar",
    title: "Dietă Masă Musculară Intermediari — Bulk Optimizat | GymBro.ro",
    metaDescription: "Plan alimentar de masă musculară pentru intermediari. Nutriție periodizată, timing al nutrienților și strategii pentru a depăși platoul de creștere.",
    h1: "Dietă Masă Musculară — Nivel Intermediar",
    intro: "Ai pus deja câțiva kilograme de masă musculară și acum creșterea a încetinit? Asta e normal — 'newbie gains' s-au terminat. La nivel intermediar, nutriția trebuie să fie mai precisă: macro tracking, timing al carbohidraților și periodizare alimentară.",
    calories: { min: 2800, max: 3200 },
    macros: { protein: "30%", carbs: "50%", fat: "20%" },
    meals: [
      { name: "Micul dejun", description: "Ouă omletă + ovăz cu lapte + fructe + cafea", calories: 620 },
      { name: "Gustare dimineată", description: "Shake proteic + banana + 30g nuci", calories: 450 },
      { name: "Prânz", description: "250g piept de pui + 250g orez brun + salată generoasă", calories: 720 },
      { name: "Pre-workout (1h)", description: "Pâine integrală cu unt de arahide + cafea", calories: 320 },
      { name: "Post-workout + cina", description: "Shake proteic + orez cu carne de vită + legume", calories: 620 }
    ],
    foods: ["Piept de pui", "Carne de vită slabă", "Ouă", "Proteina din zer", "Orez brun", "Ovăz", "Cartofi", "Banane", "Lapte", "Unt de arahide", "Broccoli", "Spanac"],
    avoid: ["Alcool (inhibă sinteza proteică)", "Exces de grăsime saturată", "Junk food ca sursă de calorii", "Sărirea prânzului sau cina"],
    tips: [
      "Carbohidrați post-workout: 60-80g carbohidrați rapizi maximizează sinteza glicogenului",
      "Mese pre-antrenament bogate în carbohidrați complecși pentru energie susținută",
      "Ciclu de masă/tăiere: 3-4 luni bulk, 2 luni tăiere pentru compoziție optimă",
      "Monitorizează circumferința brațului și a pieptului, nu doar greutatea",
      "Creatina monohidrată 5g/zi crește forța cu 10-15% și masa musculară cu 1-2 kg în 4 săptămâni"
    ],
    faqs: [
      { q: "Câtă masă musculară poate un intermediar pe lună?", a: "Realist: 0.5-1 kg masă musculară pe lună (fără grăsime). Progresul intermediar este de 3-6x mai lent decât al începătorilor." },
      { q: "Trebuie să fac mini-cut periodic în bulk?", a: "Un mini-cut de 4-6 săptămâni o dată la 6-12 luni de bulk poate ameliora sensibilitatea la insulină și reduce grăsimea acumulată, permițând un bulk mai curat ulterior." },
      { q: "Cât de important este timing-ul proteinei?", a: "Destul de important: distribuie proteina la 4-5 mese pe zi cu 25-40g per masă pentru a maximiza sinteza proteică musculară (MPS). Proteina post-workout în 2h este esențială." }
    ],
    relatedSlugs: ["masa-incepatori", "masa-avansati", "masa-proteica"],
    ctaText: "Calculează-ți Macro-urile Bulk", ctaLink: "/calculator"
  },
  {
    slug: "masa-avansati",
    objective: "masa", objectiveName: "Masă Musculară",
    profile: "avansati", profileName: "Nivel Avansat",
    title: "Dietă Masă Musculară Avansați — Bulk de Performanță | GymBro.ro",
    metaDescription: "Strategii avansate de nutriție pentru masă musculară: periodizare, carb cycling, timing perfect al nutrienților și protocoale pentru sportivi de performanță.",
    h1: "Dietă Masă Musculară — Nivel Avansat",
    intro: "La nivel avansat, câștigurile musculare sunt de ordinul sutelor de grame pe lună, nu kilogramelor. Fiecare gram contează, iar nutriția devine o știință precisă. Carb cycling, periodizare proteică și timing perfect al nutrienților sunt instrumentele avansate.",
    calories: { min: 3000, max: 4000 },
    macros: { protein: "28%", carbs: "52%", fat: "20%" },
    meals: [
      { name: "Micul dejun (antrenament dimineața)", description: "Ouă + ovăz + fructe + shake proteic", calories: 750 },
      { name: "Pre-workout", description: "Banana + gel energetic + cafea", calories: 200 },
      { name: "Intra-workout", description: "Băutură cu BCAA/EAA + carbohidrați", calories: 150 },
      { name: "Post-workout imediat", description: "Shake proteic rapid (whey) + dextroză 50g", calories: 400 },
      { name: "Prânz și cina", description: "Mese mari cu proteina de calitate + carbohidrati complex + legume", calories: 1500 }
    ],
    foods: ["Proteina din zer hidrolizat", "Piept de pui", "Carne de vită slabă", "Ouă", "Orez alb (post-workout)", "Orez brun (alte mese)", "Cartofi dulci", "Ovăz", "Dextroză", "Banane", "Broccoli", "Nuci"],
    avoid: ["Deficit caloric (stop creșterii)", "Prea mult cardio", "Suplimente dubioase", "Alcool"],
    tips: [
      "Carb cycling: zile de antrenament 5-7g carbohidrați/kg, zile ușoare 3-4g/kg",
      "Proteina: 2.2-2.5g/kg cu distribuire la fiecare 3-4 ore pentru MPS maxim",
      "Nutriție intra-workout pentru sesiuni de 60+ minute: BCAA/E