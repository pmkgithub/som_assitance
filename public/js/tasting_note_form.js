'use strict';
// ************************************************************************* //
// FORM DATA - BEGIN
// ************************************************************************* //
const COUNTRIES =  {
  algeria: "Algeria",
  argentina: "Argentina",
  australia: "Australia",
  austria: "Austria",
  brazil: "Brazil",
  bulgaria: "Bulgaria",
  canada: "Canada",
  chile: "Chile",
  china: "China",
  corsica: "Corsica",
  czech_republic: "Czech Republic",
  france: "France",
  germany: "Germany",
  greece: "Greece",
  hungary: "Hungary",
  italy: "Italy",
  madeira: "Madeira",
  mexico: "Mexico",
  moldova: "Moldova",
  morocco: "Morocco",
  new_zealand: "New Zealand",
  portugal: "Portugal",
  portugal_madeira: "Madeira Island, Portugal",
  romania: "Romania",
  sardinia: "Sardinia",
  sicily: "Sicily",
  slovakia: "Slovakia",
  south_africa: "South Africa",
  spain: "Spain",
  switzerland: "Switzerland",
  tunisia: "Tunisia",
  turkey: "Turkey",
  ukraine: "Ukraine",
  united_states: "United States"
};
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
const APPELLATIONS = {
  argentina: {
    salta: {
      name: "Salta",
      secondary_appellations: null,
    },
    tucuman: {
      name: "Tucuman",
      secondary_appellations: null,
    },
    catamarca: {
      name: "Catamarca",
      secondary_appellations: null,
    },
    la_rioja: {
      name: "La Rioja",
      secondary_appellations: null,
    },
    san_juan: {
      name: "San Juan",
      secondary_appellations: null,
    },
    mendoza: {
      name: "Mendoza",
      secondary_appellations: null,
    },
    patagonia: {
      name: "Patagonia",
      secondary_appellations: null,
    }
  },
  australia: {
    western_australia: {
      name: "Western Australia",
      secondary_appellations: null,
    },
    south_australia: {
      name: "South Australia",
      secondary_appellations: null,
    },
    new_south_wales: {
      name: "New South Wales",
      secondary_appellations: null,
    },
    queesnland: {
      name: "Queensland",
      secondary_appellations: null,
    },
    victoria: {
      name: "Victoria",
      secondary_appellations: null,
    },
    tasmania: {
      name: "Tasmania",
      secondary_appellations: null,
    }
  },
  austria: {
    burgenland: {
      name: "Bergenland",
      secondary_appellations: null,
    },
    niederosterreich: {
      name: "Niederosterreich",
      secondary_appellations: null,
    },
    steiermark: {
      name: "Steiermark",
      secondary_appellations: null,
    },
    wien: {
      name: "Wien",
      secondary_appellations: null,
    }
  },
  chile: {
    atacama: {
      name: "Atacama",
      secondary_appellations: null,
    },
    coquimbo_region: {
      name: "Coquimbo Region",
      secondary_appellations: null,
    },
    aconcagua_region: {
      name: "Aconcagua Region",
      secondary_appellations: null,
    },
    central_valley_region: {
      name: "Central Valley Region",
      secondary_appellations: null,
    },
    south_region: {
      name: "South Region",
      secondary_appellations: null,
    },
    austral_region: {
      name: "Austral Region",
      secondary_appellations: null,
    }
  },
  france: {
    loire_valley: {
      name: "Loire Valley",
      secondary_appellations: null,
    },
    champagne: {
      name: "Champagne",
      secondary_appellations: null,
    },
    alsace: {
      name: "Alsace",
      secondary_appellations: null,
    },
    beaujolais: {
      name: "Beaujolais",
      secondary_appellations: null,
    },
    provence: {
      name: "Provence",
      secondary_appellations: null,
    },
    languedoc_roussilion: {
      name: "Languedoc Roussilion",
      secondary_appellations: null,
    },
    south_west: {
      name: "South West",
      secondary_appellations: null,
    },
    bordeaux: {
      name: "Bordeaux",
      secondary_appellations: {
        medoc: {
          name: "Medoc",
          tertiary_appellations: null,
        },
        graves: {
          name: "Graves",
          tertiary_appellations: null,
        },
        sauternais: {
          name: "Sauternais",
          tertiary_appellations: null,
        },
        langon: {
          name: "Langon",
          tertiary_appellations: null,
        },
        cotes_de_bordeaus: {
          name: "Cotes de Bordeaux",
          tertiary_appellations: null,
        },
        libournais: {
          name: "Libournais",
          tertiary_appellations: null,
        },
        entre_deaux_more: {
          name: "Entre-Deaux-Mere",
          tertiary_appellations: null,
        },
      }
    },
    burgundy: {
      name: "Burgundy",
      secondary_appellations: {
        chablis: {
          name: "Chablis",
          tertiary_appellations: null,
        },
        cote_de_nuits: {
          name: "Cote de Nuits (Cote d'Or)",
          tertiary_appellations: null,
        },
        cote_chalonnaise: {
          name: "Cote Chalonnaise",
          tertiary_appellations: null,
        },
        maconnais: {
          name: "Maconanais",
          tertiary_appellations: null,
        },
      }
    },
    rhone: {
      name: "Rhone Valley",
      secondary_appellations: {
        northern_rhone: {
          name: "Northern Rhone",
          tertiary_appellations: null,
        },
        southern_rhone: {
          name: "Southern Rhone",
          tertiary_appellations: null,
        }
      }
    }
  },
  germany: {
    ahr: {
      name: "Ahr",
      secondary_appellations: null,
    },
    mittelrhein: {
      name: "Mittelrhein",
      secondary_appellations: null,
    },
    rheingau: {
      name: "Rheingau",
      secondary_appellations: null,
    },
    rheinhessen: {
      name: "Rheinhessen",
      secondary_appellations: null,
    },
    hessische_bergstrasse: {
      name: "Hessische Bergstrasse",
      secondary_appellations: null,
    },
    franken: {
      name: "Franken",
      secondary_appellations: null,
    },
    wurttemberg: {
      name: "Wurttemberg",
      secondary_appellations: null,
    },
    baden: {
      name: "Baden",
      secondary_appellations: null,
    },
    pfalz: {
      name: "Phalz",
      secondary_appellations: null,
    },
    nahe: {
      name: "Nahe",
      secondary_appellations: null,
    },
    mosel: {
      name: "Mosel",
      secondary_appellations: null,
    },
    saale_untrut: {
      name: "Saale-Unstrut",
      secondary_appellations: null,
    },
    sacheen: {
      name: "Sacheen",
      secondary_appellations: null,
    }
  },
  italy: {
    valle_daosta: {
      name: "Valle dAosta",
      secondary_appellations: null,
    },
    lombardy: {
      name: "Lombardy",
      secondary_appellations: null,
    },
    trentino_alto_adige: {
      name: "Trentino Alto Adige",
      secondary_appellations: null,
    },
    friuli_venezia_giulia: {
      name: "Friuli Venezia Giulia",
      secondary_appellations: null,
    },
    veneto: {
      name: "Veneto",
      secondary_appellations: null,
    },
    piedmont: {
      name: "Piedmont",
      secondary_appellations: null,
    },
    liguria: {
      name: "Liguria",
      secondary_appellations: null,
    },
    emilio_romagna: {
      name: "Emilio Romagna",
      secondary_appellations: null,
    },
    tuscany: {
      name: "Tuscany",
      secondary_appellations: {
        massa_carrara: {
          name: "Massa Carrara",
          tertiary_appellations: null,
        },
        lucca: {
          name: "Lucca",
          tertiary_appellations: null,
        },
        chianti: {
          name: "Chianti",
          tertiary_appellations: null,
        },
        grosseto: {
          name: "Grosseto",
          tertiary_appellations: null,
        },
        livorno: {
          name: "Livorno",
          tertiary_appellations: null,
        }
      }
    }
  },
  new_zealand: {
    northland: {
      name: "Northland",
      secondary_appellations: null,
    },
    aukalnd: {
      name: "Aukland",
      secondary_appellations: null,
    },
    waikatao_bay_of_planty: {
      name: "Waikato Bay of Plenty",
      secondary_appellations: null,
    },
    gisborne: {
      name: "Gisborne",
      secondary_appellations: null,
    },
    hawkes_bay: {
      name: "Hawkes Bay",
      secondary_appellations: null,
    },
    wairarapa: {
      name: "Wairarapa",
      secondary_appellations: null,
    },
    nelson: {
      name: "Nelson",
      secondary_appellations: null,
    },
    marlborough: {
      name: "Marlborough",
      secondary_appellations: null,
    },
    canterbury_waipara_valley: {
      name: "Canterbury Waipara Valley",
      secondary_appellations: null,
    },
    central_otago: {
      name: "Central Otago",
      secondary_appellations: null,
    }
  },
  portugal: {
    minho: {
      name: "Minho",
      secondary_appellations: null,
    },
    transmontano: {
      name: "Transmontano",
      secondary_appellations: null,
    },
    douro_valley: {
      name: "Douro Valley",
      secondary_appellations: null,
    },
    terras_de_cister: {
      name: "Terras de Cister",
      secondary_appellations: null,
    },
    beira_interior: {
      name: "Beira Interior",
      secondary_appellations: null,
    },
    tejo_ribatejo: {
      name: "Tejo Ribatejo",
      secondary_appellations: null,
    },
    alentejo: {
      name: "Alentejo",
      secondary_appellations: null,
    },
    algarve: {
      name: "Algarve",
      secondary_appellations: null,
    },
    madeira: {
      name: "Madeira",
      secondary_appellations: null,
    },
    setubal: {
      name: "Setubal",
      secondary_appellations: null,
    },
    Lisboa: {
      name: "Lisboa",
      secondary_appellations: null,
    },
    beira_atlantico: {
      name: "Beira Atlantico",
      secondary_appellations: null,
    },
    dao: {
      name: "Dao",
      secondary_appellations: null,
    }
  },
  south_africa: {
    orange_river_valley: {
      name: "Orange River Valley",
      secondary_appellations: null,
    },
    olifants_river_valley: {
      name: "Olifants River Valley",
      secondary_appellations: null,
    },
    swartland_Malmesbury: {
      name: "Swartland Malmesbury",
      secondary_appellations: null,
    },
    Breedekloof: {
      name: "Breedekloof",
      secondary_appellations: null,
    },
    worcester: {
      name: "Worcester",
      secondary_appellations: null,
    },
    klein_karoo: {
      name: "Klein Karoo",
      secondary_appellations: null,
    },
    robertson: {
      name: "Robertson",
      secondary_appellations: null,
    },
    walker_bay_cape_agulhas: {
      name: "Walker Bay Cape Agulhas",
      secondary_appellations: null,
    },
    stellenbosch: {
      name: "Stellenbosch",
      secondary_appellations: null,
    },
    paarl: {
      name: "Paarl",
      secondary_appellations: null,
    }
  },
  spain: {
    galicia: {
      name: "Galicia",
      secondary_appellations: null,
    },
    castilla_yleon: {
      name: "Castilla yLeon",
      secondary_appellations: null,
    },
    pais_vasco: {
      name: "Pais Vasco",
      secondary_appellations: null,
    },
    rioja_navarra: {
      name: "Rioja Navarra",
      secondary_appellations: null,
    },
    aragon: {
      name: "Aragon",
      secondary_appellations: null,
    },
    catalania: {
      name: "Catalania",
      secondary_appellations: null,
    },
    valencia: {
      name: "Valencia",
      secondary_appellations: null,
    },
    castilla_la_mancha: {
      name: "Castilla La Mancha",
      secondary_appellations: null,
    },
    andalucia: {
      name: "Andalucia",
      secondary_appellations: null,
    },
    extremadura: {
      name: "Extremandura",
      secondary_appellations: null,
    },
    canary_islands: {
      name: "Canary Islands",
      secondary_appellations: null,
    }
  },
  united_states: {
    michigan: {
      name: "Michigan",
      secondary_appellations: null,
    },
    new_york: {
      name: "New York",
      secondary_appellations: null,
    },
    virginia: {
      name: "Virginia",
      secondary_appellations: null,
    },
    southeast: {
      name: "Southeast",
      secondary_appellations: null,
    },
    midwest: {
      name: "Midwest",
      secondary_appellations: null,
    },
    texas: {
      name: "Texas",
      secondary_appellations: null,
    },
    southwest: {
      name: "Southwest",
      secondary_appellations: null,
    },
    california: {
      name: "California",
      secondary_appellations: {
        mendocino_county: {
          name: "Mendocino County",
          tertiary_appellations: null,
        },
        lake_county: {
          name: "Lake County",
          tertiary_appellations: null,
        },
        napa_valley: {
          name: "Napa Valley",
          tertiary_appellations: null,
        },
        sonoma_county: {
          name: "Sonoma County",
          tertiary_appellations: null,
        },
        sierra_foothills: {
          name: "Sierra Foothills",
          tertiary_appellations: null,
        },
        lodi: {
          name: "Lodi",
          tertiary_appellations: null,
        },
        madera: {
          name: "Madera",
          tertiary_appellations: null,
        },
        moterey: {
          name: "Monterey",
          tertiary_appellations: null,
        },
        paso_robles: {
          name: "Paso Robles",
          tertiary_appellations: null,
        },
        santa_barbara: {
          name: "Santa Barbara",
          tertiary_appellations: null,
        },
        temecula_valley: {
          name: "Temecula Valley",
          tertiary_appellations: null,
        }
      }
    },
    washington: {
      name: "Washington",
      secondary_appellations: {
        yakima_valley: {
          name: "Yakima Valley",
          tertiary_appellations: null,
        },
        horse_heaven_hills: {
          name: "Horse Heaven Hills",
          tertiary_appellations: null,
        },
        columbia_valley: {
          name: "Columbia Valley",
          tertiary_appellations: null,
        },
        walla_walla: {
          name: "Walla Walla",
          tertiary_appellations: null,
        }
      }
    },
    oregon: {
      name: "Oregon",
      secondary_appellations: {
        willamette_valley: {
          name: "Willamette Valley",
          tertiary_appellations: null,
        },
        umqua_valley: {
          name: "Umqua Valley",
          tertiary_appellations: null,
        },
        southern_oregon: {
          name: "Southern Oregon",
          tertiary_appellations: null,
        },
        columbia_valley: {
          name: "Columbia Valley",
          tertiary_appellations: null,
        },
        puget_sound: {
          name: "Puget Sound",
          tertiary_appellations: null,
        }
      }
    }
  }
};

