#!/usr/bin/env node
// Generator for alimentPages data

const aliments = [
  // slug, name, nameGen, cat, catName, kcal, prot, carb, fat, fib
  // CARNE ȘI PEȘTE (40)
  ['piept-pui','Piept de Pui','pieptului de pui','carne','Carne și Pește',165,31,0,3.6,0],
  ['pulpa-pui','Pulpă de Pui','pulpei de pui','carne','Carne și Pește',209,26,0,11,0],
  ['pui-intreg','Pui Întreg','puiului întreg','carne','Carne și Pește',215,18,0,15,0],
  ['curcan-piept','Piept de Curcan','pieptului de curcan','carne','Carne și Pește',135,29,0,1.5,0],
  ['curcan-pulpa','Pulpă de Curcan','pulpei de curcan','carne','Carne și Pește',170,28,0,7,0],
  ['vita-antricot','Antricot de Vită','antricotului de vită','carne','Carne și Pește',271,26,0,18,0],
  ['vita-muschi','Mușchi de Vită','mușchiului de vită','carne','Carne și Pește',197,29,0,9,0],
  ['vita-tocata','Vită Tocată','vitei tocate','carne','Carne și Pește',250,26,0,15,0],
  ['porc-muschi','Mușchi de Porc','mușchiului de porc','carne','Carne și Pește',143,26,0,3.5,0],
  ['porc-ceafa','Ceafă de Porc','cefei de porc','carne','Carne și Pește',300,20,0,24,0],
  ['porc-cotlet','Cotlet de Porc','cotletului de porc','carne','Carne și Pește',232,25,0,14,0],
  ['porc-fleica','Fleică de Porc','fleicii de porc','carne','Carne și Pește',310,18,0,26,0],
  ['miel-pulpa','Pulpă de Miel','pulpei de miel','carne','Carne și Pește',258,25,0,17,0],
  ['miel-cotlet','Cotlet de Miel','cotletului de miel','carne','Carne și Pește',294,25,0,21,0],
  ['salam','Salam','salamului','carne','Carne și Pește',336,13,1,30,0],
  ['sunca-presata','Șuncă Presată','șuncii presate','carne','Carne și Pește',145,17,3,7,0],
  ['bacon','Bacon','baconului','carne','Carne și Pește',417,12,1,42,0],
  ['carnati-porc','Cârnați de Porc','cârnațului de porc','carne','Carne și Pește',339,14,2,30,0],
  ['mici','Mici','micilor','carne','Carne și Pește',290,20,0,23,0],
  ['pastrama','Pastramă','pastramei','carne','Carne și Pește',180,22,1,10,0],
  ['somon','Somon','somonului','carne','Carne și Pește',208,20,0,13,0],
  ['ton-conserva','Ton la Conservă','tonului la conservă','carne','Carne și Pește',116,26,0,1,0],
  ['macrou','Macrou','macroulului','carne','Carne și Pește',205,19,0,14,0],
  ['cod','Cod','codului','carne','Carne și Pește',82,18,0,0.7,0],
  ['pastrav','Păstrăv','păstrăvului','carne','Carne și Pește',141,20,0,6,0],
  ['crap','Crap','crapului','carne','Carne și Pește',127,18,0,6,0],
  ['salau','Șalău','șalăului','carne','Carne și Pește',93,19,0,1.5,0],
  ['sardine','Sardine','sardinelor','carne','Carne și Pește',208,25,0,11,0],
  ['hering','Hering','heringului','carne','Carne și Pește',158,18,0,9,0],
  ['creveti','Creveți','creveților','carne','Carne și Pește',85,20,0,0.5,0],
  ['calamari','Calamari','calamărilor','carne','Carne și Pește',92,16,3,1.4,0],
  ['midii','Midii','midiilor','carne','Carne și Pește',86,12,4,2.2,0],
  ['ton-proaspat','Ton Proaspăt','tonului proaspăt','carne','Carne și Pește',144,23,0,5,0],
  ['tilapia','Tilapia','tilapiei','carne','Carne și Pește',96,20,0,1.7,0],
  ['dorada','Doradă','doradei','carne','Carne și Pește',100,20,0,2.5,0],
  ['biban','Biban','bibanului','carne','Carne și Pește',97,19,0,2,0],
  ['somn','Somn','somnului','carne','Carne și Pește',195,18,0,13,0],
  ['stiuca','Știucă','știucii','carne','Carne și Pește',88,19,0,1,0],
  ['calcan','Calcan','calcanului','carne','Carne și Pește',86,16,0,2.5,0],
  ['file-pangasius','File de Pangasius','fileului de pangasius','carne','Carne și Pește',90,17,0,2,0],

  // LACTATE ȘI OUĂ (30)
  ['oua-intregi','Ouă Întregi','ouălor întregi','lactate','Lactate și Ouă',155,13,1.1,11,0],
  ['oua-albus','Albuș de Ou','albușului de ou','lactate','Lactate și Ouă',52,11,0.7,0.2,0],
  ['lapte-integral','Lapte Integral','laptelui integral','lactate','Lactate și Ouă',61,3.2,4.8,3.3,0],
  ['lapte-degresat','Lapte Degresat','laptelui degresat','lactate','Lactate și Ouă',34,3.4,4.9,0.2,0],
  ['iaurt-grecesc','Iaurt Grecesc','iaurtului grecesc','lactate','Lactate și Ouă',97,9,4,5,0],
  ['iaurt-simplu','Iaurt Simplu','iaurtului simplu','lactate','Lactate și Ouă',59,3.5,4.7,3.3,0],
  ['smantana','Smântână','smântânii','lactate','Lactate și Ouă',215,2.7,4.2,21,0],
  ['branza-telemea','Brânză Telemea','brânzei telemea','lactate','Lactate și Ouă',260,18,2,20,0],
  ['branza-feta','Brânză Feta','brânzei feta','lactate','Lactate și Ouă',264,14,4,21,0],
  ['cascaval','Cașcaval','cașcavalului','lactate','Lactate și Ouă',356,25,1.3,28,0],
  ['parmezan','Parmezan','parmezanului','lactate','Lactate și Ouă',431,38,3.2,29,0],
  ['mozzarella','Mozzarella','mozzarellei','lactate','Lactate și Ouă',280,28,2.2,17,0],
  ['branza-vaci','Brânză de Vaci','brânzei de vaci','lactate','Lactate și Ouă',98,11,3.4,4.3,0],
  ['urda','Urdă','urdei','lactate','Lactate și Ouă',120,13,4,5.5,0],
  ['ricotta','Ricotta','ricottei','lactate','Lactate și Ouă',174,11,3,13,0],
  ['unt','Unt','untului','lactate','Lactate și Ouă',717,0.9,0.1,81,0],
  ['margarina','Margarină','margarinei','lactate','Lactate și Ouă',720,0.2,0.7,80,0],
  ['frisca','Frișcă','frișcăi','lactate','Lactate și Ouă',340,2.1,2.8,35,0],
  ['lapte-cocos','Lapte de Cocos','laptelui de cocos','lactate','Lactate și Ouă',230,2.3,6,23,0],
  ['lapte-migdale','Lapte de Migdale','laptelui de migdale','lactate','Lactate și Ouă',30,1.1,3.5,1,0],
  ['lapte-soia','Lapte de Soia','laptelui de soia','lactate','Lactate și Ouă',54,3.3,6.3,1.8,0],
  ['kefir','Kefir','kefirului','lactate','Lactate și Ouă',61,3.4,4.5,3.4,0],
  ['lapte-bataie','Lapte Bătut','laptelui bătut','lactate','Lactate și Ouă',40,3.3,4.8,0.9,0],
  ['branza-topita','Brânză Topită','brânzei topite','lactate','Lactate și Ouă',270,12,8,22,0],
  ['branza-brie','Brânză Brie','brânzei brie','lactate','Lactate și Ouă',334,21,0.5,28,0],
  ['camembert','Camembert','camembertului','lactate','Lactate și Ouă',300,20,0.5,24,0],
  ['gorgonzola','Gorgonzola','gorgonzolei','lactate','Lactate și Ouă',353,21,2,29,0],
  ['cottage-cheese','Cottage Cheese','cottage cheeseu','lactate','Lactate și Ouă',98,11,3.4,4.3,0],
  ['halloumi','Halloumi','halloumi-ului','lactate','Lactate și Ouă',321,21,2,25,0],
  ['mascarpone','Mascarpone','mascarponei','lactate','Lactate și Ouă',429,4.5,4,44,0],

  // CEREALE ȘI PÂINE (25)
  ['paine-alba','Pâine Albă','pâinii albe','cereale','Cereale și Pâine',265,9,49,3,2.7],
  ['paine-integrala','Pâine Integrală','pâinii integrale','cereale','Cereale și Pâine',247,13,41,3.4,6.8],
  ['paine-secara','Pâine de Secară','pâinii de secară','cereale','Cereale și Pâine',259,8.5,48,3.3,5.8],
  ['bagel','Bagel','bagelului','cereale','Cereale și Pâine',245,10,48,1.6,2.1],
  ['croissant','Croissant','croissantului','cereale','Cereale și Pâine',406,8.2,46,21,1.8],
  ['orez-alb','Orez Alb Fiert','orezului alb','cereale','Cereale și Pâine',130,2.7,28,0.3,0.4],
  ['orez-brun','Orez Brun Fiert','orezului brun','cereale','Cereale și Pâine',112,2.6,24,0.9,1.8],
  ['orez-basmati','Orez Basmati Fiert','orezului basmati','cereale','Cereale și Pâine',121,2.5,26,0.4,0.4],
  ['paste-albe','Paste Albe Fierte','pastelor albe','cereale','Cereale și Pâine',158,5.8,31,0.9,1.8],
  ['paste-integrale','Paste Integrale Fierte','pastelor integrale','cereale','Cereale și Pâine',149,5.9,29,1.1,4.5],
  ['fulgi-ovaz','Fulgi de Ovăz','fulgilor de ovăz','cereale','Cereale și Pâine',389,17,66,7,11],
  ['ovaz-instant','Ovăz Instant','ovăzului instant','cereale','Cereale și Pâine',355,12,62,6.5,8],
  ['quinoa','Quinoa Fiartă','quinoei fierte','cereale','Cereale și Pâine',120,4.4,22,1.9,2.8],
  ['hrisca','Hrișcă Fiartă','hrișcăi fierte','cereale','Cereale și Pâine',92,3.4,20,0.6,2.7],
  ['mei','Mei Fiert','meiului fiert','cereale','Cereale și Pâine',119,3.5,23,1,1.3],
  ['orz','Orz Fiert','orzului fiert','cereale','Cereale și Pâine',123,2.3,28,0.4,6],
  ['couscous','Couscous Fiert','couscousului fiert','cereale','Cereale și Pâine',112,3.8,23,0.2,1.4],
  ['porumb-fiert','Porumb Fiert','porumbului fiert','cereale','Cereale și Pâine',96,3.4,21,1.5,2],
  ['mamaliga','Mămăligă','mămăligii','cereale','Cereale și Pâine',100,2,21,0.5,1],
  ['malai','Mălai','mălaiului','cereale','Cereale și Pâine',362,8,77,3.9,5.2],
  ['faina-alba','Făină Albă','făinii albe','cereale','Cereale și Pâine',364,10,76,1,2.7],
  ['faina-integrala','Făină Integrală','făinii integrale','cereale','Cereale și Pâine',340,13,72,2,10.6],
  ['gris','Griș','grișului','cereale','Cereale și Pâine',360,12,73,1.1,3.9],
  ['biscuiti-graham','Biscuiți Graham','biscuiților graham','cereale','Cereale și Pâine',418,7,64,15,3.7],
  ['crakeri','Crakeri','crakerilor','cereale','Cereale și Pâine',430,9.5,70,13,3.2],

  // LEGUME (35)
  ['broccoli','Broccoli','broccoliului','legume','Legume',34,2.8,7,0.4,2.6],
  ['spanac','Spanac','spanacului','legume','Legume',23,2.9,3.6,0.4,2.2],
  ['salata-verde','Salată Verde','salatei verzi','legume','Legume',15,1.4,2.9,0.2,1.3],
  ['rosii','Roșii','roșiilor','legume','Legume',18,0.9,3.9,0.2,1.2],
  ['castraveti','Castraveți','castraveților','legume','Legume',16,0.7,3.6,0.1,0.5],
  ['ardei-rosu','Ardei Roșu','ardeiului roșu','legume','Legume',31,1,7.2,0.3,2.1],
  ['ardei-verde','Ardei Verde','ardeiului verde','legume','Legume',20,0.9,4.6,0.2,1.7],
  ['morcovi','Morcovi','morcovilor','legume','Legume',41,0.9,9.6,0.2,2.8],
  ['telina','Țelină','țelinei','legume','Legume',26,1.5,4,0.3,1.8],
  ['ceapa','Ceapă','cepei','legume','Legume',40,1.1,9.3,0.1,1.7],
  ['usturoi','Usturoi','usturoiului','legume','Legume',149,6.4,33,0.5,2.1],
  ['cartofi','Cartofi','cartofilor','legume','Legume',77,2,17,0.1,2.2],
  ['cartofi-dulci','Cartofi Dulci','cartofilor dulci','legume','Legume',86,1.6,20,0.1,3],
  ['dovleac','Dovleac','dovleacului','legume','Legume',26,1,6.5,0.1,0.5],
  ['zucchini','Zucchini','zucchini-ului','legume','Legume',17,1.2,3.1,0.3,1],
  ['vinete','Vinete','vinetelor','legume','Legume',25,1,6,0.2,3],
  ['ciuperci','Ciuperci','ciupercilor','legume','Legume',22,3.1,3.3,0.3,1],
  ['mazare','Mazăre','mazărei','legume','Legume',81,5.4,14,0.4,5.1],
  ['fasole-verde','Fasole Verde','fasolei verzi','legume','Legume',31,1.8,7,0.1,3.4],
  ['linte','Linte Fiartă','lintei fierte','legume','Legume',116,9,20,0.4,7.9],
  ['naut','Năut Fiert','năutului fiert','legume','Legume',164,9,27,2.6,7.6],
  ['fasole-boabe','Fasole Boabe Fiartă','fasolei boabe','legume','Legume',127,8.7,23,0.5,6.4],
  ['porumb','Porumb (Boabe)','porumbului','legume','Legume',96,3.4,21,1.5,2],
  ['varza','Varză','verzei','legume','Legume',25,1.3,5.8,0.1,2.5],
  ['conopida','Conopidă','conopidei','legume','Legume',25,1.9,5,0.3,2],
  ['gulii','Gulii','guliilor','legume','Legume',27,1.7,6.2,0.1,3.6],
  ['ridichi','Ridichi','ridichilor','legume','Legume',16,0.7,3.4,0.1,1.6],
  ['sfecla','Sfeclă Roșie','sfeclei roșii','legume','Legume',43,1.6,10,0.2,2.8],
  ['pastarnac','Păstârnac','păstârnacului','legume','Legume',75,1.2,18,0.3,4.9],
  ['sparanghel','Sparanghel','sparanghelului','legume','Legume',20,2.2,3.9,0.1,2.1],
  ['avocado','Avocado','avocadoului','legume','Legume',160,2,9,15,7],
  ['masline','Măsline','măslinelor','legume','Legume',145,1,3.8,15,3.2],
  ['anghinare','Anghinare','anghinărei','legume','Legume',47,3.3,11,0.2,5.4],
  ['fenicul','Fenicul','feniculului','legume','Legume',31,1.2,7.3,0.2,3.1],
  ['praz','Praz','prazului','legume','Legume',61,1.5,14,0.3,1.8],

  // FRUCTE (30)
  ['mere','Mere','merelor','fructe','Fructe',52,0.3,14,0.2,2.4],
  ['pere','Pere','perelor','fructe','Fructe',57,0.4,15,0.1,3.1],
  ['banane','Banane','bananelor','fructe','Fructe',89,1.1,23,0.3,2.6],
  ['portocale','Portocale','portocalelor','fructe','Fructe',47,0.9,12,0.1,2.4],
  ['mandarine','Mandarine','mandarinelor','fructe','Fructe',53,0.8,13,0.3,1.8],
  ['lamai','Lămâi','lămâilor','fructe','Fructe',29,1.1,9,0.3,2.8],
  ['grapefruit','Grapefruit','grapefruitului','fructe','Fructe',42,0.8,11,0.1,1.6],
  ['capsuni','Căpșuni','căpșunilor','fructe','Fructe',32,0.7,7.7,0.3,2],
  ['zmeura','Zmeură','zmurii','fructe','Fructe',52,1.2,12,0.7,6.5],
  ['afine','Afine','afinelor','fructe','Fructe',57,0.7,14,0.3,2.4],
  ['coacaze','Coacăze','coacăzelor','fructe','Fructe',63,1.4,15,0.4,4.3],
  ['cirese','Cireșe','cireșelor','fructe','Fructe',50,1,12,0.3,1.6],
  ['visine','Vișine','vișinelor','fructe','Fructe',50,1,12,0.3,1.6],
  ['piersici','Piersici','piersicilor','fructe','Fructe',39,0.9,10,0.3,1.5],
  ['nectarine','Nectarine','nectarinelor','fructe','Fructe',44,1.1,11,0.3,1.7],
  ['caise','Caise','caiselor','fructe','Fructe',48,1.4,11,0.4,2],
  ['prune','Prune','prunelor','fructe','Fructe',46,0.7,11,0.3,1.4],
  ['struguri','Struguri','strugurilor','fructe','Fructe',69,0.7,18,0.2,0.9],
  ['pepene-rosu','Pepene Roșu','pepenelui roșu','fructe','Fructe',30,0.6,7.6,0.2,0.4],
  ['pepene-galben','Pepene Galben','pepenelui galben','fructe','Fructe',36,0.9,8.9,0.1,0.9],
  ['ananas','Ananas','ananasului','fructe','Fructe',50,0.5,13,0.1,1.4],
  ['mango','Mango','mangoului','fructe','Fructe',60,0.8,15,0.4,1.6],
  ['papaya','Papaya','papayei','fructe','Fructe',43,0.5,11,0.3,1.7],
  ['kiwi','Kiwi','kiwi-ului','fructe','Fructe',61,1.1,15,0.5,3],
  ['smochine','Smochine','smochinelor','fructe','Fructe',74,0.8,19,0.3,2.9],
  ['curmale','Curmale','curmalelor','fructe','Fructe',277,1.8,75,0.2,6.7],
  ['cocos','Nucă de Cocos','nucii de cocos','fructe','Fructe',354,3.3,15,33,9],
  ['fructul-pasiunii','Fructul Pasiunii','fructului pasiunii','fructe','Fructe',97,2.2,23,0.7,10.4],
  ['lychee','Lychee','lychee-ului','fructe','Fructe',66,0.8,17,0.4,1.3],
  ['guava','Guava','guavei','fructe','Fructe',68,2.6,14,1,5.4],

  // NUCI ȘI SEMINȚE (15)
  ['migdale','Migdale','migdalelor','nuci','Nuci și Semințe',579,21,22,50,12.5],
  ['nuci','Nuci','nucilor','nuci','Nuci și Semințe',654,15,14,65,6.7],
  ['alune','Alune de Pădure','alunelor','nuci','Nuci și Semințe',628,15,17,61,9.7],
  ['caju','Caju','cajuului','nuci','Nuci și Semințe',553,18,30,44,3.3],
  ['fistic','Fistic','fisticului','nuci','Nuci și Semințe',560,20,28,45,10.6],
  ['nuci-macadamia','Nuci Macadamia','nucilor macadamia','nuci','Nuci și Semințe',718,8,14,76,8.6],
  ['nuci-braziliene','Nuci Braziliene','nucilor braziliene','nuci','Nuci și Semințe',656,14,12,66,7.5],
  ['seminte-floarea-soarelui','Semințe de Floarea-Soarelui','semințelor de floarea-soarelui','nuci','Nuci și Semințe',584,21,20,51,8.6],
  ['seminte-dovleac','Semințe de Dovleac','semințelor de dovleac','nuci','Nuci și Semințe',446,19,54,19,18],
  ['seminte-chia','Semințe de Chia','semințelor de chia','nuci','Nuci și Semințe',486,17,42,31,34],
  ['seminte-in','Semințe de In','semințelor de in','nuci','Nuci și Semințe',534,18,29,42,27],
  ['seminte-susan','Semințe de Susan','semințelor de susan','nuci','Nuci și Semințe',573,18,23,50,11.8],
  ['nuci-pecan','Nuci Pecan','nucilor pecan','nuci','Nuci și Semințe',691,9,14,72,9.6],
  ['nuci-pin','Nuci de Pin','nucilor de pin','nuci','Nuci și Semințe',673,14,13,68,3.7],
  ['arahide','Arahide','arahidelor','nuci','Nuci și Semințe',567,26,16,49,8.5],

  // ULEIURI ȘI GRĂSIMI (10)
  ['ulei-masline','Ulei de Măsline','uleiului de măsline','uleiuri','Uleiuri și Grăsimi',884,0,0,100,0],
  ['ulei-floarea-soarelui','Ulei de Floarea-Soarelui','uleiului de floarea-soarelui','uleiuri','Uleiuri și Grăsimi',884,0,0,100,0],
  ['ulei-cocos','Ulei de Cocos','uleiului de cocos','uleiuri','Uleiuri și Grăsimi',862,0,0,100,0],
  ['ulei-rapita','Ulei de Rapiță','uleiului de rapiță','uleiuri','Uleiuri și Grăsimi',884,0,0,100,0],
  ['unt-de-arahide','Unt de Arahide','untului de arahide','uleiuri','Uleiuri și Grăsimi',588,25,20,50,6],
  ['tahini','Tahini','tahiniului','uleiuri','Uleiuri și Grăsimi',595,17,21,54,9.3],
  ['ulei-avocado','Ulei de Avocado','uleiului de avocado','uleiuri','Uleiuri și Grăsimi',884,0,0,100,0],
  ['ghee','Ghee','ghee-ului','uleiuri','Uleiuri și Grăsimi',900,0,0,100,0],
  ['seu-vita','Seu de Vită','seului de vită','uleiuri','Uleiuri și Grăsimi',902,0,0,100,0],
  ['ulei-palmier','Ulei de Palmier','uleiului de palmier','uleiuri','Uleiuri și Grăsimi',884,0,0,100,0],

  // BĂUTURI (15)
  ['cafea-neagra','Cafea Neagră','cafelei negre','bauturi','Băuturi',2,0.3,0,0,0],
  ['ceai-verde','Ceai Verde','ceaiului verde','bauturi','Băuturi',1,0.2,0.2,0,0],
  ['ceai-negru','Ceai Negru','ceaiului negru','bauturi','Băuturi',1,0.1,0.3,0,0],
  ['lapte-praf','Lapte Praf','laptelui praf','bauturi','Băuturi',496,26,38,27,0],
  ['suc-portocale','Suc de Portocale','sucului de portocale','bauturi','Băuturi',45,0.7,10,0.2,0.2],
  ['suc-mere','Suc de Mere','sucului de mere','bauturi','Băuturi',46,0.1,11,0.1,0.2],
  ['smoothie-fructe','Smoothie Fructe','smoothie-ului de fructe','bauturi','Băuturi',75,1,18,0.3,1.5],
  ['energizant','Energizant','energizantului','bauturi','Băuturi',45,0.3,11,0,0],
  ['bere','Bere','berii','bauturi','Băuturi',43,0.5,3.6,0,0],
  ['vin-rosu','Vin Roșu','vinului roșu','bauturi','Băuturi',85,0.1,2.6,0,0],
  ['vin-alb','Vin Alb','vinului alb','bauturi','Băuturi',82,0.1,2.6,0,0],
  ['vodka','Vodkă','vodkăi','bauturi','Băuturi',231,0,0,0,0],
  ['whisky','Whisky','whisky-ului','bauturi','Băuturi',250,0,0,0,0],
  ['rom','Rom','romului','bauturi','Băuturi',231,0,0,0,0],
  ['tequila','Tequila','tequilei','bauturi','Băuturi',231,0,0,0,0],
]

