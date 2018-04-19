const PRIMARY_GRAPES = {
  cava: {
    grapeName: "Cava",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.spain
    ]
  },
  champagne: {
    grapeName: "Champagne",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.france
    ]
  },
  usa_champagne: {
    grapeName: "USA Champagne",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.united_states
    ]
  },
  lambrusco: {
    grapeName: "Lambrusco",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  prosecco: {
    grapeName: "Prosecco",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  albarino: {
    grapeName: "Albarino",
    wineType: "Light-Bodied White Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.portugal,
      COUNTRIES.united_states
    ]
  },
  gruener_veltliner: {
    grapeName: 'Gruener Veltliner',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.austria,
      COUNTRIES.slovakia,
      COUNTRIES.czech_republic,
      COUNTRIES.hungary
    ]
  },
  muscadet: {
    grapeName: 'Muscadet',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.france
    ]
  },
  pinot_gris: {
    grapeName: 'Pinot Gris',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.germany,
      COUNTRIES.australia,
      COUNTRIES.france,
      COUNTRIES.moldova,
      COUNTRIES.hungary
    ]
  },
  sauvignon_blanc: {
    grapeName: 'Sauvignon Blanc',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.france,
      COUNTRIES.new_zealand,
      COUNTRIES.chile,
      COUNTRIES.south_africa,
      COUNTRIES.moldova,
      COUNTRIES.united_states,
      COUNTRIES.australia,
      COUNTRIES.romania,
      COUNTRIES.spain,
      COUNTRIES.italy,
      COUNTRIES.ukraine,
      COUNTRIES.argentina
    ]
  },
  soave: {
    grapeName: 'Soave',
    wineType: 'Light-Bodied White Wine',
    countries: [COUNTRIES.italy]
  },
  vermentino: {
    grapeName: 'Vermentino',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.france,
      COUNTRIES.corsica,
      COUNTRIES.italy,
      COUNTRIES.sardinia
    ]

  },
  chardonnay: {
    grapeName: 'Chardonnay',
    wineType: 'Full-Bodied White Wine',
    countries: [
      COUNTRIES.france,
      COUNTRIES.united_states,
      COUNTRIES.australia,
      COUNTRIES.italy,
      COUNTRIES.chile,
      COUNTRIES.south_africa,
      COUNTRIES.spain,
      COUNTRIES.argentina,
      COUNTRIES.moldova,
      COUNTRIES.new_zealand
    ]
  },
  marsanne_blend: {
    grapeName: 'Marsanne Blend',
    wineType: 'Full-Bodied White Wine',
    countries: [
      COUNTRIES.france
    ]
  },
  semillom: {
    grapeName: "Semillon",
    wineType: "Full-Bodied White Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.chile,
      COUNTRIES.south_africa,
      COUNTRIES.argentina,
      COUNTRIES.united_states,
      COUNTRIES.turkey
    ]
  },
  viognier: {
    grapeName: "Vionier",
    wineType: "Full-Bodied White Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.united_states
    ]
  },
  chenin_blanc: {
    grapeName: "Chenin Blanc",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.south_africa,
      COUNTRIES.france,
      COUNTRIES.argentina,
      COUNTRIES.united_states,
      COUNTRIES.turkey
    ]
  },
  gewurtztraminer: {
    grapeName: "Gewurtztraminer",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.moldova,
      COUNTRIES.ukraine,
      COUNTRIES.australia,
      COUNTRIES.germany,
      COUNTRIES.united_states
    ]
  },
  muscat_blanc: {
    grapeName: "Mucat Blanc",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.france,
      COUNTRIES.greece,
      COUNTRIES.spain,
      COUNTRIES.brazil,
      COUNTRIES.united_states,
      COUNTRIES.portugal
    ]
  },
  riesling: {
    grapeName: "Riesling",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.germany,
      COUNTRIES.united_states,
      COUNTRIES.australia,
      COUNTRIES.france,
      COUNTRIES.ukraine,
      COUNTRIES.moldova,
      COUNTRIES.hungary
    ]
  },
  torrontes: {
    grapeName: "Torrontes",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.argentina
    ]
  },
  rose: {
    grapeName: "Rose",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.spain
    ]
  },
  gamay: {
    grapeName: "Gamay",
    wineType: "Light-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.switzerland,
      COUNTRIES.canada,
      COUNTRIES.turkey
    ]
  },
  pinot_noir: {
    grapeName: "Pinot Noir",
    wineType: "Light-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.united_states,
      COUNTRIES.germany,
      COUNTRIES.moldova,
      COUNTRIES.italy,
      COUNTRIES.new_zealand,
      COUNTRIES.australia,
      COUNTRIES.switzerland
    ]
  },
  barbera: {
    grapeName: "Barbera",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.argentina
    ]
  },
  cabnernet_franc: {
    grapeName: "Cabernet Franc",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.hungary,
      COUNTRIES.chile,
      COUNTRIES.south_africa
    ]
  },
  carignan: {
    grapeName: "Carignan",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.argentina
    ]
  },
  carmenere: {
    grapeName: "Carmenere",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.chile,
      COUNTRIES.china,
      COUNTRIES.italy
    ]
  },
  grenache: {
    grapeName: "Grenache",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.spain,
      COUNTRIES.italy,
      COUNTRIES.algeria,
      COUNTRIES.united_states,
      COUNTRIES.australia
    ]
  },
  mencia: {
    grapeName: "Mencia",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.portugal
    ]
  },
  merlot: {
    grapeName: "Merlot",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.united_states,
      COUNTRIES.spain,
      COUNTRIES.italy,
      COUNTRIES.romania,
      COUNTRIES.bulgaria,
      COUNTRIES.chile,
      COUNTRIES.australia
    ]
  },
  montepulciano: {
    grapeName: "Montepulciano",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.argentina
    ]
  },
  negroamaro: {
    grapeName: "Negroamaro",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  gsm_blend: {
    grapeName: "GSM (Granache, Syrah, Mourvedre) Blend",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.france
    ]
  },
  sangiovese: {
    grapeName: "Sangiovese",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.argentina,
      COUNTRIES.france,
      COUNTRIES.tunisia,
      COUNTRIES.united_states,
      COUNTRIES.australia
    ]
  },
  valpolicella_blend: {
    grapeName: "Valpolicella Blend",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  zinfandel: {
    grapeName: "Zinfandel",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.united_states,
      COUNTRIES.italy
    ]
  },
  aglianico: {
    grapeName: "Aglianico",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  bordeaux_blend: {
    grapeName: "Bordeaux Blend",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.france
    ]
  },
  cabernet_sauvignon: {
    grapeName: "Cabernet Sauvignon",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.chile,
      COUNTRIES.united_states,
      COUNTRIES.australia,
      COUNTRIES.spain,
      COUNTRIES.china,
      COUNTRIES.argentina,
      COUNTRIES.italy,
      COUNTRIES.south_africa
    ]
  },
  malbec: {
    grapeName: "Malbec",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.argentina,
      COUNTRIES.france,
      COUNTRIES.chile,
      COUNTRIES.united_states,
      COUNTRIES.south_africa,
      COUNTRIES.australia,
      COUNTRIES.italy
    ]
  },
  mourvedre: {
    grapeName: "Mourvedre",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.united_states,
      COUNTRIES.south_africa
    ]
  },
  nebbilo: {
    grapeName: "Nebbiolo",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.mexico,
      COUNTRIES.argentina,
      COUNTRIES.australia,
      COUNTRIES.united_states
    ]
  },
  nero_davola: {
    grapeName: "Nero D'Avola",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
    ]
  },
  petit_verdot: {
    grapeName: "Petit Verdot",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.united_states,
      COUNTRIES.south_africa,
      COUNTRIES.chile,
      COUNTRIES.argentina
    ]
  },
  petite_sirah: {
    grapeName: "Petite Sirah",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.united_states
    ]
  },
  pinotage: {
    grapeName: "Pinotage",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.south_africa
    ]
  },
  syrah: {
    grapeName: "Syrah",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.spain,
      COUNTRIES.argentina,
      COUNTRIES.south_africa,
      COUNTRIES.united_states,
      COUNTRIES.italy,
      COUNTRIES.chile,
      COUNTRIES.portugal
    ]
  },
  tempranillo: {
    grapeName: "Tempranillo",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.portugal,
      COUNTRIES.argentina,
      COUNTRIES.france,
      COUNTRIES.australia
    ]
  },
  touriga_nacional: {
    grapeName: "Touriga Nacional",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.portugal
    ]
  },
  madeira: {
    grapeName: "Madeira",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.portugal_madeira
    ]
  },
  marsala: {
    grapeName: "Marsala",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  port: {
    grapeName: "Port",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.portugal
    ]
  },
  sauternais: {
    grapeName: "Sauternais",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.france
    ]
  },
  sherry: {
    grapeName: "Sherry",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.spain
    ]
  },
  vin_santo: {
    grapeName: "Vin Santo",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
};