const APPS = {
  algeria: {
    name: "Algeria",
    map: null,
    primary_appellations: null,
  },
  argentina: {
    name: "Argentina",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Argentina-wine-map2_1024x1024.jpg?v=1504901310',
    primary_appellations: {
      salta: {
        name: "Salta",
        map: null,
        secondary_appellations: null,
      },
      tucuman: {
        name: "Tucuman",
        map: null,
        secondary_appellations: null,
      },
      catamarca: {
        name: "Catamarca",
        map: null,
        secondary_appellations: null,
      },
      la_rioja: {
        name: "La Rioja",
        map: null,
        secondary_appellations: null,
      },
      san_juan: {
        name: "San Juan",
        map: null,
        secondary_appellations: null,
      },
      mendoza: {
        name: "Mendoza",
        map: null,
        secondary_appellations: null,
      },
      patagonia: {
        name: "Patagonia",
        map: null,
        secondary_appellations: null,
      }
    }
  },
  australia: {
    name: "Australia",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Australia-wine-map2_1024x1024.jpg?v=1504901327',
    primary_appellations: {
      western_australia: {
        name: "Western Australia",
        map: null,
        secondary_appellations: null,
      },
      south_australia: {
        name: "South Australia",
        map: null,
        secondary_appellations: null,
      },
      new_south_wales: {
        name: "New South Wales",
        map: null,
        secondary_appellations: null,
      },
      queesnland: {
        name: "Queensland",
        map: null,
        secondary_appellations: null,
      },
      victoria: {
        name: "Victoria",
        map: null,
        secondary_appellations: null,
      },
      tasmania: {
        name: "Tasmania",
        map: null,
        secondary_appellations: null,
      }
    }
  },
  austria: {
    name: "austria",
    map: null,
    primary_appellations: {
      burgenland: {
        name: "Bergenland",
        map: null,
        secondary_appellations: null,
      },
      niederosterreich: {
        name: "Niederosterreich",
        map: null,
        secondary_appellations: null,
      },
      steiermark: {
        name: "Steiermark",
        map: null,
        secondary_appellations: null,
      },
      wien: {
        name: "Wien",
        map: null,
        secondary_appellations: null,
      }
    }
  },
  brazil: {
    name: "Brazil",
    map: null,
    primary_appellations: null,
  },
  bulgaria: {
    name: "Bulgaria",
    map: null,
    primary_appellations: null,
  },
  canada: {
    name: "Canada",
    map: null,
    primary_appellations: null,
  },
  chile: {
    name: "Chile",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Chile-wine-map2_1024x1024.jpg?v=1504901370',
    primary_appellations: null,
  },
  china: {
    name: "China",
    map: null,
    primary_appellations: null,
  },
  corsica: {
    name: "Corsica",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-All-wine-map2_1024x1024.jpg?v=1504901393',
    primary_appellations: null,
  },
  czech_republic: {
    name: "Czech Republic",
    map: null,
    primary_appellations: null,
  },
  france: {
    name: "France",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-All-wine-map2_1024x1024.jpg?v=1504901393',
    primary_appellations: {
      loire_valley: {
        name: "Loire Valley",
        map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-Loire-wine-map2_1024x1024.jpg?v=1504901000',
        secondary_appellations: null,
      },
      champagne: {
        name: "Champagne",
        map: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2014/01/champagne-map-wine-folly.jpg#',
        secondary_appellations: null,
      },
      alsace: {
        name: "Alsace",
        map: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/France-Alsace-Wine-Map-WineFolly2016-sml.jpg',
        secondary_appellations: null,
      },
      beaujolais: {
        name: "Beaujolais",
        map: null,
        secondary_appellations: null,
      },
      provence: {
        name: "Provence",
        map: 'http://winefolly.com/wp-content/uploads/2013/08/provence-wine-region4-770x489.png',
        secondary_appellations: null,
      },
      languedoc_roussilion: {
        name: "Languedoc Roussilion",
        map: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/Languedoc-Rousillon-map-by-bentoit-france.jpg',
        secondary_appellations: null,
      },
      south_west: {
        name: "South West",
        map: null,
        secondary_appellations: null,
      },
      bordeaux: {
        name: "Bordeaux",
        map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-Bordeaux-wine-map2_1024x1024.jpg?v=1504901441',
        secondary_appellations: {
          medoc: {
            name: "Medoc",
            map: null,
            tertiary_appellations: null,
          },
          graves: {
            name: "Graves",
            map: null,
            tertiary_appellations: null,
          },
          sauternais: {
            name: "Sauternais",
            map: null,
            tertiary_appellations: null,
          },
          langon: {
            name: "Langon",
            map: null,
            tertiary_appellations: null,
          },
          cotes_de_bordeaus: {
            name: "Cotes de Bordeaux",
            map: null,
            tertiary_appellations: null,
          },
          libournais: {
            name: "Libournais",
            map: null,
            tertiary_appellations: null,
          },
          entre_deaux_more: {
            name: "Entre-Deaux-Mere",
            map: null,
            tertiary_appellations: null,
          },
        }
      },
      burgundy: {
        name: "Burgundy",
        map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-Burgundy-wine-map2.jpg?v=1504901465',
        secondary_appellations: {
          chablis: {
            name: "Chablis",
            map: null,
            tertiary_appellations: null,
          },
          cote_de_nuits: {
            name: "Cote de Nuits (Cote d'Or)",
            map: null,
            tertiary_appellations: null,
          },
          cote_chalonnaise: {
            name: "Cote Chalonnaise",
            map: null,
            tertiary_appellations: null,
          },
          maconnais: {
            name: "Maconanais",
            map: null,
            tertiary_appellations: null,
          },
        }
      },
      rhone: {
        name: "Rhone Valley",
        map: null,
        secondary_appellations: {
          northern_rhone: {
            name: "Northern Rhone",
            map: null,
            tertiary_appellations: null,
          },
          southern_rhone: {
            name: "Southern Rhone",
            map: null,
            tertiary_appellations: null,
          }
        }
      }
    }
  },
  germany: {
    name: "Germany",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Germany-wine-map2.jpg?v=1504901537',
    primary_appellations: {
      ahr: {
        name: "Ahr",
        map: null,
        secondary_appellations: null,
      },
      mittelrhein: {
        name: "Mittelrhein",
        map: null,
        secondary_appellations: null,
      },
      rheingau: {
        name: "Rheingau",
        map: null,
        secondary_appellations: null,
      },
      rheinhessen: {
        name: "Rheinhessen",
        map: null,
        secondary_appellations: null,
      },
      hessische_bergstrasse: {
        name: "Hessische Bergstrasse",
        map: null,
        secondary_appellations: null,
      },
      franken: {
        name: "Franken",
        map: null,
        secondary_appellations: null,
      },
      wurttemberg: {
        name: "Wurttemberg",
        map: null,
        secondary_appellations: null,
      },
      baden: {
        name: "Baden",
        map: null,
        secondary_appellations: null,
      },
      pfalz: {
        name: "Phalz",
        map: null,
        secondary_appellations: null,
      },
      nahe: {
        name: "Nahe",
        map: null,
        secondary_appellations: null,
      },
      mosel: {
        name: "Mosel",
        map: null,
        secondary_appellations: null,
      },
      saale_untrut: {
        name: "Saale-Unstrut",
        map: null,
        secondary_appellations: null,
      },
      sacheen: {
        name: "Sacheen",
        map: null,
        secondary_appellations: null,
      }
    }
  },
  greece: {
    name: "Greece",
    map: null,
    primary_appellations: null,
  },
  hungary: {
    name: "Hungary",
    map: null,
    primary_appellations: null,
  },
  italy: {
    name: "italy",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Italy-wine-map2_1024x1024.jpg',
    primary_appellations: {
      valle_daosta: {
        name: "Valle dAosta",
        map: null,
        secondary_appellations: null,
      },
      lombardy: {
        name: "Lombardy",
        map: null,
        secondary_appellations: null,
      },
      trentino_alto_adige: {
        name: "Trentino Alto Adige",
        map: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2013/07/alto-adige-map-3-2013.jpg#large',
        secondary_appellations: null,
      },
      friuli_venezia_giulia: {
        name: "Friuli Venezia Giulia",
        map: null,
        secondary_appellations: null,
      },
      veneto: {
        name: "Veneto",
        map: null,
        secondary_appellations: null,
      },
      piedmont: {
        name: "Piedmont",
        map: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/Piedmont-Italy-Wine-Map-2016-Wine-Folly-1.jpg#large',
        secondary_appellations: null,
      },
      liguria: {
        name: "Liguria",
        map: null,
        secondary_appellations: null,
      },
      emilio_romagna: {
        name: "Emilio Romagna",
        map: null,
        secondary_appellations: null,
      },
      tuscany: {
        name: "Tuscany",
        map: null,
        secondary_appellations: {
          massa_carrara: {
            name: "Massa Carrara",
            map: null,
            tertiary_appellations: null,
          },
          lucca: {
            name: "Lucca",
            map: null,
            tertiary_appellations: null,
          },
          chianti: {
            name: "Chianti",
            map: null,
            tertiary_appellations: null,
          },
          grosseto: {
            name: "Grosseto",
            map: null,
            tertiary_appellations: null,
          },
          livorno: {
            name: "Livorno",
            map: null,
            tertiary_appellations: null,
          }
        }
      }
    }
  },
  mexico: {
    name: "Mexico",
    map: null,
    primary_appellations: null,
  },
  moldova: {
    name: "Moldova",
    map: null,
    primary_appellations: null,
  },
  morocco: {
    name: "Morocco",
    map: null,
    primary_appellations: null,
  },
  new_zealand: {
    name: "New Zealand",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-New-Zealand-wine-map2_1024x1024.jpg?v=1504901586',
    primary_appellations: {
      northland: {
        name: "Northland",
        map: null,
        secondary_appellations: null,
      },
      aukalnd: {
        name: "Aukland",
        map: null,
        secondary_appellations: null,
      },
      waikatao_bay_of_planty: {
        name: "Waikato Bay of Plenty",
        map: null,
        secondary_appellations: null,
      },
      gisborne: {
        name: "Gisborne",
        map: null,
        secondary_appellations: null,
      },
      hawkes_bay: {
        name: "Hawkes Bay",
        map: null,
        secondary_appellations: null,
      },
      wairarapa: {
        name: "Wairarapa",
        map: null,
        secondary_appellations: null,
      },
      nelson: {
        name: "Nelson",
        map: null,
        secondary_appellations: null,
      },
      marlborough: {
        name: "Marlborough",
        map: null,
        secondary_appellations: null,
      },
      canterbury_waipara_valley: {
        name: "Canterbury Waipara Valley",
        map: null,
        secondary_appellations: null,
      },
      central_otago: {
        name: "Central Otago",
        map: null,
        secondary_appellations: null,
      }
    }
  },
  portugal: {
    name: "Portugal",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Portugal-wine-map2.jpg?v=1504901609',
    primary_appellations: {
      minho: {
        name: "Minho",
        map: null,
        secondary_appellations: null,
      },
      transmontano: {
        name: "Transmontano",
        map: null,
        secondary_appellations: null,
      },
      douro_valley: {
        name: "Douro Valley",
        map: null,
        secondary_appellations: null,
      },
      terras_de_cister: {
        name: "Terras de Cister",
        map: null,
        secondary_appellations: null,
      },
      beira_interior: {
        name: "Beira Interior",
        map: null,
        secondary_appellations: null,
      },
      tejo_ribatejo: {
        name: "Tejo Ribatejo",
        map: null,
        secondary_appellations: null,
      },
      alentejo: {
        name: "Alentejo",
        map: null,
        secondary_appellations: null,
      },
      algarve: {
        name: "Algarve",
        map: null,
        secondary_appellations: null,
      },
      madeira: {
        name: "Madeira",
        map: null,
        secondary_appellations: null,
      },
      setubal: {
        name: "Setubal",
        map: null,
        secondary_appellations: null,
      },
      Lisboa: {
        name: "Lisboa",
        map: null,
        secondary_appellations: null,
      },
      beira_atlantico: {
        name: "Beira Atlantico",
        map: null,
        secondary_appellations: null,
      },
      dao: {
        name: "Dao",
        map: null,
        secondary_appellations: null,
      }
    }
  },
  portugal_madeira: {
    name: "Madeira Island, Portugal",
    map: null,
    primary_appellations: null,
  },
  romania: {
    name: "Romania",
    map: null,
    primary_appellations: null,
  },
  sardinia: {
    name: "Sardinia",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Italy-wine-map2_1024x1024.jpg',
    primary_appellations: null,
  },
  sicily: {
    name: "Sicily",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Italy-wine-map2_1024x1024.jpg',
    primary_appellations: null,
  },
  slovakia: {
    name: "Slovakia",
    map: null,
    primary_appellations: null,
  },
  south_africa: {
    name: "South Africa",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-South-Africa-wine-map2_1024x1024.jpg?v=1504901109',
    primary_appellations: {
      orange_river_valley: {
        name: "Orange River Valley",
        map: null,
        secondary_appellations: null,
      },
      olifants_river_valley: {
        name: "Olifants River Valley",
        map: null,
        secondary_appellations: null,
      },
      swartland_Malmesbury: {
        name: "Swartland Malmesbury",
        map: null,
        secondary_appellations: null,
      },
      Breedekloof: {
        name: "Breedekloof",
        map: null,
        secondary_appellations: null,
      },
      worcester: {
        name: "Worcester",
        map: null,
        secondary_appellations: null,
      },
      klein_karoo: {
        name: "Klein Karoo",
        map: null,
        secondary_appellations: null,
      },
      robertson: {
        name: "Robertson",
        map: null,
        secondary_appellations: null,
      },
      walker_bay_cape_agulhas: {
        name: "Walker Bay Cape Agulhas",
        map: null,
        secondary_appellations: null,
      },
      stellenbosch: {
        name: "Stellenbosch",
        map: null,
        secondary_appellations: null,
      },
      paarl: {
        name: "Paarl",
        map: null,
        secondary_appellations: null,
      }
    }
  },
  spain: {
    name: "Spain",
    map: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Spain-wine-map2.jpg?v=1504901137',
    primary_appellations: {
      galicia: {
        name: "Galicia",
        map: null,
        secondary_appellations: null,
      },
      castilla_yleon: {
        name: "Castilla yLeon",
        map: null,
        secondary_appellations: null,
      },
      pais_vasco: {
        name: "Pais Vasco",
        map: null,
        secondary_appellations: null,
      },
      rioja_navarra: {
        name: "Rioja Navarra",
        map: null,
        secondary_appellations: null,
      },
      aragon: {
        name: "Aragon",
        map: null,
        secondary_appellations: null,
      },
      catalania: {
        name: "Catalania",
        map: null,
        secondary_appellations: null,
      },
      valencia: {
        name: "Valencia",
        map: null,
        secondary_appellations: null,
      },
      castilla_la_mancha: {
        name: "Castilla La Mancha",
        map: null,
        secondary_appellations: null,
      },
      andalucia: {
        name: "Andalucia",
        map: null,
        secondary_appellations: null,
      },
      extremadura: {
        name: "Extremandura",
        map: null,
        secondary_appellations: null,
      },
      canary_islands: {
        name: "Canary Islands",
        map: null,
        secondary_appellations: null,
      }
    }
  },
  switzerland: {
    name: "Switzerland",
    map: null,
    primary_appellations: null,
  },
  tunisia: {
    name: "Tunisia",
    map: null,
    primary_appellations: null,
  },
  turkey: {
    name: "Turkey",
    map: null,
    primary_appellations: null,
  },
  ukraine: {
    name: "Ukraine",
    map: null,
    primary_appellations: null,
  },
  united_states: {
    name: "United States",
    map: null,
    primary_appellations: {
      // cali
      north_coast_california: {
        name: "North Coast California",
        map: "https://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-CA-NorthCoast-wine-map2_1024x1024.jpg?v=1504901731",
        secondary_appellations: {
          mendocino_county: {
            name: "Mendocino County",
            map: null,
            tertiary_appellations: null
          },
          clear_lake: {
            name: "Clear Lake",
            map: null,
            tertiary_appellations: null
          },
          sonoma_county: {
            name: "Sonoma County",
            map: "http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2014/01/Sonoma-Wine-Map-wine-folly.jpg",
            tertiary_appellations: null
          },
          napa_valley: {
            name: "Napa Valley",
            map: "https://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-CA-Napa-Valley-wine-map2_1024x1024.jpg?v=1504901708",
            tertiary_appellations: null
          }
        },

      },
      central_coast_californai: {
        name: "Central Coast California",
        map: "https://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-CA-Central-Coast-wine-map2_1024x1024.jpg?v=1504901673",
        secondary_appellations: {
          livermore_valley: {
            name: "Livermore Valley",
            map: null,
            tertiary_appellations: null
          },
          santa_cruz_mountains: {
            name: "Santa Cruz Mountains",
            map: null,
            tertiary_appellations: null
          },
          cienega_valley: {
            name: "Cienega Valley",
            map: null,
            tertiary_appellations: null
          },
          mount_harlan: {
            name: "Mount Harlan",
            map: null,
            tertiary_appellations: null
          },
          lime_kiln_valley: {
            name: "Lime_Kiln Valley",
            map: null,
            tertiary_appellations: null
          },
          carmel_valley: {
            name: "Carmel Valley",
            map: null,
            tertiary_appellations: null
          },
          santa_lucia_highlands: {
            name: "Santa Lucia Highlands",
            map: null,
            tertiary_appellations: null
          },
          arroyo_sepp: {
            name: "Arroyo Sepp",
            map: null,
            tertiary_appellations: null
          },
          san_bernabe: {
            name: "San Bernabe",
            map: null,
            tertiary_appellations: null
          },
          san_antonio_valley: {
            name: "San Antonio Valley",
            map: null,
            tertiary_appellations: null
          },
          harnes_valley: {
            name: "harnes Valley",
            map: null,
            tertiary_appellations: null
          },
          edna_valley: {
            name: "Edna Valley",
            map: null,
            tertiary_appellations: null
          },
          arroyyo_grande_valley: {
            name: "Arroyo Grande Valley",
            map: null,
            tertiary_appellations: null
          },
          santa_maria_valley: {
            name: "Santa Maria Valley",
            map: null,
            tertiary_appellations: null
          },
          sta_rita_valley: {
            name: "Sta Rita Valley",
            map: null,
            tertiary_appellations: null
          },
          ballard_canyon: {
            name: "Ballard Canyon",
            map: null,
            tertiary_appellations: null
          },
          santa_ynez_valley: {
            name: "santa Ynez Valley",
            map: null,
            tertiary_appellations: null
          },
          happy_canyon: {
            name: "Happy Canyon",
            map: null,
            tertiary_appellations: null
          },
          san_benito: {
            name: "San Benito",
            map: null,
            tertiary_appellations: null
          },
          paicines: {
            name: "Paicines",
            map: null,
            tertiary_appellations: null
          },
          chalone: {
            name: "Chalone",
            map: null,
            tertiary_appellations: null
          },
          monterrey: {
            name: "Monterrey",
            map: null,
            tertiary_appellations: null
          },
          san_lucas: {
            name: "San Lucas",
            map: null,
            tertiary_appellations: null
          },
          paso_robles: {
            name: "Paso Robles",
            map: null,
            tertiary_appellations: null
          },
          san_luis_obispo: {
            name: "San Luis Obispo",
            map: null,
            tertiary_appellations: null
          },
          santa_barbara: {
            name: "Santa Barbara",
            map: null,
            tertiary_appellations: null
          }
        }
      },
      south_coast_california: {
        name: "South Coast California",
        map: "https://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-California-wine-map2.jpg?v=1504901645",
        secondary_appellations: {
          leona_valley: {
            name: "Leona Valley",
            map: null,
            tertiary_appellations: null
          },
          sierra_pelona_valley: {
            name: "Sierra Pelona Valley",
            map: null,
            tertiary_appellations: null
          },
          cucamonga_valley: {
            name: "Cocamonga Valley",
            map: null,
            tertiary_appellations: null
          },
          temecula_valley: {
            name: "Temecula Valley",
            map: null,
            tertiary_appellations: null
          },
          san_pasquai: {
            name: "San Pasqui",
            map: null,
            tertiary_appellations: null
          },
          ramona_valley: {
            name: "Ramona Valley",
            map: null,
            tertiary_appellations: null
          }
        },
      },
      sierra_foothills_california: {
        name: "Sierra Foothills California",
        map: "https://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-California-wine-map2.jpg?v=1504901645",
        secondary_appellations: {
          north_yub: {
            name: "North Yuba",
            map: null,
            tertiary_appellations: null
          },
          eldorado: {
            name: "Eldorado",
            map: null,
            tertiary_appellations: null
          },
          Fair_play: {
            name: "Fair Play",
            map: null,
            tertiary_appellations: null
          },
          shenandoah_valley: {
            name: "Shenandoah Valley",
            map: null,
            tertiary_appellations: null
          },
          fiddletown: {
            name: "Fiddletown",
            map: null,
            tertiary_appellations: null
          }
        },
      },
      inland_valleys_california: {
        name: "Inland Valleys California",
        map: "https://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-California-wine-map2.jpg?v=1504901645",
        secondary_appellations: {
          dunnigan_hills: {
            name: "Dunnigan Hills",
            map: null,
            tertiary_appellations: null
          },
          capay_valley: {
            name: "Capay Valley",
            map: null,
            tertiary_appellations: null
          },
          lodi: {
            name: "Lodi",
            map: null,
            tertiary_appellations: null
          },
          clarksburg: {
            name: "Clarksburg",
            map: null,
            tertiary_appellations: null
          },
          madera: {
            name: "Madera",
            map: null,
            tertiary_appellations: null
          }
        },
      },
      // northwest
      columbia_valley: {
        name: "Columbia Valley",
        map: "https://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-Washington-wine-map2_1024x1024.jpg?v=1504901195",
        secondary_appellations: {
          lake_chelan: {
            name: "Lake Chelan",
            map: null,
            tertiary_appellations: null
          },
          ancient_lakes: {
            name: "Ancient Lakes",
            map: null,
            tertiary_appellations: null
          },
          wahluke_slope: {
            name: "Wahluke Slope",
            map: null,
            tertiary_appellations: null
          },
          naches_heights: {
            name: "Naches Heights",
            map: null,
            tertiary_appellations: null
          },
          rattle_snake_hills: {
            name: "Rattle Snake Hills",
            map: null,
            tertiary_appellations: null
          },
          yakima_valley: {
            name: "Yakima Valley",
            map: null,
            tertiary_appellations: null
          },
          red_mountain: {
            name: "Red Mountain",
            map: null,
            tertiary_appellations: null
          },
          snipes_mountain: {
            name: "Snipes Mountain",
            map: null,
            tertiary_appellations: null
          },
          walla_walla: {
            name: "Walla Walla",
            map: null,
            tertiary_appellations: null
          },
          horse_heaven_hills: {
            name: "Horse Heaven Hills",
            map: null,
            tertiary_appellations: null
          },
          columbia_gorge: {
            name: "Columbia Gorge",
            map: null,
            tertiary_appellations: null
          }
        },
      },
      willamette_valley: {
        name: "Willamette Valley",
        map: "https://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-Oregon-wine-map2_1024x1024.jpg?v=1504901166",
        secondary_appellations: {
          yamhill_carlton: {
            name: "Yamhill Carlton",
            map: null,
            tertiary_appellations: null
          },
          mcminnville: {
            name: "Mcminnville",
            map: null,
            tertiary_appellations: null
          },
          chehalem_mountains: {
            name: "chehalem Mountains",
            map: null,
            tertiary_appellations: null
          },
          ribbon_ridge: {
            name: "Ribbon Ridge",
            map: null,
            tertiary_appellations: null
          },
          dundee_hills: {
            name: "Dundee Hills",
            map: null,
            tertiary_appellations: null
          },
          eola_amity_hills: {
            name: "Eola Amity Hills",
            map: null,
            tertiary_appellations: null
          }

        },
      },
      southern_oregon: {
        name: "Columbia Valleys",
        map: "https://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-Oregon-wine-map2_1024x1024.jpg?v=1504901166",
        secondary_appellations: {
          elkton: {
            name: "Elkton",
            map: null,
            tertiary_appellations: null
          },
          umqua_valley: {
            name: "Umqua Valley",
            map: null,
            tertiary_appellations: null
          },
          red_hill_douglas_county: {
            name: "Red Hill Douglas County",
            map: null,
            tertiary_appellations: null
          },
          rogue_valley: {
            name: "Rogue Valley",
            map: null,
            tertiary_appellations: null
          },
          applegate_valley: {
            name: "Applegate Valley",
            map: null,
            tertiary_appellations: null
          }
        }
      },
    }
  }
};