// Build related slugs per category
const byCat = {}
for (const a of aliments) {
  const cat = a[3]
  if (!byCat[cat]) byCat[cat] = []
  byCat[cat].push(a[0])
}

function getRelated(slug, cat) {
  const same = byCat[cat].filter(s => s !== slug)
  // pick 3 from same category
  const picked = []
  const step = Math.max(1, Math.floor(same.length / 3))
  for (let i = 0; i < same.length && picked.length < 3; i += step) {
    picked.push(same[i])
  }
  while (picked.length < 3) picked.push(same[picked.length])
  return picked.slice(0, 3)
}

function getPortions(slug, kcal) {
  // standard portions for different food types
  if (slug.includes('ulei') || slug === 'ghee' || slug === 'seu-vita' || slug === 'ulei-palmier') {
    return [
      { name: '1 lingură', grams: 14 },
      { name: '2 linguri', grams: 28 },
      { name: '100ml', grams: 100 },
    ]
  }
  if (['cafea-neagra','ceai-verde','ceai-negru'].includes(slug)) {
    return [
      { name: 'Ceașcă (240ml)', grams: 240 },
      { name: '2 cești', grams: 480 },
    ]
  }
  if (['bere','vin-rosu','vin-alb','vodka','whisky','rom','tequila','suc-portocale','suc-mere','smoothie-fructe','energizant'].includes(slug)) {
    return [
      { name: 'Pahar mic (150ml)', grams: 150 },
      { name: 'Pahar standard (250ml)', grams: 250 },
      { name: 'Doză/Sticlă (330ml)', grams: 330 },
    ]
  }
  if (['lapte-integral','lapte-degresat','lapte-cocos','lapte-migdale','lapte-soia','kefir','lapte-bataie'].includes(slug)) {
    return [
      { name: 'Pahar mic (200ml)', grams: 200 },
      { name: 'Pahar standard (250ml)', grams: 250 },
      { name: 'Porție mare (300ml)', grams: 300 },
    ]
  }
  if (slug === 'unt' || slug === 'margarina' || slug === 'frisca') {
    return [
      { name: '1 linguriță', grams: 5 },
      { name: '1 lingură', grams: 15 },
      { name: 'Porție standard', grams: 30 },
    ]
  }
  if (['migdale','nuci','alune','caju','fistic','nuci-macadamia','nuci-braziliene','seminte-floarea-soarelui','seminte-dovleac','seminte-chia','seminte-in','seminte-susan','nuci-pecan','nuci-pin','arahide'].includes(slug)) {
    return [
      { name: 'Pumn mic', grams: 20 },
      { name: 'Porție standard', grams: 30 },
      { name: 'Porție generoasă', grams: 50 },
    ]
  }
  if (kcal < 50) {
    return [
      { name: 'Porție mică', grams: 100 },
      { name: 'Porție standard', grams: 200 },
      { name: 'Porție mare', grams: 300 },
    ]
  }
  return [
    { name: 'Porție mică (100g)', grams: 100 },
    { name: 'Porție standard (150g)', grams: 150 },
    { name: 'Porție mare (200g)', grams: 200 },
  ]
}

