export interface AlimentPage {
  slug: string
  name: string
  nameGenitive: string
  category: string
  categoryName: string
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  title: string
  metaDescription: string
  h1: string
  intro: string
  benefits: string[]
  howToEat: string[]
  faqs: { q: string; a: string }[]
  relatedSlugs: string[]
  ctaText: string
  ctaLink: string
  portionSizes: { name: string; grams: number }[]
}

export const alimentPages: AlimentPage[] = [
  {
    "slug": "piept-pui",
    "name": "Piept de Pui",
    "nameGenitive": "pieptului de pui",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 3.6,
    "fiber": 0,
    "title": "Calorii Piept de Pui | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Piept de Pui: 165 kcal la 100g, 31g proteine, 0g carbohidrați, 3.6g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Piept de Pui — Valori Nutriționale la 100g",
    "intro": "Piept de Pui este o sursă importantă de proteine animale complete, furnizând 165 kcal și 31g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Piept de Pui la 100g?",
        "a": "Piept de Pui conține 165 kcal la 100g, cu 31g proteine, 0g carbohidrați, 3.6g grăsimi și 0g fibre."
      },
      {
        "q": "Este Piept de Pui bun pentru slăbit?",
        "a": "Piept de Pui are un conținut caloric moderat (165 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Piept de Pui?",
        "a": "Piept de Pui este o sursă excelentă de proteine — 31g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "pulpa-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "pulpa-pui",
    "name": "Pulpă de Pui",
    "nameGenitive": "pulpei de pui",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 209,
    "protein": 26,
    "carbs": 0,
    "fat": 11,
    "fiber": 0,
    "title": "Calorii Pulpă de Pui | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pulpă de Pui: 209 kcal la 100g, 26g proteine, 0g carbohidrați, 11g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pulpă de Pui — Valori Nutriționale la 100g",
    "intro": "Pulpă de Pui este o sursă importantă de proteine animale complete, furnizând 209 kcal și 26g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pulpă de Pui la 100g?",
        "a": "Pulpă de Pui conține 209 kcal la 100g, cu 26g proteine, 0g carbohidrați, 11g grăsimi și 0g fibre."
      },
      {
        "q": "Este Pulpă de Pui bun pentru slăbit?",
        "a": "Pulpă de Pui are un conținut caloric moderat (209 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Pulpă de Pui?",
        "a": "Pulpă de Pui este o sursă excelentă de proteine — 26g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "pui-intreg",
    "name": "Pui Întreg",
    "nameGenitive": "puiului întreg",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 215,
    "protein": 18,
    "carbs": 0,
    "fat": 15,
    "fiber": 0,
    "title": "Calorii Pui Întreg | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pui Întreg: 215 kcal la 100g, 18g proteine, 0g carbohidrați, 15g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pui Întreg — Valori Nutriționale la 100g",
    "intro": "Pui Întreg este o sursă importantă de proteine animale complete, furnizând 215 kcal și 18g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pui Întreg la 100g?",
        "a": "Pui Întreg conține 215 kcal la 100g, cu 18g proteine, 0g carbohidrați, 15g grăsimi și 0g fibre."
      },
      {
        "q": "Este Pui Întreg bun pentru slăbit?",
        "a": "Pui Întreg are un conținut caloric moderat (215 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Pui Întreg?",
        "a": "Pui Întreg conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "curcan-piept",
    "name": "Piept de Curcan",
    "nameGenitive": "pieptului de curcan",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 135,
    "protein": 29,
    "carbs": 0,
    "fat": 1.5,
    "fiber": 0,
    "title": "Calorii Piept de Curcan | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Piept de Curcan: 135 kcal la 100g, 29g proteine, 0g carbohidrați, 1.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Piept de Curcan — Valori Nutriționale la 100g",
    "intro": "Piept de Curcan este o sursă importantă de proteine animale complete, furnizând 135 kcal și 29g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Piept de Curcan la 100g?",
        "a": "Piept de Curcan conține 135 kcal la 100g, cu 29g proteine, 0g carbohidrați, 1.5g grăsimi și 0g fibre."
      },
      {
        "q": "Este Piept de Curcan bun pentru slăbit?",
        "a": "Piept de Curcan are un conținut caloric moderat (135 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Piept de Curcan?",
        "a": "Piept de Curcan este o sursă excelentă de proteine — 29g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "curcan-pulpa",
    "name": "Pulpă de Curcan",
    "nameGenitive": "pulpei de curcan",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 170,
    "protein": 28,
    "carbs": 0,
    "fat": 7,
    "fiber": 0,
    "title": "Calorii Pulpă de Curcan | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pulpă de Curcan: 170 kcal la 100g, 28g proteine, 0g carbohidrați, 7g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pulpă de Curcan — Valori Nutriționale la 100g",
    "intro": "Pulpă de Curcan este o sursă importantă de proteine animale complete, furnizând 170 kcal și 28g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pulpă de Curcan la 100g?",
        "a": "Pulpă de Curcan conține 170 kcal la 100g, cu 28g proteine, 0g carbohidrați, 7g grăsimi și 0g fibre."
      },
      {
        "q": "Este Pulpă de Curcan bun pentru slăbit?",
        "a": "Pulpă de Curcan are un conținut caloric moderat (170 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Pulpă de Curcan?",
        "a": "Pulpă de Curcan este o sursă excelentă de proteine — 28g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "vita-antricot",
    "name": "Antricot de Vită",
    "nameGenitive": "antricotului de vită",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 271,
    "protein": 26,
    "carbs": 0,
    "fat": 18,
    "fiber": 0,
    "title": "Calorii Antricot de Vită | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Antricot de Vită: 271 kcal la 100g, 26g proteine, 0g carbohidrați, 18g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Antricot de Vită — Valori Nutriționale la 100g",
    "intro": "Antricot de Vită este o sursă importantă de proteine animale complete, furnizând 271 kcal și 26g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Antricot de Vită la 100g?",
        "a": "Antricot de Vită conține 271 kcal la 100g, cu 26g proteine, 0g carbohidrați, 18g grăsimi și 0g fibre."
      },
      {
        "q": "Este Antricot de Vită bun pentru slăbit?",
        "a": "Antricot de Vită este mai caloric (271 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Antricot de Vită?",
        "a": "Antricot de Vită este o sursă excelentă de proteine — 26g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "vita-muschi",
    "name": "Mușchi de Vită",
    "nameGenitive": "mușchiului de vită",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 197,
    "protein": 29,
    "carbs": 0,
    "fat": 9,
    "fiber": 0,
    "title": "Calorii Mușchi de Vită | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mușchi de Vită: 197 kcal la 100g, 29g proteine, 0g carbohidrați, 9g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mușchi de Vită — Valori Nutriționale la 100g",
    "intro": "Mușchi de Vită este o sursă importantă de proteine animale complete, furnizând 197 kcal și 29g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mușchi de Vită la 100g?",
        "a": "Mușchi de Vită conține 197 kcal la 100g, cu 29g proteine, 0g carbohidrați, 9g grăsimi și 0g fibre."
      },
      {
        "q": "Este Mușchi de Vită bun pentru slăbit?",
        "a": "Mușchi de Vită are un conținut caloric moderat (197 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Mușchi de Vită?",
        "a": "Mușchi de Vită este o sursă excelentă de proteine — 29g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "vita-tocata",
    "name": "Vită Tocată",
    "nameGenitive": "vitei tocate",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 250,
    "protein": 26,
    "carbs": 0,
    "fat": 15,
    "fiber": 0,
    "title": "Calorii Vită Tocată | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Vită Tocată: 250 kcal la 100g, 26g proteine, 0g carbohidrați, 15g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Vită Tocată — Valori Nutriționale la 100g",
    "intro": "Vită Tocată este o sursă importantă de proteine animale complete, furnizând 250 kcal și 26g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Vită Tocată la 100g?",
        "a": "Vită Tocată conține 250 kcal la 100g, cu 26g proteine, 0g carbohidrați, 15g grăsimi și 0g fibre."
      },
      {
        "q": "Este Vită Tocată bun pentru slăbit?",
        "a": "Vită Tocată este mai caloric (250 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Vită Tocată?",
        "a": "Vită Tocată este o sursă excelentă de proteine — 26g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "porc-muschi",
    "name": "Mușchi de Porc",
    "nameGenitive": "mușchiului de porc",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 143,
    "protein": 26,
    "carbs": 0,
    "fat": 3.5,
    "fiber": 0,
    "title": "Calorii Mușchi de Porc | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mușchi de Porc: 143 kcal la 100g, 26g proteine, 0g carbohidrați, 3.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mușchi de Porc — Valori Nutriționale la 100g",
    "intro": "Mușchi de Porc este o sursă importantă de proteine animale complete, furnizând 143 kcal și 26g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mușchi de Porc la 100g?",
        "a": "Mușchi de Porc conține 143 kcal la 100g, cu 26g proteine, 0g carbohidrați, 3.5g grăsimi și 0g fibre."
      },
      {
        "q": "Este Mușchi de Porc bun pentru slăbit?",
        "a": "Mușchi de Porc are un conținut caloric moderat (143 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Mușchi de Porc?",
        "a": "Mușchi de Porc este o sursă excelentă de proteine — 26g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "porc-ceafa",
    "name": "Ceafă de Porc",
    "nameGenitive": "cefei de porc",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 300,
    "protein": 20,
    "carbs": 0,
    "fat": 24,
    "fiber": 0,
    "title": "Calorii Ceafă de Porc | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ceafă de Porc: 300 kcal la 100g, 20g proteine, 0g carbohidrați, 24g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ceafă de Porc — Valori Nutriționale la 100g",
    "intro": "Ceafă de Porc este o sursă importantă de proteine animale complete, furnizând 300 kcal și 20g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ceafă de Porc la 100g?",
        "a": "Ceafă de Porc conține 300 kcal la 100g, cu 20g proteine, 0g carbohidrați, 24g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ceafă de Porc bun pentru slăbit?",
        "a": "Ceafă de Porc este mai caloric (300 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Ceafă de Porc?",
        "a": "Ceafă de Porc conține 20g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "porc-cotlet",
    "name": "Cotlet de Porc",
    "nameGenitive": "cotletului de porc",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 232,
    "protein": 25,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "title": "Calorii Cotlet de Porc | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cotlet de Porc: 232 kcal la 100g, 25g proteine, 0g carbohidrați, 14g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cotlet de Porc — Valori Nutriționale la 100g",
    "intro": "Cotlet de Porc este o sursă importantă de proteine animale complete, furnizând 232 kcal și 25g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cotlet de Porc la 100g?",
        "a": "Cotlet de Porc conține 232 kcal la 100g, cu 25g proteine, 0g carbohidrați, 14g grăsimi și 0g fibre."
      },
      {
        "q": "Este Cotlet de Porc bun pentru slăbit?",
        "a": "Cotlet de Porc are un conținut caloric moderat (232 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Cotlet de Porc?",
        "a": "Cotlet de Porc este o sursă excelentă de proteine — 25g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "porc-fleica",
    "name": "Fleică de Porc",
    "nameGenitive": "fleicii de porc",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 310,
    "protein": 18,
    "carbs": 0,
    "fat": 26,
    "fiber": 0,
    "title": "Calorii Fleică de Porc | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Fleică de Porc: 310 kcal la 100g, 18g proteine, 0g carbohidrați, 26g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Fleică de Porc — Valori Nutriționale la 100g",
    "intro": "Fleică de Porc este o sursă importantă de proteine animale complete, furnizând 310 kcal și 18g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Fleică de Porc la 100g?",
        "a": "Fleică de Porc conține 310 kcal la 100g, cu 18g proteine, 0g carbohidrați, 26g grăsimi și 0g fibre."
      },
      {
        "q": "Este Fleică de Porc bun pentru slăbit?",
        "a": "Fleică de Porc este mai caloric (310 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Fleică de Porc?",
        "a": "Fleică de Porc conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "miel-pulpa",
    "name": "Pulpă de Miel",
    "nameGenitive": "pulpei de miel",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 258,
    "protein": 25,
    "carbs": 0,
    "fat": 17,
    "fiber": 0,
    "title": "Calorii Pulpă de Miel | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pulpă de Miel: 258 kcal la 100g, 25g proteine, 0g carbohidrați, 17g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pulpă de Miel — Valori Nutriționale la 100g",
    "intro": "Pulpă de Miel este o sursă importantă de proteine animale complete, furnizând 258 kcal și 25g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pulpă de Miel la 100g?",
        "a": "Pulpă de Miel conține 258 kcal la 100g, cu 25g proteine, 0g carbohidrați, 17g grăsimi și 0g fibre."
      },
      {
        "q": "Este Pulpă de Miel bun pentru slăbit?",
        "a": "Pulpă de Miel este mai caloric (258 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Pulpă de Miel?",
        "a": "Pulpă de Miel este o sursă excelentă de proteine — 25g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "miel-cotlet",
    "name": "Cotlet de Miel",
    "nameGenitive": "cotletului de miel",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 294,
    "protein": 25,
    "carbs": 0,
    "fat": 21,
    "fiber": 0,
    "title": "Calorii Cotlet de Miel | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cotlet de Miel: 294 kcal la 100g, 25g proteine, 0g carbohidrați, 21g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cotlet de Miel — Valori Nutriționale la 100g",
    "intro": "Cotlet de Miel este o sursă importantă de proteine animale complete, furnizând 294 kcal și 25g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cotlet de Miel la 100g?",
        "a": "Cotlet de Miel conține 294 kcal la 100g, cu 25g proteine, 0g carbohidrați, 21g grăsimi și 0g fibre."
      },
      {
        "q": "Este Cotlet de Miel bun pentru slăbit?",
        "a": "Cotlet de Miel este mai caloric (294 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Cotlet de Miel?",
        "a": "Cotlet de Miel este o sursă excelentă de proteine — 25g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "salam",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "salam",
    "name": "Salam",
    "nameGenitive": "salamului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 336,
    "protein": 13,
    "carbs": 1,
    "fat": 30,
    "fiber": 0,
    "title": "Calorii Salam | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Salam: 336 kcal la 100g, 13g proteine, 1g carbohidrați, 30g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Salam — Valori Nutriționale la 100g",
    "intro": "Salam este o sursă importantă de proteine animale complete, furnizând 336 kcal și 13g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Salam la 100g?",
        "a": "Salam conține 336 kcal la 100g, cu 13g proteine, 1g carbohidrați, 30g grăsimi și 0g fibre."
      },
      {
        "q": "Este Salam bun pentru slăbit?",
        "a": "Salam este mai caloric (336 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Salam?",
        "a": "Salam conține 13g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "sunca-presata",
    "name": "Șuncă Presată",
    "nameGenitive": "șuncii presate",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 145,
    "protein": 17,
    "carbs": 3,
    "fat": 7,
    "fiber": 0,
    "title": "Calorii Șuncă Presată | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Șuncă Presată: 145 kcal la 100g, 17g proteine, 3g carbohidrați, 7g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Șuncă Presată — Valori Nutriționale la 100g",
    "intro": "Șuncă Presată este o sursă importantă de proteine animale complete, furnizând 145 kcal și 17g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Șuncă Presată la 100g?",
        "a": "Șuncă Presată conține 145 kcal la 100g, cu 17g proteine, 3g carbohidrați, 7g grăsimi și 0g fibre."
      },
      {
        "q": "Este Șuncă Presată bun pentru slăbit?",
        "a": "Șuncă Presată are un conținut caloric moderat (145 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Șuncă Presată?",
        "a": "Șuncă Presată conține 17g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "bacon",
    "name": "Bacon",
    "nameGenitive": "baconului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 417,
    "protein": 12,
    "carbs": 1,
    "fat": 42,
    "fiber": 0,
    "title": "Calorii Bacon | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Bacon: 417 kcal la 100g, 12g proteine, 1g carbohidrați, 42g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Bacon — Valori Nutriționale la 100g",
    "intro": "Bacon este o sursă importantă de proteine animale complete, furnizând 417 kcal și 12g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Bacon la 100g?",
        "a": "Bacon conține 417 kcal la 100g, cu 12g proteine, 1g carbohidrați, 42g grăsimi și 0g fibre."
      },
      {
        "q": "Este Bacon bun pentru slăbit?",
        "a": "Bacon este mai caloric (417 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Bacon?",
        "a": "Bacon conține 12g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "carnati-porc",
    "name": "Cârnați de Porc",
    "nameGenitive": "cârnațului de porc",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 339,
    "protein": 14,
    "carbs": 2,
    "fat": 30,
    "fiber": 0,
    "title": "Calorii Cârnați de Porc | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cârnați de Porc: 339 kcal la 100g, 14g proteine, 2g carbohidrați, 30g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cârnați de Porc — Valori Nutriționale la 100g",
    "intro": "Cârnați de Porc este o sursă importantă de proteine animale complete, furnizând 339 kcal și 14g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cârnați de Porc la 100g?",
        "a": "Cârnați de Porc conține 339 kcal la 100g, cu 14g proteine, 2g carbohidrați, 30g grăsimi și 0g fibre."
      },
      {
        "q": "Este Cârnați de Porc bun pentru slăbit?",
        "a": "Cârnați de Porc este mai caloric (339 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Cârnați de Porc?",
        "a": "Cârnați de Porc conține 14g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "mici",
    "name": "Mici",
    "nameGenitive": "micilor",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 290,
    "protein": 20,
    "carbs": 0,
    "fat": 23,
    "fiber": 0,
    "title": "Calorii Mici | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mici: 290 kcal la 100g, 20g proteine, 0g carbohidrați, 23g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mici — Valori Nutriționale la 100g",
    "intro": "Mici este o sursă importantă de proteine animale complete, furnizând 290 kcal și 20g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mici la 100g?",
        "a": "Mici conține 290 kcal la 100g, cu 20g proteine, 0g carbohidrați, 23g grăsimi și 0g fibre."
      },
      {
        "q": "Este Mici bun pentru slăbit?",
        "a": "Mici este mai caloric (290 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Mici?",
        "a": "Mici conține 20g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "pastrama",
    "name": "Pastramă",
    "nameGenitive": "pastramei",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 180,
    "protein": 22,
    "carbs": 1,
    "fat": 10,
    "fiber": 0,
    "title": "Calorii Pastramă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pastramă: 180 kcal la 100g, 22g proteine, 1g carbohidrați, 10g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pastramă — Valori Nutriționale la 100g",
    "intro": "Pastramă este o sursă importantă de proteine animale complete, furnizând 180 kcal și 22g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pastramă la 100g?",
        "a": "Pastramă conține 180 kcal la 100g, cu 22g proteine, 1g carbohidrați, 10g grăsimi și 0g fibre."
      },
      {
        "q": "Este Pastramă bun pentru slăbit?",
        "a": "Pastramă are un conținut caloric moderat (180 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Pastramă?",
        "a": "Pastramă este o sursă excelentă de proteine — 22g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "somon",
    "name": "Somon",
    "nameGenitive": "somonului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 208,
    "protein": 20,
    "carbs": 0,
    "fat": 13,
    "fiber": 0,
    "title": "Calorii Somon | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Somon: 208 kcal la 100g, 20g proteine, 0g carbohidrați, 13g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Somon — Valori Nutriționale la 100g",
    "intro": "Somon este o sursă importantă de proteine animale complete, furnizând 208 kcal și 20g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Somon la 100g?",
        "a": "Somon conține 208 kcal la 100g, cu 20g proteine, 0g carbohidrați, 13g grăsimi și 0g fibre."
      },
      {
        "q": "Este Somon bun pentru slăbit?",
        "a": "Somon are un conținut caloric moderat (208 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Somon?",
        "a": "Somon conține 20g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "ton-conserva",
    "name": "Ton la Conservă",
    "nameGenitive": "tonului la conservă",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 116,
    "protein": 26,
    "carbs": 0,
    "fat": 1,
    "fiber": 0,
    "title": "Calorii Ton la Conservă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ton la Conservă: 116 kcal la 100g, 26g proteine, 0g carbohidrați, 1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ton la Conservă — Valori Nutriționale la 100g",
    "intro": "Ton la Conservă este o sursă importantă de proteine animale complete, furnizând 116 kcal și 26g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ton la Conservă la 100g?",
        "a": "Ton la Conservă conține 116 kcal la 100g, cu 26g proteine, 0g carbohidrați, 1g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ton la Conservă bun pentru slăbit?",
        "a": "Ton la Conservă are un conținut caloric moderat (116 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Ton la Conservă?",
        "a": "Ton la Conservă este o sursă excelentă de proteine — 26g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "macrou",
    "name": "Macrou",
    "nameGenitive": "macroulului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 205,
    "protein": 19,
    "carbs": 0,
    "fat": 14,
    "fiber": 0,
    "title": "Calorii Macrou | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Macrou: 205 kcal la 100g, 19g proteine, 0g carbohidrați, 14g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Macrou — Valori Nutriționale la 100g",
    "intro": "Macrou este o sursă importantă de proteine animale complete, furnizând 205 kcal și 19g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Macrou la 100g?",
        "a": "Macrou conține 205 kcal la 100g, cu 19g proteine, 0g carbohidrați, 14g grăsimi și 0g fibre."
      },
      {
        "q": "Este Macrou bun pentru slăbit?",
        "a": "Macrou are un conținut caloric moderat (205 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Macrou?",
        "a": "Macrou conține 19g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "cod",
    "name": "Cod",
    "nameGenitive": "codului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 82,
    "protein": 18,
    "carbs": 0,
    "fat": 0.7,
    "fiber": 0,
    "title": "Calorii Cod | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cod: 82 kcal la 100g, 18g proteine, 0g carbohidrați, 0.7g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cod — Valori Nutriționale la 100g",
    "intro": "Cod este o sursă importantă de proteine animale complete, furnizând 82 kcal și 18g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cod la 100g?",
        "a": "Cod conține 82 kcal la 100g, cu 18g proteine, 0g carbohidrați, 0.7g grăsimi și 0g fibre."
      },
      {
        "q": "Este Cod bun pentru slăbit?",
        "a": "Da! Cu doar 82 kcal la 100g, Cod este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Cod?",
        "a": "Cod conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "pastrav",
    "name": "Păstrăv",
    "nameGenitive": "păstrăvului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 141,
    "protein": 20,
    "carbs": 0,
    "fat": 6,
    "fiber": 0,
    "title": "Calorii Păstrăv | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Păstrăv: 141 kcal la 100g, 20g proteine, 0g carbohidrați, 6g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Păstrăv — Valori Nutriționale la 100g",
    "intro": "Păstrăv este o sursă importantă de proteine animale complete, furnizând 141 kcal și 20g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Păstrăv la 100g?",
        "a": "Păstrăv conține 141 kcal la 100g, cu 20g proteine, 0g carbohidrați, 6g grăsimi și 0g fibre."
      },
      {
        "q": "Este Păstrăv bun pentru slăbit?",
        "a": "Păstrăv are un conținut caloric moderat (141 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Păstrăv?",
        "a": "Păstrăv conține 20g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "crap",
    "name": "Crap",
    "nameGenitive": "crapului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 127,
    "protein": 18,
    "carbs": 0,
    "fat": 6,
    "fiber": 0,
    "title": "Calorii Crap | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Crap: 127 kcal la 100g, 18g proteine, 0g carbohidrați, 6g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Crap — Valori Nutriționale la 100g",
    "intro": "Crap este o sursă importantă de proteine animale complete, furnizând 127 kcal și 18g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Crap la 100g?",
        "a": "Crap conține 127 kcal la 100g, cu 18g proteine, 0g carbohidrați, 6g grăsimi și 0g fibre."
      },
      {
        "q": "Este Crap bun pentru slăbit?",
        "a": "Crap are un conținut caloric moderat (127 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Crap?",
        "a": "Crap conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "salau",
    "name": "Șalău",
    "nameGenitive": "șalăului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 93,
    "protein": 19,
    "carbs": 0,
    "fat": 1.5,
    "fiber": 0,
    "title": "Calorii Șalău | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Șalău: 93 kcal la 100g, 19g proteine, 0g carbohidrați, 1.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Șalău — Valori Nutriționale la 100g",
    "intro": "Șalău este o sursă importantă de proteine animale complete, furnizând 93 kcal și 19g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Șalău la 100g?",
        "a": "Șalău conține 93 kcal la 100g, cu 19g proteine, 0g carbohidrați, 1.5g grăsimi și 0g fibre."
      },
      {
        "q": "Este Șalău bun pentru slăbit?",
        "a": "Da! Cu doar 93 kcal la 100g, Șalău este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Șalău?",
        "a": "Șalău conține 19g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "sardine"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "sardine",
    "name": "Sardine",
    "nameGenitive": "sardinelor",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 208,
    "protein": 25,
    "carbs": 0,
    "fat": 11,
    "fiber": 0,
    "title": "Calorii Sardine | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Sardine: 208 kcal la 100g, 25g proteine, 0g carbohidrați, 11g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Sardine — Valori Nutriționale la 100g",
    "intro": "Sardine este o sursă importantă de proteine animale complete, furnizând 208 kcal și 25g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Sardine la 100g?",
        "a": "Sardine conține 208 kcal la 100g, cu 25g proteine, 0g carbohidrați, 11g grăsimi și 0g fibre."
      },
      {
        "q": "Este Sardine bun pentru slăbit?",
        "a": "Sardine are un conținut caloric moderat (208 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Sardine?",
        "a": "Sardine este o sursă excelentă de proteine — 25g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "hering",
    "name": "Hering",
    "nameGenitive": "heringului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 158,
    "protein": 18,
    "carbs": 0,
    "fat": 9,
    "fiber": 0,
    "title": "Calorii Hering | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Hering: 158 kcal la 100g, 18g proteine, 0g carbohidrați, 9g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Hering — Valori Nutriționale la 100g",
    "intro": "Hering este o sursă importantă de proteine animale complete, furnizând 158 kcal și 18g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Hering la 100g?",
        "a": "Hering conține 158 kcal la 100g, cu 18g proteine, 0g carbohidrați, 9g grăsimi și 0g fibre."
      },
      {
        "q": "Este Hering bun pentru slăbit?",
        "a": "Hering are un conținut caloric moderat (158 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Hering?",
        "a": "Hering conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "creveti",
    "name": "Creveți",
    "nameGenitive": "creveților",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 85,
    "protein": 20,
    "carbs": 0,
    "fat": 0.5,
    "fiber": 0,
    "title": "Calorii Creveți | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Creveți: 85 kcal la 100g, 20g proteine, 0g carbohidrați, 0.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Creveți — Valori Nutriționale la 100g",
    "intro": "Creveți este o sursă importantă de proteine animale complete, furnizând 85 kcal și 20g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Creveți la 100g?",
        "a": "Creveți conține 85 kcal la 100g, cu 20g proteine, 0g carbohidrați, 0.5g grăsimi și 0g fibre."
      },
      {
        "q": "Este Creveți bun pentru slăbit?",
        "a": "Da! Cu doar 85 kcal la 100g, Creveți este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Creveți?",
        "a": "Creveți conține 20g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "calamari",
    "name": "Calamari",
    "nameGenitive": "calamărilor",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 92,
    "protein": 16,
    "carbs": 3,
    "fat": 1.4,
    "fiber": 0,
    "title": "Calorii Calamari | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Calamari: 92 kcal la 100g, 16g proteine, 3g carbohidrați, 1.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Calamari — Valori Nutriționale la 100g",
    "intro": "Calamari este o sursă importantă de proteine animale complete, furnizând 92 kcal și 16g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Calamari la 100g?",
        "a": "Calamari conține 92 kcal la 100g, cu 16g proteine, 3g carbohidrați, 1.4g grăsimi și 0g fibre."
      },
      {
        "q": "Este Calamari bun pentru slăbit?",
        "a": "Da! Cu doar 92 kcal la 100g, Calamari este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Calamari?",
        "a": "Calamari conține 16g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "midii",
    "name": "Midii",
    "nameGenitive": "midiilor",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 86,
    "protein": 12,
    "carbs": 4,
    "fat": 2.2,
    "fiber": 0,
    "title": "Calorii Midii | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Midii: 86 kcal la 100g, 12g proteine, 4g carbohidrați, 2.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Midii — Valori Nutriționale la 100g",
    "intro": "Midii este o sursă importantă de proteine animale complete, furnizând 86 kcal și 12g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Midii la 100g?",
        "a": "Midii conține 86 kcal la 100g, cu 12g proteine, 4g carbohidrați, 2.2g grăsimi și 0g fibre."
      },
      {
        "q": "Este Midii bun pentru slăbit?",
        "a": "Da! Cu doar 86 kcal la 100g, Midii este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Midii?",
        "a": "Midii conține 12g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "ton-proaspat",
    "name": "Ton Proaspăt",
    "nameGenitive": "tonului proaspăt",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 144,
    "protein": 23,
    "carbs": 0,
    "fat": 5,
    "fiber": 0,
    "title": "Calorii Ton Proaspăt | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ton Proaspăt: 144 kcal la 100g, 23g proteine, 0g carbohidrați, 5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ton Proaspăt — Valori Nutriționale la 100g",
    "intro": "Ton Proaspăt este o sursă importantă de proteine animale complete, furnizând 144 kcal și 23g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ton Proaspăt la 100g?",
        "a": "Ton Proaspăt conține 144 kcal la 100g, cu 23g proteine, 0g carbohidrați, 5g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ton Proaspăt bun pentru slăbit?",
        "a": "Ton Proaspăt are un conținut caloric moderat (144 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Ton Proaspăt?",
        "a": "Ton Proaspăt este o sursă excelentă de proteine — 23g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "tilapia",
    "name": "Tilapia",
    "nameGenitive": "tilapiei",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 96,
    "protein": 20,
    "carbs": 0,
    "fat": 1.7,
    "fiber": 0,
    "title": "Calorii Tilapia | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Tilapia: 96 kcal la 100g, 20g proteine, 0g carbohidrați, 1.7g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Tilapia — Valori Nutriționale la 100g",
    "intro": "Tilapia este o sursă importantă de proteine animale complete, furnizând 96 kcal și 20g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Tilapia la 100g?",
        "a": "Tilapia conține 96 kcal la 100g, cu 20g proteine, 0g carbohidrați, 1.7g grăsimi și 0g fibre."
      },
      {
        "q": "Este Tilapia bun pentru slăbit?",
        "a": "Da! Cu doar 96 kcal la 100g, Tilapia este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Tilapia?",
        "a": "Tilapia conține 20g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "dorada",
    "name": "Doradă",
    "nameGenitive": "doradei",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 100,
    "protein": 20,
    "carbs": 0,
    "fat": 2.5,
    "fiber": 0,
    "title": "Calorii Doradă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Doradă: 100 kcal la 100g, 20g proteine, 0g carbohidrați, 2.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Doradă — Valori Nutriționale la 100g",
    "intro": "Doradă este o sursă importantă de proteine animale complete, furnizând 100 kcal și 20g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Doradă la 100g?",
        "a": "Doradă conține 100 kcal la 100g, cu 20g proteine, 0g carbohidrați, 2.5g grăsimi și 0g fibre."
      },
      {
        "q": "Este Doradă bun pentru slăbit?",
        "a": "Doradă are un conținut caloric moderat (100 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Doradă?",
        "a": "Doradă conține 20g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "biban",
    "name": "Biban",
    "nameGenitive": "bibanului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 97,
    "protein": 19,
    "carbs": 0,
    "fat": 2,
    "fiber": 0,
    "title": "Calorii Biban | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Biban: 97 kcal la 100g, 19g proteine, 0g carbohidrați, 2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Biban — Valori Nutriționale la 100g",
    "intro": "Biban este o sursă importantă de proteine animale complete, furnizând 97 kcal și 19g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Biban la 100g?",
        "a": "Biban conține 97 kcal la 100g, cu 19g proteine, 0g carbohidrați, 2g grăsimi și 0g fibre."
      },
      {
        "q": "Este Biban bun pentru slăbit?",
        "a": "Da! Cu doar 97 kcal la 100g, Biban este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Biban?",
        "a": "Biban conține 19g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "somn",
    "name": "Somn",
    "nameGenitive": "somnului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 195,
    "protein": 18,
    "carbs": 0,
    "fat": 13,
    "fiber": 0,
    "title": "Calorii Somn | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Somn: 195 kcal la 100g, 18g proteine, 0g carbohidrați, 13g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Somn — Valori Nutriționale la 100g",
    "intro": "Somn este o sursă importantă de proteine animale complete, furnizând 195 kcal și 18g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Somn la 100g?",
        "a": "Somn conține 195 kcal la 100g, cu 18g proteine, 0g carbohidrați, 13g grăsimi și 0g fibre."
      },
      {
        "q": "Este Somn bun pentru slăbit?",
        "a": "Somn are un conținut caloric moderat (195 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Somn?",
        "a": "Somn conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "stiuca",
    "name": "Știucă",
    "nameGenitive": "știucii",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 88,
    "protein": 19,
    "carbs": 0,
    "fat": 1,
    "fiber": 0,
    "title": "Calorii Știucă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Știucă: 88 kcal la 100g, 19g proteine, 0g carbohidrați, 1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Știucă — Valori Nutriționale la 100g",
    "intro": "Știucă este o sursă importantă de proteine animale complete, furnizând 88 kcal și 19g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Știucă la 100g?",
        "a": "Știucă conține 88 kcal la 100g, cu 19g proteine, 0g carbohidrați, 1g grăsimi și 0g fibre."
      },
      {
        "q": "Este Știucă bun pentru slăbit?",
        "a": "Da! Cu doar 88 kcal la 100g, Știucă este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Știucă?",
        "a": "Știucă conține 19g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "calcan",
    "name": "Calcan",
    "nameGenitive": "calcanului",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 86,
    "protein": 16,
    "carbs": 0,
    "fat": 2.5,
    "fiber": 0,
    "title": "Calorii Calcan | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Calcan: 86 kcal la 100g, 16g proteine, 0g carbohidrați, 2.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Calcan — Valori Nutriționale la 100g",
    "intro": "Calcan este o sursă importantă de proteine animale complete, furnizând 86 kcal și 16g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Calcan la 100g?",
        "a": "Calcan conține 86 kcal la 100g, cu 16g proteine, 0g carbohidrați, 2.5g grăsimi și 0g fibre."
      },
      {
        "q": "Este Calcan bun pentru slăbit?",
        "a": "Da! Cu doar 86 kcal la 100g, Calcan este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Calcan?",
        "a": "Calcan conține 16g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "file-pangasius",
    "name": "File de Pangasius",
    "nameGenitive": "fileului de pangasius",
    "category": "carne",
    "categoryName": "Carne și Pește",
    "calories": 90,
    "protein": 17,
    "carbs": 0,
    "fat": 2,
    "fiber": 0,
    "title": "Calorii File de Pangasius | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "File de Pangasius: 90 kcal la 100g, 17g proteine, 0g carbohidrați, 2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii File de Pangasius — Valori Nutriționale la 100g",
    "intro": "File de Pangasius este o sursă importantă de proteine animale complete, furnizând 90 kcal și 17g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.",
    "benefits": [
      "Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului",
      "Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii",
      "Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale",
      "Susține recuperarea musculară după antrenamente intense",
      "Furnizează seleniu, un antioxidant important pentru imunitate"
    ],
    "howToEat": [
      "Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate",
      "Inclus în mese echilibrate cu legume și cereale integrale ca garnitură",
      "Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric",
      "Porții de 150-200g per masă pentru un aport proteic optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are File de Pangasius la 100g?",
        "a": "File de Pangasius conține 90 kcal la 100g, cu 17g proteine, 0g carbohidrați, 2g grăsimi și 0g fibre."
      },
      {
        "q": "Este File de Pangasius bun pentru slăbit?",
        "a": "Da! Cu doar 90 kcal la 100g, File de Pangasius este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are File de Pangasius?",
        "a": "File de Pangasius conține 17g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "piept-pui",
      "miel-cotlet",
      "salau"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "oua-intregi",
    "name": "Ouă Întregi",
    "nameGenitive": "ouălor întregi",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 155,
    "protein": 13,
    "carbs": 1.1,
    "fat": 11,
    "fiber": 0,
    "title": "Calorii Ouă Întregi | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ouă Întregi: 155 kcal la 100g, 13g proteine, 1.1g carbohidrați, 11g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ouă Întregi — Valori Nutriționale la 100g",
    "intro": "Ouă Întregi este un produs lactat cu 155 kcal și 13g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ouă Întregi la 100g?",
        "a": "Ouă Întregi conține 155 kcal la 100g, cu 13g proteine, 1.1g carbohidrați, 11g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ouă Întregi bun pentru slăbit?",
        "a": "Ouă Întregi are un conținut caloric moderat (155 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Ouă Întregi?",
        "a": "Ouă Întregi conține 13g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-albus",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "oua-albus",
    "name": "Albuș de Ou",
    "nameGenitive": "albușului de ou",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 52,
    "protein": 11,
    "carbs": 0.7,
    "fat": 0.2,
    "fiber": 0,
    "title": "Calorii Albuș de Ou | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Albuș de Ou: 52 kcal la 100g, 11g proteine, 0.7g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Albuș de Ou — Valori Nutriționale la 100g",
    "intro": "Albuș de Ou este un produs lactat cu 52 kcal și 11g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Albuș de Ou la 100g?",
        "a": "Albuș de Ou conține 52 kcal la 100g, cu 11g proteine, 0.7g carbohidrați, 0.2g grăsimi și 0g fibre."
      },
      {
        "q": "Este Albuș de Ou bun pentru slăbit?",
        "a": "Da! Cu doar 52 kcal la 100g, Albuș de Ou este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Albuș de Ou?",
        "a": "Albuș de Ou conține 11g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "lapte-integral",
    "name": "Lapte Integral",
    "nameGenitive": "laptelui integral",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 61,
    "protein": 3.2,
    "carbs": 4.8,
    "fat": 3.3,
    "fiber": 0,
    "title": "Calorii Lapte Integral | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Lapte Integral: 61 kcal la 100g, 3.2g proteine, 4.8g carbohidrați, 3.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Lapte Integral — Valori Nutriționale la 100g",
    "intro": "Lapte Integral este un produs lactat cu 61 kcal și 3.2g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Lapte Integral la 100g?",
        "a": "Lapte Integral conține 61 kcal la 100g, cu 3.2g proteine, 4.8g carbohidrați, 3.3g grăsimi și 0g fibre."
      },
      {
        "q": "Este Lapte Integral bun pentru slăbit?",
        "a": "Da! Cu doar 61 kcal la 100g, Lapte Integral este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Lapte Integral?",
        "a": "Lapte Integral are 3.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (200ml)",
        "grams": 200
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Porție mare (300ml)",
        "grams": 300
      }
    ]
  },
  {
    "slug": "lapte-degresat",
    "name": "Lapte Degresat",
    "nameGenitive": "laptelui degresat",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 34,
    "protein": 3.4,
    "carbs": 4.9,
    "fat": 0.2,
    "fiber": 0,
    "title": "Calorii Lapte Degresat | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Lapte Degresat: 34 kcal la 100g, 3.4g proteine, 4.9g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Lapte Degresat — Valori Nutriționale la 100g",
    "intro": "Lapte Degresat este un produs lactat cu 34 kcal și 3.4g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Lapte Degresat la 100g?",
        "a": "Lapte Degresat conține 34 kcal la 100g, cu 3.4g proteine, 4.9g carbohidrați, 0.2g grăsimi și 0g fibre."
      },
      {
        "q": "Este Lapte Degresat bun pentru slăbit?",
        "a": "Da! Cu doar 34 kcal la 100g, Lapte Degresat este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Lapte Degresat?",
        "a": "Lapte Degresat are 3.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (200ml)",
        "grams": 200
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Porție mare (300ml)",
        "grams": 300
      }
    ]
  },
  {
    "slug": "iaurt-grecesc",
    "name": "Iaurt Grecesc",
    "nameGenitive": "iaurtului grecesc",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 97,
    "protein": 9,
    "carbs": 4,
    "fat": 5,
    "fiber": 0,
    "title": "Calorii Iaurt Grecesc | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Iaurt Grecesc: 97 kcal la 100g, 9g proteine, 4g carbohidrați, 5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Iaurt Grecesc — Valori Nutriționale la 100g",
    "intro": "Iaurt Grecesc este un produs lactat cu 97 kcal și 9g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Iaurt Grecesc la 100g?",
        "a": "Iaurt Grecesc conține 97 kcal la 100g, cu 9g proteine, 4g carbohidrați, 5g grăsimi și 0g fibre."
      },
      {
        "q": "Este Iaurt Grecesc bun pentru slăbit?",
        "a": "Da! Cu doar 97 kcal la 100g, Iaurt Grecesc este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Iaurt Grecesc?",
        "a": "Iaurt Grecesc are 9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "iaurt-simplu",
    "name": "Iaurt Simplu",
    "nameGenitive": "iaurtului simplu",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 59,
    "protein": 3.5,
    "carbs": 4.7,
    "fat": 3.3,
    "fiber": 0,
    "title": "Calorii Iaurt Simplu | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Iaurt Simplu: 59 kcal la 100g, 3.5g proteine, 4.7g carbohidrați, 3.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Iaurt Simplu — Valori Nutriționale la 100g",
    "intro": "Iaurt Simplu este un produs lactat cu 59 kcal și 3.5g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Iaurt Simplu la 100g?",
        "a": "Iaurt Simplu conține 59 kcal la 100g, cu 3.5g proteine, 4.7g carbohidrați, 3.3g grăsimi și 0g fibre."
      },
      {
        "q": "Este Iaurt Simplu bun pentru slăbit?",
        "a": "Da! Cu doar 59 kcal la 100g, Iaurt Simplu este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Iaurt Simplu?",
        "a": "Iaurt Simplu are 3.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "smantana",
    "name": "Smântână",
    "nameGenitive": "smântânii",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 215,
    "protein": 2.7,
    "carbs": 4.2,
    "fat": 21,
    "fiber": 0,
    "title": "Calorii Smântână | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Smântână: 215 kcal la 100g, 2.7g proteine, 4.2g carbohidrați, 21g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Smântână — Valori Nutriționale la 100g",
    "intro": "Smântână este un produs lactat cu 215 kcal și 2.7g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Smântână la 100g?",
        "a": "Smântână conține 215 kcal la 100g, cu 2.7g proteine, 4.2g carbohidrați, 21g grăsimi și 0g fibre."
      },
      {
        "q": "Este Smântână bun pentru slăbit?",
        "a": "Smântână are un conținut caloric moderat (215 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Smântână?",
        "a": "Smântână are 2.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "branza-telemea",
    "name": "Brânză Telemea",
    "nameGenitive": "brânzei telemea",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 260,
    "protein": 18,
    "carbs": 2,
    "fat": 20,
    "fiber": 0,
    "title": "Calorii Brânză Telemea | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Brânză Telemea: 260 kcal la 100g, 18g proteine, 2g carbohidrați, 20g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Brânză Telemea — Valori Nutriționale la 100g",
    "intro": "Brânză Telemea este un produs lactat cu 260 kcal și 18g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Brânză Telemea la 100g?",
        "a": "Brânză Telemea conține 260 kcal la 100g, cu 18g proteine, 2g carbohidrați, 20g grăsimi și 0g fibre."
      },
      {
        "q": "Este Brânză Telemea bun pentru slăbit?",
        "a": "Brânză Telemea este mai caloric (260 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Brânză Telemea?",
        "a": "Brânză Telemea conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "branza-feta",
    "name": "Brânză Feta",
    "nameGenitive": "brânzei feta",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 264,
    "protein": 14,
    "carbs": 4,
    "fat": 21,
    "fiber": 0,
    "title": "Calorii Brânză Feta | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Brânză Feta: 264 kcal la 100g, 14g proteine, 4g carbohidrați, 21g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Brânză Feta — Valori Nutriționale la 100g",
    "intro": "Brânză Feta este un produs lactat cu 264 kcal și 14g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Brânză Feta la 100g?",
        "a": "Brânză Feta conține 264 kcal la 100g, cu 14g proteine, 4g carbohidrați, 21g grăsimi și 0g fibre."
      },
      {
        "q": "Este Brânză Feta bun pentru slăbit?",
        "a": "Brânză Feta este mai caloric (264 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Brânză Feta?",
        "a": "Brânză Feta conține 14g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "cascaval",
    "name": "Cașcaval",
    "nameGenitive": "cașcavalului",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 356,
    "protein": 25,
    "carbs": 1.3,
    "fat": 28,
    "fiber": 0,
    "title": "Calorii Cașcaval | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cașcaval: 356 kcal la 100g, 25g proteine, 1.3g carbohidrați, 28g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cașcaval — Valori Nutriționale la 100g",
    "intro": "Cașcaval este un produs lactat cu 356 kcal și 25g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cașcaval la 100g?",
        "a": "Cașcaval conține 356 kcal la 100g, cu 25g proteine, 1.3g carbohidrați, 28g grăsimi și 0g fibre."
      },
      {
        "q": "Este Cașcaval bun pentru slăbit?",
        "a": "Cașcaval este mai caloric (356 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Cașcaval?",
        "a": "Cașcaval este o sursă excelentă de proteine — 25g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "parmezan",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "parmezan",
    "name": "Parmezan",
    "nameGenitive": "parmezanului",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 431,
    "protein": 38,
    "carbs": 3.2,
    "fat": 29,
    "fiber": 0,
    "title": "Calorii Parmezan | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Parmezan: 431 kcal la 100g, 38g proteine, 3.2g carbohidrați, 29g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Parmezan — Valori Nutriționale la 100g",
    "intro": "Parmezan este un produs lactat cu 431 kcal și 38g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Parmezan la 100g?",
        "a": "Parmezan conține 431 kcal la 100g, cu 38g proteine, 3.2g carbohidrați, 29g grăsimi și 0g fibre."
      },
      {
        "q": "Este Parmezan bun pentru slăbit?",
        "a": "Parmezan este mai caloric (431 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Parmezan?",
        "a": "Parmezan este o sursă excelentă de proteine — 38g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "mozzarella",
    "name": "Mozzarella",
    "nameGenitive": "mozzarellei",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 280,
    "protein": 28,
    "carbs": 2.2,
    "fat": 17,
    "fiber": 0,
    "title": "Calorii Mozzarella | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mozzarella: 280 kcal la 100g, 28g proteine, 2.2g carbohidrați, 17g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mozzarella — Valori Nutriționale la 100g",
    "intro": "Mozzarella este un produs lactat cu 280 kcal și 28g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mozzarella la 100g?",
        "a": "Mozzarella conține 280 kcal la 100g, cu 28g proteine, 2.2g carbohidrați, 17g grăsimi și 0g fibre."
      },
      {
        "q": "Este Mozzarella bun pentru slăbit?",
        "a": "Mozzarella este mai caloric (280 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Mozzarella?",
        "a": "Mozzarella este o sursă excelentă de proteine — 28g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "branza-vaci",
    "name": "Brânză de Vaci",
    "nameGenitive": "brânzei de vaci",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 98,
    "protein": 11,
    "carbs": 3.4,
    "fat": 4.3,
    "fiber": 0,
    "title": "Calorii Brânză de Vaci | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Brânză de Vaci: 98 kcal la 100g, 11g proteine, 3.4g carbohidrați, 4.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Brânză de Vaci — Valori Nutriționale la 100g",
    "intro": "Brânză de Vaci este un produs lactat cu 98 kcal și 11g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Brânză de Vaci la 100g?",
        "a": "Brânză de Vaci conține 98 kcal la 100g, cu 11g proteine, 3.4g carbohidrați, 4.3g grăsimi și 0g fibre."
      },
      {
        "q": "Este Brânză de Vaci bun pentru slăbit?",
        "a": "Da! Cu doar 98 kcal la 100g, Brânză de Vaci este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Brânză de Vaci?",
        "a": "Brânză de Vaci conține 11g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "urda",
    "name": "Urdă",
    "nameGenitive": "urdei",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 120,
    "protein": 13,
    "carbs": 4,
    "fat": 5.5,
    "fiber": 0,
    "title": "Calorii Urdă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Urdă: 120 kcal la 100g, 13g proteine, 4g carbohidrați, 5.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Urdă — Valori Nutriționale la 100g",
    "intro": "Urdă este un produs lactat cu 120 kcal și 13g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Urdă la 100g?",
        "a": "Urdă conține 120 kcal la 100g, cu 13g proteine, 4g carbohidrați, 5.5g grăsimi și 0g fibre."
      },
      {
        "q": "Este Urdă bun pentru slăbit?",
        "a": "Urdă are un conținut caloric moderat (120 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Urdă?",
        "a": "Urdă conține 13g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "ricotta",
    "name": "Ricotta",
    "nameGenitive": "ricottei",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 174,
    "protein": 11,
    "carbs": 3,
    "fat": 13,
    "fiber": 0,
    "title": "Calorii Ricotta | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ricotta: 174 kcal la 100g, 11g proteine, 3g carbohidrați, 13g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ricotta — Valori Nutriționale la 100g",
    "intro": "Ricotta este un produs lactat cu 174 kcal și 11g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ricotta la 100g?",
        "a": "Ricotta conține 174 kcal la 100g, cu 11g proteine, 3g carbohidrați, 13g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ricotta bun pentru slăbit?",
        "a": "Ricotta are un conținut caloric moderat (174 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Ricotta?",
        "a": "Ricotta conține 11g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "unt",
    "name": "Unt",
    "nameGenitive": "untului",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 717,
    "protein": 0.9,
    "carbs": 0.1,
    "fat": 81,
    "fiber": 0,
    "title": "Calorii Unt | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Unt: 717 kcal la 100g, 0.9g proteine, 0.1g carbohidrați, 81g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Unt — Valori Nutriționale la 100g",
    "intro": "Unt este un produs lactat cu 717 kcal și 0.9g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Unt la 100g?",
        "a": "Unt conține 717 kcal la 100g, cu 0.9g proteine, 0.1g carbohidrați, 81g grăsimi și 0g fibre."
      },
      {
        "q": "Este Unt bun pentru slăbit?",
        "a": "Unt este mai caloric (717 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Unt?",
        "a": "Unt are 0.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 linguriță",
        "grams": 5
      },
      {
        "name": "1 lingură",
        "grams": 15
      },
      {
        "name": "Porție standard",
        "grams": 30
      }
    ]
  },
  {
    "slug": "margarina",
    "name": "Margarină",
    "nameGenitive": "margarinei",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 720,
    "protein": 0.2,
    "carbs": 0.7,
    "fat": 80,
    "fiber": 0,
    "title": "Calorii Margarină | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Margarină: 720 kcal la 100g, 0.2g proteine, 0.7g carbohidrați, 80g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Margarină — Valori Nutriționale la 100g",
    "intro": "Margarină este un produs lactat cu 720 kcal și 0.2g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Margarină la 100g?",
        "a": "Margarină conține 720 kcal la 100g, cu 0.2g proteine, 0.7g carbohidrați, 80g grăsimi și 0g fibre."
      },
      {
        "q": "Este Margarină bun pentru slăbit?",
        "a": "Margarină este mai caloric (720 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Margarină?",
        "a": "Margarină are 0.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 linguriță",
        "grams": 5
      },
      {
        "name": "1 lingură",
        "grams": 15
      },
      {
        "name": "Porție standard",
        "grams": 30
      }
    ]
  },
  {
    "slug": "frisca",
    "name": "Frișcă",
    "nameGenitive": "frișcăi",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 340,
    "protein": 2.1,
    "carbs": 2.8,
    "fat": 35,
    "fiber": 0,
    "title": "Calorii Frișcă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Frișcă: 340 kcal la 100g, 2.1g proteine, 2.8g carbohidrați, 35g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Frișcă — Valori Nutriționale la 100g",
    "intro": "Frișcă este un produs lactat cu 340 kcal și 2.1g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Frișcă la 100g?",
        "a": "Frișcă conține 340 kcal la 100g, cu 2.1g proteine, 2.8g carbohidrați, 35g grăsimi și 0g fibre."
      },
      {
        "q": "Este Frișcă bun pentru slăbit?",
        "a": "Frișcă este mai caloric (340 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Frișcă?",
        "a": "Frișcă are 2.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 linguriță",
        "grams": 5
      },
      {
        "name": "1 lingură",
        "grams": 15
      },
      {
        "name": "Porție standard",
        "grams": 30
      }
    ]
  },
  {
    "slug": "lapte-cocos",
    "name": "Lapte de Cocos",
    "nameGenitive": "laptelui de cocos",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 230,
    "protein": 2.3,
    "carbs": 6,
    "fat": 23,
    "fiber": 0,
    "title": "Calorii Lapte de Cocos | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Lapte de Cocos: 230 kcal la 100g, 2.3g proteine, 6g carbohidrați, 23g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Lapte de Cocos — Valori Nutriționale la 100g",
    "intro": "Lapte de Cocos este un produs lactat cu 230 kcal și 2.3g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Lapte de Cocos la 100g?",
        "a": "Lapte de Cocos conține 230 kcal la 100g, cu 2.3g proteine, 6g carbohidrați, 23g grăsimi și 0g fibre."
      },
      {
        "q": "Este Lapte de Cocos bun pentru slăbit?",
        "a": "Lapte de Cocos are un conținut caloric moderat (230 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Lapte de Cocos?",
        "a": "Lapte de Cocos are 2.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-migdale"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (200ml)",
        "grams": 200
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Porție mare (300ml)",
        "grams": 300
      }
    ]
  },
  {
    "slug": "lapte-migdale",
    "name": "Lapte de Migdale",
    "nameGenitive": "laptelui de migdale",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 30,
    "protein": 1.1,
    "carbs": 3.5,
    "fat": 1,
    "fiber": 0,
    "title": "Calorii Lapte de Migdale | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Lapte de Migdale: 30 kcal la 100g, 1.1g proteine, 3.5g carbohidrați, 1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Lapte de Migdale — Valori Nutriționale la 100g",
    "intro": "Lapte de Migdale este un produs lactat cu 30 kcal și 1.1g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Lapte de Migdale la 100g?",
        "a": "Lapte de Migdale conține 30 kcal la 100g, cu 1.1g proteine, 3.5g carbohidrați, 1g grăsimi și 0g fibre."
      },
      {
        "q": "Este Lapte de Migdale bun pentru slăbit?",
        "a": "Da! Cu doar 30 kcal la 100g, Lapte de Migdale este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Lapte de Migdale?",
        "a": "Lapte de Migdale are 1.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (200ml)",
        "grams": 200
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Porție mare (300ml)",
        "grams": 300
      }
    ]
  },
  {
    "slug": "lapte-soia",
    "name": "Lapte de Soia",
    "nameGenitive": "laptelui de soia",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 54,
    "protein": 3.3,
    "carbs": 6.3,
    "fat": 1.8,
    "fiber": 0,
    "title": "Calorii Lapte de Soia | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Lapte de Soia: 54 kcal la 100g, 3.3g proteine, 6.3g carbohidrați, 1.8g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Lapte de Soia — Valori Nutriționale la 100g",
    "intro": "Lapte de Soia este un produs lactat cu 54 kcal și 3.3g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Lapte de Soia la 100g?",
        "a": "Lapte de Soia conține 54 kcal la 100g, cu 3.3g proteine, 6.3g carbohidrați, 1.8g grăsimi și 0g fibre."
      },
      {
        "q": "Este Lapte de Soia bun pentru slăbit?",
        "a": "Da! Cu doar 54 kcal la 100g, Lapte de Soia este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Lapte de Soia?",
        "a": "Lapte de Soia are 3.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (200ml)",
        "grams": 200
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Porție mare (300ml)",
        "grams": 300
      }
    ]
  },
  {
    "slug": "kefir",
    "name": "Kefir",
    "nameGenitive": "kefirului",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 61,
    "protein": 3.4,
    "carbs": 4.5,
    "fat": 3.4,
    "fiber": 0,
    "title": "Calorii Kefir | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Kefir: 61 kcal la 100g, 3.4g proteine, 4.5g carbohidrați, 3.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Kefir — Valori Nutriționale la 100g",
    "intro": "Kefir este un produs lactat cu 61 kcal și 3.4g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Kefir la 100g?",
        "a": "Kefir conține 61 kcal la 100g, cu 3.4g proteine, 4.5g carbohidrați, 3.4g grăsimi și 0g fibre."
      },
      {
        "q": "Este Kefir bun pentru slăbit?",
        "a": "Da! Cu doar 61 kcal la 100g, Kefir este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Kefir?",
        "a": "Kefir are 3.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (200ml)",
        "grams": 200
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Porție mare (300ml)",
        "grams": 300
      }
    ]
  },
  {
    "slug": "lapte-bataie",
    "name": "Lapte Bătut",
    "nameGenitive": "laptelui bătut",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 40,
    "protein": 3.3,
    "carbs": 4.8,
    "fat": 0.9,
    "fiber": 0,
    "title": "Calorii Lapte Bătut | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Lapte Bătut: 40 kcal la 100g, 3.3g proteine, 4.8g carbohidrați, 0.9g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Lapte Bătut — Valori Nutriționale la 100g",
    "intro": "Lapte Bătut este un produs lactat cu 40 kcal și 3.3g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Lapte Bătut la 100g?",
        "a": "Lapte Bătut conține 40 kcal la 100g, cu 3.3g proteine, 4.8g carbohidrați, 0.9g grăsimi și 0g fibre."
      },
      {
        "q": "Este Lapte Bătut bun pentru slăbit?",
        "a": "Da! Cu doar 40 kcal la 100g, Lapte Bătut este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Lapte Bătut?",
        "a": "Lapte Bătut are 3.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (200ml)",
        "grams": 200
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Porție mare (300ml)",
        "grams": 300
      }
    ]
  },
  {
    "slug": "branza-topita",
    "name": "Brânză Topită",
    "nameGenitive": "brânzei topite",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 270,
    "protein": 12,
    "carbs": 8,
    "fat": 22,
    "fiber": 0,
    "title": "Calorii Brânză Topită | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Brânză Topită: 270 kcal la 100g, 12g proteine, 8g carbohidrați, 22g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Brânză Topită — Valori Nutriționale la 100g",
    "intro": "Brânză Topită este un produs lactat cu 270 kcal și 12g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Brânză Topită la 100g?",
        "a": "Brânză Topită conține 270 kcal la 100g, cu 12g proteine, 8g carbohidrați, 22g grăsimi și 0g fibre."
      },
      {
        "q": "Este Brânză Topită bun pentru slăbit?",
        "a": "Brânză Topită este mai caloric (270 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Brânză Topită?",
        "a": "Brânză Topită conține 12g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "branza-brie",
    "name": "Brânză Brie",
    "nameGenitive": "brânzei brie",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 334,
    "protein": 21,
    "carbs": 0.5,
    "fat": 28,
    "fiber": 0,
    "title": "Calorii Brânză Brie | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Brânză Brie: 334 kcal la 100g, 21g proteine, 0.5g carbohidrați, 28g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Brânză Brie — Valori Nutriționale la 100g",
    "intro": "Brânză Brie este un produs lactat cu 334 kcal și 21g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Brânză Brie la 100g?",
        "a": "Brânză Brie conține 334 kcal la 100g, cu 21g proteine, 0.5g carbohidrați, 28g grăsimi și 0g fibre."
      },
      {
        "q": "Este Brânză Brie bun pentru slăbit?",
        "a": "Brânză Brie este mai caloric (334 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Brânză Brie?",
        "a": "Brânză Brie este o sursă excelentă de proteine — 21g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "camembert",
    "name": "Camembert",
    "nameGenitive": "camembertului",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 300,
    "protein": 20,
    "carbs": 0.5,
    "fat": 24,
    "fiber": 0,
    "title": "Calorii Camembert | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Camembert: 300 kcal la 100g, 20g proteine, 0.5g carbohidrați, 24g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Camembert — Valori Nutriționale la 100g",
    "intro": "Camembert este un produs lactat cu 300 kcal și 20g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Camembert la 100g?",
        "a": "Camembert conține 300 kcal la 100g, cu 20g proteine, 0.5g carbohidrați, 24g grăsimi și 0g fibre."
      },
      {
        "q": "Este Camembert bun pentru slăbit?",
        "a": "Camembert este mai caloric (300 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Camembert?",
        "a": "Camembert conține 20g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "gorgonzola",
    "name": "Gorgonzola",
    "nameGenitive": "gorgonzolei",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 353,
    "protein": 21,
    "carbs": 2,
    "fat": 29,
    "fiber": 0,
    "title": "Calorii Gorgonzola | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Gorgonzola: 353 kcal la 100g, 21g proteine, 2g carbohidrați, 29g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Gorgonzola — Valori Nutriționale la 100g",
    "intro": "Gorgonzola este un produs lactat cu 353 kcal și 21g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Gorgonzola la 100g?",
        "a": "Gorgonzola conține 353 kcal la 100g, cu 21g proteine, 2g carbohidrați, 29g grăsimi și 0g fibre."
      },
      {
        "q": "Este Gorgonzola bun pentru slăbit?",
        "a": "Gorgonzola este mai caloric (353 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Gorgonzola?",
        "a": "Gorgonzola este o sursă excelentă de proteine — 21g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "cottage-cheese",
    "name": "Cottage Cheese",
    "nameGenitive": "cottage cheeseu",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 98,
    "protein": 11,
    "carbs": 3.4,
    "fat": 4.3,
    "fiber": 0,
    "title": "Calorii Cottage Cheese | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cottage Cheese: 98 kcal la 100g, 11g proteine, 3.4g carbohidrați, 4.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cottage Cheese — Valori Nutriționale la 100g",
    "intro": "Cottage Cheese este un produs lactat cu 98 kcal și 11g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cottage Cheese la 100g?",
        "a": "Cottage Cheese conține 98 kcal la 100g, cu 11g proteine, 3.4g carbohidrați, 4.3g grăsimi și 0g fibre."
      },
      {
        "q": "Este Cottage Cheese bun pentru slăbit?",
        "a": "Da! Cu doar 98 kcal la 100g, Cottage Cheese este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Cottage Cheese?",
        "a": "Cottage Cheese conține 11g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "halloumi",
    "name": "Halloumi",
    "nameGenitive": "halloumi-ului",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 321,
    "protein": 21,
    "carbs": 2,
    "fat": 25,
    "fiber": 0,
    "title": "Calorii Halloumi | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Halloumi: 321 kcal la 100g, 21g proteine, 2g carbohidrați, 25g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Halloumi — Valori Nutriționale la 100g",
    "intro": "Halloumi este un produs lactat cu 321 kcal și 21g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Halloumi la 100g?",
        "a": "Halloumi conține 321 kcal la 100g, cu 21g proteine, 2g carbohidrați, 25g grăsimi și 0g fibre."
      },
      {
        "q": "Este Halloumi bun pentru slăbit?",
        "a": "Halloumi este mai caloric (321 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Halloumi?",
        "a": "Halloumi este o sursă excelentă de proteine — 21g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "mascarpone",
    "name": "Mascarpone",
    "nameGenitive": "mascarponei",
    "category": "lactate",
    "categoryName": "Lactate și Ouă",
    "calories": 429,
    "protein": 4.5,
    "carbs": 4,
    "fat": 44,
    "fiber": 0,
    "title": "Calorii Mascarpone | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mascarpone: 429 kcal la 100g, 4.5g proteine, 4g carbohidrați, 44g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mascarpone — Valori Nutriționale la 100g",
    "intro": "Mascarpone este un produs lactat cu 429 kcal și 4.5g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.",
    "benefits": [
      "Sursă excelentă de calciu pentru oase și dinți sănătoși",
      "Conținut de vitamina D și B12 pentru sănătatea generală",
      "Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată",
      "Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă",
      "Furnizează fosfor, potasiu și riboflavină esențiale metabolismului"
    ],
    "howToEat": [
      "Consumat la micul dejun pentru un start proteic al zilei",
      "Adăugat în smoothie-uri pentru îmbogățire proteică",
      "Ca snack între mese pentru menținerea glicemiei stabile",
      "Combinat cu fructe sau nuci pentru o gustare echilibrată"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mascarpone la 100g?",
        "a": "Mascarpone conține 429 kcal la 100g, cu 4.5g proteine, 4g carbohidrați, 44g grăsimi și 0g fibre."
      },
      {
        "q": "Este Mascarpone bun pentru slăbit?",
        "a": "Mascarpone este mai caloric (429 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Mascarpone?",
        "a": "Mascarpone are 4.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "oua-intregi",
      "cascaval",
      "lapte-cocos"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "paine-alba",
    "name": "Pâine Albă",
    "nameGenitive": "pâinii albe",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 265,
    "protein": 9,
    "carbs": 49,
    "fat": 3,
    "fiber": 2.7,
    "title": "Calorii Pâine Albă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pâine Albă: 265 kcal la 100g, 9g proteine, 49g carbohidrați, 3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pâine Albă — Valori Nutriționale la 100g",
    "intro": "Pâine Albă furnizează energie susținută prin carbohidrații săi complecși — 49g la 100g. Cu 265 kcal și 2.7g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pâine Albă la 100g?",
        "a": "Pâine Albă conține 265 kcal la 100g, cu 9g proteine, 49g carbohidrați, 3g grăsimi și 2.7g fibre."
      },
      {
        "q": "Este Pâine Albă bun pentru slăbit?",
        "a": "Pâine Albă este mai caloric (265 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Pâine Albă?",
        "a": "Pâine Albă are 9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-integrala",
      "paste-integrale",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "paine-integrala",
    "name": "Pâine Integrală",
    "nameGenitive": "pâinii integrale",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 247,
    "protein": 13,
    "carbs": 41,
    "fat": 3.4,
    "fiber": 6.8,
    "title": "Calorii Pâine Integrală | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pâine Integrală: 247 kcal la 100g, 13g proteine, 41g carbohidrați, 3.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pâine Integrală — Valori Nutriționale la 100g",
    "intro": "Pâine Integrală furnizează energie susținută prin carbohidrații săi complecși — 41g la 100g. Cu 247 kcal și 6.8g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pâine Integrală la 100g?",
        "a": "Pâine Integrală conține 247 kcal la 100g, cu 13g proteine, 41g carbohidrați, 3.4g grăsimi și 6.8g fibre."
      },
      {
        "q": "Este Pâine Integrală bun pentru slăbit?",
        "a": "Pâine Integrală are un conținut caloric moderat (247 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Pâine Integrală?",
        "a": "Pâine Integrală conține 13g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-integrale",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "paine-secara",
    "name": "Pâine de Secară",
    "nameGenitive": "pâinii de secară",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 259,
    "protein": 8.5,
    "carbs": 48,
    "fat": 3.3,
    "fiber": 5.8,
    "title": "Calorii Pâine de Secară | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pâine de Secară: 259 kcal la 100g, 8.5g proteine, 48g carbohidrați, 3.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pâine de Secară — Valori Nutriționale la 100g",
    "intro": "Pâine de Secară furnizează energie susținută prin carbohidrații săi complecși — 48g la 100g. Cu 259 kcal și 5.8g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pâine de Secară la 100g?",
        "a": "Pâine de Secară conține 259 kcal la 100g, cu 8.5g proteine, 48g carbohidrați, 3.3g grăsimi și 5.8g fibre."
      },
      {
        "q": "Este Pâine de Secară bun pentru slăbit?",
        "a": "Pâine de Secară este mai caloric (259 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Pâine de Secară?",
        "a": "Pâine de Secară are 8.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-integrale",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "bagel",
    "name": "Bagel",
    "nameGenitive": "bagelului",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 245,
    "protein": 10,
    "carbs": 48,
    "fat": 1.6,
    "fiber": 2.1,
    "title": "Calorii Bagel | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Bagel: 245 kcal la 100g, 10g proteine, 48g carbohidrați, 1.6g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Bagel — Valori Nutriționale la 100g",
    "intro": "Bagel furnizează energie susținută prin carbohidrații săi complecși — 48g la 100g. Cu 245 kcal și 2.1g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Bagel la 100g?",
        "a": "Bagel conține 245 kcal la 100g, cu 10g proteine, 48g carbohidrați, 1.6g grăsimi și 2.1g fibre."
      },
      {
        "q": "Este Bagel bun pentru slăbit?",
        "a": "Bagel are un conținut caloric moderat (245 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Bagel?",
        "a": "Bagel are 10g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-integrale",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "croissant",
    "name": "Croissant",
    "nameGenitive": "croissantului",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 406,
    "protein": 8.2,
    "carbs": 46,
    "fat": 21,
    "fiber": 1.8,
    "title": "Calorii Croissant | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Croissant: 406 kcal la 100g, 8.2g proteine, 46g carbohidrați, 21g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Croissant — Valori Nutriționale la 100g",
    "intro": "Croissant furnizează energie susținută prin carbohidrații săi complecși — 46g la 100g. Cu 406 kcal și 1.8g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Croissant la 100g?",
        "a": "Croissant conține 406 kcal la 100g, cu 8.2g proteine, 46g carbohidrați, 21g grăsimi și 1.8g fibre."
      },
      {
        "q": "Este Croissant bun pentru slăbit?",
        "a": "Croissant este mai caloric (406 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Croissant?",
        "a": "Croissant are 8.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-integrale",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "orez-alb",
    "name": "Orez Alb Fiert",
    "nameGenitive": "orezului alb",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 130,
    "protein": 2.7,
    "carbs": 28,
    "fat": 0.3,
    "fiber": 0.4,
    "title": "Calorii Orez Alb Fiert | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Orez Alb Fiert: 130 kcal la 100g, 2.7g proteine, 28g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Orez Alb Fiert — Valori Nutriționale la 100g",
    "intro": "Orez Alb Fiert furnizează energie susținută prin carbohidrații săi complecși — 28g la 100g. Cu 130 kcal și 0.4g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Orez Alb Fiert la 100g?",
        "a": "Orez Alb Fiert conține 130 kcal la 100g, cu 2.7g proteine, 28g carbohidrați, 0.3g grăsimi și 0.4g fibre."
      },
      {
        "q": "Este Orez Alb Fiert bun pentru slăbit?",
        "a": "Orez Alb Fiert are un conținut caloric moderat (130 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Orez Alb Fiert?",
        "a": "Orez Alb Fiert are 2.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-integrale",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "orez-brun",
    "name": "Orez Brun Fiert",
    "nameGenitive": "orezului brun",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 112,
    "protein": 2.6,
    "carbs": 24,
    "fat": 0.9,
    "fiber": 1.8,
    "title": "Calorii Orez Brun Fiert | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Orez Brun Fiert: 112 kcal la 100g, 2.6g proteine, 24g carbohidrați, 0.9g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Orez Brun Fiert — Valori Nutriționale la 100g",
    "intro": "Orez Brun Fiert furnizează energie susținută prin carbohidrații săi complecși — 24g la 100g. Cu 112 kcal și 1.8g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Orez Brun Fiert la 100g?",
        "a": "Orez Brun Fiert conține 112 kcal la 100g, cu 2.6g proteine, 24g carbohidrați, 0.9g grăsimi și 1.8g fibre."
      },
      {
        "q": "Este Orez Brun Fiert bun pentru slăbit?",
        "a": "Orez Brun Fiert are un conținut caloric moderat (112 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Orez Brun Fiert?",
        "a": "Orez Brun Fiert are 2.6g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-integrale",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "orez-basmati",
    "name": "Orez Basmati Fiert",
    "nameGenitive": "orezului basmati",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 121,
    "protein": 2.5,
    "carbs": 26,
    "fat": 0.4,
    "fiber": 0.4,
    "title": "Calorii Orez Basmati Fiert | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Orez Basmati Fiert: 121 kcal la 100g, 2.5g proteine, 26g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Orez Basmati Fiert — Valori Nutriționale la 100g",
    "intro": "Orez Basmati Fiert furnizează energie susținută prin carbohidrații săi complecși — 26g la 100g. Cu 121 kcal și 0.4g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Orez Basmati Fiert la 100g?",
        "a": "Orez Basmati Fiert conține 121 kcal la 100g, cu 2.5g proteine, 26g carbohidrați, 0.4g grăsimi și 0.4g fibre."
      },
      {
        "q": "Este Orez Basmati Fiert bun pentru slăbit?",
        "a": "Orez Basmati Fiert are un conținut caloric moderat (121 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Orez Basmati Fiert?",
        "a": "Orez Basmati Fiert are 2.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-integrale",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "paste-albe",
    "name": "Paste Albe Fierte",
    "nameGenitive": "pastelor albe",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 158,
    "protein": 5.8,
    "carbs": 31,
    "fat": 0.9,
    "fiber": 1.8,
    "title": "Calorii Paste Albe Fierte | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Paste Albe Fierte: 158 kcal la 100g, 5.8g proteine, 31g carbohidrați, 0.9g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Paste Albe Fierte — Valori Nutriționale la 100g",
    "intro": "Paste Albe Fierte furnizează energie susținută prin carbohidrații săi complecși — 31g la 100g. Cu 158 kcal și 1.8g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Paste Albe Fierte la 100g?",
        "a": "Paste Albe Fierte conține 158 kcal la 100g, cu 5.8g proteine, 31g carbohidrați, 0.9g grăsimi și 1.8g fibre."
      },
      {
        "q": "Este Paste Albe Fierte bun pentru slăbit?",
        "a": "Paste Albe Fierte are un conținut caloric moderat (158 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Paste Albe Fierte?",
        "a": "Paste Albe Fierte are 5.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-integrale",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "paste-integrale",
    "name": "Paste Integrale Fierte",
    "nameGenitive": "pastelor integrale",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 149,
    "protein": 5.9,
    "carbs": 29,
    "fat": 1.1,
    "fiber": 4.5,
    "title": "Calorii Paste Integrale Fierte | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Paste Integrale Fierte: 149 kcal la 100g, 5.9g proteine, 29g carbohidrați, 1.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Paste Integrale Fierte — Valori Nutriționale la 100g",
    "intro": "Paste Integrale Fierte furnizează energie susținută prin carbohidrații săi complecși — 29g la 100g. Cu 149 kcal și 4.5g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Paste Integrale Fierte la 100g?",
        "a": "Paste Integrale Fierte conține 149 kcal la 100g, cu 5.9g proteine, 29g carbohidrați, 1.1g grăsimi și 4.5g fibre."
      },
      {
        "q": "Este Paste Integrale Fierte bun pentru slăbit?",
        "a": "Paste Integrale Fierte are un conținut caloric moderat (149 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Paste Integrale Fierte?",
        "a": "Paste Integrale Fierte are 5.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "fulgi-ovaz",
    "name": "Fulgi de Ovăz",
    "nameGenitive": "fulgilor de ovăz",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 389,
    "protein": 17,
    "carbs": 66,
    "fat": 7,
    "fiber": 11,
    "title": "Calorii Fulgi de Ovăz | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Fulgi de Ovăz: 389 kcal la 100g, 17g proteine, 66g carbohidrați, 7g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Fulgi de Ovăz — Valori Nutriționale la 100g",
    "intro": "Fulgi de Ovăz furnizează energie susținută prin carbohidrații săi complecși — 66g la 100g. Cu 389 kcal și 11g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Fulgi de Ovăz la 100g?",
        "a": "Fulgi de Ovăz conține 389 kcal la 100g, cu 17g proteine, 66g carbohidrați, 7g grăsimi și 11g fibre."
      },
      {
        "q": "Este Fulgi de Ovăz bun pentru slăbit?",
        "a": "Fulgi de Ovăz este mai caloric (389 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Fulgi de Ovăz?",
        "a": "Fulgi de Ovăz conține 17g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "ovaz-instant",
    "name": "Ovăz Instant",
    "nameGenitive": "ovăzului instant",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 355,
    "protein": 12,
    "carbs": 62,
    "fat": 6.5,
    "fiber": 8,
    "title": "Calorii Ovăz Instant | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ovăz Instant: 355 kcal la 100g, 12g proteine, 62g carbohidrați, 6.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ovăz Instant — Valori Nutriționale la 100g",
    "intro": "Ovăz Instant furnizează energie susținută prin carbohidrații săi complecși — 62g la 100g. Cu 355 kcal și 8g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ovăz Instant la 100g?",
        "a": "Ovăz Instant conține 355 kcal la 100g, cu 12g proteine, 62g carbohidrați, 6.5g grăsimi și 8g fibre."
      },
      {
        "q": "Este Ovăz Instant bun pentru slăbit?",
        "a": "Ovăz Instant este mai caloric (355 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Ovăz Instant?",
        "a": "Ovăz Instant conține 12g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "quinoa",
    "name": "Quinoa Fiartă",
    "nameGenitive": "quinoei fierte",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 120,
    "protein": 4.4,
    "carbs": 22,
    "fat": 1.9,
    "fiber": 2.8,
    "title": "Calorii Quinoa Fiartă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Quinoa Fiartă: 120 kcal la 100g, 4.4g proteine, 22g carbohidrați, 1.9g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Quinoa Fiartă — Valori Nutriționale la 100g",
    "intro": "Quinoa Fiartă furnizează energie susținută prin carbohidrații săi complecși — 22g la 100g. Cu 120 kcal și 2.8g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Quinoa Fiartă la 100g?",
        "a": "Quinoa Fiartă conține 120 kcal la 100g, cu 4.4g proteine, 22g carbohidrați, 1.9g grăsimi și 2.8g fibre."
      },
      {
        "q": "Este Quinoa Fiartă bun pentru slăbit?",
        "a": "Quinoa Fiartă are un conținut caloric moderat (120 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Quinoa Fiartă?",
        "a": "Quinoa Fiartă are 4.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "hrisca",
    "name": "Hrișcă Fiartă",
    "nameGenitive": "hrișcăi fierte",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 92,
    "protein": 3.4,
    "carbs": 20,
    "fat": 0.6,
    "fiber": 2.7,
    "title": "Calorii Hrișcă Fiartă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Hrișcă Fiartă: 92 kcal la 100g, 3.4g proteine, 20g carbohidrați, 0.6g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Hrișcă Fiartă — Valori Nutriționale la 100g",
    "intro": "Hrișcă Fiartă furnizează energie susținută prin carbohidrații săi complecși — 20g la 100g. Cu 92 kcal și 2.7g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Hrișcă Fiartă la 100g?",
        "a": "Hrișcă Fiartă conține 92 kcal la 100g, cu 3.4g proteine, 20g carbohidrați, 0.6g grăsimi și 2.7g fibre."
      },
      {
        "q": "Este Hrișcă Fiartă bun pentru slăbit?",
        "a": "Da! Cu doar 92 kcal la 100g, Hrișcă Fiartă este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Hrișcă Fiartă?",
        "a": "Hrișcă Fiartă are 3.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "mei",
    "name": "Mei Fiert",
    "nameGenitive": "meiului fiert",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 119,
    "protein": 3.5,
    "carbs": 23,
    "fat": 1,
    "fiber": 1.3,
    "title": "Calorii Mei Fiert | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mei Fiert: 119 kcal la 100g, 3.5g proteine, 23g carbohidrați, 1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mei Fiert — Valori Nutriționale la 100g",
    "intro": "Mei Fiert furnizează energie susținută prin carbohidrații săi complecși — 23g la 100g. Cu 119 kcal și 1.3g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mei Fiert la 100g?",
        "a": "Mei Fiert conține 119 kcal la 100g, cu 3.5g proteine, 23g carbohidrați, 1g grăsimi și 1.3g fibre."
      },
      {
        "q": "Este Mei Fiert bun pentru slăbit?",
        "a": "Mei Fiert are un conținut caloric moderat (119 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Mei Fiert?",
        "a": "Mei Fiert are 3.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "orz",
    "name": "Orz Fiert",
    "nameGenitive": "orzului fiert",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 123,
    "protein": 2.3,
    "carbs": 28,
    "fat": 0.4,
    "fiber": 6,
    "title": "Calorii Orz Fiert | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Orz Fiert: 123 kcal la 100g, 2.3g proteine, 28g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Orz Fiert — Valori Nutriționale la 100g",
    "intro": "Orz Fiert furnizează energie susținută prin carbohidrații săi complecși — 28g la 100g. Cu 123 kcal și 6g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Orz Fiert la 100g?",
        "a": "Orz Fiert conține 123 kcal la 100g, cu 2.3g proteine, 28g carbohidrați, 0.4g grăsimi și 6g fibre."
      },
      {
        "q": "Este Orz Fiert bun pentru slăbit?",
        "a": "Orz Fiert are un conținut caloric moderat (123 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Orz Fiert?",
        "a": "Orz Fiert are 2.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "couscous",
    "name": "Couscous Fiert",
    "nameGenitive": "couscousului fiert",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 112,
    "protein": 3.8,
    "carbs": 23,
    "fat": 0.2,
    "fiber": 1.4,
    "title": "Calorii Couscous Fiert | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Couscous Fiert: 112 kcal la 100g, 3.8g proteine, 23g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Couscous Fiert — Valori Nutriționale la 100g",
    "intro": "Couscous Fiert furnizează energie susținută prin carbohidrații săi complecși — 23g la 100g. Cu 112 kcal și 1.4g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Couscous Fiert la 100g?",
        "a": "Couscous Fiert conține 112 kcal la 100g, cu 3.8g proteine, 23g carbohidrați, 0.2g grăsimi și 1.4g fibre."
      },
      {
        "q": "Este Couscous Fiert bun pentru slăbit?",
        "a": "Couscous Fiert are un conținut caloric moderat (112 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Couscous Fiert?",
        "a": "Couscous Fiert are 3.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "porumb-fiert"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "porumb-fiert",
    "name": "Porumb Fiert",
    "nameGenitive": "porumbului fiert",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 96,
    "protein": 3.4,
    "carbs": 21,
    "fat": 1.5,
    "fiber": 2,
    "title": "Calorii Porumb Fiert | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Porumb Fiert: 96 kcal la 100g, 3.4g proteine, 21g carbohidrați, 1.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Porumb Fiert — Valori Nutriționale la 100g",
    "intro": "Porumb Fiert furnizează energie susținută prin carbohidrații săi complecși — 21g la 100g. Cu 96 kcal și 2g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Porumb Fiert la 100g?",
        "a": "Porumb Fiert conține 96 kcal la 100g, cu 3.4g proteine, 21g carbohidrați, 1.5g grăsimi și 2g fibre."
      },
      {
        "q": "Este Porumb Fiert bun pentru slăbit?",
        "a": "Da! Cu doar 96 kcal la 100g, Porumb Fiert este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Porumb Fiert?",
        "a": "Porumb Fiert are 3.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "couscous"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "mamaliga",
    "name": "Mămăligă",
    "nameGenitive": "mămăligii",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 100,
    "protein": 2,
    "carbs": 21,
    "fat": 0.5,
    "fiber": 1,
    "title": "Calorii Mămăligă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mămăligă: 100 kcal la 100g, 2g proteine, 21g carbohidrați, 0.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mămăligă — Valori Nutriționale la 100g",
    "intro": "Mămăligă furnizează energie susținută prin carbohidrații săi complecși — 21g la 100g. Cu 100 kcal și 1g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mămăligă la 100g?",
        "a": "Mămăligă conține 100 kcal la 100g, cu 2g proteine, 21g carbohidrați, 0.5g grăsimi și 1g fibre."
      },
      {
        "q": "Este Mămăligă bun pentru slăbit?",
        "a": "Mămăligă are un conținut caloric moderat (100 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Mămăligă?",
        "a": "Mămăligă are 2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "couscous"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "malai",
    "name": "Mălai",
    "nameGenitive": "mălaiului",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 362,
    "protein": 8,
    "carbs": 77,
    "fat": 3.9,
    "fiber": 5.2,
    "title": "Calorii Mălai | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mălai: 362 kcal la 100g, 8g proteine, 77g carbohidrați, 3.9g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mălai — Valori Nutriționale la 100g",
    "intro": "Mălai furnizează energie susținută prin carbohidrații săi complecși — 77g la 100g. Cu 362 kcal și 5.2g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mălai la 100g?",
        "a": "Mălai conține 362 kcal la 100g, cu 8g proteine, 77g carbohidrați, 3.9g grăsimi și 5.2g fibre."
      },
      {
        "q": "Este Mălai bun pentru slăbit?",
        "a": "Mălai este mai caloric (362 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Mălai?",
        "a": "Mălai are 8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "couscous"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "faina-alba",
    "name": "Făină Albă",
    "nameGenitive": "făinii albe",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 364,
    "protein": 10,
    "carbs": 76,
    "fat": 1,
    "fiber": 2.7,
    "title": "Calorii Făină Albă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Făină Albă: 364 kcal la 100g, 10g proteine, 76g carbohidrați, 1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Făină Albă — Valori Nutriționale la 100g",
    "intro": "Făină Albă furnizează energie susținută prin carbohidrații săi complecși — 76g la 100g. Cu 364 kcal și 2.7g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Făină Albă la 100g?",
        "a": "Făină Albă conține 364 kcal la 100g, cu 10g proteine, 76g carbohidrați, 1g grăsimi și 2.7g fibre."
      },
      {
        "q": "Este Făină Albă bun pentru slăbit?",
        "a": "Făină Albă este mai caloric (364 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Făină Albă?",
        "a": "Făină Albă are 10g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "couscous"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "faina-integrala",
    "name": "Făină Integrală",
    "nameGenitive": "făinii integrale",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 340,
    "protein": 13,
    "carbs": 72,
    "fat": 2,
    "fiber": 10.6,
    "title": "Calorii Făină Integrală | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Făină Integrală: 340 kcal la 100g, 13g proteine, 72g carbohidrați, 2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Făină Integrală — Valori Nutriționale la 100g",
    "intro": "Făină Integrală furnizează energie susținută prin carbohidrații săi complecși — 72g la 100g. Cu 340 kcal și 10.6g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Făină Integrală la 100g?",
        "a": "Făină Integrală conține 340 kcal la 100g, cu 13g proteine, 72g carbohidrați, 2g grăsimi și 10.6g fibre."
      },
      {
        "q": "Este Făină Integrală bun pentru slăbit?",
        "a": "Făină Integrală este mai caloric (340 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Făină Integrală?",
        "a": "Făină Integrală conține 13g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "couscous"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "gris",
    "name": "Griș",
    "nameGenitive": "grișului",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 360,
    "protein": 12,
    "carbs": 73,
    "fat": 1.1,
    "fiber": 3.9,
    "title": "Calorii Griș | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Griș: 360 kcal la 100g, 12g proteine, 73g carbohidrați, 1.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Griș — Valori Nutriționale la 100g",
    "intro": "Griș furnizează energie susținută prin carbohidrații săi complecși — 73g la 100g. Cu 360 kcal și 3.9g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Griș la 100g?",
        "a": "Griș conține 360 kcal la 100g, cu 12g proteine, 73g carbohidrați, 1.1g grăsimi și 3.9g fibre."
      },
      {
        "q": "Este Griș bun pentru slăbit?",
        "a": "Griș este mai caloric (360 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Griș?",
        "a": "Griș conține 12g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "couscous"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "biscuiti-graham",
    "name": "Biscuiți Graham",
    "nameGenitive": "biscuiților graham",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 418,
    "protein": 7,
    "carbs": 64,
    "fat": 15,
    "fiber": 3.7,
    "title": "Calorii Biscuiți Graham | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Biscuiți Graham: 418 kcal la 100g, 7g proteine, 64g carbohidrați, 15g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Biscuiți Graham — Valori Nutriționale la 100g",
    "intro": "Biscuiți Graham furnizează energie susținută prin carbohidrații săi complecși — 64g la 100g. Cu 418 kcal și 3.7g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Biscuiți Graham la 100g?",
        "a": "Biscuiți Graham conține 418 kcal la 100g, cu 7g proteine, 64g carbohidrați, 15g grăsimi și 3.7g fibre."
      },
      {
        "q": "Este Biscuiți Graham bun pentru slăbit?",
        "a": "Biscuiți Graham este mai caloric (418 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Biscuiți Graham?",
        "a": "Biscuiți Graham are 7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "couscous"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "crakeri",
    "name": "Crakeri",
    "nameGenitive": "crakerilor",
    "category": "cereale",
    "categoryName": "Cereale și Pâine",
    "calories": 430,
    "protein": 9.5,
    "carbs": 70,
    "fat": 13,
    "fiber": 3.2,
    "title": "Calorii Crakeri | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Crakeri: 430 kcal la 100g, 9.5g proteine, 70g carbohidrați, 13g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Crakeri — Valori Nutriționale la 100g",
    "intro": "Crakeri furnizează energie susținută prin carbohidrații săi complecși — 70g la 100g. Cu 430 kcal și 3.2g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.",
    "benefits": [
      "Sursă de carbohidrați complecși pentru energie susținută pe termen lung",
      "Fibre alimentare pentru sănătatea digestivă și controlul glicemiei",
      "Vitamina E și vitaminele din complexul B pentru metabolism energetic",
      "Minerale esențiale: magneziu, zinc, fier și fosfor",
      "Sațietate prelungită prin conținut de fibre și amidon rezistent"
    ],
    "howToEat": [
      "Ca bază pentru mese, combinat cu proteine și legume pentru echilibru",
      "În mic dejun cu fructe proaspete și iaurt pentru energie matinală",
      "Porții de 60-80g (uscat) sau 150-200g (fiert) per masă",
      "Preparat integral când este posibil pentru mai multe fibre și micronutrienți"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Crakeri la 100g?",
        "a": "Crakeri conține 430 kcal la 100g, cu 9.5g proteine, 70g carbohidrați, 13g grăsimi și 3.2g fibre."
      },
      {
        "q": "Este Crakeri bun pentru slăbit?",
        "a": "Crakeri este mai caloric (430 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Crakeri?",
        "a": "Crakeri are 9.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "paine-alba",
      "paste-albe",
      "couscous"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "broccoli",
    "name": "Broccoli",
    "nameGenitive": "broccoliului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 34,
    "protein": 2.8,
    "carbs": 7,
    "fat": 0.4,
    "fiber": 2.6,
    "title": "Calorii Broccoli | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Broccoli: 34 kcal la 100g, 2.8g proteine, 7g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Broccoli — Valori Nutriționale la 100g",
    "intro": "Broccoli este o legumă cu valoare calorică mică — doar 34 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2.6g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Broccoli la 100g?",
        "a": "Broccoli conține 34 kcal la 100g, cu 2.8g proteine, 7g carbohidrați, 0.4g grăsimi și 2.6g fibre."
      },
      {
        "q": "Este Broccoli bun pentru slăbit?",
        "a": "Da! Cu doar 34 kcal la 100g, Broccoli este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Broccoli?",
        "a": "Broccoli are 2.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "spanac",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "spanac",
    "name": "Spanac",
    "nameGenitive": "spanacului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 23,
    "protein": 2.9,
    "carbs": 3.6,
    "fat": 0.4,
    "fiber": 2.2,
    "title": "Calorii Spanac | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Spanac: 23 kcal la 100g, 2.9g proteine, 3.6g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Spanac — Valori Nutriționale la 100g",
    "intro": "Spanac este o legumă cu valoare calorică mică — doar 23 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2.2g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Spanac la 100g?",
        "a": "Spanac conține 23 kcal la 100g, cu 2.9g proteine, 3.6g carbohidrați, 0.4g grăsimi și 2.2g fibre."
      },
      {
        "q": "Este Spanac bun pentru slăbit?",
        "a": "Da! Cu doar 23 kcal la 100g, Spanac este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Spanac?",
        "a": "Spanac are 2.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "salata-verde",
    "name": "Salată Verde",
    "nameGenitive": "salatei verzi",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 15,
    "protein": 1.4,
    "carbs": 2.9,
    "fat": 0.2,
    "fiber": 1.3,
    "title": "Calorii Salată Verde | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Salată Verde: 15 kcal la 100g, 1.4g proteine, 2.9g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Salată Verde — Valori Nutriționale la 100g",
    "intro": "Salată Verde este o legumă cu valoare calorică mică — doar 15 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 1.3g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Salată Verde la 100g?",
        "a": "Salată Verde conține 15 kcal la 100g, cu 1.4g proteine, 2.9g carbohidrați, 0.2g grăsimi și 1.3g fibre."
      },
      {
        "q": "Este Salată Verde bun pentru slăbit?",
        "a": "Da! Cu doar 15 kcal la 100g, Salată Verde este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Salată Verde?",
        "a": "Salată Verde are 1.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "rosii",
    "name": "Roșii",
    "nameGenitive": "roșiilor",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 18,
    "protein": 0.9,
    "carbs": 3.9,
    "fat": 0.2,
    "fiber": 1.2,
    "title": "Calorii Roșii | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Roșii: 18 kcal la 100g, 0.9g proteine, 3.9g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Roșii — Valori Nutriționale la 100g",
    "intro": "Roșii este o legumă cu valoare calorică mică — doar 18 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 1.2g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Roșii la 100g?",
        "a": "Roșii conține 18 kcal la 100g, cu 0.9g proteine, 3.9g carbohidrați, 0.2g grăsimi și 1.2g fibre."
      },
      {
        "q": "Este Roșii bun pentru slăbit?",
        "a": "Da! Cu doar 18 kcal la 100g, Roșii este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Roșii?",
        "a": "Roșii are 0.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "castraveti",
    "name": "Castraveți",
    "nameGenitive": "castraveților",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 16,
    "protein": 0.7,
    "carbs": 3.6,
    "fat": 0.1,
    "fiber": 0.5,
    "title": "Calorii Castraveți | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Castraveți: 16 kcal la 100g, 0.7g proteine, 3.6g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Castraveți — Valori Nutriționale la 100g",
    "intro": "Castraveți este o legumă cu valoare calorică mică — doar 16 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 0.5g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Castraveți la 100g?",
        "a": "Castraveți conține 16 kcal la 100g, cu 0.7g proteine, 3.6g carbohidrați, 0.1g grăsimi și 0.5g fibre."
      },
      {
        "q": "Este Castraveți bun pentru slăbit?",
        "a": "Da! Cu doar 16 kcal la 100g, Castraveți este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Castraveți?",
        "a": "Castraveți are 0.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "ardei-rosu",
    "name": "Ardei Roșu",
    "nameGenitive": "ardeiului roșu",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 31,
    "protein": 1,
    "carbs": 7.2,
    "fat": 0.3,
    "fiber": 2.1,
    "title": "Calorii Ardei Roșu | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ardei Roșu: 31 kcal la 100g, 1g proteine, 7.2g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ardei Roșu — Valori Nutriționale la 100g",
    "intro": "Ardei Roșu este o legumă cu valoare calorică mică — doar 31 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2.1g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ardei Roșu la 100g?",
        "a": "Ardei Roșu conține 31 kcal la 100g, cu 1g proteine, 7.2g carbohidrați, 0.3g grăsimi și 2.1g fibre."
      },
      {
        "q": "Este Ardei Roșu bun pentru slăbit?",
        "a": "Da! Cu doar 31 kcal la 100g, Ardei Roșu este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Ardei Roșu?",
        "a": "Ardei Roșu are 1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "ardei-verde",
    "name": "Ardei Verde",
    "nameGenitive": "ardeiului verde",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 20,
    "protein": 0.9,
    "carbs": 4.6,
    "fat": 0.2,
    "fiber": 1.7,
    "title": "Calorii Ardei Verde | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ardei Verde: 20 kcal la 100g, 0.9g proteine, 4.6g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ardei Verde — Valori Nutriționale la 100g",
    "intro": "Ardei Verde este o legumă cu valoare calorică mică — doar 20 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 1.7g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ardei Verde la 100g?",
        "a": "Ardei Verde conține 20 kcal la 100g, cu 0.9g proteine, 4.6g carbohidrați, 0.2g grăsimi și 1.7g fibre."
      },
      {
        "q": "Este Ardei Verde bun pentru slăbit?",
        "a": "Da! Cu doar 20 kcal la 100g, Ardei Verde este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Ardei Verde?",
        "a": "Ardei Verde are 0.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "morcovi",
    "name": "Morcovi",
    "nameGenitive": "morcovilor",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 41,
    "protein": 0.9,
    "carbs": 9.6,
    "fat": 0.2,
    "fiber": 2.8,
    "title": "Calorii Morcovi | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Morcovi: 41 kcal la 100g, 0.9g proteine, 9.6g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Morcovi — Valori Nutriționale la 100g",
    "intro": "Morcovi este o legumă cu valoare calorică mică — doar 41 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2.8g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Morcovi la 100g?",
        "a": "Morcovi conține 41 kcal la 100g, cu 0.9g proteine, 9.6g carbohidrați, 0.2g grăsimi și 2.8g fibre."
      },
      {
        "q": "Este Morcovi bun pentru slăbit?",
        "a": "Da! Cu doar 41 kcal la 100g, Morcovi este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Morcovi?",
        "a": "Morcovi are 0.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "telina",
    "name": "Țelină",
    "nameGenitive": "țelinei",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 26,
    "protein": 1.5,
    "carbs": 4,
    "fat": 0.3,
    "fiber": 1.8,
    "title": "Calorii Țelină | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Țelină: 26 kcal la 100g, 1.5g proteine, 4g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Țelină — Valori Nutriționale la 100g",
    "intro": "Țelină este o legumă cu valoare calorică mică — doar 26 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 1.8g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Țelină la 100g?",
        "a": "Țelină conține 26 kcal la 100g, cu 1.5g proteine, 4g carbohidrați, 0.3g grăsimi și 1.8g fibre."
      },
      {
        "q": "Este Țelină bun pentru slăbit?",
        "a": "Da! Cu doar 26 kcal la 100g, Țelină este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Țelină?",
        "a": "Țelină are 1.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "ceapa",
    "name": "Ceapă",
    "nameGenitive": "cepei",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 40,
    "protein": 1.1,
    "carbs": 9.3,
    "fat": 0.1,
    "fiber": 1.7,
    "title": "Calorii Ceapă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ceapă: 40 kcal la 100g, 1.1g proteine, 9.3g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ceapă — Valori Nutriționale la 100g",
    "intro": "Ceapă este o legumă cu valoare calorică mică — doar 40 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 1.7g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ceapă la 100g?",
        "a": "Ceapă conține 40 kcal la 100g, cu 1.1g proteine, 9.3g carbohidrați, 0.1g grăsimi și 1.7g fibre."
      },
      {
        "q": "Este Ceapă bun pentru slăbit?",
        "a": "Da! Cu doar 40 kcal la 100g, Ceapă este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Ceapă?",
        "a": "Ceapă are 1.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "usturoi",
    "name": "Usturoi",
    "nameGenitive": "usturoiului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 149,
    "protein": 6.4,
    "carbs": 33,
    "fat": 0.5,
    "fiber": 2.1,
    "title": "Calorii Usturoi | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Usturoi: 149 kcal la 100g, 6.4g proteine, 33g carbohidrați, 0.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Usturoi — Valori Nutriționale la 100g",
    "intro": "Usturoi este o legumă cu valoare calorică mică — doar 149 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2.1g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Usturoi la 100g?",
        "a": "Usturoi conține 149 kcal la 100g, cu 6.4g proteine, 33g carbohidrați, 0.5g grăsimi și 2.1g fibre."
      },
      {
        "q": "Este Usturoi bun pentru slăbit?",
        "a": "Usturoi are un conținut caloric moderat (149 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Usturoi?",
        "a": "Usturoi are 6.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "cartofi",
    "name": "Cartofi",
    "nameGenitive": "cartofilor",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 77,
    "protein": 2,
    "carbs": 17,
    "fat": 0.1,
    "fiber": 2.2,
    "title": "Calorii Cartofi | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cartofi: 77 kcal la 100g, 2g proteine, 17g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cartofi — Valori Nutriționale la 100g",
    "intro": "Cartofi este o legumă cu valoare calorică mică — doar 77 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2.2g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cartofi la 100g?",
        "a": "Cartofi conține 77 kcal la 100g, cu 2g proteine, 17g carbohidrați, 0.1g grăsimi și 2.2g fibre."
      },
      {
        "q": "Este Cartofi bun pentru slăbit?",
        "a": "Da! Cu doar 77 kcal la 100g, Cartofi este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Cartofi?",
        "a": "Cartofi are 2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi-dulci",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "cartofi-dulci",
    "name": "Cartofi Dulci",
    "nameGenitive": "cartofilor dulci",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 86,
    "protein": 1.6,
    "carbs": 20,
    "fat": 0.1,
    "fiber": 3,
    "title": "Calorii Cartofi Dulci | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cartofi Dulci: 86 kcal la 100g, 1.6g proteine, 20g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cartofi Dulci — Valori Nutriționale la 100g",
    "intro": "Cartofi Dulci este o legumă cu valoare calorică mică — doar 86 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 3g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cartofi Dulci la 100g?",
        "a": "Cartofi Dulci conține 86 kcal la 100g, cu 1.6g proteine, 20g carbohidrați, 0.1g grăsimi și 3g fibre."
      },
      {
        "q": "Este Cartofi Dulci bun pentru slăbit?",
        "a": "Da! Cu doar 86 kcal la 100g, Cartofi Dulci este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Cartofi Dulci?",
        "a": "Cartofi Dulci are 1.6g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "dovleac",
    "name": "Dovleac",
    "nameGenitive": "dovleacului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 26,
    "protein": 1,
    "carbs": 6.5,
    "fat": 0.1,
    "fiber": 0.5,
    "title": "Calorii Dovleac | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Dovleac: 26 kcal la 100g, 1g proteine, 6.5g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Dovleac — Valori Nutriționale la 100g",
    "intro": "Dovleac este o legumă cu valoare calorică mică — doar 26 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 0.5g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Dovleac la 100g?",
        "a": "Dovleac conține 26 kcal la 100g, cu 1g proteine, 6.5g carbohidrați, 0.1g grăsimi și 0.5g fibre."
      },
      {
        "q": "Este Dovleac bun pentru slăbit?",
        "a": "Da! Cu doar 26 kcal la 100g, Dovleac este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Dovleac?",
        "a": "Dovleac are 1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "zucchini",
    "name": "Zucchini",
    "nameGenitive": "zucchini-ului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 17,
    "protein": 1.2,
    "carbs": 3.1,
    "fat": 0.3,
    "fiber": 1,
    "title": "Calorii Zucchini | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Zucchini: 17 kcal la 100g, 1.2g proteine, 3.1g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Zucchini — Valori Nutriționale la 100g",
    "intro": "Zucchini este o legumă cu valoare calorică mică — doar 17 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 1g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Zucchini la 100g?",
        "a": "Zucchini conține 17 kcal la 100g, cu 1.2g proteine, 3.1g carbohidrați, 0.3g grăsimi și 1g fibre."
      },
      {
        "q": "Este Zucchini bun pentru slăbit?",
        "a": "Da! Cu doar 17 kcal la 100g, Zucchini este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Zucchini?",
        "a": "Zucchini are 1.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "vinete",
    "name": "Vinete",
    "nameGenitive": "vinetelor",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 25,
    "protein": 1,
    "carbs": 6,
    "fat": 0.2,
    "fiber": 3,
    "title": "Calorii Vinete | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Vinete: 25 kcal la 100g, 1g proteine, 6g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Vinete — Valori Nutriționale la 100g",
    "intro": "Vinete este o legumă cu valoare calorică mică — doar 25 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 3g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Vinete la 100g?",
        "a": "Vinete conține 25 kcal la 100g, cu 1g proteine, 6g carbohidrați, 0.2g grăsimi și 3g fibre."
      },
      {
        "q": "Este Vinete bun pentru slăbit?",
        "a": "Da! Cu doar 25 kcal la 100g, Vinete este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Vinete?",
        "a": "Vinete are 1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "ciuperci",
    "name": "Ciuperci",
    "nameGenitive": "ciupercilor",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 22,
    "protein": 3.1,
    "carbs": 3.3,
    "fat": 0.3,
    "fiber": 1,
    "title": "Calorii Ciuperci | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ciuperci: 22 kcal la 100g, 3.1g proteine, 3.3g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ciuperci — Valori Nutriționale la 100g",
    "intro": "Ciuperci este o legumă cu valoare calorică mică — doar 22 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 1g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ciuperci la 100g?",
        "a": "Ciuperci conține 22 kcal la 100g, cu 3.1g proteine, 3.3g carbohidrați, 0.3g grăsimi și 1g fibre."
      },
      {
        "q": "Este Ciuperci bun pentru slăbit?",
        "a": "Da! Cu doar 22 kcal la 100g, Ciuperci este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Ciuperci?",
        "a": "Ciuperci are 3.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "mazare",
    "name": "Mazăre",
    "nameGenitive": "mazărei",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 81,
    "protein": 5.4,
    "carbs": 14,
    "fat": 0.4,
    "fiber": 5.1,
    "title": "Calorii Mazăre | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mazăre: 81 kcal la 100g, 5.4g proteine, 14g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mazăre — Valori Nutriționale la 100g",
    "intro": "Mazăre este o legumă cu valoare calorică mică — doar 81 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 5.1g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mazăre la 100g?",
        "a": "Mazăre conține 81 kcal la 100g, cu 5.4g proteine, 14g carbohidrați, 0.4g grăsimi și 5.1g fibre."
      },
      {
        "q": "Este Mazăre bun pentru slăbit?",
        "a": "Da! Cu doar 81 kcal la 100g, Mazăre este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Mazăre?",
        "a": "Mazăre are 5.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "fasole-verde",
    "name": "Fasole Verde",
    "nameGenitive": "fasolei verzi",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 31,
    "protein": 1.8,
    "carbs": 7,
    "fat": 0.1,
    "fiber": 3.4,
    "title": "Calorii Fasole Verde | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Fasole Verde: 31 kcal la 100g, 1.8g proteine, 7g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Fasole Verde — Valori Nutriționale la 100g",
    "intro": "Fasole Verde este o legumă cu valoare calorică mică — doar 31 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 3.4g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Fasole Verde la 100g?",
        "a": "Fasole Verde conține 31 kcal la 100g, cu 1.8g proteine, 7g carbohidrați, 0.1g grăsimi și 3.4g fibre."
      },
      {
        "q": "Este Fasole Verde bun pentru slăbit?",
        "a": "Da! Cu doar 31 kcal la 100g, Fasole Verde este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Fasole Verde?",
        "a": "Fasole Verde are 1.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "linte",
    "name": "Linte Fiartă",
    "nameGenitive": "lintei fierte",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 116,
    "protein": 9,
    "carbs": 20,
    "fat": 0.4,
    "fiber": 7.9,
    "title": "Calorii Linte Fiartă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Linte Fiartă: 116 kcal la 100g, 9g proteine, 20g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Linte Fiartă — Valori Nutriționale la 100g",
    "intro": "Linte Fiartă este o legumă cu valoare calorică mică — doar 116 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 7.9g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Linte Fiartă la 100g?",
        "a": "Linte Fiartă conține 116 kcal la 100g, cu 9g proteine, 20g carbohidrați, 0.4g grăsimi și 7.9g fibre."
      },
      {
        "q": "Este Linte Fiartă bun pentru slăbit?",
        "a": "Linte Fiartă are un conținut caloric moderat (116 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Linte Fiartă?",
        "a": "Linte Fiartă are 9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "naut",
    "name": "Năut Fiert",
    "nameGenitive": "năutului fiert",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 164,
    "protein": 9,
    "carbs": 27,
    "fat": 2.6,
    "fiber": 7.6,
    "title": "Calorii Năut Fiert | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Năut Fiert: 164 kcal la 100g, 9g proteine, 27g carbohidrați, 2.6g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Năut Fiert — Valori Nutriționale la 100g",
    "intro": "Năut Fiert este o legumă cu valoare calorică mică — doar 164 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 7.6g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Năut Fiert la 100g?",
        "a": "Năut Fiert conține 164 kcal la 100g, cu 9g proteine, 27g carbohidrați, 2.6g grăsimi și 7.6g fibre."
      },
      {
        "q": "Este Năut Fiert bun pentru slăbit?",
        "a": "Năut Fiert are un conținut caloric moderat (164 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Năut Fiert?",
        "a": "Năut Fiert are 9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "fasole-boabe",
    "name": "Fasole Boabe Fiartă",
    "nameGenitive": "fasolei boabe",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 127,
    "protein": 8.7,
    "carbs": 23,
    "fat": 0.5,
    "fiber": 6.4,
    "title": "Calorii Fasole Boabe Fiartă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Fasole Boabe Fiartă: 127 kcal la 100g, 8.7g proteine, 23g carbohidrați, 0.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Fasole Boabe Fiartă — Valori Nutriționale la 100g",
    "intro": "Fasole Boabe Fiartă este o legumă cu valoare calorică mică — doar 127 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 6.4g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Fasole Boabe Fiartă la 100g?",
        "a": "Fasole Boabe Fiartă conține 127 kcal la 100g, cu 8.7g proteine, 23g carbohidrați, 0.5g grăsimi și 6.4g fibre."
      },
      {
        "q": "Este Fasole Boabe Fiartă bun pentru slăbit?",
        "a": "Fasole Boabe Fiartă are un conținut caloric moderat (127 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Fasole Boabe Fiartă?",
        "a": "Fasole Boabe Fiartă are 8.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "porumb",
    "name": "Porumb (Boabe)",
    "nameGenitive": "porumbului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 96,
    "protein": 3.4,
    "carbs": 21,
    "fat": 1.5,
    "fiber": 2,
    "title": "Calorii Porumb (Boabe) | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Porumb (Boabe): 96 kcal la 100g, 3.4g proteine, 21g carbohidrați, 1.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Porumb (Boabe) — Valori Nutriționale la 100g",
    "intro": "Porumb (Boabe) este o legumă cu valoare calorică mică — doar 96 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Porumb (Boabe) la 100g?",
        "a": "Porumb (Boabe) conține 96 kcal la 100g, cu 3.4g proteine, 21g carbohidrați, 1.5g grăsimi și 2g fibre."
      },
      {
        "q": "Este Porumb (Boabe) bun pentru slăbit?",
        "a": "Da! Cu doar 96 kcal la 100g, Porumb (Boabe) este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Porumb (Boabe)?",
        "a": "Porumb (Boabe) are 3.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "varza"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "varza",
    "name": "Varză",
    "nameGenitive": "verzei",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 25,
    "protein": 1.3,
    "carbs": 5.8,
    "fat": 0.1,
    "fiber": 2.5,
    "title": "Calorii Varză | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Varză: 25 kcal la 100g, 1.3g proteine, 5.8g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Varză — Valori Nutriționale la 100g",
    "intro": "Varză este o legumă cu valoare calorică mică — doar 25 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2.5g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Varză la 100g?",
        "a": "Varză conține 25 kcal la 100g, cu 1.3g proteine, 5.8g carbohidrați, 0.1g grăsimi și 2.5g fibre."
      },
      {
        "q": "Este Varză bun pentru slăbit?",
        "a": "Da! Cu doar 25 kcal la 100g, Varză este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Varză?",
        "a": "Varză are 1.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "conopida",
    "name": "Conopidă",
    "nameGenitive": "conopidei",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 25,
    "protein": 1.9,
    "carbs": 5,
    "fat": 0.3,
    "fiber": 2,
    "title": "Calorii Conopidă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Conopidă: 25 kcal la 100g, 1.9g proteine, 5g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Conopidă — Valori Nutriționale la 100g",
    "intro": "Conopidă este o legumă cu valoare calorică mică — doar 25 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Conopidă la 100g?",
        "a": "Conopidă conține 25 kcal la 100g, cu 1.9g proteine, 5g carbohidrați, 0.3g grăsimi și 2g fibre."
      },
      {
        "q": "Este Conopidă bun pentru slăbit?",
        "a": "Da! Cu doar 25 kcal la 100g, Conopidă este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Conopidă?",
        "a": "Conopidă are 1.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "gulii",
    "name": "Gulii",
    "nameGenitive": "guliilor",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 27,
    "protein": 1.7,
    "carbs": 6.2,
    "fat": 0.1,
    "fiber": 3.6,
    "title": "Calorii Gulii | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Gulii: 27 kcal la 100g, 1.7g proteine, 6.2g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Gulii — Valori Nutriționale la 100g",
    "intro": "Gulii este o legumă cu valoare calorică mică — doar 27 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 3.6g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Gulii la 100g?",
        "a": "Gulii conține 27 kcal la 100g, cu 1.7g proteine, 6.2g carbohidrați, 0.1g grăsimi și 3.6g fibre."
      },
      {
        "q": "Este Gulii bun pentru slăbit?",
        "a": "Da! Cu doar 27 kcal la 100g, Gulii este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Gulii?",
        "a": "Gulii are 1.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "ridichi",
    "name": "Ridichi",
    "nameGenitive": "ridichilor",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 16,
    "protein": 0.7,
    "carbs": 3.4,
    "fat": 0.1,
    "fiber": 1.6,
    "title": "Calorii Ridichi | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ridichi: 16 kcal la 100g, 0.7g proteine, 3.4g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ridichi — Valori Nutriționale la 100g",
    "intro": "Ridichi este o legumă cu valoare calorică mică — doar 16 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 1.6g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ridichi la 100g?",
        "a": "Ridichi conține 16 kcal la 100g, cu 0.7g proteine, 3.4g carbohidrați, 0.1g grăsimi și 1.6g fibre."
      },
      {
        "q": "Este Ridichi bun pentru slăbit?",
        "a": "Da! Cu doar 16 kcal la 100g, Ridichi este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Ridichi?",
        "a": "Ridichi are 0.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "sfecla",
    "name": "Sfeclă Roșie",
    "nameGenitive": "sfeclei roșii",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 43,
    "protein": 1.6,
    "carbs": 10,
    "fat": 0.2,
    "fiber": 2.8,
    "title": "Calorii Sfeclă Roșie | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Sfeclă Roșie: 43 kcal la 100g, 1.6g proteine, 10g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Sfeclă Roșie — Valori Nutriționale la 100g",
    "intro": "Sfeclă Roșie este o legumă cu valoare calorică mică — doar 43 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2.8g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Sfeclă Roșie la 100g?",
        "a": "Sfeclă Roșie conține 43 kcal la 100g, cu 1.6g proteine, 10g carbohidrați, 0.2g grăsimi și 2.8g fibre."
      },
      {
        "q": "Este Sfeclă Roșie bun pentru slăbit?",
        "a": "Da! Cu doar 43 kcal la 100g, Sfeclă Roșie este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Sfeclă Roșie?",
        "a": "Sfeclă Roșie are 1.6g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "pastarnac",
    "name": "Păstârnac",
    "nameGenitive": "păstârnacului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 75,
    "protein": 1.2,
    "carbs": 18,
    "fat": 0.3,
    "fiber": 4.9,
    "title": "Calorii Păstârnac | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Păstârnac: 75 kcal la 100g, 1.2g proteine, 18g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Păstârnac — Valori Nutriționale la 100g",
    "intro": "Păstârnac este o legumă cu valoare calorică mică — doar 75 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 4.9g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Păstârnac la 100g?",
        "a": "Păstârnac conține 75 kcal la 100g, cu 1.2g proteine, 18g carbohidrați, 0.3g grăsimi și 4.9g fibre."
      },
      {
        "q": "Este Păstârnac bun pentru slăbit?",
        "a": "Da! Cu doar 75 kcal la 100g, Păstârnac este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Păstârnac?",
        "a": "Păstârnac are 1.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "sparanghel",
    "name": "Sparanghel",
    "nameGenitive": "sparanghelului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 20,
    "protein": 2.2,
    "carbs": 3.9,
    "fat": 0.1,
    "fiber": 2.1,
    "title": "Calorii Sparanghel | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Sparanghel: 20 kcal la 100g, 2.2g proteine, 3.9g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Sparanghel — Valori Nutriționale la 100g",
    "intro": "Sparanghel este o legumă cu valoare calorică mică — doar 20 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 2.1g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Sparanghel la 100g?",
        "a": "Sparanghel conține 20 kcal la 100g, cu 2.2g proteine, 3.9g carbohidrați, 0.1g grăsimi și 2.1g fibre."
      },
      {
        "q": "Este Sparanghel bun pentru slăbit?",
        "a": "Da! Cu doar 20 kcal la 100g, Sparanghel este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Sparanghel?",
        "a": "Sparanghel are 2.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "avocado",
    "name": "Avocado",
    "nameGenitive": "avocadoului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 160,
    "protein": 2,
    "carbs": 9,
    "fat": 15,
    "fiber": 7,
    "title": "Calorii Avocado | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Avocado: 160 kcal la 100g, 2g proteine, 9g carbohidrați, 15g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Avocado — Valori Nutriționale la 100g",
    "intro": "Avocado este o legumă cu valoare calorică mică — doar 160 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 7g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Avocado la 100g?",
        "a": "Avocado conține 160 kcal la 100g, cu 2g proteine, 9g carbohidrați, 15g grăsimi și 7g fibre."
      },
      {
        "q": "Este Avocado bun pentru slăbit?",
        "a": "Avocado are un conținut caloric moderat (160 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Avocado?",
        "a": "Avocado are 2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "masline",
    "name": "Măsline",
    "nameGenitive": "măslinelor",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 145,
    "protein": 1,
    "carbs": 3.8,
    "fat": 15,
    "fiber": 3.2,
    "title": "Calorii Măsline | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Măsline: 145 kcal la 100g, 1g proteine, 3.8g carbohidrați, 15g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Măsline — Valori Nutriționale la 100g",
    "intro": "Măsline este o legumă cu valoare calorică mică — doar 145 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 3.2g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Măsline la 100g?",
        "a": "Măsline conține 145 kcal la 100g, cu 1g proteine, 3.8g carbohidrați, 15g grăsimi și 3.2g fibre."
      },
      {
        "q": "Este Măsline bun pentru slăbit?",
        "a": "Măsline are un conținut caloric moderat (145 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Măsline?",
        "a": "Măsline are 1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "anghinare",
    "name": "Anghinare",
    "nameGenitive": "anghinărei",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 47,
    "protein": 3.3,
    "carbs": 11,
    "fat": 0.2,
    "fiber": 5.4,
    "title": "Calorii Anghinare | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Anghinare: 47 kcal la 100g, 3.3g proteine, 11g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Anghinare — Valori Nutriționale la 100g",
    "intro": "Anghinare este o legumă cu valoare calorică mică — doar 47 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 5.4g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Anghinare la 100g?",
        "a": "Anghinare conține 47 kcal la 100g, cu 3.3g proteine, 11g carbohidrați, 0.2g grăsimi și 5.4g fibre."
      },
      {
        "q": "Este Anghinare bun pentru slăbit?",
        "a": "Da! Cu doar 47 kcal la 100g, Anghinare este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Anghinare?",
        "a": "Anghinare are 3.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "fenicul",
    "name": "Fenicul",
    "nameGenitive": "feniculului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 31,
    "protein": 1.2,
    "carbs": 7.3,
    "fat": 0.2,
    "fiber": 3.1,
    "title": "Calorii Fenicul | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Fenicul: 31 kcal la 100g, 1.2g proteine, 7.3g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Fenicul — Valori Nutriționale la 100g",
    "intro": "Fenicul este o legumă cu valoare calorică mică — doar 31 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 3.1g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Fenicul la 100g?",
        "a": "Fenicul conține 31 kcal la 100g, cu 1.2g proteine, 7.3g carbohidrați, 0.2g grăsimi și 3.1g fibre."
      },
      {
        "q": "Este Fenicul bun pentru slăbit?",
        "a": "Da! Cu doar 31 kcal la 100g, Fenicul este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Fenicul?",
        "a": "Fenicul are 1.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "praz",
    "name": "Praz",
    "nameGenitive": "prazului",
    "category": "legume",
    "categoryName": "Legume",
    "calories": 61,
    "protein": 1.5,
    "carbs": 14,
    "fat": 0.3,
    "fiber": 1.8,
    "title": "Calorii Praz | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Praz: 61 kcal la 100g, 1.5g proteine, 14g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Praz — Valori Nutriționale la 100g",
    "intro": "Praz este o legumă cu valoare calorică mică — doar 61 kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu 1.8g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.",
    "benefits": [
      "Conținut scăzut de calorii cu densitate nutritivă ridicată",
      "Bogat în fibre alimentare pentru sănătatea microbiomului intestinal",
      "Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)",
      "Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii",
      "Hidratare naturală datorată conținutului ridicat de apă"
    ],
    "howToEat": [
      "Crude sau lightly steamed pentru reținerea maximă a vitaminelor",
      "Jumătate din farfurie ar trebui să fie legume la fiecare masă principală",
      "Variate cromatic pentru un spectru larg de fitochimicale",
      "Adăugate în supe, tocane, salate sau mâncate ca garnitură"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Praz la 100g?",
        "a": "Praz conține 61 kcal la 100g, cu 1.5g proteine, 14g carbohidrați, 0.3g grăsimi și 1.8g fibre."
      },
      {
        "q": "Este Praz bun pentru slăbit?",
        "a": "Da! Cu doar 61 kcal la 100g, Praz este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Praz?",
        "a": "Praz are 1.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "broccoli",
      "cartofi",
      "porumb"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "mere",
    "name": "Mere",
    "nameGenitive": "merelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 52,
    "protein": 0.3,
    "carbs": 14,
    "fat": 0.2,
    "fiber": 2.4,
    "title": "Calorii Mere | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mere: 52 kcal la 100g, 0.3g proteine, 14g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mere — Valori Nutriționale la 100g",
    "intro": "Mere conține 52 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 2.4g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mere la 100g?",
        "a": "Mere conține 52 kcal la 100g, cu 0.3g proteine, 14g carbohidrați, 0.2g grăsimi și 2.4g fibre."
      },
      {
        "q": "Este Mere bun pentru slăbit?",
        "a": "Da! Cu doar 52 kcal la 100g, Mere este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Mere?",
        "a": "Mere are 0.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "pere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "pere",
    "name": "Pere",
    "nameGenitive": "perelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 57,
    "protein": 0.4,
    "carbs": 15,
    "fat": 0.1,
    "fiber": 3.1,
    "title": "Calorii Pere | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pere: 57 kcal la 100g, 0.4g proteine, 15g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pere — Valori Nutriționale la 100g",
    "intro": "Pere conține 57 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 3.1g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pere la 100g?",
        "a": "Pere conține 57 kcal la 100g, cu 0.4g proteine, 15g carbohidrați, 0.1g grăsimi și 3.1g fibre."
      },
      {
        "q": "Este Pere bun pentru slăbit?",
        "a": "Da! Cu doar 57 kcal la 100g, Pere este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Pere?",
        "a": "Pere are 0.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "banane",
    "name": "Banane",
    "nameGenitive": "bananelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 89,
    "protein": 1.1,
    "carbs": 23,
    "fat": 0.3,
    "fiber": 2.6,
    "title": "Calorii Banane | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Banane: 89 kcal la 100g, 1.1g proteine, 23g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Banane — Valori Nutriționale la 100g",
    "intro": "Banane conține 89 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 2.6g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Banane la 100g?",
        "a": "Banane conține 89 kcal la 100g, cu 1.1g proteine, 23g carbohidrați, 0.3g grăsimi și 2.6g fibre."
      },
      {
        "q": "Este Banane bun pentru slăbit?",
        "a": "Da! Cu doar 89 kcal la 100g, Banane este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Banane?",
        "a": "Banane are 1.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "portocale",
    "name": "Portocale",
    "nameGenitive": "portocalelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 47,
    "protein": 0.9,
    "carbs": 12,
    "fat": 0.1,
    "fiber": 2.4,
    "title": "Calorii Portocale | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Portocale: 47 kcal la 100g, 0.9g proteine, 12g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Portocale — Valori Nutriționale la 100g",
    "intro": "Portocale conține 47 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 2.4g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Portocale la 100g?",
        "a": "Portocale conține 47 kcal la 100g, cu 0.9g proteine, 12g carbohidrați, 0.1g grăsimi și 2.4g fibre."
      },
      {
        "q": "Este Portocale bun pentru slăbit?",
        "a": "Da! Cu doar 47 kcal la 100g, Portocale este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Portocale?",
        "a": "Portocale are 0.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "mandarine",
    "name": "Mandarine",
    "nameGenitive": "mandarinelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 53,
    "protein": 0.8,
    "carbs": 13,
    "fat": 0.3,
    "fiber": 1.8,
    "title": "Calorii Mandarine | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mandarine: 53 kcal la 100g, 0.8g proteine, 13g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mandarine — Valori Nutriționale la 100g",
    "intro": "Mandarine conține 53 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.8g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mandarine la 100g?",
        "a": "Mandarine conține 53 kcal la 100g, cu 0.8g proteine, 13g carbohidrați, 0.3g grăsimi și 1.8g fibre."
      },
      {
        "q": "Este Mandarine bun pentru slăbit?",
        "a": "Da! Cu doar 53 kcal la 100g, Mandarine este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Mandarine?",
        "a": "Mandarine are 0.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "lamai",
    "name": "Lămâi",
    "nameGenitive": "lămâilor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 29,
    "protein": 1.1,
    "carbs": 9,
    "fat": 0.3,
    "fiber": 2.8,
    "title": "Calorii Lămâi | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Lămâi: 29 kcal la 100g, 1.1g proteine, 9g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Lămâi — Valori Nutriționale la 100g",
    "intro": "Lămâi conține 29 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 2.8g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Lămâi la 100g?",
        "a": "Lămâi conține 29 kcal la 100g, cu 1.1g proteine, 9g carbohidrați, 0.3g grăsimi și 2.8g fibre."
      },
      {
        "q": "Este Lămâi bun pentru slăbit?",
        "a": "Da! Cu doar 29 kcal la 100g, Lămâi este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Lămâi?",
        "a": "Lămâi are 1.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "grapefruit",
    "name": "Grapefruit",
    "nameGenitive": "grapefruitului",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 42,
    "protein": 0.8,
    "carbs": 11,
    "fat": 0.1,
    "fiber": 1.6,
    "title": "Calorii Grapefruit | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Grapefruit: 42 kcal la 100g, 0.8g proteine, 11g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Grapefruit — Valori Nutriționale la 100g",
    "intro": "Grapefruit conține 42 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.6g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Grapefruit la 100g?",
        "a": "Grapefruit conține 42 kcal la 100g, cu 0.8g proteine, 11g carbohidrați, 0.1g grăsimi și 1.6g fibre."
      },
      {
        "q": "Este Grapefruit bun pentru slăbit?",
        "a": "Da! Cu doar 42 kcal la 100g, Grapefruit este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Grapefruit?",
        "a": "Grapefruit are 0.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "capsuni",
    "name": "Căpșuni",
    "nameGenitive": "căpșunilor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 32,
    "protein": 0.7,
    "carbs": 7.7,
    "fat": 0.3,
    "fiber": 2,
    "title": "Calorii Căpșuni | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Căpșuni: 32 kcal la 100g, 0.7g proteine, 7.7g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Căpșuni — Valori Nutriționale la 100g",
    "intro": "Căpșuni conține 32 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 2g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Căpșuni la 100g?",
        "a": "Căpșuni conține 32 kcal la 100g, cu 0.7g proteine, 7.7g carbohidrați, 0.3g grăsimi și 2g fibre."
      },
      {
        "q": "Este Căpșuni bun pentru slăbit?",
        "a": "Da! Cu doar 32 kcal la 100g, Căpșuni este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Căpșuni?",
        "a": "Căpșuni are 0.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "zmeura",
    "name": "Zmeură",
    "nameGenitive": "zmurii",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 52,
    "protein": 1.2,
    "carbs": 12,
    "fat": 0.7,
    "fiber": 6.5,
    "title": "Calorii Zmeură | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Zmeură: 52 kcal la 100g, 1.2g proteine, 12g carbohidrați, 0.7g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Zmeură — Valori Nutriționale la 100g",
    "intro": "Zmeură conține 52 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 6.5g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Zmeură la 100g?",
        "a": "Zmeură conține 52 kcal la 100g, cu 1.2g proteine, 12g carbohidrați, 0.7g grăsimi și 6.5g fibre."
      },
      {
        "q": "Este Zmeură bun pentru slăbit?",
        "a": "Da! Cu doar 52 kcal la 100g, Zmeură este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Zmeură?",
        "a": "Zmeură are 1.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "afine",
    "name": "Afine",
    "nameGenitive": "afinelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 57,
    "protein": 0.7,
    "carbs": 14,
    "fat": 0.3,
    "fiber": 2.4,
    "title": "Calorii Afine | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Afine: 57 kcal la 100g, 0.7g proteine, 14g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Afine — Valori Nutriționale la 100g",
    "intro": "Afine conține 57 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 2.4g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Afine la 100g?",
        "a": "Afine conține 57 kcal la 100g, cu 0.7g proteine, 14g carbohidrați, 0.3g grăsimi și 2.4g fibre."
      },
      {
        "q": "Este Afine bun pentru slăbit?",
        "a": "Da! Cu doar 57 kcal la 100g, Afine este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Afine?",
        "a": "Afine are 0.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "coacaze",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "coacaze",
    "name": "Coacăze",
    "nameGenitive": "coacăzelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 63,
    "protein": 1.4,
    "carbs": 15,
    "fat": 0.4,
    "fiber": 4.3,
    "title": "Calorii Coacăze | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Coacăze: 63 kcal la 100g, 1.4g proteine, 15g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Coacăze — Valori Nutriționale la 100g",
    "intro": "Coacăze conține 63 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 4.3g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Coacăze la 100g?",
        "a": "Coacăze conține 63 kcal la 100g, cu 1.4g proteine, 15g carbohidrați, 0.4g grăsimi și 4.3g fibre."
      },
      {
        "q": "Este Coacăze bun pentru slăbit?",
        "a": "Da! Cu doar 63 kcal la 100g, Coacăze este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Coacăze?",
        "a": "Coacăze are 1.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "cirese",
    "name": "Cireșe",
    "nameGenitive": "cireșelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 50,
    "protein": 1,
    "carbs": 12,
    "fat": 0.3,
    "fiber": 1.6,
    "title": "Calorii Cireșe | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cireșe: 50 kcal la 100g, 1g proteine, 12g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cireșe — Valori Nutriționale la 100g",
    "intro": "Cireșe conține 50 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.6g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cireșe la 100g?",
        "a": "Cireșe conține 50 kcal la 100g, cu 1g proteine, 12g carbohidrați, 0.3g grăsimi și 1.6g fibre."
      },
      {
        "q": "Este Cireșe bun pentru slăbit?",
        "a": "Da! Cu doar 50 kcal la 100g, Cireșe este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Cireșe?",
        "a": "Cireșe are 1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "visine",
    "name": "Vișine",
    "nameGenitive": "vișinelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 50,
    "protein": 1,
    "carbs": 12,
    "fat": 0.3,
    "fiber": 1.6,
    "title": "Calorii Vișine | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Vișine: 50 kcal la 100g, 1g proteine, 12g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Vișine — Valori Nutriționale la 100g",
    "intro": "Vișine conține 50 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.6g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Vișine la 100g?",
        "a": "Vișine conține 50 kcal la 100g, cu 1g proteine, 12g carbohidrați, 0.3g grăsimi și 1.6g fibre."
      },
      {
        "q": "Este Vișine bun pentru slăbit?",
        "a": "Da! Cu doar 50 kcal la 100g, Vișine este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Vișine?",
        "a": "Vișine are 1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "piersici",
    "name": "Piersici",
    "nameGenitive": "piersicilor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 39,
    "protein": 0.9,
    "carbs": 10,
    "fat": 0.3,
    "fiber": 1.5,
    "title": "Calorii Piersici | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Piersici: 39 kcal la 100g, 0.9g proteine, 10g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Piersici — Valori Nutriționale la 100g",
    "intro": "Piersici conține 39 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.5g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Piersici la 100g?",
        "a": "Piersici conține 39 kcal la 100g, cu 0.9g proteine, 10g carbohidrați, 0.3g grăsimi și 1.5g fibre."
      },
      {
        "q": "Este Piersici bun pentru slăbit?",
        "a": "Da! Cu doar 39 kcal la 100g, Piersici este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Piersici?",
        "a": "Piersici are 0.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "nectarine",
    "name": "Nectarine",
    "nameGenitive": "nectarinelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 44,
    "protein": 1.1,
    "carbs": 11,
    "fat": 0.3,
    "fiber": 1.7,
    "title": "Calorii Nectarine | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Nectarine: 44 kcal la 100g, 1.1g proteine, 11g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Nectarine — Valori Nutriționale la 100g",
    "intro": "Nectarine conține 44 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.7g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Nectarine la 100g?",
        "a": "Nectarine conține 44 kcal la 100g, cu 1.1g proteine, 11g carbohidrați, 0.3g grăsimi și 1.7g fibre."
      },
      {
        "q": "Este Nectarine bun pentru slăbit?",
        "a": "Da! Cu doar 44 kcal la 100g, Nectarine este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Nectarine?",
        "a": "Nectarine are 1.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "caise",
    "name": "Caise",
    "nameGenitive": "caiselor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 48,
    "protein": 1.4,
    "carbs": 11,
    "fat": 0.4,
    "fiber": 2,
    "title": "Calorii Caise | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Caise: 48 kcal la 100g, 1.4g proteine, 11g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Caise — Valori Nutriționale la 100g",
    "intro": "Caise conține 48 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 2g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Caise la 100g?",
        "a": "Caise conține 48 kcal la 100g, cu 1.4g proteine, 11g carbohidrați, 0.4g grăsimi și 2g fibre."
      },
      {
        "q": "Este Caise bun pentru slăbit?",
        "a": "Da! Cu doar 48 kcal la 100g, Caise este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Caise?",
        "a": "Caise are 1.4g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "prune",
    "name": "Prune",
    "nameGenitive": "prunelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 46,
    "protein": 0.7,
    "carbs": 11,
    "fat": 0.3,
    "fiber": 1.4,
    "title": "Calorii Prune | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Prune: 46 kcal la 100g, 0.7g proteine, 11g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Prune — Valori Nutriționale la 100g",
    "intro": "Prune conține 46 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.4g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Prune la 100g?",
        "a": "Prune conține 46 kcal la 100g, cu 0.7g proteine, 11g carbohidrați, 0.3g grăsimi și 1.4g fibre."
      },
      {
        "q": "Este Prune bun pentru slăbit?",
        "a": "Da! Cu doar 46 kcal la 100g, Prune este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Prune?",
        "a": "Prune are 0.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "struguri",
    "name": "Struguri",
    "nameGenitive": "strugurilor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 69,
    "protein": 0.7,
    "carbs": 18,
    "fat": 0.2,
    "fiber": 0.9,
    "title": "Calorii Struguri | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Struguri: 69 kcal la 100g, 0.7g proteine, 18g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Struguri — Valori Nutriționale la 100g",
    "intro": "Struguri conține 69 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 0.9g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Struguri la 100g?",
        "a": "Struguri conține 69 kcal la 100g, cu 0.7g proteine, 18g carbohidrați, 0.2g grăsimi și 0.9g fibre."
      },
      {
        "q": "Este Struguri bun pentru slăbit?",
        "a": "Da! Cu doar 69 kcal la 100g, Struguri este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Struguri?",
        "a": "Struguri are 0.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "pepene-rosu",
    "name": "Pepene Roșu",
    "nameGenitive": "pepenelui roșu",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 30,
    "protein": 0.6,
    "carbs": 7.6,
    "fat": 0.2,
    "fiber": 0.4,
    "title": "Calorii Pepene Roșu | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pepene Roșu: 30 kcal la 100g, 0.6g proteine, 7.6g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pepene Roșu — Valori Nutriționale la 100g",
    "intro": "Pepene Roșu conține 30 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 0.4g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pepene Roșu la 100g?",
        "a": "Pepene Roșu conține 30 kcal la 100g, cu 0.6g proteine, 7.6g carbohidrați, 0.2g grăsimi și 0.4g fibre."
      },
      {
        "q": "Este Pepene Roșu bun pentru slăbit?",
        "a": "Da! Cu doar 30 kcal la 100g, Pepene Roșu este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Pepene Roșu?",
        "a": "Pepene Roșu are 0.6g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-galben"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "pepene-galben",
    "name": "Pepene Galben",
    "nameGenitive": "pepenelui galben",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 36,
    "protein": 0.9,
    "carbs": 8.9,
    "fat": 0.1,
    "fiber": 0.9,
    "title": "Calorii Pepene Galben | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Pepene Galben: 36 kcal la 100g, 0.9g proteine, 8.9g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Pepene Galben — Valori Nutriționale la 100g",
    "intro": "Pepene Galben conține 36 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 0.9g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Pepene Galben la 100g?",
        "a": "Pepene Galben conține 36 kcal la 100g, cu 0.9g proteine, 8.9g carbohidrați, 0.1g grăsimi și 0.9g fibre."
      },
      {
        "q": "Este Pepene Galben bun pentru slăbit?",
        "a": "Da! Cu doar 36 kcal la 100g, Pepene Galben este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Pepene Galben?",
        "a": "Pepene Galben are 0.9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "ananas",
    "name": "Ananas",
    "nameGenitive": "ananasului",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 50,
    "protein": 0.5,
    "carbs": 13,
    "fat": 0.1,
    "fiber": 1.4,
    "title": "Calorii Ananas | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ananas: 50 kcal la 100g, 0.5g proteine, 13g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ananas — Valori Nutriționale la 100g",
    "intro": "Ananas conține 50 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.4g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ananas la 100g?",
        "a": "Ananas conține 50 kcal la 100g, cu 0.5g proteine, 13g carbohidrați, 0.1g grăsimi și 1.4g fibre."
      },
      {
        "q": "Este Ananas bun pentru slăbit?",
        "a": "Da! Cu doar 50 kcal la 100g, Ananas este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Ananas?",
        "a": "Ananas are 0.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "mango",
    "name": "Mango",
    "nameGenitive": "mangoului",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 60,
    "protein": 0.8,
    "carbs": 15,
    "fat": 0.4,
    "fiber": 1.6,
    "title": "Calorii Mango | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Mango: 60 kcal la 100g, 0.8g proteine, 15g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Mango — Valori Nutriționale la 100g",
    "intro": "Mango conține 60 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.6g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Mango la 100g?",
        "a": "Mango conține 60 kcal la 100g, cu 0.8g proteine, 15g carbohidrați, 0.4g grăsimi și 1.6g fibre."
      },
      {
        "q": "Este Mango bun pentru slăbit?",
        "a": "Da! Cu doar 60 kcal la 100g, Mango este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Mango?",
        "a": "Mango are 0.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "papaya",
    "name": "Papaya",
    "nameGenitive": "papayei",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 43,
    "protein": 0.5,
    "carbs": 11,
    "fat": 0.3,
    "fiber": 1.7,
    "title": "Calorii Papaya | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Papaya: 43 kcal la 100g, 0.5g proteine, 11g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Papaya — Valori Nutriționale la 100g",
    "intro": "Papaya conține 43 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.7g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Papaya la 100g?",
        "a": "Papaya conține 43 kcal la 100g, cu 0.5g proteine, 11g carbohidrați, 0.3g grăsimi și 1.7g fibre."
      },
      {
        "q": "Este Papaya bun pentru slăbit?",
        "a": "Da! Cu doar 43 kcal la 100g, Papaya este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Papaya?",
        "a": "Papaya are 0.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică",
        "grams": 100
      },
      {
        "name": "Porție standard",
        "grams": 200
      },
      {
        "name": "Porție mare",
        "grams": 300
      }
    ]
  },
  {
    "slug": "kiwi",
    "name": "Kiwi",
    "nameGenitive": "kiwi-ului",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 61,
    "protein": 1.1,
    "carbs": 15,
    "fat": 0.5,
    "fiber": 3,
    "title": "Calorii Kiwi | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Kiwi: 61 kcal la 100g, 1.1g proteine, 15g carbohidrați, 0.5g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Kiwi — Valori Nutriționale la 100g",
    "intro": "Kiwi conține 61 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 3g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Kiwi la 100g?",
        "a": "Kiwi conține 61 kcal la 100g, cu 1.1g proteine, 15g carbohidrați, 0.5g grăsimi și 3g fibre."
      },
      {
        "q": "Este Kiwi bun pentru slăbit?",
        "a": "Da! Cu doar 61 kcal la 100g, Kiwi este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Kiwi?",
        "a": "Kiwi are 1.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "smochine",
    "name": "Smochine",
    "nameGenitive": "smochinelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 74,
    "protein": 0.8,
    "carbs": 19,
    "fat": 0.3,
    "fiber": 2.9,
    "title": "Calorii Smochine | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Smochine: 74 kcal la 100g, 0.8g proteine, 19g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Smochine — Valori Nutriționale la 100g",
    "intro": "Smochine conține 74 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 2.9g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Smochine la 100g?",
        "a": "Smochine conține 74 kcal la 100g, cu 0.8g proteine, 19g carbohidrați, 0.3g grăsimi și 2.9g fibre."
      },
      {
        "q": "Este Smochine bun pentru slăbit?",
        "a": "Da! Cu doar 74 kcal la 100g, Smochine este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Smochine?",
        "a": "Smochine are 0.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "curmale",
    "name": "Curmale",
    "nameGenitive": "curmalelor",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 277,
    "protein": 1.8,
    "carbs": 75,
    "fat": 0.2,
    "fiber": 6.7,
    "title": "Calorii Curmale | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Curmale: 277 kcal la 100g, 1.8g proteine, 75g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Curmale — Valori Nutriționale la 100g",
    "intro": "Curmale conține 277 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 6.7g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Curmale la 100g?",
        "a": "Curmale conține 277 kcal la 100g, cu 1.8g proteine, 75g carbohidrați, 0.2g grăsimi și 6.7g fibre."
      },
      {
        "q": "Este Curmale bun pentru slăbit?",
        "a": "Curmale este mai caloric (277 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Curmale?",
        "a": "Curmale are 1.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "cocos",
    "name": "Nucă de Cocos",
    "nameGenitive": "nucii de cocos",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 354,
    "protein": 3.3,
    "carbs": 15,
    "fat": 33,
    "fiber": 9,
    "title": "Calorii Nucă de Cocos | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Nucă de Cocos: 354 kcal la 100g, 3.3g proteine, 15g carbohidrați, 33g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Nucă de Cocos — Valori Nutriționale la 100g",
    "intro": "Nucă de Cocos conține 354 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 9g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Nucă de Cocos la 100g?",
        "a": "Nucă de Cocos conține 354 kcal la 100g, cu 3.3g proteine, 15g carbohidrați, 33g grăsimi și 9g fibre."
      },
      {
        "q": "Este Nucă de Cocos bun pentru slăbit?",
        "a": "Nucă de Cocos este mai caloric (354 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Nucă de Cocos?",
        "a": "Nucă de Cocos are 3.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "fructul-pasiunii",
    "name": "Fructul Pasiunii",
    "nameGenitive": "fructului pasiunii",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 97,
    "protein": 2.2,
    "carbs": 23,
    "fat": 0.7,
    "fiber": 10.4,
    "title": "Calorii Fructul Pasiunii | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Fructul Pasiunii: 97 kcal la 100g, 2.2g proteine, 23g carbohidrați, 0.7g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Fructul Pasiunii — Valori Nutriționale la 100g",
    "intro": "Fructul Pasiunii conține 97 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 10.4g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Fructul Pasiunii la 100g?",
        "a": "Fructul Pasiunii conține 97 kcal la 100g, cu 2.2g proteine, 23g carbohidrați, 0.7g grăsimi și 10.4g fibre."
      },
      {
        "q": "Este Fructul Pasiunii bun pentru slăbit?",
        "a": "Da! Cu doar 97 kcal la 100g, Fructul Pasiunii este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Fructul Pasiunii?",
        "a": "Fructul Pasiunii are 2.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "lychee",
    "name": "Lychee",
    "nameGenitive": "lychee-ului",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 66,
    "protein": 0.8,
    "carbs": 17,
    "fat": 0.4,
    "fiber": 1.3,
    "title": "Calorii Lychee | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Lychee: 66 kcal la 100g, 0.8g proteine, 17g carbohidrați, 0.4g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Lychee — Valori Nutriționale la 100g",
    "intro": "Lychee conține 66 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 1.3g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Lychee la 100g?",
        "a": "Lychee conține 66 kcal la 100g, cu 0.8g proteine, 17g carbohidrați, 0.4g grăsimi și 1.3g fibre."
      },
      {
        "q": "Este Lychee bun pentru slăbit?",
        "a": "Da! Cu doar 66 kcal la 100g, Lychee este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Lychee?",
        "a": "Lychee are 0.8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "guava",
    "name": "Guava",
    "nameGenitive": "guavei",
    "category": "fructe",
    "categoryName": "Fructe",
    "calories": 68,
    "protein": 2.6,
    "carbs": 14,
    "fat": 1,
    "fiber": 5.4,
    "title": "Calorii Guava | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Guava: 68 kcal la 100g, 2.6g proteine, 14g carbohidrați, 1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Guava — Valori Nutriționale la 100g",
    "intro": "Guava conține 68 kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu 5.4g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.",
    "benefits": [
      "Zaharuri naturale cu eliberare controlată datorită fibrei",
      "Vitamina C și antioxidanți care protejează celulele de stresul oxidativ",
      "Fibre solubile și insolubile pentru sănătatea digestivă",
      "Potasiu și magneziu pentru funcția musculară și tensiunea arterială",
      "Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene"
    ],
    "howToEat": [
      "Consumate proaspete pentru beneficiile maxime ale nutrienților",
      "Ca snack între mese în loc de produse ultra-procesate",
      "Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic",
      "Variate pe tot parcursul anului pentru diversitate nutritivă"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Guava la 100g?",
        "a": "Guava conține 68 kcal la 100g, cu 2.6g proteine, 14g carbohidrați, 1g grăsimi și 5.4g fibre."
      },
      {
        "q": "Este Guava bun pentru slăbit?",
        "a": "Da! Cu doar 68 kcal la 100g, Guava este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Guava?",
        "a": "Guava are 2.6g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "mere",
      "afine",
      "pepene-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "migdale",
    "name": "Migdale",
    "nameGenitive": "migdalelor",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 579,
    "protein": 21,
    "carbs": 22,
    "fat": 50,
    "fiber": 12.5,
    "title": "Calorii Migdale | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Migdale: 579 kcal la 100g, 21g proteine, 22g carbohidrați, 50g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Migdale — Valori Nutriționale la 100g",
    "intro": "Migdale este o sursă concentrată de energie — 579 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 21g proteine și 12.5g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Migdale la 100g?",
        "a": "Migdale conține 579 kcal la 100g, cu 21g proteine, 22g carbohidrați, 50g grăsimi și 12.5g fibre."
      },
      {
        "q": "Este Migdale bun pentru slăbit?",
        "a": "Migdale este mai caloric (579 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Migdale?",
        "a": "Migdale este o sursă excelentă de proteine — 21g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "nuci",
      "nuci-macadamia",
      "seminte-chia"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "nuci",
    "name": "Nuci",
    "nameGenitive": "nucilor",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 654,
    "protein": 15,
    "carbs": 14,
    "fat": 65,
    "fiber": 6.7,
    "title": "Calorii Nuci | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Nuci: 654 kcal la 100g, 15g proteine, 14g carbohidrați, 65g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Nuci — Valori Nutriționale la 100g",
    "intro": "Nuci este o sursă concentrată de energie — 654 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 15g proteine și 6.7g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Nuci la 100g?",
        "a": "Nuci conține 654 kcal la 100g, cu 15g proteine, 14g carbohidrați, 65g grăsimi și 6.7g fibre."
      },
      {
        "q": "Este Nuci bun pentru slăbit?",
        "a": "Nuci este mai caloric (654 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Nuci?",
        "a": "Nuci conține 15g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "nuci-macadamia",
      "seminte-chia"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "alune",
    "name": "Alune de Pădure",
    "nameGenitive": "alunelor",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 628,
    "protein": 15,
    "carbs": 17,
    "fat": 61,
    "fiber": 9.7,
    "title": "Calorii Alune de Pădure | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Alune de Pădure: 628 kcal la 100g, 15g proteine, 17g carbohidrați, 61g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Alune de Pădure — Valori Nutriționale la 100g",
    "intro": "Alune de Pădure este o sursă concentrată de energie — 628 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 15g proteine și 9.7g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Alune de Pădure la 100g?",
        "a": "Alune de Pădure conține 628 kcal la 100g, cu 15g proteine, 17g carbohidrați, 61g grăsimi și 9.7g fibre."
      },
      {
        "q": "Este Alune de Pădure bun pentru slăbit?",
        "a": "Alune de Pădure este mai caloric (628 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Alune de Pădure?",
        "a": "Alune de Pădure conține 15g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "nuci-macadamia",
      "seminte-chia"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "caju",
    "name": "Caju",
    "nameGenitive": "cajuului",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 553,
    "protein": 18,
    "carbs": 30,
    "fat": 44,
    "fiber": 3.3,
    "title": "Calorii Caju | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Caju: 553 kcal la 100g, 18g proteine, 30g carbohidrați, 44g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Caju — Valori Nutriționale la 100g",
    "intro": "Caju este o sursă concentrată de energie — 553 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 18g proteine și 3.3g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Caju la 100g?",
        "a": "Caju conține 553 kcal la 100g, cu 18g proteine, 30g carbohidrați, 44g grăsimi și 3.3g fibre."
      },
      {
        "q": "Este Caju bun pentru slăbit?",
        "a": "Caju este mai caloric (553 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Caju?",
        "a": "Caju conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "nuci-macadamia",
      "seminte-chia"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "fistic",
    "name": "Fistic",
    "nameGenitive": "fisticului",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 560,
    "protein": 20,
    "carbs": 28,
    "fat": 45,
    "fiber": 10.6,
    "title": "Calorii Fistic | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Fistic: 560 kcal la 100g, 20g proteine, 28g carbohidrați, 45g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Fistic — Valori Nutriționale la 100g",
    "intro": "Fistic este o sursă concentrată de energie — 560 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 20g proteine și 10.6g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Fistic la 100g?",
        "a": "Fistic conține 560 kcal la 100g, cu 20g proteine, 28g carbohidrați, 45g grăsimi și 10.6g fibre."
      },
      {
        "q": "Este Fistic bun pentru slăbit?",
        "a": "Fistic este mai caloric (560 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Fistic?",
        "a": "Fistic conține 20g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "nuci-macadamia",
      "seminte-chia"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "nuci-macadamia",
    "name": "Nuci Macadamia",
    "nameGenitive": "nucilor macadamia",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 718,
    "protein": 8,
    "carbs": 14,
    "fat": 76,
    "fiber": 8.6,
    "title": "Calorii Nuci Macadamia | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Nuci Macadamia: 718 kcal la 100g, 8g proteine, 14g carbohidrați, 76g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Nuci Macadamia — Valori Nutriționale la 100g",
    "intro": "Nuci Macadamia este o sursă concentrată de energie — 718 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 8g proteine și 8.6g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Nuci Macadamia la 100g?",
        "a": "Nuci Macadamia conține 718 kcal la 100g, cu 8g proteine, 14g carbohidrați, 76g grăsimi și 8.6g fibre."
      },
      {
        "q": "Este Nuci Macadamia bun pentru slăbit?",
        "a": "Nuci Macadamia este mai caloric (718 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Nuci Macadamia?",
        "a": "Nuci Macadamia are 8g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-chia"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "nuci-braziliene",
    "name": "Nuci Braziliene",
    "nameGenitive": "nucilor braziliene",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 656,
    "protein": 14,
    "carbs": 12,
    "fat": 66,
    "fiber": 7.5,
    "title": "Calorii Nuci Braziliene | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Nuci Braziliene: 656 kcal la 100g, 14g proteine, 12g carbohidrați, 66g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Nuci Braziliene — Valori Nutriționale la 100g",
    "intro": "Nuci Braziliene este o sursă concentrată de energie — 656 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 14g proteine și 7.5g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Nuci Braziliene la 100g?",
        "a": "Nuci Braziliene conține 656 kcal la 100g, cu 14g proteine, 12g carbohidrați, 66g grăsimi și 7.5g fibre."
      },
      {
        "q": "Este Nuci Braziliene bun pentru slăbit?",
        "a": "Nuci Braziliene este mai caloric (656 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Nuci Braziliene?",
        "a": "Nuci Braziliene conține 14g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-chia"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "seminte-floarea-soarelui",
    "name": "Semințe de Floarea-Soarelui",
    "nameGenitive": "semințelor de floarea-soarelui",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 584,
    "protein": 21,
    "carbs": 20,
    "fat": 51,
    "fiber": 8.6,
    "title": "Calorii Semințe de Floarea-Soarelui | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Semințe de Floarea-Soarelui: 584 kcal la 100g, 21g proteine, 20g carbohidrați, 51g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Semințe de Floarea-Soarelui — Valori Nutriționale la 100g",
    "intro": "Semințe de Floarea-Soarelui este o sursă concentrată de energie — 584 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 21g proteine și 8.6g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Semințe de Floarea-Soarelui la 100g?",
        "a": "Semințe de Floarea-Soarelui conține 584 kcal la 100g, cu 21g proteine, 20g carbohidrați, 51g grăsimi și 8.6g fibre."
      },
      {
        "q": "Este Semințe de Floarea-Soarelui bun pentru slăbit?",
        "a": "Semințe de Floarea-Soarelui este mai caloric (584 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Semințe de Floarea-Soarelui?",
        "a": "Semințe de Floarea-Soarelui este o sursă excelentă de proteine — 21g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-chia"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "seminte-dovleac",
    "name": "Semințe de Dovleac",
    "nameGenitive": "semințelor de dovleac",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 446,
    "protein": 19,
    "carbs": 54,
    "fat": 19,
    "fiber": 18,
    "title": "Calorii Semințe de Dovleac | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Semințe de Dovleac: 446 kcal la 100g, 19g proteine, 54g carbohidrați, 19g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Semințe de Dovleac — Valori Nutriționale la 100g",
    "intro": "Semințe de Dovleac este o sursă concentrată de energie — 446 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 19g proteine și 18g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Semințe de Dovleac la 100g?",
        "a": "Semințe de Dovleac conține 446 kcal la 100g, cu 19g proteine, 54g carbohidrați, 19g grăsimi și 18g fibre."
      },
      {
        "q": "Este Semințe de Dovleac bun pentru slăbit?",
        "a": "Semințe de Dovleac este mai caloric (446 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Semințe de Dovleac?",
        "a": "Semințe de Dovleac conține 19g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-chia"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "seminte-chia",
    "name": "Semințe de Chia",
    "nameGenitive": "semințelor de chia",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 486,
    "protein": 17,
    "carbs": 42,
    "fat": 31,
    "fiber": 34,
    "title": "Calorii Semințe de Chia | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Semințe de Chia: 486 kcal la 100g, 17g proteine, 42g carbohidrați, 31g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Semințe de Chia — Valori Nutriționale la 100g",
    "intro": "Semințe de Chia este o sursă concentrată de energie — 486 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 17g proteine și 34g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Semințe de Chia la 100g?",
        "a": "Semințe de Chia conține 486 kcal la 100g, cu 17g proteine, 42g carbohidrați, 31g grăsimi și 34g fibre."
      },
      {
        "q": "Este Semințe de Chia bun pentru slăbit?",
        "a": "Semințe de Chia este mai caloric (486 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Semințe de Chia?",
        "a": "Semințe de Chia conține 17g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-dovleac"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "seminte-in",
    "name": "Semințe de In",
    "nameGenitive": "semințelor de in",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 534,
    "protein": 18,
    "carbs": 29,
    "fat": 42,
    "fiber": 27,
    "title": "Calorii Semințe de In | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Semințe de In: 534 kcal la 100g, 18g proteine, 29g carbohidrați, 42g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Semințe de In — Valori Nutriționale la 100g",
    "intro": "Semințe de In este o sursă concentrată de energie — 534 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 18g proteine și 27g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Semințe de In la 100g?",
        "a": "Semințe de In conține 534 kcal la 100g, cu 18g proteine, 29g carbohidrați, 42g grăsimi și 27g fibre."
      },
      {
        "q": "Este Semințe de In bun pentru slăbit?",
        "a": "Semințe de In este mai caloric (534 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Semințe de In?",
        "a": "Semințe de In conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-dovleac"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "seminte-susan",
    "name": "Semințe de Susan",
    "nameGenitive": "semințelor de susan",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 573,
    "protein": 18,
    "carbs": 23,
    "fat": 50,
    "fiber": 11.8,
    "title": "Calorii Semințe de Susan | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Semințe de Susan: 573 kcal la 100g, 18g proteine, 23g carbohidrați, 50g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Semințe de Susan — Valori Nutriționale la 100g",
    "intro": "Semințe de Susan este o sursă concentrată de energie — 573 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 18g proteine și 11.8g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Semințe de Susan la 100g?",
        "a": "Semințe de Susan conține 573 kcal la 100g, cu 18g proteine, 23g carbohidrați, 50g grăsimi și 11.8g fibre."
      },
      {
        "q": "Este Semințe de Susan bun pentru slăbit?",
        "a": "Semințe de Susan este mai caloric (573 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Semințe de Susan?",
        "a": "Semințe de Susan conține 18g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-dovleac"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "nuci-pecan",
    "name": "Nuci Pecan",
    "nameGenitive": "nucilor pecan",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 691,
    "protein": 9,
    "carbs": 14,
    "fat": 72,
    "fiber": 9.6,
    "title": "Calorii Nuci Pecan | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Nuci Pecan: 691 kcal la 100g, 9g proteine, 14g carbohidrați, 72g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Nuci Pecan — Valori Nutriționale la 100g",
    "intro": "Nuci Pecan este o sursă concentrată de energie — 691 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 9g proteine și 9.6g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Nuci Pecan la 100g?",
        "a": "Nuci Pecan conține 691 kcal la 100g, cu 9g proteine, 14g carbohidrați, 72g grăsimi și 9.6g fibre."
      },
      {
        "q": "Este Nuci Pecan bun pentru slăbit?",
        "a": "Nuci Pecan este mai caloric (691 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Nuci Pecan?",
        "a": "Nuci Pecan are 9g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-dovleac"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "nuci-pin",
    "name": "Nuci de Pin",
    "nameGenitive": "nucilor de pin",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 673,
    "protein": 14,
    "carbs": 13,
    "fat": 68,
    "fiber": 3.7,
    "title": "Calorii Nuci de Pin | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Nuci de Pin: 673 kcal la 100g, 14g proteine, 13g carbohidrați, 68g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Nuci de Pin — Valori Nutriționale la 100g",
    "intro": "Nuci de Pin este o sursă concentrată de energie — 673 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 14g proteine și 3.7g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Nuci de Pin la 100g?",
        "a": "Nuci de Pin conține 673 kcal la 100g, cu 14g proteine, 13g carbohidrați, 68g grăsimi și 3.7g fibre."
      },
      {
        "q": "Este Nuci de Pin bun pentru slăbit?",
        "a": "Nuci de Pin este mai caloric (673 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Nuci de Pin?",
        "a": "Nuci de Pin conține 14g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-dovleac"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "arahide",
    "name": "Arahide",
    "nameGenitive": "arahidelor",
    "category": "nuci",
    "categoryName": "Nuci și Semințe",
    "calories": 567,
    "protein": 26,
    "carbs": 16,
    "fat": 49,
    "fiber": 8.5,
    "title": "Calorii Arahide | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Arahide: 567 kcal la 100g, 26g proteine, 16g carbohidrați, 49g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Arahide — Valori Nutriționale la 100g",
    "intro": "Arahide este o sursă concentrată de energie — 567 kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de 26g proteine și 8.5g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.",
    "benefits": [
      "Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară",
      "Proteine vegetale de calitate și aminoacizi esențiali",
      "Fibre alimentare pentru sațietate și sănătate digestivă",
      "Vitamina E, un antioxidant liposolubil important",
      "Minerale: magneziu, zinc, seleniu, fosfor"
    ],
    "howToEat": [
      "O mână mică (25-30g) ca snack între mese — porție ideală",
      "Adăugate în cereale de micul dejun, salate sau deserturi",
      "Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală",
      "Combinate cu fructe uscate pentru mix energizant"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Arahide la 100g?",
        "a": "Arahide conține 567 kcal la 100g, cu 26g proteine, 16g carbohidrați, 49g grăsimi și 8.5g fibre."
      },
      {
        "q": "Este Arahide bun pentru slăbit?",
        "a": "Arahide este mai caloric (567 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Arahide?",
        "a": "Arahide este o sursă excelentă de proteine — 26g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "migdale",
      "fistic",
      "seminte-dovleac"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pumn mic",
        "grams": 20
      },
      {
        "name": "Porție standard",
        "grams": 30
      },
      {
        "name": "Porție generoasă",
        "grams": 50
      }
    ]
  },
  {
    "slug": "ulei-masline",
    "name": "Ulei de Măsline",
    "nameGenitive": "uleiului de măsline",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 884,
    "protein": 0,
    "carbs": 0,
    "fat": 100,
    "fiber": 0,
    "title": "Calorii Ulei de Măsline | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ulei de Măsline: 884 kcal la 100g, 0g proteine, 0g carbohidrați, 100g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ulei de Măsline — Valori Nutriționale la 100g",
    "intro": "Ulei de Măsline furnizează 884 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ulei de Măsline la 100g?",
        "a": "Ulei de Măsline conține 884 kcal la 100g, cu 0g proteine, 0g carbohidrați, 100g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ulei de Măsline bun pentru slăbit?",
        "a": "Ulei de Măsline este mai caloric (884 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Ulei de Măsline?",
        "a": "Ulei de Măsline are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ulei-floarea-soarelui",
      "unt-de-arahide",
      "ghee"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 lingură",
        "grams": 14
      },
      {
        "name": "2 linguri",
        "grams": 28
      },
      {
        "name": "100ml",
        "grams": 100
      }
    ]
  },
  {
    "slug": "ulei-floarea-soarelui",
    "name": "Ulei de Floarea-Soarelui",
    "nameGenitive": "uleiului de floarea-soarelui",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 884,
    "protein": 0,
    "carbs": 0,
    "fat": 100,
    "fiber": 0,
    "title": "Calorii Ulei de Floarea-Soarelui | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ulei de Floarea-Soarelui: 884 kcal la 100g, 0g proteine, 0g carbohidrați, 100g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ulei de Floarea-Soarelui — Valori Nutriționale la 100g",
    "intro": "Ulei de Floarea-Soarelui furnizează 884 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ulei de Floarea-Soarelui la 100g?",
        "a": "Ulei de Floarea-Soarelui conține 884 kcal la 100g, cu 0g proteine, 0g carbohidrați, 100g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ulei de Floarea-Soarelui bun pentru slăbit?",
        "a": "Ulei de Floarea-Soarelui este mai caloric (884 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Ulei de Floarea-Soarelui?",
        "a": "Ulei de Floarea-Soarelui are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ulei-masline",
      "unt-de-arahide",
      "ghee"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 lingură",
        "grams": 14
      },
      {
        "name": "2 linguri",
        "grams": 28
      },
      {
        "name": "100ml",
        "grams": 100
      }
    ]
  },
  {
    "slug": "ulei-cocos",
    "name": "Ulei de Cocos",
    "nameGenitive": "uleiului de cocos",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 862,
    "protein": 0,
    "carbs": 0,
    "fat": 100,
    "fiber": 0,
    "title": "Calorii Ulei de Cocos | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ulei de Cocos: 862 kcal la 100g, 0g proteine, 0g carbohidrați, 100g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ulei de Cocos — Valori Nutriționale la 100g",
    "intro": "Ulei de Cocos furnizează 862 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ulei de Cocos la 100g?",
        "a": "Ulei de Cocos conține 862 kcal la 100g, cu 0g proteine, 0g carbohidrați, 100g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ulei de Cocos bun pentru slăbit?",
        "a": "Ulei de Cocos este mai caloric (862 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Ulei de Cocos?",
        "a": "Ulei de Cocos are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ulei-masline",
      "unt-de-arahide",
      "ghee"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 lingură",
        "grams": 14
      },
      {
        "name": "2 linguri",
        "grams": 28
      },
      {
        "name": "100ml",
        "grams": 100
      }
    ]
  },
  {
    "slug": "ulei-rapita",
    "name": "Ulei de Rapiță",
    "nameGenitive": "uleiului de rapiță",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 884,
    "protein": 0,
    "carbs": 0,
    "fat": 100,
    "fiber": 0,
    "title": "Calorii Ulei de Rapiță | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ulei de Rapiță: 884 kcal la 100g, 0g proteine, 0g carbohidrați, 100g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ulei de Rapiță — Valori Nutriționale la 100g",
    "intro": "Ulei de Rapiță furnizează 884 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ulei de Rapiță la 100g?",
        "a": "Ulei de Rapiță conține 884 kcal la 100g, cu 0g proteine, 0g carbohidrați, 100g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ulei de Rapiță bun pentru slăbit?",
        "a": "Ulei de Rapiță este mai caloric (884 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Ulei de Rapiță?",
        "a": "Ulei de Rapiță are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ulei-masline",
      "unt-de-arahide",
      "ghee"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 lingură",
        "grams": 14
      },
      {
        "name": "2 linguri",
        "grams": 28
      },
      {
        "name": "100ml",
        "grams": 100
      }
    ]
  },
  {
    "slug": "unt-de-arahide",
    "name": "Unt de Arahide",
    "nameGenitive": "untului de arahide",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 588,
    "protein": 25,
    "carbs": 20,
    "fat": 50,
    "fiber": 6,
    "title": "Calorii Unt de Arahide | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Unt de Arahide: 588 kcal la 100g, 25g proteine, 20g carbohidrați, 50g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Unt de Arahide — Valori Nutriționale la 100g",
    "intro": "Unt de Arahide furnizează 588 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Unt de Arahide la 100g?",
        "a": "Unt de Arahide conține 588 kcal la 100g, cu 25g proteine, 20g carbohidrați, 50g grăsimi și 6g fibre."
      },
      {
        "q": "Este Unt de Arahide bun pentru slăbit?",
        "a": "Unt de Arahide este mai caloric (588 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Unt de Arahide?",
        "a": "Unt de Arahide este o sursă excelentă de proteine — 25g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "ulei-masline",
      "ulei-rapita",
      "ghee"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "tahini",
    "name": "Tahini",
    "nameGenitive": "tahiniului",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 595,
    "protein": 17,
    "carbs": 21,
    "fat": 54,
    "fiber": 9.3,
    "title": "Calorii Tahini | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Tahini: 595 kcal la 100g, 17g proteine, 21g carbohidrați, 54g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Tahini — Valori Nutriționale la 100g",
    "intro": "Tahini furnizează 595 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Tahini la 100g?",
        "a": "Tahini conține 595 kcal la 100g, cu 17g proteine, 21g carbohidrați, 54g grăsimi și 9.3g fibre."
      },
      {
        "q": "Este Tahini bun pentru slăbit?",
        "a": "Tahini este mai caloric (595 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Tahini?",
        "a": "Tahini conține 17g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ulei-masline",
      "ulei-rapita",
      "ghee"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "ulei-avocado",
    "name": "Ulei de Avocado",
    "nameGenitive": "uleiului de avocado",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 884,
    "protein": 0,
    "carbs": 0,
    "fat": 100,
    "fiber": 0,
    "title": "Calorii Ulei de Avocado | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ulei de Avocado: 884 kcal la 100g, 0g proteine, 0g carbohidrați, 100g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ulei de Avocado — Valori Nutriționale la 100g",
    "intro": "Ulei de Avocado furnizează 884 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ulei de Avocado la 100g?",
        "a": "Ulei de Avocado conține 884 kcal la 100g, cu 0g proteine, 0g carbohidrați, 100g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ulei de Avocado bun pentru slăbit?",
        "a": "Ulei de Avocado este mai caloric (884 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Ulei de Avocado?",
        "a": "Ulei de Avocado are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ulei-masline",
      "ulei-rapita",
      "ghee"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 lingură",
        "grams": 14
      },
      {
        "name": "2 linguri",
        "grams": 28
      },
      {
        "name": "100ml",
        "grams": 100
      }
    ]
  },
  {
    "slug": "ghee",
    "name": "Ghee",
    "nameGenitive": "ghee-ului",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 900,
    "protein": 0,
    "carbs": 0,
    "fat": 100,
    "fiber": 0,
    "title": "Calorii Ghee | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ghee: 900 kcal la 100g, 0g proteine, 0g carbohidrați, 100g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ghee — Valori Nutriționale la 100g",
    "intro": "Ghee furnizează 900 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ghee la 100g?",
        "a": "Ghee conține 900 kcal la 100g, cu 0g proteine, 0g carbohidrați, 100g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ghee bun pentru slăbit?",
        "a": "Ghee este mai caloric (900 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Ghee?",
        "a": "Ghee are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ulei-masline",
      "ulei-rapita",
      "ulei-avocado"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 lingură",
        "grams": 14
      },
      {
        "name": "2 linguri",
        "grams": 28
      },
      {
        "name": "100ml",
        "grams": 100
      }
    ]
  },
  {
    "slug": "seu-vita",
    "name": "Seu de Vită",
    "nameGenitive": "seului de vită",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 902,
    "protein": 0,
    "carbs": 0,
    "fat": 100,
    "fiber": 0,
    "title": "Calorii Seu de Vită | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Seu de Vită: 902 kcal la 100g, 0g proteine, 0g carbohidrați, 100g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Seu de Vită — Valori Nutriționale la 100g",
    "intro": "Seu de Vită furnizează 902 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Seu de Vită la 100g?",
        "a": "Seu de Vită conține 902 kcal la 100g, cu 0g proteine, 0g carbohidrați, 100g grăsimi și 0g fibre."
      },
      {
        "q": "Este Seu de Vită bun pentru slăbit?",
        "a": "Seu de Vită este mai caloric (902 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Seu de Vită?",
        "a": "Seu de Vită are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ulei-masline",
      "ulei-rapita",
      "ulei-avocado"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 lingură",
        "grams": 14
      },
      {
        "name": "2 linguri",
        "grams": 28
      },
      {
        "name": "100ml",
        "grams": 100
      }
    ]
  },
  {
    "slug": "ulei-palmier",
    "name": "Ulei de Palmier",
    "nameGenitive": "uleiului de palmier",
    "category": "uleiuri",
    "categoryName": "Uleiuri și Grăsimi",
    "calories": 884,
    "protein": 0,
    "carbs": 0,
    "fat": 100,
    "fiber": 0,
    "title": "Calorii Ulei de Palmier | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ulei de Palmier: 884 kcal la 100g, 0g proteine, 0g carbohidrați, 100g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ulei de Palmier — Valori Nutriționale la 100g",
    "intro": "Ulei de Palmier furnizează 884 kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.",
    "benefits": [
      "Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)",
      "Sursă concentrată de energie pentru activități intense",
      "Profilul de acizi grași influențează sănătatea cardiovasculară",
      "Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant",
      "Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale"
    ],
    "howToEat": [
      "1-2 linguri pe zi în gătit sau dressing-uri de salată",
      "Adăugate la rece pe salate pentru reținerea maximă a vitaminei E",
      "Folosite cu moderație — sunt cele mai calorice alimente existente",
      "Alege uleiuri cold-pressed pentru profilul nutrițional optim"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ulei de Palmier la 100g?",
        "a": "Ulei de Palmier conține 884 kcal la 100g, cu 0g proteine, 0g carbohidrați, 100g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ulei de Palmier bun pentru slăbit?",
        "a": "Ulei de Palmier este mai caloric (884 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Ulei de Palmier?",
        "a": "Ulei de Palmier are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ulei-masline",
      "ulei-rapita",
      "ulei-avocado"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "1 lingură",
        "grams": 14
      },
      {
        "name": "2 linguri",
        "grams": 28
      },
      {
        "name": "100ml",
        "grams": 100
      }
    ]
  },
  {
    "slug": "cafea-neagra",
    "name": "Cafea Neagră",
    "nameGenitive": "cafelei negre",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 2,
    "protein": 0.3,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Cafea Neagră | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Cafea Neagră: 2 kcal la 100g, 0.3g proteine, 0g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Cafea Neagră — Valori Nutriționale la 100g",
    "intro": "Cafea Neagră are 2 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 5 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Cafea Neagră la 100g?",
        "a": "Cafea Neagră conține 2 kcal la 100g, cu 0.3g proteine, 0g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Cafea Neagră bun pentru slăbit?",
        "a": "Da! Cu doar 2 kcal la 100g, Cafea Neagră este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Cafea Neagră?",
        "a": "Cafea Neagră are 0.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "ceai-verde",
      "suc-mere",
      "vin-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Ceașcă (240ml)",
        "grams": 240
      },
      {
        "name": "2 cești",
        "grams": 480
      }
    ]
  },
  {
    "slug": "ceai-verde",
    "name": "Ceai Verde",
    "nameGenitive": "ceaiului verde",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 1,
    "protein": 0.2,
    "carbs": 0.2,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Ceai Verde | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ceai Verde: 1 kcal la 100g, 0.2g proteine, 0.2g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ceai Verde — Valori Nutriționale la 100g",
    "intro": "Ceai Verde are 1 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 3 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ceai Verde la 100g?",
        "a": "Ceai Verde conține 1 kcal la 100g, cu 0.2g proteine, 0.2g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ceai Verde bun pentru slăbit?",
        "a": "Da! Cu doar 1 kcal la 100g, Ceai Verde este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Ceai Verde?",
        "a": "Ceai Verde are 0.2g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-mere",
      "vin-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Ceașcă (240ml)",
        "grams": 240
      },
      {
        "name": "2 cești",
        "grams": 480
      }
    ]
  },
  {
    "slug": "ceai-negru",
    "name": "Ceai Negru",
    "nameGenitive": "ceaiului negru",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 1,
    "protein": 0.1,
    "carbs": 0.3,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Ceai Negru | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Ceai Negru: 1 kcal la 100g, 0.1g proteine, 0.3g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Ceai Negru — Valori Nutriționale la 100g",
    "intro": "Ceai Negru are 1 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 3 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Ceai Negru la 100g?",
        "a": "Ceai Negru conține 1 kcal la 100g, cu 0.1g proteine, 0.3g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Ceai Negru bun pentru slăbit?",
        "a": "Da! Cu doar 1 kcal la 100g, Ceai Negru este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Ceai Negru?",
        "a": "Ceai Negru are 0.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-mere",
      "vin-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Ceașcă (240ml)",
        "grams": 240
      },
      {
        "name": "2 cești",
        "grams": 480
      }
    ]
  },
  {
    "slug": "lapte-praf",
    "name": "Lapte Praf",
    "nameGenitive": "laptelui praf",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 496,
    "protein": 26,
    "carbs": 38,
    "fat": 27,
    "fiber": 0,
    "title": "Calorii Lapte Praf | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Lapte Praf: 496 kcal la 100g, 26g proteine, 38g carbohidrați, 27g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Lapte Praf — Valori Nutriționale la 100g",
    "intro": "Lapte Praf are 496 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 1240 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Lapte Praf la 100g?",
        "a": "Lapte Praf conține 496 kcal la 100g, cu 26g proteine, 38g carbohidrați, 27g grăsimi și 0g fibre."
      },
      {
        "q": "Este Lapte Praf bun pentru slăbit?",
        "a": "Lapte Praf este mai caloric (496 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Lapte Praf?",
        "a": "Lapte Praf este o sursă excelentă de proteine — 26g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-mere",
      "vin-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Porție mică (100g)",
        "grams": 100
      },
      {
        "name": "Porție standard (150g)",
        "grams": 150
      },
      {
        "name": "Porție mare (200g)",
        "grams": 200
      }
    ]
  },
  {
    "slug": "suc-portocale",
    "name": "Suc de Portocale",
    "nameGenitive": "sucului de portocale",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 45,
    "protein": 0.7,
    "carbs": 10,
    "fat": 0.2,
    "fiber": 0.2,
    "title": "Calorii Suc de Portocale | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Suc de Portocale: 45 kcal la 100g, 0.7g proteine, 10g carbohidrați, 0.2g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Suc de Portocale — Valori Nutriționale la 100g",
    "intro": "Suc de Portocale are 45 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 113 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Suc de Portocale la 100g?",
        "a": "Suc de Portocale conține 45 kcal la 100g, cu 0.7g proteine, 10g carbohidrați, 0.2g grăsimi și 0.2g fibre."
      },
      {
        "q": "Este Suc de Portocale bun pentru slăbit?",
        "a": "Da! Cu doar 45 kcal la 100g, Suc de Portocale este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Suc de Portocale?",
        "a": "Suc de Portocale are 0.7g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-mere",
      "vin-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "suc-mere",
    "name": "Suc de Mere",
    "nameGenitive": "sucului de mere",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 46,
    "protein": 0.1,
    "carbs": 11,
    "fat": 0.1,
    "fiber": 0.2,
    "title": "Calorii Suc de Mere | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Suc de Mere: 46 kcal la 100g, 0.1g proteine, 11g carbohidrați, 0.1g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Suc de Mere — Valori Nutriționale la 100g",
    "intro": "Suc de Mere are 46 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 115 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Suc de Mere la 100g?",
        "a": "Suc de Mere conține 46 kcal la 100g, cu 0.1g proteine, 11g carbohidrați, 0.1g grăsimi și 0.2g fibre."
      },
      {
        "q": "Este Suc de Mere bun pentru slăbit?",
        "a": "Da! Cu doar 46 kcal la 100g, Suc de Mere este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Suc de Mere?",
        "a": "Suc de Mere are 0.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "vin-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "smoothie-fructe",
    "name": "Smoothie Fructe",
    "nameGenitive": "smoothie-ului de fructe",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 75,
    "protein": 1,
    "carbs": 18,
    "fat": 0.3,
    "fiber": 1.5,
    "title": "Calorii Smoothie Fructe | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Smoothie Fructe: 75 kcal la 100g, 1g proteine, 18g carbohidrați, 0.3g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Smoothie Fructe — Valori Nutriționale la 100g",
    "intro": "Smoothie Fructe are 75 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 188 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Smoothie Fructe la 100g?",
        "a": "Smoothie Fructe conține 75 kcal la 100g, cu 1g proteine, 18g carbohidrați, 0.3g grăsimi și 1.5g fibre."
      },
      {
        "q": "Este Smoothie Fructe bun pentru slăbit?",
        "a": "Da! Cu doar 75 kcal la 100g, Smoothie Fructe este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Smoothie Fructe?",
        "a": "Smoothie Fructe are 1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "vin-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "energizant",
    "name": "Energizant",
    "nameGenitive": "energizantului",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 45,
    "protein": 0.3,
    "carbs": 11,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Energizant | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Energizant: 45 kcal la 100g, 0.3g proteine, 11g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Energizant — Valori Nutriționale la 100g",
    "intro": "Energizant are 45 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 113 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Energizant la 100g?",
        "a": "Energizant conține 45 kcal la 100g, cu 0.3g proteine, 11g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Energizant bun pentru slăbit?",
        "a": "Da! Cu doar 45 kcal la 100g, Energizant este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Energizant?",
        "a": "Energizant are 0.3g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "vin-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "bere",
    "name": "Bere",
    "nameGenitive": "berii",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 43,
    "protein": 0.5,
    "carbs": 3.6,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Bere | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Bere: 43 kcal la 100g, 0.5g proteine, 3.6g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Bere — Valori Nutriționale la 100g",
    "intro": "Bere are 43 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 108 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Bere la 100g?",
        "a": "Bere conține 43 kcal la 100g, cu 0.5g proteine, 3.6g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Bere bun pentru slăbit?",
        "a": "Da! Cu doar 43 kcal la 100g, Bere este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Bere?",
        "a": "Bere are 0.5g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "vin-rosu"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "vin-rosu",
    "name": "Vin Roșu",
    "nameGenitive": "vinului roșu",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 85,
    "protein": 0.1,
    "carbs": 2.6,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Vin Roșu | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Vin Roșu: 85 kcal la 100g, 0.1g proteine, 2.6g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Vin Roșu — Valori Nutriționale la 100g",
    "intro": "Vin Roșu are 85 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 213 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Vin Roșu la 100g?",
        "a": "Vin Roșu conține 85 kcal la 100g, cu 0.1g proteine, 2.6g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Vin Roșu bun pentru slăbit?",
        "a": "Da! Cu doar 85 kcal la 100g, Vin Roșu este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Vin Roșu?",
        "a": "Vin Roșu are 0.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "bere"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "vin-alb",
    "name": "Vin Alb",
    "nameGenitive": "vinului alb",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 82,
    "protein": 0.1,
    "carbs": 2.6,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Vin Alb | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Vin Alb: 82 kcal la 100g, 0.1g proteine, 2.6g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Vin Alb — Valori Nutriționale la 100g",
    "intro": "Vin Alb are 82 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 205 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Vin Alb la 100g?",
        "a": "Vin Alb conține 82 kcal la 100g, cu 0.1g proteine, 2.6g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Vin Alb bun pentru slăbit?",
        "a": "Da! Cu doar 82 kcal la 100g, Vin Alb este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric."
      },
      {
        "q": "Câte proteine are Vin Alb?",
        "a": "Vin Alb are 0.1g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "bere"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "vodka",
    "name": "Vodkă",
    "nameGenitive": "vodkăi",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 231,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Vodkă | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Vodkă: 231 kcal la 100g, 0g proteine, 0g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Vodkă — Valori Nutriționale la 100g",
    "intro": "Vodkă are 231 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 578 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Vodkă la 100g?",
        "a": "Vodkă conține 231 kcal la 100g, cu 0g proteine, 0g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Vodkă bun pentru slăbit?",
        "a": "Vodkă are un conținut caloric moderat (231 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Vodkă?",
        "a": "Vodkă are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "bere"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "whisky",
    "name": "Whisky",
    "nameGenitive": "whisky-ului",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 250,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Whisky | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Whisky: 250 kcal la 100g, 0g proteine, 0g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Whisky — Valori Nutriționale la 100g",
    "intro": "Whisky are 250 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 625 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Whisky la 100g?",
        "a": "Whisky conține 250 kcal la 100g, cu 0g proteine, 0g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Whisky bun pentru slăbit?",
        "a": "Whisky este mai caloric (250 kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general."
      },
      {
        "q": "Câte proteine are Whisky?",
        "a": "Whisky are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "bere"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "rom",
    "name": "Rom",
    "nameGenitive": "romului",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 231,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Rom | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Rom: 231 kcal la 100g, 0g proteine, 0g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Rom — Valori Nutriționale la 100g",
    "intro": "Rom are 231 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 578 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Rom la 100g?",
        "a": "Rom conține 231 kcal la 100g, cu 0g proteine, 0g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Rom bun pentru slăbit?",
        "a": "Rom are un conținut caloric moderat (231 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Rom?",
        "a": "Rom are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "bere"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  },
  {
    "slug": "tequila",
    "name": "Tequila",
    "nameGenitive": "tequilei",
    "category": "bauturi",
    "categoryName": "Băuturi",
    "calories": 231,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0,
    "title": "Calorii Tequila | Valori Nutriționale Complete | GymBro.ro",
    "metaDescription": "Tequila: 231 kcal la 100g, 0g proteine, 0g carbohidrați, 0g grăsimi. Tabele nutriționale complete și calorii per porție.",
    "h1": "Calorii Tequila — Valori Nutriționale la 100g",
    "intro": "Tequila are 231 kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ 578 kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.",
    "benefits": [
      "Hidratare celulară esențială pentru toate funcțiile metabolice",
      "Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)",
      "Electroliți naturali pentru echilibrul hidric",
      "Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă",
      "Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',"
    ],
    "howToEat": [
      "Consumat în porții moderate — verifică întotdeauna conținutul caloric",
      "Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice",
      "Alege variantele fără zahăr adăugat când este posibil",
      "Limitează consumul de alcool conform recomandărilor medicale"
    ],
    "faqs": [
      {
        "q": "Câte calorii are Tequila la 100g?",
        "a": "Tequila conține 231 kcal la 100g, cu 0g proteine, 0g carbohidrați, 0g grăsimi și 0g fibre."
      },
      {
        "q": "Este Tequila bun pentru slăbit?",
        "a": "Tequila are un conținut caloric moderat (231 kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate."
      },
      {
        "q": "Câte proteine are Tequila?",
        "a": "Tequila are 0g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine."
      }
    ],
    "relatedSlugs": [
      "cafea-neagra",
      "suc-portocale",
      "bere"
    ],
    "ctaText": "Calculează-ți caloriile zilnice",
    "ctaLink": "/calculator",
    "portionSizes": [
      {
        "name": "Pahar mic (150ml)",
        "grams": 150
      },
      {
        "name": "Pahar standard (250ml)",
        "grams": 250
      },
      {
        "name": "Doză/Sticlă (330ml)",
        "grams": 330
      }
    ]
  }
]