// ************************************************************************* //
// FORM DATA - END
// ************************************************************************* //


// ************************************************************************* //
// BLAH - BEGIN
// ************************************************************************* //


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// ************************************************************************* //
// BLAH - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Country Selection - BEGIN
// ************************************************************************* //
const handleCountrySelection = () => {
  getCountryMapAndDisplay(); // good
  populatePriamryAppellationSelectInput(); // good
  populatePrimaryGrapesSelectInput(); // good
};

// ************************************************************************* //
// Handle Country Selection - END
// ************************************************************************* //


// ************************************************************************* //
// Country Select Input - BEGIN
// ************************************************************************* //
const getCountries = () => {
  let countries = [];

  Object.keys(COUNTRIES).forEach((country) => {
    countries.push(COUNTRIES[country]);
  });
  countries.sort();
  countries.push("Other");
  countries.push("Don't Know");
  return countries;
};

const populateCountrySelectInput = () => {
  let html = `<option value="" disabled selected>Select a country</option>`;
  const $countySelectInput = $('#js-country-select');

  getCountries().forEach((country) => {
    html += `<option value="${country}">${country}</option>`;
  });

  $countySelectInput.append(html);
};
// ************************************************************************* //
// Country Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Country Map - BEGIN
// ************************************************************************* //
const getCountryMapAndDisplay = () => {
  const $countrySelectInput = $('#js-country-select');
  const $countryMapWrapper = $('.js-country-map-wrapper');
  const countryWithCapitalLetters = $countrySelectInput.val();
  const countryKey = $countrySelectInput.val().toLowerCase().split(' ').join('_');
  const src = COUNTRY_MAPS[countryKey];
  let html = '';

  if ( !src ) {
    html = `No Country Map for ${countryWithCapitalLetters}`;
  } else {
    html = `<div class="country-map js-country-map"><span class="country-map-span js-country-map-span">Show/Hide Country Map</span><img class="country-map-img js-country-map-img" src="${src}"></div>`;
  }

  $countryMapWrapper.html(html);
  $countryMapWrapper.show();

};
// TODO - current WIP
// function toggleCountryMap(e) {
//   e.stopPropagation();
//   const $countrySpan = $(e.target);
//   $countrySpan.siblings('.js-country-map').toggle();
// }

