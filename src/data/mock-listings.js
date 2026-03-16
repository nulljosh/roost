const listings = [
  {
    id: '1',
    address: '2847 West 4th Avenue',
    city: 'Vancouver',
    price: 1850000,
    beds: 3,
    baths: 2,
    sqft: 1420,
    type: 'House',
    lat: 49.2706,
    lng: -123.1631,
    yearBuilt: 1928,
    lotSize: 3960,
    parking: 1,
    pricePerSqft: 1303,
    daysOnMarket: 12,
    mlsNumber: 'R2894521',
    description: 'Bright character home in Kitsilano. Hardwood floors throughout, updated kitchen with quartz counters, private south-facing backyard. Steps from the beach and shops.',
    images: [
      'https://picsum.photos/seed/roost1a/800/500',
      'https://picsum.photos/seed/roost1b/800/500',
      'https://picsum.photos/seed/roost1c/800/500',
      'https://picsum.photos/seed/roost1d/800/500'
    ],
    priceHistory: [
      { date: '2024-01-15', price: 1850000, event: 'Listed' },
      { date: '2023-06-10', price: 1790000, event: 'Sold' },
      { date: '2019-03-22', price: 1420000, event: 'Sold' }
    ],
    features: ['Hardwood Floors', 'Updated Kitchen', 'South-Facing Yard', 'Heritage Character', 'Gas Fireplace', 'Storage']
  },
  {
    id: '2',
    address: '1105-1033 Marinaside Crescent',
    city: 'Vancouver',
    price: 1290000,
    beds: 2,
    baths: 2,
    sqft: 1080,
    type: 'Condo',
    lat: 49.2750,
    lng: -123.1189,
    yearBuilt: 2008,
    lotSize: null,
    parking: 1,
    pricePerSqft: 1194,
    daysOnMarket: 7,
    mlsNumber: 'R2901344',
    description: 'Waterfront condo in Yaletown with stunning False Creek views. Floor-to-ceiling windows, modern finishes, concierge, and rooftop amenities.',
    images: [
      'https://picsum.photos/seed/roost2a/800/500',
      'https://picsum.photos/seed/roost2b/800/500',
      'https://picsum.photos/seed/roost2c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-01', price: 1290000, event: 'Listed' },
      { date: '2020-09-15', price: 1050000, event: 'Sold' }
    ],
    features: ['Waterfront', 'Concierge', 'Gym', 'Rooftop Deck', 'In-Suite Laundry', 'Air Conditioning']
  },
  {
    id: '3',
    address: '88 West Cordova Street',
    city: 'Vancouver',
    price: 749000,
    beds: 1,
    baths: 1,
    sqft: 680,
    type: 'Condo',
    lat: 49.2838,
    lng: -123.1088,
    yearBuilt: 1912,
    lotSize: null,
    parking: 0,
    pricePerSqft: 1101,
    daysOnMarket: 34,
    mlsNumber: 'R2887102',
    description: 'Industrial-chic loft in Gastown. Exposed brick, original hardwood, soaring ceilings. Walk score 99.',
    images: [
      'https://picsum.photos/seed/roost3a/800/500',
      'https://picsum.photos/seed/roost3b/800/500',
      'https://picsum.photos/seed/roost3c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-05', price: 799000, event: 'Listed' },
      { date: '2024-01-20', price: 749000, event: 'Price Drop' },
      { date: '2018-04-11', price: 620000, event: 'Sold' }
    ],
    features: ['Exposed Brick', 'Loft Style', 'Heritage Building', 'Walk Score 99', 'Bike Room']
  },
  {
    id: '4',
    address: '452 Moss Street',
    city: 'Victoria',
    price: 1150000,
    beds: 4,
    baths: 3,
    sqft: 2100,
    type: 'House',
    lat: 48.4327,
    lng: -123.3560,
    yearBuilt: 1922,
    lotSize: 6200,
    parking: 2,
    pricePerSqft: 548,
    daysOnMarket: 21,
    mlsNumber: 'R2891003',
    description: 'Heritage character home in Fairfield. Renovated kitchen and baths, heritage designation, mature gardens. Two blocks from Beacon Hill Park.',
    images: [
      'https://picsum.photos/seed/roost4a/800/500',
      'https://picsum.photos/seed/roost4b/800/500',
      'https://picsum.photos/seed/roost4c/800/500',
      'https://picsum.photos/seed/roost4d/800/500'
    ],
    priceHistory: [
      { date: '2024-01-28', price: 1150000, event: 'Listed' },
      { date: '2017-07-05', price: 895000, event: 'Sold' }
    ],
    features: ['Heritage Home', 'Mature Gardens', 'Near Beacon Hill', 'Renovated', 'Double Garage', 'Sunroom']
  },
  {
    id: '5',
    address: '312-788 Humboldt Street',
    city: 'Victoria',
    price: 598000,
    beds: 1,
    baths: 1,
    sqft: 710,
    type: 'Condo',
    lat: 48.4250,
    lng: -123.3690,
    yearBuilt: 2015,
    lotSize: null,
    parking: 1,
    pricePerSqft: 842,
    daysOnMarket: 5,
    mlsNumber: 'R2903771',
    description: 'Boutique condo steps from the Inner Harbour. South-facing with filtered ocean views. Pet-friendly building with rooftop terrace.',
    images: [
      'https://picsum.photos/seed/roost5a/800/500',
      'https://picsum.photos/seed/roost5b/800/500',
      'https://picsum.photos/seed/roost5c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-10', price: 598000, event: 'Listed' },
      { date: '2015-09-20', price: 445000, event: 'Sold' }
    ],
    features: ['Ocean Views', 'Pet Friendly', 'Rooftop Terrace', 'In-Suite Laundry', 'South Facing']
  },
  {
    id: '6',
    address: '1904 Maple Bay Road',
    city: 'Victoria',
    price: 1420000,
    beds: 3,
    baths: 2,
    sqft: 1760,
    type: 'Townhouse',
    lat: 48.4520,
    lng: -123.3100,
    yearBuilt: 2019,
    lotSize: 2400,
    parking: 2,
    pricePerSqft: 807,
    daysOnMarket: 18,
    mlsNumber: 'R2895620',
    description: 'Luxury townhouse with ocean glimpses. End-unit, double garage, private patio. Minutes to Oak Bay Village.',
    images: [
      'https://picsum.photos/seed/roost6a/800/500',
      'https://picsum.photos/seed/roost6b/800/500',
      'https://picsum.photos/seed/roost6c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-22', price: 1420000, event: 'Listed' },
      { date: '2019-11-01', price: 1150000, event: 'Sold' }
    ],
    features: ['End Unit', 'Double Garage', 'Private Patio', 'Ocean Glimpses', 'Radiant Heat']
  },
  {
    id: '7',
    address: '3310 Lakeshore Road',
    city: 'Kelowna',
    price: 2100000,
    beds: 5,
    baths: 4,
    sqft: 3800,
    type: 'House',
    lat: 49.8430,
    lng: -119.5000,
    yearBuilt: 2016,
    lotSize: 8500,
    parking: 3,
    pricePerSqft: 553,
    daysOnMarket: 45,
    mlsNumber: 'R2878944',
    description: 'Spectacular lakefront home on Okanagan Lake. Private dock, infinity pool, wine cellar. Panoramic views from every room.',
    images: [
      'https://picsum.photos/seed/roost7a/800/500',
      'https://picsum.photos/seed/roost7b/800/500',
      'https://picsum.photos/seed/roost7c/800/500',
      'https://picsum.photos/seed/roost7d/800/500',
      'https://picsum.photos/seed/roost7e/800/500'
    ],
    priceHistory: [
      { date: '2023-12-15', price: 2250000, event: 'Listed' },
      { date: '2024-01-10', price: 2100000, event: 'Price Drop' },
      { date: '2016-08-20', price: 1450000, event: 'Sold' }
    ],
    features: ['Lakefront', 'Private Dock', 'Infinity Pool', 'Wine Cellar', 'Triple Garage', 'Smart Home']
  },
  {
    id: '8',
    address: '201-1160 Bernard Avenue',
    city: 'Kelowna',
    price: 485000,
    beds: 2,
    baths: 2,
    sqft: 920,
    type: 'Condo',
    lat: 49.8880,
    lng: -119.4960,
    yearBuilt: 2021,
    lotSize: null,
    parking: 1,
    pricePerSqft: 527,
    daysOnMarket: 3,
    mlsNumber: 'R2905112',
    description: 'Modern downtown Kelowna condo. Open concept, stainless kitchen, large balcony. Walk to the lake, breweries, and restaurants.',
    images: [
      'https://picsum.photos/seed/roost8a/800/500',
      'https://picsum.photos/seed/roost8b/800/500',
      'https://picsum.photos/seed/roost8c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-12', price: 485000, event: 'Listed' },
      { date: '2021-06-01', price: 420000, event: 'Sold' }
    ],
    features: ['Downtown', 'Large Balcony', 'Air Conditioning', 'Gym', 'Underground Parking']
  },
  {
    id: '9',
    address: '755 Rutland Road North',
    city: 'Kelowna',
    price: 875000,
    beds: 4,
    baths: 3,
    sqft: 2340,
    type: 'House',
    lat: 49.9050,
    lng: -119.4200,
    yearBuilt: 2005,
    lotSize: 7200,
    parking: 3,
    pricePerSqft: 374,
    daysOnMarket: 28,
    mlsNumber: 'R2889331',
    description: 'Large family home in Rutland with suite. Vaulted ceilings, triple garage, fenced yard. Easy access to UBC Okanagan.',
    images: [
      'https://picsum.photos/seed/roost9a/800/500',
      'https://picsum.photos/seed/roost9b/800/500',
      'https://picsum.photos/seed/roost9c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-18', price: 899000, event: 'Listed' },
      { date: '2024-02-05', price: 875000, event: 'Price Drop' },
      { date: '2005-03-10', price: 365000, event: 'Sold' }
    ],
    features: ['Legal Suite', 'Triple Garage', 'Vaulted Ceilings', 'Fenced Yard', 'Near UBCO']
  },
  {
    id: '10',
    address: '4312 Village Gate Boulevard',
    city: 'Whistler',
    price: 1680000,
    beds: 2,
    baths: 2,
    sqft: 1100,
    type: 'Condo',
    lat: 50.1163,
    lng: -122.9574,
    yearBuilt: 2010,
    lotSize: null,
    parking: 1,
    pricePerSqft: 1527,
    daysOnMarket: 60,
    mlsNumber: 'R2872200',
    description: 'Slope-side condo in Whistler Village. Ski-in/ski-out access, hot tub, heated underground parking. Strong nightly rental history.',
    images: [
      'https://picsum.photos/seed/roost10a/800/500',
      'https://picsum.photos/seed/roost10b/800/500',
      'https://picsum.photos/seed/roost10c/800/500'
    ],
    priceHistory: [
      { date: '2023-12-01', price: 1750000, event: 'Listed' },
      { date: '2024-01-15', price: 1680000, event: 'Price Drop' },
      { date: '2010-12-10', price: 890000, event: 'Sold' }
    ],
    features: ['Ski-In/Ski-Out', 'Hot Tub', 'Heated Parking', 'Nightly Rental', 'Mountain Views']
  },
  {
    id: '11',
    address: '8924 Fitzsimmons Road',
    city: 'Whistler',
    price: 3250000,
    beds: 5,
    baths: 5,
    sqft: 4200,
    type: 'House',
    lat: 50.1080,
    lng: -122.9520,
    yearBuilt: 2014,
    lotSize: 12000,
    parking: 2,
    pricePerSqft: 774,
    daysOnMarket: 90,
    mlsNumber: 'R2861005',
    description: 'Exceptional chalet in Creekside. Vaulted timber frame, chef\'s kitchen, media room, hot tub. Mountain views year-round.',
    images: [
      'https://picsum.photos/seed/roost11a/800/500',
      'https://picsum.photos/seed/roost11b/800/500',
      'https://picsum.photos/seed/roost11c/800/500',
      'https://picsum.photos/seed/roost11d/800/500'
    ],
    priceHistory: [
      { date: '2023-11-01', price: 3500000, event: 'Listed' },
      { date: '2024-01-01', price: 3250000, event: 'Price Drop' },
      { date: '2014-06-15', price: 2100000, event: 'Sold' }
    ],
    features: ['Timber Frame', 'Hot Tub', 'Media Room', 'Wine Room', 'Mountain Views', 'Heated Driveway']
  },
  {
    id: '12',
    address: '102-4360 Lorimer Road',
    city: 'Whistler',
    price: 920000,
    beds: 1,
    baths: 1,
    sqft: 640,
    type: 'Condo',
    lat: 50.1220,
    lng: -122.9580,
    yearBuilt: 2008,
    lotSize: null,
    parking: 1,
    pricePerSqft: 1438,
    daysOnMarket: 14,
    mlsNumber: 'R2896550',
    description: 'Ground-floor patio unit in Benchlands. Fully furnished, steps to Nita Lake. Great vacation rental income.',
    images: [
      'https://picsum.photos/seed/roost12a/800/500',
      'https://picsum.photos/seed/roost12b/800/500',
      'https://picsum.photos/seed/roost12c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-01', price: 920000, event: 'Listed' },
      { date: '2008-10-01', price: 520000, event: 'Sold' }
    ],
    features: ['Furnished', 'Patio', 'Near Nita Lake', 'Rental Income', 'Pet Friendly']
  },
  {
    id: '13',
    address: '20455 88 Avenue',
    city: 'Langley',
    price: 1295000,
    beds: 4,
    baths: 3,
    sqft: 2650,
    type: 'House',
    lat: 49.1770,
    lng: -122.6880,
    yearBuilt: 2018,
    lotSize: 5500,
    parking: 2,
    pricePerSqft: 489,
    daysOnMarket: 9,
    mlsNumber: 'R2902881',
    description: 'Immaculate Willoughby home. Open-plan main floor, covered deck, two-car garage. Walking distance to schools and shopping.',
    images: [
      'https://picsum.photos/seed/roost13a/800/500',
      'https://picsum.photos/seed/roost13b/800/500',
      'https://picsum.photos/seed/roost13c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-05', price: 1295000, event: 'Listed' },
      { date: '2018-04-15', price: 989000, event: 'Sold' }
    ],
    features: ['Open Plan', 'Covered Deck', 'Double Garage', 'Near Schools', 'Modern Finishes']
  },
  {
    id: '14',
    address: '306-20460 Douglas Crescent',
    city: 'Langley',
    price: 449000,
    beds: 2,
    baths: 1,
    sqft: 840,
    type: 'Condo',
    lat: 49.1040,
    lng: -122.6590,
    yearBuilt: 2012,
    lotSize: null,
    parking: 1,
    pricePerSqft: 535,
    daysOnMarket: 42,
    mlsNumber: 'R2880100',
    description: 'Updated condo in downtown Langley. New flooring and paint, in-suite laundry, secure parking. Transit-oriented location.',
    images: [
      'https://picsum.photos/seed/roost14a/800/500',
      'https://picsum.photos/seed/roost14b/800/500'
    ],
    priceHistory: [
      { date: '2024-01-01', price: 469000, event: 'Listed' },
      { date: '2024-01-25', price: 449000, event: 'Price Drop' },
      { date: '2012-11-10', price: 279000, event: 'Sold' }
    ],
    features: ['Updated', 'In-Suite Laundry', 'Transit Access', 'Secure Parking']
  },
  {
    id: '15',
    address: '5823 196 Street',
    city: 'Langley',
    price: 1575000,
    beds: 5,
    baths: 4,
    sqft: 3100,
    type: 'House',
    lat: 49.1240,
    lng: -122.7230,
    yearBuilt: 2010,
    lotSize: 10000,
    parking: 3,
    pricePerSqft: 508,
    daysOnMarket: 16,
    mlsNumber: 'R2898440',
    description: 'Expansive Langley home with detached workshop. Flat 10,000 sqft lot, triple garage, legal suite. Perfect for multi-gen living.',
    images: [
      'https://picsum.photos/seed/roost15a/800/500',
      'https://picsum.photos/seed/roost15b/800/500',
      'https://picsum.photos/seed/roost15c/800/500',
      'https://picsum.photos/seed/roost15d/800/500'
    ],
    priceHistory: [
      { date: '2024-02-01', price: 1575000, event: 'Listed' },
      { date: '2010-07-20', price: 680000, event: 'Sold' }
    ],
    features: ['Legal Suite', 'Workshop', 'Triple Garage', '10K Sqft Lot', 'Multi-Gen']
  },
  {
    id: '16',
    address: '13388 Old Yale Road',
    city: 'Surrey',
    price: 1099000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: 'House',
    lat: 49.1800,
    lng: -122.8450,
    yearBuilt: 1998,
    lotSize: 6100,
    parking: 2,
    pricePerSqft: 458,
    daysOnMarket: 25,
    mlsNumber: 'R2890205',
    description: 'Well-maintained Surrey home with mortgage helper suite. New roof and windows, large deck, back lane access.',
    images: [
      'https://picsum.photos/seed/roost16a/800/500',
      'https://picsum.photos/seed/roost16b/800/500',
      'https://picsum.photos/seed/roost16c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-20', price: 1099000, event: 'Listed' },
      { date: '2015-05-10', price: 650000, event: 'Sold' },
      { date: '1998-09-01', price: 289000, event: 'Sold' }
    ],
    features: ['Helper Suite', 'New Roof', 'New Windows', 'Lane Access', 'Large Deck']
  },
  {
    id: '17',
    address: '408-13963 96 Avenue',
    city: 'Surrey',
    price: 529000,
    beds: 2,
    baths: 2,
    sqft: 890,
    type: 'Condo',
    lat: 49.1870,
    lng: -122.8470,
    yearBuilt: 2020,
    lotSize: null,
    parking: 1,
    pricePerSqft: 594,
    daysOnMarket: 11,
    mlsNumber: 'R2900890',
    description: 'Modern Surrey Central condo. Granite counters, stainless appliances, oversized balcony. 5-min walk to SkyTrain.',
    images: [
      'https://picsum.photos/seed/roost17a/800/500',
      'https://picsum.photos/seed/roost17b/800/500',
      'https://picsum.photos/seed/roost17c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-04', price: 529000, event: 'Listed' },
      { date: '2020-03-15', price: 460000, event: 'Sold' }
    ],
    features: ['SkyTrain Access', 'Oversized Balcony', 'Granite Counters', 'Gym', 'Concierge']
  },
  {
    id: '18',
    address: '19248 72B Avenue',
    city: 'Surrey',
    price: 1380000,
    beds: 4,
    baths: 4,
    sqft: 2900,
    type: 'Townhouse',
    lat: 49.1400,
    lng: -122.7600,
    yearBuilt: 2022,
    lotSize: 2800,
    parking: 2,
    pricePerSqft: 476,
    daysOnMarket: 8,
    mlsNumber: 'R2903120',
    description: 'Executive townhouse in Clayton Heights. End-unit with double garage, private rooftop deck, luxury finishes throughout.',
    images: [
      'https://picsum.photos/seed/roost18a/800/500',
      'https://picsum.photos/seed/roost18b/800/500',
      'https://picsum.photos/seed/roost18c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-07', price: 1380000, event: 'Listed' },
      { date: '2022-08-01', price: 1250000, event: 'Sold' }
    ],
    features: ['End Unit', 'Rooftop Deck', 'Double Garage', 'Quartz Counters', 'Air Conditioning']
  },
  {
    id: '19',
    address: '3742 West 16th Avenue',
    city: 'Vancouver',
    price: 2750000,
    beds: 5,
    baths: 4,
    sqft: 3200,
    type: 'House',
    lat: 49.2610,
    lng: -123.1820,
    yearBuilt: 1952,
    lotSize: 5800,
    parking: 2,
    pricePerSqft: 859,
    daysOnMarket: 32,
    mlsNumber: 'R2886441',
    description: 'Grand Dunbar residence. Chef\'s kitchen with Wolf range, primary suite with spa ensuite, heated floors, detached garage with studio above.',
    images: [
      'https://picsum.photos/seed/roost19a/800/500',
      'https://picsum.photos/seed/roost19b/800/500',
      'https://picsum.photos/seed/roost19c/800/500',
      'https://picsum.photos/seed/roost19d/800/500'
    ],
    priceHistory: [
      { date: '2024-01-10', price: 2850000, event: 'Listed' },
      { date: '2024-01-30', price: 2750000, event: 'Price Drop' },
      { date: '2016-11-22', price: 2100000, event: 'Sold' }
    ],
    features: ['Wolf Range', 'Spa Ensuite', 'Heated Floors', 'Detached Studio', 'Chef Kitchen']
  },
  {
    id: '20',
    address: '501-1323 Homer Street',
    city: 'Vancouver',
    price: 1450000,
    beds: 2,
    baths: 2,
    sqft: 1180,
    type: 'Condo',
    lat: 49.2740,
    lng: -123.1240,
    yearBuilt: 2018,
    lotSize: null,
    parking: 1,
    pricePerSqft: 1229,
    daysOnMarket: 6,
    mlsNumber: 'R2904550',
    description: 'Penthouse-level condo in Yaletown\'s Evolution tower. Wrap-around views, private rooftop access, gourmet kitchen. Turnkey and stunning.',
    images: [
      'https://picsum.photos/seed/roost20a/800/500',
      'https://picsum.photos/seed/roost20b/800/500',
      'https://picsum.photos/seed/roost20c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-08', price: 1450000, event: 'Listed' },
      { date: '2018-10-01', price: 1100000, event: 'Sold' }
    ],
    features: ['Penthouse Level', 'Wrap Views', 'Rooftop Access', 'Gourmet Kitchen', 'Concierge']
  },
  {
    id: '21',
    address: '1802-1480 Howe Street',
    city: 'Vancouver',
    price: 895000,
    beds: 2,
    baths: 1,
    sqft: 870,
    type: 'Condo',
    lat: 49.2725,
    lng: -123.1275,
    yearBuilt: 2006,
    lotSize: null,
    parking: 1,
    pricePerSqft: 1029,
    daysOnMarket: 19,
    mlsNumber: 'R2897620',
    description: 'Corner unit in Downtown South with north-facing city and mountain views. Updated flooring, open kitchen, building has pool and gym.',
    images: [
      'https://picsum.photos/seed/roost21a/800/500',
      'https://picsum.photos/seed/roost21b/800/500',
      'https://picsum.photos/seed/roost21c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-25', price: 895000, event: 'Listed' },
      { date: '2019-03-14', price: 740000, event: 'Sold' }
    ],
    features: ['Corner Unit', 'Mountain Views', 'Pool', 'Gym', 'Updated']
  },
  {
    id: '22',
    address: '6445 Deer Lake Avenue',
    city: 'Burnaby',
    price: 1650000,
    beds: 4,
    baths: 3,
    sqft: 2200,
    type: 'House',
    lat: 49.2380,
    lng: -122.9740,
    yearBuilt: 1975,
    lotSize: 7000,
    parking: 2,
    pricePerSqft: 750,
    daysOnMarket: 15,
    mlsNumber: 'R2899110',
    description: 'Renovated rancher near Deer Lake. New kitchen, updated baths, large fenced yard. Quiet family neighborhood close to SFU.',
    images: [
      'https://picsum.photos/seed/roost22a/800/500',
      'https://picsum.photos/seed/roost22b/800/500',
      'https://picsum.photos/seed/roost22c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-01', price: 1650000, event: 'Listed' },
      { date: '2010-08-22', price: 580000, event: 'Sold' }
    ],
    features: ['Renovated', 'Near Deer Lake', 'Large Yard', 'Rancher Style', 'Near SFU']
  },
  {
    id: '23',
    address: '2303-4688 Kingsway',
    city: 'Burnaby',
    price: 620000,
    beds: 2,
    baths: 2,
    sqft: 950,
    type: 'Condo',
    lat: 49.2290,
    lng: -123.0020,
    yearBuilt: 2023,
    lotSize: null,
    parking: 1,
    pricePerSqft: 653,
    daysOnMarket: 4,
    mlsNumber: 'R2905800',
    description: 'Brand new Metrotown condo. Never lived in. Floor-to-ceiling windows, quartz island kitchen, air conditioning. Steps to Crystal Mall and SkyTrain.',
    images: [
      'https://picsum.photos/seed/roost23a/800/500',
      'https://picsum.photos/seed/roost23b/800/500',
      'https://picsum.photos/seed/roost23c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-11', price: 620000, event: 'Listed' }
    ],
    features: ['Brand New', 'Air Conditioning', 'SkyTrain Access', 'Quartz Counters', 'Floor-to-Ceiling Windows']
  },
  {
    id: '24',
    address: '1455 Marine Drive',
    city: 'West Vancouver',
    price: 4200000,
    beds: 5,
    baths: 5,
    sqft: 4800,
    type: 'House',
    lat: 49.3280,
    lng: -123.1680,
    yearBuilt: 2019,
    lotSize: 14000,
    parking: 3,
    pricePerSqft: 875,
    daysOnMarket: 55,
    mlsNumber: 'R2874300',
    description: 'Modern West Vancouver estate with panoramic ocean and city views. Indoor pool, home theatre, wine cellar, elevator. Gated and private.',
    images: [
      'https://picsum.photos/seed/roost24a/800/500',
      'https://picsum.photos/seed/roost24b/800/500',
      'https://picsum.photos/seed/roost24c/800/500',
      'https://picsum.photos/seed/roost24d/800/500',
      'https://picsum.photos/seed/roost24e/800/500'
    ],
    priceHistory: [
      { date: '2023-12-10', price: 4500000, event: 'Listed' },
      { date: '2024-01-20', price: 4200000, event: 'Price Drop' },
      { date: '2019-05-01', price: 3800000, event: 'Sold' }
    ],
    features: ['Ocean Views', 'Indoor Pool', 'Home Theatre', 'Wine Cellar', 'Elevator', 'Gated']
  },
  {
    id: '25',
    address: '201-150 East 2nd Street',
    city: 'North Vancouver',
    price: 725000,
    beds: 2,
    baths: 2,
    sqft: 930,
    type: 'Condo',
    lat: 49.3140,
    lng: -123.0720,
    yearBuilt: 2017,
    lotSize: null,
    parking: 1,
    pricePerSqft: 780,
    daysOnMarket: 8,
    mlsNumber: 'R2903440',
    description: 'Lonsdale condo with mountain views. Open layout, quartz kitchen, private storage locker. Walk to Lonsdale Quay and SeaBus.',
    images: [
      'https://picsum.photos/seed/roost25a/800/500',
      'https://picsum.photos/seed/roost25b/800/500',
      'https://picsum.photos/seed/roost25c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-06', price: 725000, event: 'Listed' },
      { date: '2017-09-15', price: 540000, event: 'Sold' }
    ],
    features: ['Mountain Views', 'Near SeaBus', 'Quartz Kitchen', 'Storage Locker', 'Bike Room']
  },
  {
    id: '26',
    address: '408 Esplanade Avenue',
    city: 'North Vancouver',
    price: 1890000,
    beds: 3,
    baths: 3,
    sqft: 1950,
    type: 'Townhouse',
    lat: 49.3100,
    lng: -123.0830,
    yearBuilt: 2021,
    lotSize: 2200,
    parking: 2,
    pricePerSqft: 969,
    daysOnMarket: 12,
    mlsNumber: 'R2901770',
    description: 'Luxury waterfront townhouse on the Esplanade. Private dock access, rooftop deck with inlet views. Ultra-modern design.',
    images: [
      'https://picsum.photos/seed/roost26a/800/500',
      'https://picsum.photos/seed/roost26b/800/500',
      'https://picsum.photos/seed/roost26c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-03', price: 1890000, event: 'Listed' },
      { date: '2021-11-01', price: 1620000, event: 'Sold' }
    ],
    features: ['Waterfront', 'Dock Access', 'Rooftop Deck', 'Inlet Views', 'Ultra-Modern']
  },
  {
    id: '27',
    address: '7723 Royal Oak Avenue',
    city: 'Burnaby',
    price: 1425000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: 'Townhouse',
    lat: 49.2520,
    lng: -122.9180,
    yearBuilt: 2020,
    lotSize: 1800,
    parking: 2,
    pricePerSqft: 792,
    daysOnMarket: 20,
    mlsNumber: 'R2895900',
    description: 'Modern Royal Oak townhouse near shops and transit. Open-concept, large patio, double tandem garage. Central Burnaby location.',
    images: [
      'https://picsum.photos/seed/roost27a/800/500',
      'https://picsum.photos/seed/roost27b/800/500',
      'https://picsum.photos/seed/roost27c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-22', price: 1425000, event: 'Listed' },
      { date: '2020-06-15', price: 1100000, event: 'Sold' }
    ],
    features: ['Open Concept', 'Large Patio', 'Tandem Garage', 'Near Transit', 'Modern']
  },
  {
    id: '28',
    address: '982 Mainland Street',
    city: 'Vancouver',
    price: 3100000,
    beds: 3,
    baths: 3,
    sqft: 2400,
    type: 'Condo',
    lat: 49.2760,
    lng: -123.1210,
    yearBuilt: 2022,
    lotSize: null,
    parking: 2,
    pricePerSqft: 1292,
    daysOnMarket: 38,
    mlsNumber: 'R2884220',
    description: 'Sub-penthouse in Yaletown\'s newest tower. Smart home, private terrace, Miele appliances, separate laundry room. Two parking stalls.',
    images: [
      'https://picsum.photos/seed/roost28a/800/500',
      'https://picsum.photos/seed/roost28b/800/500',
      'https://picsum.photos/seed/roost28c/800/500',
      'https://picsum.photos/seed/roost28d/800/500'
    ],
    priceHistory: [
      { date: '2024-01-05', price: 3250000, event: 'Listed' },
      { date: '2024-02-01', price: 3100000, event: 'Price Drop' },
      { date: '2022-04-01', price: 2800000, event: 'Sold' }
    ],
    features: ['Sub-Penthouse', 'Smart Home', 'Private Terrace', 'Miele Appliances', 'Two Parking']
  },
  {
    id: '29',
    address: '14550 Morris Valley Road',
    city: 'Harrison Hot Springs',
    price: 495000,
    beds: 3,
    baths: 2,
    sqft: 1600,
    type: 'House',
    lat: 49.2930,
    lng: -121.7830,
    yearBuilt: 1985,
    lotSize: 8700,
    parking: 2,
    pricePerSqft: 309,
    daysOnMarket: 52,
    mlsNumber: 'R2876100',
    description: 'Affordable acreage-feel property near Harrison Lake. Updated interior, wood stove, large shop, creek on property. Weekend retreat or full-time.',
    images: [
      'https://picsum.photos/seed/roost29a/800/500',
      'https://picsum.photos/seed/roost29b/800/500',
      'https://picsum.photos/seed/roost29c/800/500'
    ],
    priceHistory: [
      { date: '2023-12-20', price: 525000, event: 'Listed' },
      { date: '2024-01-15', price: 495000, event: 'Price Drop' },
      { date: '1985-06-01', price: 95000, event: 'Sold' }
    ],
    features: ['Near Lake', 'Large Shop', 'Wood Stove', 'Creek', 'Private Setting']
  },
  {
    id: '30',
    address: '2401-4880 Bennett Street',
    city: 'Burnaby',
    price: 780000,
    beds: 2,
    baths: 2,
    sqft: 1050,
    type: 'Condo',
    lat: 49.2650,
    lng: -122.9800,
    yearBuilt: 2024,
    lotSize: null,
    parking: 1,
    pricePerSqft: 743,
    daysOnMarket: 2,
    mlsNumber: 'R2906200',
    description: 'Brand new Brentwood tower. Corner unit, unobstructed views of mountains and inlet. Air conditioning, large balcony, world-class amenities.',
    images: [
      'https://picsum.photos/seed/roost30a/800/500',
      'https://picsum.photos/seed/roost30b/800/500',
      'https://picsum.photos/seed/roost30c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-13', price: 780000, event: 'Listed' }
    ],
    features: ['Brand New', 'Corner Unit', 'Mountain Views', 'Air Conditioning', 'Brentwood Location']
  },
  {
    id: '31',
    address: '1287 Keith Road',
    city: 'North Vancouver',
    price: 2350000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: 'House',
    lat: 49.3200,
    lng: -123.0900,
    yearBuilt: 2001,
    lotSize: 6500,
    parking: 2,
    pricePerSqft: 839,
    daysOnMarket: 22,
    mlsNumber: 'R2893550',
    description: 'Stately Westlynn home with canyon views. Chef kitchen, rec room, hot tub on covered deck. Walk to Lynn Valley Village.',
    images: [
      'https://picsum.photos/seed/roost31a/800/500',
      'https://picsum.photos/seed/roost31b/800/500',
      'https://picsum.photos/seed/roost31c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-23', price: 2350000, event: 'Listed' },
      { date: '2015-09-10', price: 1450000, event: 'Sold' }
    ],
    features: ['Canyon Views', 'Chef Kitchen', 'Hot Tub', 'Rec Room', 'Near Lynn Valley']
  },
  {
    id: '32',
    address: '5508 Wharf Avenue',
    city: 'Sechelt',
    price: 689000,
    beds: 3,
    baths: 2,
    sqft: 1450,
    type: 'House',
    lat: 49.4740,
    lng: -123.7560,
    yearBuilt: 1990,
    lotSize: 5200,
    parking: 1,
    pricePerSqft: 475,
    daysOnMarket: 30,
    mlsNumber: 'R2886990',
    description: 'Sunshine Coast character home steps from the beach. Ocean-view deck, updated kitchen, detached workshop. Relaxed coastal living.',
    images: [
      'https://picsum.photos/seed/roost32a/800/500',
      'https://picsum.photos/seed/roost32b/800/500',
      'https://picsum.photos/seed/roost32c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-15', price: 715000, event: 'Listed' },
      { date: '2024-02-05', price: 689000, event: 'Price Drop' },
      { date: '2016-04-20', price: 420000, event: 'Sold' }
    ],
    features: ['Ocean View', 'Near Beach', 'Workshop', 'Updated Kitchen', 'Coastal Living']
  },
  {
    id: '33',
    address: '607-2565 Campbell Avenue',
    city: 'Abbotsford',
    price: 395000,
    beds: 2,
    baths: 2,
    sqft: 820,
    type: 'Condo',
    lat: 49.0540,
    lng: -122.3290,
    yearBuilt: 2019,
    lotSize: null,
    parking: 1,
    pricePerSqft: 482,
    daysOnMarket: 17,
    mlsNumber: 'R2898100',
    description: 'Modern Abbotsford condo. Open layout, gas fireplace, covered patio. Building has gym, party room. Near UFV campus.',
    images: [
      'https://picsum.photos/seed/roost33a/800/500',
      'https://picsum.photos/seed/roost33b/800/500'
    ],
    priceHistory: [
      { date: '2024-01-28', price: 395000, event: 'Listed' },
      { date: '2019-10-01', price: 340000, event: 'Sold' }
    ],
    features: ['Gas Fireplace', 'Covered Patio', 'Gym', 'Near UFV', 'Modern']
  },
  {
    id: '34',
    address: '34422 Forrest Terrace',
    city: 'Abbotsford',
    price: 985000,
    beds: 5,
    baths: 3,
    sqft: 2650,
    type: 'House',
    lat: 49.0380,
    lng: -122.2850,
    yearBuilt: 2015,
    lotSize: 6800,
    parking: 2,
    pricePerSqft: 372,
    daysOnMarket: 10,
    mlsNumber: 'R2902000',
    description: 'Family home in desirable Abbotsford East. Mountain views, legal suite, fenced yard, walking trails nearby. Great value.',
    images: [
      'https://picsum.photos/seed/roost34a/800/500',
      'https://picsum.photos/seed/roost34b/800/500',
      'https://picsum.photos/seed/roost34c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-04', price: 985000, event: 'Listed' },
      { date: '2015-05-15', price: 545000, event: 'Sold' }
    ],
    features: ['Mountain Views', 'Legal Suite', 'Fenced Yard', 'Walking Trails', 'Great Value']
  },
  {
    id: '35',
    address: '22-728 Gibsons Way',
    city: 'Gibsons',
    price: 575000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: 'Townhouse',
    lat: 49.4020,
    lng: -123.5080,
    yearBuilt: 2017,
    lotSize: 1600,
    parking: 1,
    pricePerSqft: 479,
    daysOnMarket: 24,
    mlsNumber: 'R2891200',
    description: 'Sunshine Coast townhouse in walkable Gibsons. Private patio, single garage, steps to shops and harbour. Ferry commuter friendly.',
    images: [
      'https://picsum.photos/seed/roost35a/800/500',
      'https://picsum.photos/seed/roost35b/800/500',
      'https://picsum.photos/seed/roost35c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-20', price: 595000, event: 'Listed' },
      { date: '2024-02-08', price: 575000, event: 'Price Drop' },
      { date: '2017-08-01', price: 389000, event: 'Sold' }
    ],
    features: ['Near Harbour', 'Private Patio', 'Walkable', 'Ferry Access', 'Single Garage']
  },
  {
    id: '36',
    address: '1125 Glacier View Drive',
    city: 'Squamish',
    price: 1150000,
    beds: 3,
    baths: 2,
    sqft: 1650,
    type: 'Townhouse',
    lat: 49.7015,
    lng: -123.1545,
    yearBuilt: 2020,
    lotSize: 2000,
    parking: 2,
    pricePerSqft: 697,
    daysOnMarket: 13,
    mlsNumber: 'R2900350',
    description: 'Modern Squamish townhouse with Stawamus Chief views. End unit, double garage, air conditioning. Trail access from your door.',
    images: [
      'https://picsum.photos/seed/roost36a/800/500',
      'https://picsum.photos/seed/roost36b/800/500',
      'https://picsum.photos/seed/roost36c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-01', price: 1150000, event: 'Listed' },
      { date: '2020-09-15', price: 820000, event: 'Sold' }
    ],
    features: ['Mountain Views', 'End Unit', 'Trail Access', 'Air Conditioning', 'Modern Build']
  },
  {
    id: '37',
    address: '38543 Buckley Avenue',
    city: 'Squamish',
    price: 1780000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: 'House',
    lat: 49.6980,
    lng: -123.1620,
    yearBuilt: 2018,
    lotSize: 5500,
    parking: 2,
    pricePerSqft: 742,
    daysOnMarket: 27,
    mlsNumber: 'R2889500',
    description: 'Custom Squamish home. Howe Sound views from the great room. Open plan, gas fireplace, covered outdoor kitchen. Backs onto green space.',
    images: [
      'https://picsum.photos/seed/roost37a/800/500',
      'https://picsum.photos/seed/roost37b/800/500',
      'https://picsum.photos/seed/roost37c/800/500',
      'https://picsum.photos/seed/roost37d/800/500'
    ],
    priceHistory: [
      { date: '2024-01-18', price: 1780000, event: 'Listed' },
      { date: '2018-12-01', price: 1200000, event: 'Sold' }
    ],
    features: ['Howe Sound Views', 'Outdoor Kitchen', 'Gas Fireplace', 'Green Space', 'Custom Build']
  },
  {
    id: '38',
    address: '404-32850 George Ferguson Way',
    city: 'Abbotsford',
    price: 365000,
    beds: 1,
    baths: 1,
    sqft: 650,
    type: 'Condo',
    lat: 49.0500,
    lng: -122.3100,
    yearBuilt: 2016,
    lotSize: null,
    parking: 1,
    pricePerSqft: 562,
    daysOnMarket: 35,
    mlsNumber: 'R2885400',
    description: 'Affordable Abbotsford entry. Updated unit, in-suite laundry, large den. Walkable downtown location near transit.',
    images: [
      'https://picsum.photos/seed/roost38a/800/500',
      'https://picsum.photos/seed/roost38b/800/500'
    ],
    priceHistory: [
      { date: '2024-01-10', price: 379000, event: 'Listed' },
      { date: '2024-02-01', price: 365000, event: 'Price Drop' },
      { date: '2016-03-01', price: 215000, event: 'Sold' }
    ],
    features: ['Affordable', 'In-Suite Laundry', 'Near Transit', 'Updated', 'Den']
  },
  {
    id: '39',
    address: '3890 Hobson Road',
    city: 'Nanaimo',
    price: 825000,
    beds: 3,
    baths: 2,
    sqft: 1850,
    type: 'House',
    lat: 49.1650,
    lng: -123.9400,
    yearBuilt: 1992,
    lotSize: 7500,
    parking: 2,
    pricePerSqft: 446,
    daysOnMarket: 18,
    mlsNumber: 'R2897800',
    description: 'Nanaimo family home on a quiet cul-de-sac. Large fenced yard, updated kitchen, rec room downstairs. Near Woodgrove Centre.',
    images: [
      'https://picsum.photos/seed/roost39a/800/500',
      'https://picsum.photos/seed/roost39b/800/500',
      'https://picsum.photos/seed/roost39c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-27', price: 825000, event: 'Listed' },
      { date: '2007-06-10', price: 320000, event: 'Sold' }
    ],
    features: ['Cul-de-sac', 'Large Yard', 'Rec Room', 'Near Shopping', 'Updated Kitchen']
  },
  {
    id: '40',
    address: '505-6450 Telford Avenue',
    city: 'Burnaby',
    price: 545000,
    beds: 1,
    baths: 1,
    sqft: 590,
    type: 'Condo',
    lat: 49.2250,
    lng: -122.9530,
    yearBuilt: 2018,
    lotSize: null,
    parking: 1,
    pricePerSqft: 924,
    daysOnMarket: 7,
    mlsNumber: 'R2904100',
    description: 'Bright Metrotown one-bedroom. South facing, quartz counters, in-suite laundry. Steps to shops, SkyTrain, and restaurants.',
    images: [
      'https://picsum.photos/seed/roost40a/800/500',
      'https://picsum.photos/seed/roost40b/800/500'
    ],
    priceHistory: [
      { date: '2024-02-08', price: 545000, event: 'Listed' },
      { date: '2018-10-15', price: 430000, event: 'Sold' }
    ],
    features: ['South Facing', 'SkyTrain Access', 'In-Suite Laundry', 'Near Shopping']
  },
  {
    id: '41',
    address: '2208 West 1st Avenue',
    city: 'Vancouver',
    price: 1980000,
    beds: 3,
    baths: 2,
    sqft: 1550,
    type: 'Townhouse',
    lat: 49.2720,
    lng: -123.1540,
    yearBuilt: 2021,
    lotSize: 1900,
    parking: 1,
    pricePerSqft: 1277,
    daysOnMarket: 14,
    mlsNumber: 'R2899900',
    description: 'Kitsilano townhouse. Rooftop deck with ocean and mountain views, gourmet kitchen, heated floors throughout. Steps to the beach.',
    images: [
      'https://picsum.photos/seed/roost41a/800/500',
      'https://picsum.photos/seed/roost41b/800/500',
      'https://picsum.photos/seed/roost41c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-01', price: 1980000, event: 'Listed' },
      { date: '2021-07-01', price: 1650000, event: 'Sold' }
    ],
    features: ['Rooftop Deck', 'Ocean Views', 'Heated Floors', 'Gourmet Kitchen', 'Near Beach']
  },
  {
    id: '42',
    address: '15890 26 Avenue',
    city: 'Surrey',
    price: 1650000,
    beds: 5,
    baths: 4,
    sqft: 3200,
    type: 'House',
    lat: 49.1600,
    lng: -122.7700,
    yearBuilt: 2021,
    lotSize: 6000,
    parking: 2,
    pricePerSqft: 516,
    daysOnMarket: 10,
    mlsNumber: 'R2902500',
    description: 'South Surrey executive home. Modern open plan, covered outdoor living area, legal suite below. Near Semiahmoo Trail.',
    images: [
      'https://picsum.photos/seed/roost42a/800/500',
      'https://picsum.photos/seed/roost42b/800/500',
      'https://picsum.photos/seed/roost42c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-04', price: 1650000, event: 'Listed' },
      { date: '2021-09-15', price: 1350000, event: 'Sold' }
    ],
    features: ['Legal Suite', 'Outdoor Living', 'Modern', 'Near Trail', 'Executive']
  },
  {
    id: '43',
    address: '1707-1331 Alberni Street',
    city: 'Vancouver',
    price: 1120000,
    beds: 1,
    baths: 1,
    sqft: 780,
    type: 'Condo',
    lat: 49.2820,
    lng: -123.1310,
    yearBuilt: 2020,
    lotSize: null,
    parking: 1,
    pricePerSqft: 1436,
    daysOnMarket: 9,
    mlsNumber: 'R2903800',
    description: 'West End high-rise with Coal Harbour views. Premium finishes, floor-to-ceiling windows, Miele kitchen. World-class amenities.',
    images: [
      'https://picsum.photos/seed/roost43a/800/500',
      'https://picsum.photos/seed/roost43b/800/500',
      'https://picsum.photos/seed/roost43c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-06', price: 1120000, event: 'Listed' },
      { date: '2020-11-01', price: 950000, event: 'Sold' }
    ],
    features: ['Coal Harbour Views', 'Miele Kitchen', 'Premium Finishes', 'World-Class Amenities']
  },
  {
    id: '44',
    address: '4452 Skyline Drive',
    city: 'Nanaimo',
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2600,
    type: 'House',
    lat: 49.1800,
    lng: -123.9600,
    yearBuilt: 2017,
    lotSize: 8000,
    parking: 2,
    pricePerSqft: 481,
    daysOnMarket: 15,
    mlsNumber: 'R2899200',
    description: 'Ocean-view Nanaimo home. Custom build with high ceilings, covered deck, and media room. Views of Georgia Strait and the islands.',
    images: [
      'https://picsum.photos/seed/roost44a/800/500',
      'https://picsum.photos/seed/roost44b/800/500',
      'https://picsum.photos/seed/roost44c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-30', price: 1250000, event: 'Listed' },
      { date: '2017-11-20', price: 780000, event: 'Sold' }
    ],
    features: ['Ocean Views', 'Custom Build', 'Media Room', 'High Ceilings', 'Covered Deck']
  },
  {
    id: '45',
    address: '202-460 14th Street',
    city: 'West Vancouver',
    price: 975000,
    beds: 2,
    baths: 2,
    sqft: 1100,
    type: 'Condo',
    lat: 49.3300,
    lng: -123.1580,
    yearBuilt: 2016,
    lotSize: null,
    parking: 2,
    pricePerSqft: 886,
    daysOnMarket: 22,
    mlsNumber: 'R2893200',
    description: 'Ambleside condo with ocean views. Corner suite, two parking stalls, large storage. Steps from Ambleside Beach and shops.',
    images: [
      'https://picsum.photos/seed/roost45a/800/500',
      'https://picsum.photos/seed/roost45b/800/500',
      'https://picsum.photos/seed/roost45c/800/500'
    ],
    priceHistory: [
      { date: '2024-01-23', price: 975000, event: 'Listed' },
      { date: '2016-05-01', price: 720000, event: 'Sold' }
    ],
    features: ['Ocean Views', 'Corner Suite', 'Two Parking', 'Near Beach', 'Large Storage']
  },
  {
    id: '46',
    address: '11440 238 Street',
    city: 'Maple Ridge',
    price: 1095000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: 'House',
    lat: 49.2170,
    lng: -122.5310,
    yearBuilt: 2014,
    lotSize: 6400,
    parking: 2,
    pricePerSqft: 456,
    daysOnMarket: 11,
    mlsNumber: 'R2901500',
    description: 'Albion neighbourhood home. Mountain views, covered deck, bonus room, walk-out basement suite. Near Golden Ears park.',
    images: [
      'https://picsum.photos/seed/roost46a/800/500',
      'https://picsum.photos/seed/roost46b/800/500',
      'https://picsum.photos/seed/roost46c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-04', price: 1095000, event: 'Listed' },
      { date: '2014-08-15', price: 560000, event: 'Sold' }
    ],
    features: ['Mountain Views', 'Basement Suite', 'Near Golden Ears', 'Covered Deck', 'Bonus Room']
  },
  {
    id: '47',
    address: '209-22327 River Road',
    city: 'Maple Ridge',
    price: 425000,
    beds: 2,
    baths: 1,
    sqft: 800,
    type: 'Condo',
    lat: 49.2200,
    lng: -122.5980,
    yearBuilt: 2011,
    lotSize: null,
    parking: 1,
    pricePerSqft: 531,
    daysOnMarket: 29,
    mlsNumber: 'R2888700',
    description: 'Riverside condo with river views. Updated floors, open plan, large balcony. Walk to West Coast Express station.',
    images: [
      'https://picsum.photos/seed/roost47a/800/500',
      'https://picsum.photos/seed/roost47b/800/500'
    ],
    priceHistory: [
      { date: '2024-01-16', price: 439000, event: 'Listed' },
      { date: '2024-02-05', price: 425000, event: 'Price Drop' },
      { date: '2011-04-01', price: 245000, event: 'Sold' }
    ],
    features: ['River Views', 'Near WCE', 'Large Balcony', 'Updated', 'Affordable']
  },
  {
    id: '48',
    address: '3341 Point Grey Road',
    city: 'Vancouver',
    price: 5900000,
    beds: 5,
    baths: 5,
    sqft: 4500,
    type: 'House',
    lat: 49.2745,
    lng: -123.1720,
    yearBuilt: 2020,
    lotSize: 8200,
    parking: 3,
    pricePerSqft: 1311,
    daysOnMarket: 70,
    mlsNumber: 'R2870100',
    description: 'Iconic Point Grey Road modern masterpiece. Unobstructed ocean, island, and mountain views. Private beach access, infinity pool, wine vault.',
    images: [
      'https://picsum.photos/seed/roost48a/800/500',
      'https://picsum.photos/seed/roost48b/800/500',
      'https://picsum.photos/seed/roost48c/800/500',
      'https://picsum.photos/seed/roost48d/800/500',
      'https://picsum.photos/seed/roost48e/800/500'
    ],
    priceHistory: [
      { date: '2023-12-01', price: 6200000, event: 'Listed' },
      { date: '2024-01-15', price: 5900000, event: 'Price Drop' },
      { date: '2020-02-01', price: 4800000, event: 'Sold' }
    ],
    features: ['Beach Access', 'Infinity Pool', 'Wine Vault', 'Smart Home', 'Ocean Views', 'Triple Garage']
  },
  {
    id: '49',
    address: '2188 Folkestone Way',
    city: 'West Vancouver',
    price: 3500000,
    beds: 4,
    baths: 4,
    sqft: 3800,
    type: 'House',
    lat: 49.3400,
    lng: -123.1900,
    yearBuilt: 2012,
    lotSize: 10500,
    parking: 3,
    pricePerSqft: 921,
    daysOnMarket: 40,
    mlsNumber: 'R2882600',
    description: 'British Properties executive home. Open-concept with 20ft ceilings, chef kitchen, resort-style pool. City and ocean views.',
    images: [
      'https://picsum.photos/seed/roost49a/800/500',
      'https://picsum.photos/seed/roost49b/800/500',
      'https://picsum.photos/seed/roost49c/800/500',
      'https://picsum.photos/seed/roost49d/800/500'
    ],
    priceHistory: [
      { date: '2024-01-05', price: 3700000, event: 'Listed' },
      { date: '2024-02-01', price: 3500000, event: 'Price Drop' },
      { date: '2012-06-01', price: 2500000, event: 'Sold' }
    ],
    features: ['20ft Ceilings', 'Resort Pool', 'Chef Kitchen', 'City Views', 'British Properties']
  },
  {
    id: '50',
    address: '404-1575 Beach Avenue',
    city: 'Vancouver',
    price: 1680000,
    beds: 2,
    baths: 2,
    sqft: 1320,
    type: 'Condo',
    lat: 49.2780,
    lng: -123.1360,
    yearBuilt: 2015,
    lotSize: null,
    parking: 1,
    pricePerSqft: 1273,
    daysOnMarket: 5,
    mlsNumber: 'R2905500',
    description: 'English Bay waterfront. Southwest corner with sunset views, spacious layout, direct beach access. Premium building with 24hr concierge.',
    images: [
      'https://picsum.photos/seed/roost50a/800/500',
      'https://picsum.photos/seed/roost50b/800/500',
      'https://picsum.photos/seed/roost50c/800/500'
    ],
    priceHistory: [
      { date: '2024-02-10', price: 1680000, event: 'Listed' },
      { date: '2015-11-01', price: 1200000, event: 'Sold' }
    ],
    features: ['Waterfront', 'Sunset Views', 'Beach Access', '24hr Concierge', 'Corner Unit']
  }
]

export default listings