function makePage(row) {
  const [slug, name, nameGenitive, category, categoryName, calories, protein, carbs, fat, fiber] = row
  const related = getRelated(slug, category)
  const portionSizes = getPortions(slug, calories)

  const title = `Calorii ${name} | Valori Nutriționale Complete | GymBro.ro`
  const metaDescription = `${name}: ${calories} kcal la 100g, ${protein}g proteine, ${carbs}g carbohidrați, ${fat}g grăsimi. Tabele nutriționale complete și calorii per porție.`.slice(0, 160)
  const h1 = `Calorii ${name} — Valori Nutriționale la 100g`

  const catIntros = {
    carne: `${name} este o sursă importantă de proteine animale complete, furnizând ${calories} kcal și ${protein}g proteine la 100g. Aminoacizii esențiali din această carne susțin creșterea musculară și recuperarea după efort fizic. Integrarea regulată în dietă, alături de legume și cereale integrale, contribuie la un aport nutritiv optim.`,
    lactate: `${name} este un produs lactat cu ${calories} kcal și ${protein}g proteine la 100g, apreciat în bucătăria românească. Calciu și vitamina B12 sunt printre nutrienții de bază furnizați. Consumul moderat este parte dintr-o dietă echilibrată.`,
    cereale: `${name} furnizează energie susținută prin carbohidrații săi complecși — ${carbs}g la 100g. Cu ${calories} kcal și ${fiber}g fibre, asigură sațietate prelungită și stabilitate glicemică. Ideal ca bază pentru mese echilibrate alături de proteine și legume.`,
    legume: `${name} este o legumă cu valoare calorică mică — doar ${calories} kcal la 100g — dar bogată în fibre, vitamine și minerale esențiale. Cu ${fiber}g fibre pe porție de 100g, contribuie la sănătatea digestivă și la menținerea sațietății. Consumul regulat de legume este asociat cu reducerea riscului de boli cronice.`,
    fructe: `${name} conține ${calories} kcal la 100g, provenite în principal din zaharuri naturale însoțite de fibre, vitamine și antioxidanți. Cu ${fiber}g fibre și un indice glicemic moderat, poate fi inclus cu ușurință într-o dietă sănătoasă. Fructele proaspete de sezon sunt preferabile celor procesate sau din conserve.`,
    nuci: `${name} este o sursă concentrată de energie — ${calories} kcal la 100g — cu grăsimi sănătoase predominant nesaturate. Conținutul de ${protein}g proteine și ${fiber}g fibre la 100g le face extrem de sățioase. O mână mică (25-30g) este porția ideală pentru un snack nutrițional.`,
    uleiuri: `${name} furnizează ${calories} kcal la 100g, exclusiv din grăsimi. Ca orice ulei sau grăsime adăugată, trebuie folosit cu măsură — 1-2 linguri pe zi sunt suficiente. Profilul acizilor grași diferă între uleiuri și influențează semnificativ beneficiile pentru sănătate.`,
    bauturi: `${name} are ${calories} kcal la 100ml, ceea ce înseamnă că o porție standard de 250ml furnizează aproximativ ${Math.round(calories * 2.5)} kcal. Hidratarea corectă este esențială pentru performanță fizică și cognitivă. Alege băuturi cu valoare nutrițională reală față de băuturi îndulcite artificial.`,
  }

  const intro = catIntros[category] || `${name} furnizează ${calories} kcal la 100g, cu ${protein}g proteine, ${carbs}g carbohidrați și ${fat}g grăsimi.`

  const catBenefits = {
    carne: [
      `Sursă de proteine complete cu toți aminoacizii esențiali necesari organismului`,
      `Conținut ridicat de vitamina B12, esențială pentru sistemul nervos și formarea globulelor roșii`,
      `Bogat în zinc și fier hem, minerale cu absorbție superioară față de sursele vegetale`,
      `Susține recuperarea musculară după antrenamente intense`,
      `Furnizează seleniu, un antioxidant important pentru imunitate`,
    ],
    lactate: [
      `Sursă excelentă de calciu pentru oase și dinți sănătoși`,
      `Conținut de vitamina D și B12 pentru sănătatea generală`,
      `Proteinele lactate (cazeina și zerul) au biodisponibilitate ridicată`,
      `Conțin probiotice (în produsele fermentate) pentru sănătatea digestivă`,
      `Furnizează fosfor, potasiu și riboflavină esențiale metabolismului`,
    ],
    cereale: [
      `Sursă de carbohidrați complecși pentru energie susținută pe termen lung`,
      `Fibre alimentare pentru sănătatea digestivă și controlul glicemiei`,
      `Vitamina E și vitaminele din complexul B pentru metabolism energetic`,
      `Minerale esențiale: magneziu, zinc, fier și fosfor`,
      `Sațietate prelungită prin conținut de fibre și amidon rezistent`,
    ],
    legume: [
      `Conținut scăzut de calorii cu densitate nutritivă ridicată`,
      `Bogat în fibre alimentare pentru sănătatea microbiomului intestinal`,
      `Vitamine și minerale esențiale (vitamina C, K, folat, potasiu)`,
      `Antioxidanți și fitonutrienți cu proprietăți anti-inflamatorii`,
      `Hidratare naturală datorată conținutului ridicat de apă`,
    ],
    fructe: [
      `Zaharuri naturale cu eliberare controlată datorită fibrei`,
      `Vitamina C și antioxidanți care protejează celulele de stresul oxidativ`,
      `Fibre solubile și insolubile pentru sănătatea digestivă`,
      `Potasiu și magneziu pentru funcția musculară și tensiunea arterială`,
      `Fitochimicale cu proprietăți anti-inflamatorii și anticancerigene`,
    ],
    nuci: [
      `Grăsimi mononesaturate și polinesaturate pentru sănătatea cardiovasculară`,
      `Proteine vegetale de calitate și aminoacizi esențiali`,
      `Fibre alimentare pentru sațietate și sănătate digestivă`,
      `Vitamina E, un antioxidant liposolubil important`,
      `Minerale: magneziu, zinc, seleniu, fosfor`,
    ],
    uleiuri: [
      `Acizi grași esențiali necesari absorbției vitaminelor liposolubile (A, D, E, K)`,
      `Sursă concentrată de energie pentru activități intense`,
      `Profilul de acizi grași influențează sănătatea cardiovasculară`,
      `Vitamina E (în uleiurile vegetale nerafinate) cu efect antioxidant`,
      `Structura membranelor celulare depinde de aportul adecvat de grăsimi esențiale`,
    ],
    bauturi: [
      `Hidratare celulară esențială pentru toate funcțiile metabolice`,
      `Antioxidanți naturali (în ceaiuri, cafea, sucuri proaspete)`,
      `Electroliți naturali pentru echilibrul hidric`,
      `Cofeina (cafea, ceai) îmbunătățește alertness-ul și performanța cognitivă`,
      `Polifenoli cu efecte anti-inflamatorii (în vinul roșu, ceaiul verde)',`,
    ],
  }

  const benefits = catBenefits[category] || [
    `Sursă de macronutrienți esențiali`,
    `Conține vitamine și minerale importante`,
    `Parte dintr-o dietă echilibrată`,
    `Versatil culinar`,
  ]

  const catHowToEat = {
    carne: [
      `Gătit la grătar sau copt pentru preparare cu minim de grăsimi adăugate`,
      `Inclus în mese echilibrate cu legume și cereale integrale ca garnitură`,
      `Marinat cu ierburi, citrice și condimente pentru gust fără exceso caloric`,
      `Porții de 150-200g per masă pentru un aport proteic optim`,
    ],
    lactate: [
      `Consumat la micul dejun pentru un start proteic al zilei`,
      `Adăugat în smoothie-uri pentru îmbogățire proteică`,
      `Ca snack între mese pentru menținerea glicemiei stabile`,
      `Combinat cu fructe sau nuci pentru o gustare echilibrată`,
    ],
    cereale: [
      `Ca bază pentru mese, combinat cu proteine și legume pentru echilibru`,
      `În mic dejun cu fructe proaspete și iaurt pentru energie matinală`,
      `Porții de 60-80g (uscat) sau 150-200g (fiert) per masă`,
      `Preparat integral când este posibil pentru mai multe fibre și micronutrienți`,
    ],
    legume: [
      `Crude sau lightly steamed pentru reținerea maximă a vitaminelor`,
      `Jumătate din farfurie ar trebui să fie legume la fiecare masă principală`,
      `Variate cromatic pentru un spectru larg de fitochimicale`,
      `Adăugate în supe, tocane, salate sau mâncate ca garnitură`,
    ],
    fructe: [
      `Consumate proaspete pentru beneficiile maxime ale nutrienților`,
      `Ca snack între mese în loc de produse ultra-procesate`,
      `Combinate cu proteine (iaurt, nuci) pentru reducerea impactului glicemic`,
      `Variate pe tot parcursul anului pentru diversitate nutritivă`,
    ],
    nuci: [
      `O mână mică (25-30g) ca snack între mese — porție ideală`,
      `Adăugate în cereale de micul dejun, salate sau deserturi`,
      `Unt de nuci (natural, fără zahăr adăugat) pe pâine integrală`,
      `Combinate cu fructe uscate pentru mix energizant`,
    ],
    uleiuri: [
      `1-2 linguri pe zi în gătit sau dressing-uri de salată`,
      `Adăugate la rece pe salate pentru reținerea maximă a vitaminei E`,
      `Folosite cu moderație — sunt cele mai calorice alimente existente`,
      `Alege uleiuri cold-pressed pentru profilul nutrițional optim`,
    ],
    bauturi: [
      `Consumat în porții moderate — verifică întotdeauna conținutul caloric`,
      `Apa rămâne cel mai sănătos mod de hidratare — minimizează băuturile calorice`,
      `Alege variantele fără zahăr adăugat când este posibil`,
      `Limitează consumul de alcool conform recomandărilor medicale`,
    ],
  }

  const howToEat = catHowToEat[category] || [
    `Consumat în porții moderate ca parte dintr-o dietă echilibrată`,
    `Combinat cu alte alimente pentru mese complete`,
    `Preparat prin metode sănătoase`,
    `Variat cu alte surse nutritive`,
  ]

  const faqs = [
    {
      q: `Câte calorii are ${name} la 100g?`,
      a: `${name} conține ${calories} kcal la 100g, cu ${protein}g proteine, ${carbs}g carbohidrați, ${fat}g grăsimi și ${fiber}g fibre.`,
    },
    {
      q: `Este ${name} bun pentru slăbit?`,
      a: calories < 100
        ? `Da! Cu doar ${calories} kcal la 100g, ${name} este o alegere excelentă pentru diete hipocalorice. Poți consuma porții generoase fără a depăși bugetul caloric.`
        : calories < 250
        ? `${name} are un conținut caloric moderat (${calories} kcal/100g). Consumat în porții rezonabile de 100-150g, se integrează bine în diete de slăbire echilibrate.`
        : `${name} este mai caloric (${calories} kcal/100g), deci este recomandat în porții mici, ca parte dintr-o dietă variată cu un deficit caloric general.`,
    },
    {
      q: `Câte proteine are ${name}?`,
      a: protein > 20
        ? `${name} este o sursă excelentă de proteine — ${protein}g la 100g, ceea ce îl face ideal pentru mese proteice și recuperare musculară.`
        : protein > 10
        ? `${name} conține ${protein}g proteine la 100g, un conținut respectabil care contribuie la aportul zilnic de proteine.`
        : `${name} are ${protein}g proteine la 100g. Combinat cu alte surse proteice, poate contribui la necesarul zilnic de proteine.`,
    },
  ]

  return {
    slug,
    name,
    nameGenitive,
    category,
    categoryName,
    calories,
    protein,
    carbs,
    fat,
    fiber,
    title,
    metaDescription,
    h1,
    intro,
    benefits,
    howToEat,
    faqs,
    relatedSlugs: related,
    ctaText: 'Calculează-ți caloriile zilnice',
    ctaLink: '/calculator',
    portionSizes,
  }
}

const pages = aliments.map(makePage)

const ts = `export interface AlimentPage {
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

export const alimentPages: AlimentPage[] = ${JSON.stringify(pages, null, 2)}
`

const fs = require('fs')
const path = require('path')
const outPath = path.join(__dirname, '../app/alimente/data.ts')
fs.writeFileSync(outPath, ts, 'utf-8')
console.log(`Written ${pages.length} aliment pages to ${outPath}`)