const toggleCountryMap = (e) => {
  console.log('toggleCountryMap ran');
  console.log('e.target = ', e.target);
  e.stopPropagation();
  const $countryMapSpan = $(e.target);
  $countryMapSpan.siblings('.js-country-map-img').toggle();
};
// ************************************************************************* //
// Country Map - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Primary Appellation Selection - BEGIN
// ************************************************************************* //

const handlePrimaryAppellationSelection = () =>{
  showPrimaryAppellationMap();
  populateSecondaryAppellationSelectInput();
};
// ************************************************************************* //
// Handle Primary Appellation Selection - END
// ************************************************************************* //

// ************************************************************************* //
// Primary Appellation Select Input - BEGIN
// ************************************************************************* //
const getPrimaryAppellations = () => {
  let primaryAppellations = [];
  const $countySelectInput = $('#js-country-select');
  const countryWithCapitalLetters = $countySelectInput.val();
  const countryKey = $countySelectInput.val().toLowerCase().split(' ').join('_');

  if ( !APPELLATIONS[countryKey] ) {
    // handles case when there is no PRIMARY APPELLATIONS.
    doNoPrimaryAppellationsText(countryWithCapitalLetters);
    doNoSecondaryAppellationsText(countryWithCapitalLetters);

  } else if (countryKey === "Other" || countryKey === "Don't Know") {
    // handles cases when "Other" and "Don't Know" selected.
    doNoPrimaryAppellationsText(countryWithCapitalLetters);
    doNoSecondaryAppellationsText(countryWithCapitalLetters);

  } else {
    Object.keys(APPELLATIONS[countryKey]).forEach((primaryAppellation) => {
      primaryAppellations.push(APPELLATIONS[countryKey][primaryAppellation].name);
    });
    primaryAppellations.sort();
    primaryAppellations.push("Other");
    primaryAppellations.push("Don't Know");

    setPrimaryAppellationText(countryWithCapitalLetters);
    resetSecondaryAppellationText();
    return primaryAppellations;
  }
};

const populatePriamryAppellationSelectInput = () => {
  const $primaryAppellationSelectInput = $('#js-primary-appellation-select');
  const $secondaryAppellationSelectInput = $('#js-secondary-appellation-select');
  const appellations = getPrimaryAppellations();

  $primaryAppellationSelectInput.empty();
  $secondaryAppellationSelectInput.empty();

  if ( appellations ) {
    let html = `<option value="" disabled selected>Select a Primary Appellation</option>`;
    appellations.forEach((appellation) => {
      html += `<option value="${appellation}">${appellation}</option>`;
    });
    $primaryAppellationSelectInput.removeAttr('disabled');
    $primaryAppellationSelectInput.html(html);
  }

};

const showPrimaryAppellationMap = () => {
  // console.log('showPrimaryAppellationMap ran');
};

// ************************************************************************* //
// Primary Appellation Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Appellation Labels/Map Text - BEGIN
// ************************************************************************* //
// helper functions for Primary Appellation Select Input Section.
const displayPrimaryAppellationText = (text) => {
  const $label = $("label[for='js-primary-appellation-select']");
  const $Map = $('.js-primary-app-map-wrapper');

  $label.html(text.label);
  $Map.html(text.map);
};
const displaySecondaryAppellationText = (text) => {
  const $label = $("label[for='js-secondary-appellation-select']");
  const $Map = $('.js-secondary-app-map-wrapper');

  $label.html(text.label);
  $Map.html(text.map);
};
const setPrimaryAppellationText = (country) => {

  let text = {
    label: `Primary Appellations for ${country}`,
    map: `Primary Appellation Maps`
  };
  displayPrimaryAppellationText(text);

};
const resetPrimaryAppellationText = () => {

  let text = {
    label: `Primary Appellations`,
    map: `Primary Appellation Map`
  };
  displayPrimaryAppellationText(text);
};
const doNoPrimaryAppellationsText = (country) => {

  let text = {
    label: `Currently no Primary Appellations Information for ${country}`,
    map: `Currently no Primary Appellation Maps for ${country}`
  };
  displayPrimaryAppellationText(text);
};
const setSecondaryAppellationText = (country) => {

  let text = {
    label: `Secondary Appellation`,
    map: `Secondary Appellation Map`
  };
  displaySecondaryAppellationText(text);

};
const resetSecondaryAppellationText = () => {
  const $secondaryAppellationSelectInput = $('#js-secondary-appellation-select');

  let text = {
    label: `Secondary Appellation (disabled until Primary Appellation selected)`,
    map: `Secondary Appellation Map`
  };
  displaySecondaryAppellationText(text);
  $secondaryAppellationSelectInput.empty();
  $secondaryAppellationSelectInput.attr('disabled');
};

const doNoSecondaryAppellationsText = (country) => {

  let text = {
    label: `Currently no Secondary Appellations Information for ${country}`,
    map: `Currently no Secondary Appellation Maps for ${country}`
  };
  displaySecondaryAppellationText(text);
};
// ************************************************************************* //
// Appellation Labels/Map Text - END
// ************************************************************************* //

// ************************************************************************* //
// Primary Grape Select Input - BEGIN
// ************************************************************************* //
const getGrapesByCountry = (country) => {
  // if a country name is supplied, return a list of grapes that only
  // grow in that country.
  // if "Don't Know" is supplied as the country name, return a list of
  // all grapes.
  let grapes = [];

  if ( country === "Don't Know" || country === "Other") {
    // get all grapes.
    Object.keys(PRIMARY_GRAPES).forEach((grape) => {
      grapes.push(PRIMARY_GRAPES[grape].grapeName);
    });
  } else {
    // only get grapes that grow in a particular country.
    Object.keys(PRIMARY_GRAPES).forEach((grape) => {
      if (PRIMARY_GRAPES[grape].countries.includes(country) ) {
        grapes.push(PRIMARY_GRAPES[grape].grapeName);

      }
    });
  }
  grapes.sort();
  grapes.push("Other");
  grapes.push("Don't Know");
  return grapes;

};

const populatePrimaryGrapesSelectInput = () => {
  const $countrySelectInput = $('#js-country-select');
  const $primaryGrapeSelectInput = $('#js-primary-grape-select');
  const country = $countrySelectInput.val();
  const primaryGrapes = getGrapesByCountry(country);
  let html = `<option value="" disabled selected>Select a Primary Grape</option>`;

  $primaryGrapeSelectInput.empty();
  $primaryGrapeSelectInput.removeAttr('disabled');
  primaryGrapes.forEach((grape) => {
    html += `<option value="${grape}">${grape}</option>`;
  });
  $primaryGrapeSelectInput.append(html);
};

const addWineTypeText = () => {
  const $primaryGrapeLabel = $("label[for='js-primary-grape-select']");
  const $primaryGrapeSelectInput = $('#js-primary-grape-select');
  const selectedGrape = $primaryGrapeSelectInput.val();
  let wineType = '';
  let html = '';

  Object.keys(PRIMARY_GRAPES).forEach((grape) => {
    if ( PRIMARY_GRAPES[grape].grapeName === selectedGrape ) {
      wineType = PRIMARY_GRAPES[grape].wineType;
    }
  });

  if ( selectedGrape === "Don't Know") {
    html = `Primary Grape: Don't Know`
  } else if ( wineType === 'Sparkling Wine' || wineType === 'Dessert Wine') {
    html = `Primary Grape: ${selectedGrape} is a  ${wineType} style`;
  } else if ( selectedGrape.includes('Blend')) {
    html = `Primary Grape: ${selectedGrape} is a  ${wineType} Blend`;
  } else {
    html = `Primary Grape: ${selectedGrape} is a  ${wineType} grape`;
  }

  $primaryGrapeLabel.html(html);

};
// ************************************************************************* //
// Primary Grape Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Pricing Select Inputs - BEGIN
// ************************************************************************* //
const handlePricing1Selection = () => {
  console.log('handlePricing1Selection ran');
  const $pricing1SelectVal = $('#js-pricing1-select').val();
  const $pricing1PriceInput = $('#js-pricing1-input');

  if ( $pricing1SelectVal === "not_applicable" ) {
    // disable pricing text input.
    $pricing1PriceInput.attr({'disabled': true});
  } else {
    $pricing1PriceInput.removeAttr('disabled');
  }
};
const handlePricing2Selection = () => {
  console.log('handlePricing1Selection ran');
  const $pricing2SelectVal = $('#js-pricing2-select').val();
  const $pricing2PriceInput = $('#js-pricing2-input');

  if ( $pricing2SelectVal === "not_applicable" ) {
    // disable pricing text input.
    $pricing2PriceInput.attr({'disabled': true});
  } else {
    $pricing2PriceInput.removeAttr('disabled');
  }
};
const handlePricing3Selection = () => {
  console.log('handlePricing1Selection ran');
  const $pricing3SelectVal = $('#js-pricing3-select').val();
  const $pricing3PriceInput = $('#js-pricing3-input');

  if ( $pricing3SelectVal === "not_applicable" ) {
    // disable pricing text input.
    $pricing3PriceInput.attr({'disabled': true});
  } else {
    $pricing3PriceInput.removeAttr('disabled');
  }
};
const handlePricing4Selection = () => {
  console.log('handlePricing1Selection ran');
  const $pricing4SelectVal = $('#js-pricing4-select').val();
  const $pricing4PriceInput = $('#js-pricing4-input');

  if ( $pricing4SelectVal === "not_applicable" ) {
    // disable pricing text input.
    $pricing4PriceInput.attr({'disabled': true});
  } else {
    $pricing4PriceInput.removeAttr('disabled');
  }
};
// ************************************************************************* //
// Pricing Select Inputs - BEGIN
// ************************************************************************* //




///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



// ************************************************************************* //
// Secondary Appellation Select Input - BEGIN
// ************************************************************************* //
const getSecondaryAppellations = () => {
  console.log('getSecondaryAppellations ran');
  let secondaryAppellations = [];
  const $countySelectInput = $('#js-country-select');
  const countryWithCapitalLetters = $countySelectInput.val();
  const countryKey = $countySelectInput.val().toLowerCase().split(' ').join('_');
  const $primaryAppellationSelectInput = $('#js-primary-appellation-select');
  const primAppKey = $primaryAppellationSelectInput.val().toLowerCase().split(' ').join('_');
  let appsObj;

  console.log('countryKey = ', countryKey);
  console.log('primAppKey = ', primAppKey);

  // console.log('APPELLATIONS[countryKey][primAppKey] = ', APPELLATIONS[countryKey][primAppKey]);
  // console.log('APPELLATIONS[countryKey][primAppKey].second_appellation = ', APPELLATIONS[countryKey][primAppKey].secondary_appellations);

  if ( !APPELLATIONS[countryKey][primAppKey].secondary_appellations ) {
    // Secondary Appellations don't exist.
    doNoSecondaryAppellationsText(countryWithCapitalLetters);

  } else if (primAppKey === "Other" || primAppKey === "Don't Know") {
    // TODO - add code when tertiary appellations functionality added.
  } else {
    // secondary appellations exist.
    appsObj = APPELLATIONS[countryKey][primAppKey].secondary_appellations;
    Object.keys(appsObj).forEach((appelationKey) => {
      secondaryAppellations.push(appsObj[appelationKey].name);
    });

    secondaryAppellations.sort();
    secondaryAppellations.push("Other");
    secondaryAppellations.push("Don't Know");
    return secondaryAppellations;
  }

};

const populateSecondaryAppellationSelectInput = () => {
  const $secondaryAppellationSelectInput = $('#js-secondary-appellation-select');
  const appellations = getSecondaryAppellations();

  $secondaryAppellationSelectInput.empty();

  if ( !appellations ) {
    // do nothing.
  } else {

    let html = `<option value="" disabled selected>Select a Secondary Appellation</option>`;
    appellations.forEach((appellation) => {
      html += `<option value="${appellation}">${appellation}</option>`;
    });
    $secondaryAppellationSelectInput.removeAttr('disabled');
    $secondaryAppellationSelectInput.html(html);
  }
};
// ************************************************************************* //
// Secondary Appellation Select Input - END
// ************************************************************************* //




$(function() {
  populateCountrySelectInput();

  // listeners
  const $cancelButton = $('.js-button-cancel');
  const $tastingNoteForm = $('.tasting-form');
  const $countrySelectInput = $('#js-country-select');
  const $primaryAppellationSelectInput = $('#js-primary-appellation-select');
  // const $secondaryAppellationSelectInput = $('#js-secondary-appellation-select'); // TODO - wire up.
  const $primaryGrapeSelectInput = $('#js-primary-grape-select');
  const $pricing1 = $('#js-pricing1-select');
  const $pricing2 = $('#js-pricing2-select');
  const $pricing3 = $('#js-pricing3-select');
  const $pricing4 = $('#js-pricing4-select');

  $countrySelectInput.change(handleCountrySelection);
  $primaryAppellationSelectInput.change(handlePrimaryAppellationSelection);
  $pricing1.change(handlePricing1Selection);
  $pricing2.change(handlePricing2Selection);
  $pricing3.change(handlePricing3Selection);
  $pricing4.change(handlePricing4Selection);

  // $newTastingNoteForm.on('click', '.js-country-map', showHideCountryMap);
  $tastingNoteForm.on('click', '.js-country-map-span', toggleCountryMap);
  // $tastingEventsAndTastingNotesWrapper.on('click', '.js-country-map-span', toggleCountryMap);
  $primaryGrapeSelectInput.change(addWineTypeText);

});