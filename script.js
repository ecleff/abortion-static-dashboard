// The svg
const svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Map and projection
const projection = d3.geoMercator()
    .center([-99.9018, 31.9686 ])                // GPS of location to zoom on
    .scale(2000)                       // This is like the zoom
    .translate([ width/2, height/2 ]);

const markers = [[
    {
      "": 1,
      county_name: "Aransas",
      avg_distance: 422.719351666667,
      avg_population: 3374,
      lat: 28.12709562,
      long: -96.99258951
    },
    {
      "": 2,
      county_name: "Cameron",
      avg_distance: 422.1155135,
      avg_population: 84793,
      lat: 26.13847728,
      long: -97.51499968
    },
    {
      "": 3,
      county_name: "Nueces",
      avg_distance: 409.392936666667,
      avg_population: 74030,
      lat: 27.72621549,
      long: -97.61767326
    },
    {
      "": 4,
      county_name: "Kenedy",
      avg_distance: 407.8861225,
      avg_population: 65,
      lat: 26.92409448,
      long: -97.68137783
    },
    {
      "": 5,
      county_name: "Kleberg",
      avg_distance: 406.981414166667,
      avg_population: 7015,
      lat: 27.43274395,
      long: -97.72889778
    },
    {
      "": 6,
      county_name: "Willacy",
      avg_distance: 401.568026,
      avg_population: 3683,
      lat: 26.47132899,
      long: -97.64303323
    },
    {
      "": 7,
      county_name: "Duval",
      avg_distance: 394.362195,
      avg_population: 1901,
      lat: 27.68133382,
      long: -98.50889672
    },
    {
      "": 8,
      county_name: "Refugio",
      avg_distance: 386.715236666667,
      avg_population: 1115,
      lat: 28.32681413,
      long: -97.16546961
    },
    {
      "": 9,
      county_name: "Calhoun",
      avg_distance: 379.663743333333,
      avg_population: 3647,
      lat: 28.48966896,
      long: -96.64708119
    },
    {
      "": 10,
      county_name: "Brooks",
      avg_distance: 378.397298666667,
      avg_population: 1162,
      lat: 27.0315669,
      long: -98.21874127
    },
    {
      "": 11,
      county_name: "Webb",
      avg_distance: 377.635558333333,
      avg_population: 58568,
      lat: 27.76102524,
      long: -99.33170164
    },
    {
      "": 12,
      county_name: "Starr",
      avg_distance: 376.055542333333,
      avg_population: 13164,
      lat: 26.56212627,
      long: -98.73834895
    },
    {
      "": 13,
      county_name: "Zapata",
      avg_distance: 374.675741166667,
      avg_population: 2792,
      lat: 27.00089072,
      long: -99.16860134
    },
    {
      "": 14,
      county_name: "Hidalgo",
      avg_distance: 374.2522744,
      avg_population: 184934,
      lat: 26.396627,
      long: -98.18088681
    },
    {
      "": 15,
      county_name: "Bee",
      avg_distance: 369.9747125,
      avg_population: 4866,
      lat: 28.41736675,
      long: -97.74116811
    },
    {
      "": 16,
      county_name: "Goliad",
      avg_distance: 358.384734666667,
      avg_population: 1214,
      lat: 28.65708563,
      long: -97.42646082
    },
    {
      "": 17,
      county_name: "Victoria",
      avg_distance: 357.685346666667,
      avg_population: 18169,
      lat: 28.79640594,
      long: -96.97176602
    },
    {
      "": 18,
      county_name: "Matagorda",
      avg_distance: 355.7261055,
      avg_population: 6556,
      lat: 28.86711039,
      long: -95.98533866
    },
    {
      "": 19,
      county_name: "Jackson",
      avg_distance: 347.943276,
      avg_population: 2609,
      lat: 28.95603133,
      long: -96.57883268
    },
    {
      "": 20,
      county_name: "Newton",
      avg_distance: 343.787540833333,
      avg_population: 2051,
      lat: 30.78619977,
      long: -93.74462993
    },
    {
      "": 21,
      county_name: "Jasper",
      avg_distance: 333.146979166667,
      avg_population: 5818,
      lat: 30.74391255,
      long: -94.02495849
    },
    {
      "": 22,
      county_name: "Wharton",
      avg_distance: 332.741330833333,
      avg_population: 7829,
      lat: 29.2778362,
      long: -96.22197375
    },
    {
      "": 23,
      county_name: "Frio",
      avg_distance: 330.950894166667,
      avg_population: 3144,
      lat: 28.86726774,
      long: -99.10826004
    },
    {
      "": 24,
      county_name: "Karnes",
      avg_distance: 330.262411666667,
      avg_population: 2496,
      lat: 28.90493782,
      long: -97.85960621
    },
    {
      "": 25,
      county_name: "Lavaca",
      avg_distance: 329.018641833333,
      avg_population: 3235,
      lat: 29.38437003,
      long: -96.93020993
    },
    {
      "": 26,
      county_name: "Gonzales",
      avg_distance: 327.876449166667,
      avg_population: 3759,
      lat: 29.45641495,
      long: -97.49279927
    },
    {
      "": 27,
      county_name: "Dimmit",
      avg_distance: 327.362255,
      avg_population: 1914,
      lat: 28.42161168,
      long: -99.760574
    },
    {
      "": 28,
      county_name: "Zavala",
      avg_distance: 324.92369,
      avg_population: 2287,
      lat: 28.86530621,
      long: -99.76102001
    },
    {
      "": 29,
      county_name: "Concho",
      avg_distance: 324.918828333333,
      avg_population: 376,
      lat: 31.32645211,
      long: -99.86413426
    },
    {
      "": 30,
      county_name: "Kent",
      avg_distance: 324.761000833333,
      avg_population: 113,
      lat: 33.18284492,
      long: -100.7791031
    },
    {
      "": 31,
      county_name: "Glasscock",
      avg_distance: 322.63985,
      avg_population: 238,
      lat: 31.8694238,
      long: -101.520742
    },
    {
      "": 32,
      county_name: "Runnels",
      avg_distance: 322.490715,
      avg_population: 1763,
      lat: 31.83105393,
      long: -99.97624799
    },
    {
      "": 33,
      county_name: "Hardin",
      avg_distance: 322.351313833333,
      avg_population: 10834,
      lat: 30.33238431,
      long: -94.39021394
    },
    {
      "": 34,
      county_name: "Swisher",
      avg_distance: 322.135656666667,
      avg_population: 1213,
      lat: 34.53064989,
      long: -101.734951
    },
    {
      "": 35,
      county_name: "Stonewall",
      avg_distance: 321.735340833333,
      avg_population: 213,
      lat: 33.17842158,
      long: -100.255259
    },
    {
      "": 36,
      county_name: "Coleman",
      avg_distance: 320.4752525,
      avg_population: 1160,
      lat: 31.77329421,
      long: -99.45362579
    },
    {
      "": 37,
      county_name: "Sterling",
      avg_distance: 320.231095,
      avg_population: 246,
      lat: 31.82786516,
      long: -101.0500699
    },
    {
      "": 38,
      county_name: "Lynn",
      avg_distance: 319.967215833333,
      avg_population: 1050,
      lat: 33.17685487,
      long: -101.8160235
    },
    {
      "": 39,
      county_name: "Jefferson",
      avg_distance: 319.294483,
      avg_population: 46899,
      lat: 29.88425832,
      long: -94.1708778
    },
    {
      "": 40,
      county_name: "Hutchinson",
      avg_distance: 319.057020833333,
      avg_population: 3757,
      lat: 35.84000866,
      long: -101.3547257
    },
    {
      "": 41,
      county_name: "Dawson",
      avg_distance: 318.482666666667,
      avg_population: 2054,
      lat: 32.74258137,
      long: -101.9476136
    },
    {
      "": 42,
      county_name: "Maverick",
      avg_distance: 318.03176,
      avg_population: 11763,
      lat: 28.74260943,
      long: -100.3144638
    },
    {
      "": 43,
      county_name: "Borden",
      avg_distance: 317.893255,
      avg_population: 104,
      lat: 32.7436916,
      long: -101.4317533
    },
    {
      "": 44,
      county_name: "Irion",
      avg_distance: 316.82846,
      avg_population: 241,
      lat: 31.30393203,
      long: -100.9824126
    },
    {
      "": 45,
      county_name: "Briscoe",
      avg_distance: 316.789379166667,
      avg_population: 211,
      lat: 34.53041048,
      long: -101.2085769
    },
    {
      "": 46,
      county_name: "Coke",
      avg_distance: 316.19063,
      avg_population: 533,
      lat: 31.88849293,
      long: -100.5298747
    },
    {
      "": 47,
      county_name: "Lubbock",
      avg_distance: 315.502054166667,
      avg_population: 73747,
      lat: 33.6101944,
      long: -101.8205745
    },
    {
      "": 48,
      county_name: "Scurry",
      avg_distance: 315.499305833333,
      avg_population: 2858,
      lat: 32.74720063,
      long: -100.9165071
    },
    {
      "": 49,
      county_name: "Garza",
      avg_distance: 315.092775,
      avg_population: 793,
      lat: 33.17991074,
      long: -101.2984496
    },
    {
      "": 50,
      county_name: "Orange",
      avg_distance: 314.671169166667,
      avg_population: 15579,
      lat: 30.12807126,
      long: -93.89653794
    },
    {
      "": 51,
      county_name: "Crane",
      avg_distance: 313.54111,
      avg_population: 951,
      lat: 31.42846287,
      long: -102.5156425
    },
    {
      "": 52,
      county_name: "Terry",
      avg_distance: 313.185685,
      avg_population: 2085,
      lat: 33.17373729,
      long: -102.335157
    },
    {
      "": 53,
      county_name: "Martin",
      avg_distance: 313.0291,
      avg_population: 1126,
      lat: 32.30605847,
      long: -101.9512464
    },
    {
      "": 54,
      county_name: "Motley",
      avg_distance: 312.838135,
      avg_population: 169,
      lat: 34.07409017,
      long: -100.7798961
    },
    {
      "": 55,
      county_name: "Cottle",
      avg_distance: 312.11258,
      avg_population: 215,
      lat: 34.0776571,
      long: -100.2786983
    },
    {
      "": 56,
      county_name: "Colorado",
      avg_distance: 312.039361,
      avg_population: 3403,
      lat: 29.6208542,
      long: -96.52630821
    },
    {
      "": 57,
      county_name: "Dickens",
      avg_distance: 311.824675,
      avg_population: 262,
      lat: 33.61663428,
      long: -100.7788138
    },
    {
      "": 58,
      county_name: "Floyd",
      avg_distance: 311.1750225,
      avg_population: 996,
      lat: 34.07239775,
      long: -101.3033037
    },
    {
      "": 59,
      county_name: "Tyler",
      avg_distance: 311.108594166667,
      avg_population: 2997,
      lat: 30.7712607,
      long: -94.37651432
    },
    {
      "": 60,
      county_name: "Howard",
      avg_distance: 310.689325,
      avg_population: 6224,
      lat: 32.30610232,
      long: -101.4355097
    },
    {
      "": 61,
      county_name: "Andrews",
      avg_distance: 309.82501,
      avg_population: 3853,
      lat: 32.30506283,
      long: -102.6378839
    },
    {
      "": 62,
      county_name: "Fisher",
      avg_distance: 309.8107,
      avg_population: 572,
      lat: 32.74305155,
      long: -100.4019503
    },
    {
      "": 63,
      county_name: "Mitchell",
      avg_distance: 309.62523,
      avg_population: 1131,
      lat: 32.30636024,
      long: -100.9211128
    },
    {
      "": 64,
      county_name: "King",
      avg_distance: 308.70477,
      avg_population: 47,
      lat: 33.61641863,
      long: -100.2558584
    },
    {
      "": 65,
      county_name: "Moore",
      avg_distance: 308.364563333333,
      avg_population: 3887,
      lat: 35.83768863,
      long: -101.8929556
    },
    {
      "": 66,
      county_name: "Midland",
      avg_distance: 308.011825,
      avg_population: 37969,
      lat: 31.86921148,
      long: -102.0315032
    },
    {
      "": 67,
      county_name: "Nolan",
      avg_distance: 307.851355833333,
      avg_population: 2574,
      lat: 32.3034718,
      long: -100.4060989
    },
    {
      "": 68,
      county_name: "Chambers",
      avg_distance: 307.013814166667,
      avg_population: 9381,
      lat: 29.73912276,
      long: -94.60891308
    },
    {
      "": 69,
      county_name: "Crosby",
      avg_distance: 305.690185,
      avg_population: 995,
      lat: 33.61459873,
      long: -101.2998612
    },
    {
      "": 70,
      county_name: "Hale",
      avg_distance: 305.485239166667,
      avg_population: 6106,
      lat: 34.07051782,
      long: -101.8269082
    },
    {
      "": 71,
      county_name: "Atascosa",
      avg_distance: 304.396231666667,
      avg_population: 9918,
      lat: 28.89418432,
      long: -98.52741302
    },
    {
      "": 72,
      county_name: "Galveston",
      avg_distance: 304.229760333333,
      avg_population: 68033,
      lat: 29.39424415,
      long: -94.96474975
    },
    {
      "": 73,
      county_name: "Brazoria",
      avg_distance: 303.7165085,
      avg_population: 76691,
      lat: 29.19345387,
      long: -95.45578479
    },
    {
      "": 74,
      county_name: "Taylor",
      avg_distance: 303.381383333333,
      avg_population: 30752,
      lat: 32.30138229,
      long: -99.89003941
    },
    {
      "": 75,
      county_name: "Jones",
      avg_distance: 303.318001666667,
      avg_population: 2440,
      lat: 32.73970429,
      long: -99.87850599
    },
    {
      "": 76,
      county_name: "Medina",
      avg_distance: 303.061781833333,
      avg_population: 9066,
      lat: 29.35520493,
      long: -99.11008331
    },
    {
      "": 77,
      county_name: "Guadalupe",
      avg_distance: 302.979721166667,
      avg_population: 34205,
      lat: 29.58257236,
      long: -97.94850308
    },
    {
      "": 78,
      county_name: "Austin",
      avg_distance: 302.953757666667,
      avg_population: 5078,
      lat: 29.88711223,
      long: -96.27791829
    },
    {
      "": 79,
      county_name: "Hockley",
      avg_distance: 302.3069275,
      avg_population: 4660,
      lat: 33.60750375,
      long: -102.3430919
    },
    {
      "": 80,
      county_name: "Sabine",
      avg_distance: 301.1122275,
      avg_population: 1440,
      lat: 31.34321941,
      long: -93.85170439
    },
    {
      "": 81,
      county_name: "Real",
      avg_distance: 300.948395,
      avg_population: 432,
      lat: 29.83182711,
      long: -99.82215881
    },
    {
      "": 82,
      county_name: "Wilson",
      avg_distance: 300.540944,
      avg_population: 9344,
      lat: 29.17315896,
      long: -98.08621015
    },
    {
      "": 83,
      county_name: "Llano",
      avg_distance: 300.401435,
      avg_population: 2488,
      lat: 30.70566579,
      long: -98.68387398
    },
    {
      "": 84,
      county_name: "Comal",
      avg_distance: 300.144332833333,
      avg_population: 29024,
      lat: 29.80816362,
      long: -98.27814516
    },
    {
      "": 85,
      county_name: "Terrell",
      avg_distance: 300.02411,
      avg_population: 97,
      lat: 30.22502597,
      long: -102.0764533
    },
    {
      "": 86,
      county_name: "Callahan",
      avg_distance: 299.978131666667,
      avg_population: 2408,
      lat: 32.2977738,
      long: -99.37359692
    },
    {
      "": 87,
      county_name: "Cochran",
      avg_distance: 299.873011666667,
      avg_population: 547,
      lat: 33.60410808,
      long: -102.8285264
    },
    {
      "": 88,
      county_name: "Hall",
      avg_distance: 299.647198333333,
      avg_population: 455,
      lat: 34.53074134,
      long: -100.6809876
    },
    {
      "": 89,
      county_name: "Fayette",
      avg_distance: 299.540487,
      avg_population: 3917,
      lat: 29.87683207,
      long: -96.91968047
    },
    {
      "": 90,
      county_name: "Brown",
      avg_distance: 299.368351666667,
      avg_population: 6763,
      lat: 31.77432313,
      long: -98.99989649
    },
    {
      "": 91,
      county_name: "Menard",
      avg_distance: 299.359406666667,
      avg_population: 277,
      lat: 30.88981785,
      long: -99.82061472
    },
    {
      "": 92,
      county_name: "Liberty",
      avg_distance: 297.838653,
      avg_population: 18568,
      lat: 30.15153187,
      long: -94.8120925
    },
    {
      "": 93,
      county_name: "Haskell",
      avg_distance: 297.426004166667,
      avg_population: 885,
      lat: 33.17824805,
      long: -99.73029401
    },
    {
      "": 94,
      county_name: "Reagan",
      avg_distance: 296.52982,
      avg_population: 707,
      lat: 31.36617698,
      long: -101.5230108
    },
    {
      "": 95,
      county_name: "Sherman",
      avg_distance: 296.405343333333,
      avg_population: 508,
      lat: 36.27765824,
      long: -101.8933822
    },
    {
      "": 96,
      county_name: "Upton",
      avg_distance: 296.313295,
      avg_population: 676,
      lat: 31.36853957,
      long: -102.0430005
    },
    {
      "": 97,
      county_name: "Castro",
      avg_distance: 295.86661,
      avg_population: 1377,
      lat: 34.53000304,
      long: -102.2617608
    },
    {
      "": 98,
      county_name: "Mason",
      avg_distance: 294.65603,
      avg_population: 621,
      lat: 30.71742293,
      long: -99.2263026
    },
    {
      "": 99,
      county_name: "Yoakum",
      avg_distance: 294.648315,
      avg_population: 1621,
      lat: 33.17293501,
      long: -102.8278792
    },
    {
      "": 100,
      county_name: "Uvalde",
      avg_distance: 294.0782025,
      avg_population: 5184,
      lat: 29.35669829,
      long: -99.76203107
    },
    {
      "": 101,
      county_name: "Kinney",
      avg_distance: 293.7874,
      avg_population: 474,
      lat: 29.35000302,
      long: -100.4178441
    },
    {
      "": 102,
      county_name: "Washington",
      avg_distance: 293.196577833333,
      avg_population: 6268,
      lat: 30.2145299,
      long: -96.40356575
    },
    {
      "": 103,
      county_name: "Edwards",
      avg_distance: 292.99049,
      avg_population: 242,
      lat: 29.98248216,
      long: -100.3048937
    },
    {
      "": 104,
      county_name: "Ector",
      avg_distance: 292.54498,
      avg_population: 35418,
      lat: 31.86908156,
      long: -102.5430907
    },
    {
      "": 105,
      county_name: "Caldwell",
      avg_distance: 290.831908166667,
      avg_population: 8685,
      lat: 29.83677935,
      long: -97.61983479
    },
    {
      "": 106,
      county_name: "Hansford",
      avg_distance: 289.99765,
      avg_population: 991,
      lat: 36.27753179,
      long: -101.3545624
    },
    {
      "": 107,
      county_name: "Schleicher",
      avg_distance: 289.405805,
      avg_population: 520,
      lat: 30.89661056,
      long: -100.538097
    },
    {
      "": 108,
      county_name: "Waller",
      avg_distance: 289.2990775,
      avg_population: 13433,
      lat: 30.01093722,
      long: -95.98768942
    },
    {
      "": 109,
      county_name: "Donley",
      avg_distance: 288.498656666667,
      avg_population: 575,
      lat: 34.96540246,
      long: -100.8140501
    },
    {
      "": 110,
      county_name: "Burleson",
      avg_distance: 288.185546,
      avg_population: 3047,
      lat: 30.49246139,
      long: -96.62109399
    },
    {
      "": 111,
      county_name: "Hays",
      avg_distance: 287.906796166667,
      avg_population: 57418,
      lat: 30.05782657,
      long: -98.03104087
    },
    {
      "": 112,
      county_name: "Brazos",
      avg_distance: 286.090593666667,
      avg_population: 62477,
      lat: 30.6610425,
      long: -96.3022943
    },
    {
      "": 113,
      county_name: "Burnet",
      avg_distance: 286.088764,
      avg_population: 8338,
      lat: 30.78843382,
      long: -98.18252382
    },
    {
      "": 114,
      county_name: "Angelina",
      avg_distance: 286.029009166667,
      avg_population: 16544,
      lat: 31.25475875,
      long: -94.611742
    },
    {
      "": 115,
      county_name: "Carson",
      avg_distance: 285.986553333333,
      avg_population: 1031,
      lat: 35.40346802,
      long: -101.3542037
    },
    {
      "": 116,
      county_name: "Childress",
      avg_distance: 285.364625833333,
      avg_population: 1011,
      lat: 34.52929257,
      long: -100.2075664
    },
    {
      "": 117,
      county_name: "Blanco",
      avg_distance: 284.590190333333,
      avg_population: 1710,
      lat: 30.26636128,
      long: -98.39974086
    },
    {
      "": 118,
      county_name: "Polk",
      avg_distance: 284.465598666667,
      avg_population: 7572,
      lat: 30.79250963,
      long: -94.82994949
    },
    {
      "": 119,
      county_name: "Trinity",
      avg_distance: 283.715749333333,
      avg_population: 2223,
      lat: 31.0885069,
      long: -95.13551682
    },
    {
      "": 120,
      county_name: "Bandera",
      avg_distance: 283.30766,
      avg_population: 3079,
      lat: 29.74724753,
      long: -99.24637282
    },
    {
      "": 121,
      county_name: "Armstrong",
      avg_distance: 282.0502725,
      avg_population: 321,
      lat: 34.96522076,
      long: -101.3572412
    },
    {
      "": 122,
      county_name: "Bastrop",
      avg_distance: 282.044066666667,
      avg_population: 16250,
      lat: 30.10353518,
      long: -97.31187705
    },
    {
      "": 123,
      county_name: "Mills",
      avg_distance: 281.9624995,
      avg_population: 694,
      lat: 31.49524259,
      long: -98.59552736
    },
    {
      "": 124,
      county_name: "Gillespie",
      avg_distance: 281.945523,
      avg_population: 3817,
      lat: 30.31800246,
      long: -98.94627245
    },
    {
      "": 125,
      county_name: "Knox",
      avg_distance: 281.3010525,
      avg_population: 603,
      lat: 33.60614755,
      long: -99.74144313
    },
    {
      "": 126,
      county_name: "Grimes",
      avg_distance: 280.859146833333,
      avg_population: 4602,
      lat: 30.54360689,
      long: -95.98557334
    },
    {
      "": 127,
      county_name: "Kerr",
      avg_distance: 280.320113333333,
      avg_population: 8356,
      lat: 30.06153035,
      long: -99.35016969
    },
    {
      "": 128,
      county_name: "Shackelford",
      avg_distance: 279.39147,
      avg_population: 537,
      lat: 32.7360276,
      long: -99.35403034
    },
    {
      "": 129,
      county_name: "Kimble",
      avg_distance: 279.265955,
      avg_population: 633,
      lat: 30.48676251,
      long: -99.74892716
    },
    {
      "": 130,
      county_name: "Crockett",
      avg_distance: 279.173065,
      avg_population: 611,
      lat: 30.72291931,
      long: -101.4118364
    },
    {
      "": 131,
      county_name: "Sutton",
      avg_distance: 278.515965,
      avg_population: 621,
      lat: 30.49747152,
      long: -100.5382263
    },
    {
      "": 132,
      county_name: "Lampasas",
      avg_distance: 278.330228166667,
      avg_population: 3616,
      lat: 31.19627791,
      long: -98.24142711
    },
    {
      "": 133,
      county_name: "Collingsworth",
      avg_distance: 277.649515833333,
      avg_population: 501,
      lat: 34.96498493,
      long: -100.2700733
    },
    {
      "": 134,
      county_name: "Houston",
      avg_distance: 277.524629,
      avg_population: 3297,
      lat: 31.31764137,
      long: -95.42225367
    },
    {
      "": 135,
      county_name: "Lee",
      avg_distance: 277.5081985,
      avg_population: 2920,
      lat: 30.31065065,
      long: -96.96568735
    },
    {
      "": 136,
      county_name: "Lamb",
      avg_distance: 276.5498475,
      avg_population: 2288,
      lat: 34.06861242,
      long: -102.3517095
    },
    {
      "": 137,
      county_name: "Randall",
      avg_distance: 276.166875,
      avg_population: 29071,
      lat: 34.96594288,
      long: -101.8968527
    },
    {
      "": 138,
      county_name: "Gray",
      avg_distance: 275.531828333333,
      avg_population: 3654,
      lat: 35.40130666,
      long: -100.812475
    },
    {
      "": 139,
      county_name: "Kendall",
      avg_distance: 275.456798333333,
      avg_population: 8376,
      lat: 29.9446397,
      long: -98.71160511
    },
    {
      "": 140,
      county_name: "Gaines",
      avg_distance: 274.925065,
      avg_population: 4429,
      lat: 32.74074537,
      long: -102.6351246
    },
    {
      "": 141,
      county_name: "Cherokee",
      avg_distance: 274.692259166667,
      avg_population: 9193,
      lat: 31.83695632,
      long: -95.16515234
    },
    {
      "": 142,
      county_name: "Potter",
      avg_distance: 273.867858333333,
      avg_population: 22553,
      lat: 35.40128927,
      long: -101.8940484
    },
    {
      "": 143,
      county_name: "Nacogdoches",
      avg_distance: 273.212658833333,
      avg_population: 14980,
      lat: 31.61604108,
      long: -94.6158776
    },
    {
      "": 144,
      county_name: "Hartley",
      avg_distance: 272.8432575,
      avg_population: 755,
      lat: 35.83996755,
      long: -102.6028835
    },
    {
      "": 145,
      county_name: "Foard",
      avg_distance: 272.700353333333,
      avg_population: 183,
      lat: 33.97408519,
      long: -99.77871109
    },
    {
      "": 146,
      county_name: "Bexar",
      avg_distance: 272.46924415,
      avg_population: 439071,
      lat: 29.44884523,
      long: -98.51966309
    },
    {
      "": 147,
      county_name: "Comanche",
      avg_distance: 271.8745375,
      avg_population: 2111,
      lat: 31.9490639,
      long: -98.55841538
    },
    {
      "": 148,
      county_name: "Roberts",
      avg_distance: 271.173738333333,
      avg_population: 144,
      lat: 35.8385577,
      long: -100.8135689
    },
    {
      "": 149,
      county_name: "Harris",
      avg_distance: 270.026272605,
      avg_population: 1025724,
      lat: 29.85967144,
      long: -95.39782106
    },
    {
      "": 150,
      county_name: "Madison",
      avg_distance: 269.444779166667,
      avg_population: 2231,
      lat: 30.96564645,
      long: -95.92818441
    },
    {
      "": 151,
      county_name: "Anderson",
      avg_distance: 269.057450833333,
      avg_population: 7746,
      lat: 31.81321543,
      long: -95.65251774
    },
    {
      "": 152,
      county_name: "Walker",
      avg_distance: 268.947370666667,
      avg_population: 14375,
      lat: 30.73899492,
      long: -95.57224172
    },
    {
      "": 153,
      county_name: "Robertson",
      avg_distance: 268.177434666667,
      avg_population: 3029,
      lat: 31.02705415,
      long: -96.51272568
    },
    {
      "": 154,
      county_name: "Leon",
      avg_distance: 267.7754075,
      avg_population: 2681,
      lat: 31.29655719,
      long: -95.99554292
    },
    {
      "": 155,
      county_name: "Milam",
      avg_distance: 267.388508666667,
      avg_population: 4146,
      lat: 30.78625299,
      long: -96.97683495
    },
    {
      "": 156,
      county_name: "Montgomery",
      avg_distance: 266.945412333333,
      avg_population: 123168,
      lat: 30.30022409,
      long: -95.50301411
    },
    {
      "": 157,
      county_name: "Wheeler",
      avg_distance: 265.904161666667,
      avg_population: 847,
      lat: 35.40129002,
      long: -100.2697634
    },
    {
      "": 158,
      county_name: "Coryell",
      avg_distance: 265.547068666667,
      avg_population: 18290,
      lat: 31.39087578,
      long: -97.7991883
    },
    {
      "": 159,
      county_name: "Dallam",
      avg_distance: 264.556654166667,
      avg_population: 1293,
      lat: 36.27777107,
      long: -102.6021647
    },
    {
      "": 160,
      county_name: "Throckmorton",
      avg_distance: 263.1261525,
      avg_population: 202,
      lat: 33.17753907,
      long: -99.21236832
    },
    {
      "": 161,
      county_name: "Lipscomb",
      avg_distance: 262.180843333333,
      avg_population: 521,
      lat: 36.27778432,
      long: -100.27317
    },
    {
      "": 162,
      county_name: "Hardeman",
      avg_distance: 261.648793333333,
      avg_population: 685,
      lat: 34.28865227,
      long: -99.7453851
    },
    {
      "": 163,
      county_name: "Ochiltree",
      avg_distance: 260.77396,
      avg_population: 1930,
      lat: 36.27846334,
      long: -100.815653
    },
    {
      "": 164,
      county_name: "Bell",
      avg_distance: 260.575584666667,
      avg_population: 80800,
      lat: 31.03778267,
      long: -97.47790776
    },
    {
      "": 165,
      county_name: "Travis",
      avg_distance: 260.521723316667,
      avg_population: 307712,
      lat: 30.33423319,
      long: -97.78194654
    },
    {
      "": 166,
      county_name: "Shelby",
      avg_distance: 257.095221583333,
      avg_population: 4369,
      lat: 31.79242191,
      long: -94.14495261
    },
    {
      "": 167,
      county_name: "Smith",
      avg_distance: 256.376462083333,
      avg_population: 47336,
      lat: 32.37514553,
      long: -95.26909511
    },
    {
      "": 168,
      county_name: "Oldham",
      avg_distance: 255.7189975,
      avg_population: 402,
      lat: 35.40497586,
      long: -102.6029949
    },
    {
      "": 169,
      county_name: "Williamson",
      avg_distance: 254.719982166667,
      avg_population: 131880,
      lat: 30.64834941,
      long: -97.60105467
    },
    {
      "": 170,
      county_name: "Ward",
      avg_distance: 253.312225,
      avg_population: 2309,
      lat: 31.509424,
      long: -103.1024636
    },
    {
      "": 171,
      county_name: "Baylor",
      avg_distance: 251.305859166667,
      avg_population: 556,
      lat: 33.61648147,
      long: -99.21351964
    },
    {
      "": 172,
      county_name: "Hamilton",
      avg_distance: 251.229378,
      avg_population: 1319,
      lat: 31.70479181,
      long: -98.11066654
    },
    {
      "": 173,
      county_name: "Pecos",
      avg_distance: 250.655245,
      avg_population: 2645,
      lat: 30.78100044,
      long: -102.7235743
    },
    {
      "": 174,
      county_name: "Hemphill",
      avg_distance: 249.7555925,
      avg_population: 738,
      lat: 35.83750155,
      long: -100.2704628
    },
    {
      "": 175,
      county_name: "Eastland",
      avg_distance: 248.554843666667,
      avg_population: 3090,
      lat: 32.32739258,
      long: -98.8325713
    },
    {
      "": 176,
      county_name: "Bailey",
      avg_distance: 245.7938375,
      avg_population: 1319,
      lat: 34.0684915,
      long: -102.8299069
    },
    {
      "": 177,
      county_name: "Rusk",
      avg_distance: 245.4514075,
      avg_population: 8973,
      lat: 32.10803224,
      long: -94.76169577
    },
    {
      "": 178,
      county_name: "Wilbarger",
      avg_distance: 244.276338333333,
      avg_population: 2387,
      lat: 34.08044953,
      long: -99.24089568
    },
    {
      "": 179,
      county_name: "Presidio",
      avg_distance: 244.23833,
      avg_population: 1088,
      lat: 29.99977786,
      long: -104.2405552
    },
    {
      "": 180,
      county_name: "Parmer",
      avg_distance: 241.466700833333,
      avg_population: 1696,
      lat: 34.53014507,
      long: -102.784594
    },
    {
      "": 181,
      county_name: "Freestone",
      avg_distance: 240.687513333333,
      avg_population: 3125,
      lat: 31.70486443,
      long: -96.14918535
    },
    {
      "": 182,
      county_name: "Brewster",
      avg_distance: 239.62901,
      avg_population: 1562,
      lat: 29.81205836,
      long: -103.2518906
    },
    {
      "": 183,
      county_name: "Falls",
      avg_distance: 238.835875,
      avg_population: 3557,
      lat: 31.25317017,
      long: -96.93579511
    },
    {
      "": 184,
      county_name: "Winkler",
      avg_distance: 238.828985,
      avg_population: 1481,
      lat: 31.85008609,
      long: -103.0484794
    },
    {
      "": 185,
      county_name: "Erath",
      avg_distance: 238.630149666667,
      avg_population: 10324,
      lat: 32.23640361,
      long: -98.21722756
    },
    {
      "": 186,
      county_name: "Wood",
      avg_distance: 238.51219,
      avg_population: 6820,
      lat: 32.78634374,
      long: -95.38206498
    },
    {
      "": 187,
      county_name: "Camp",
      avg_distance: 236.261431666667,
      avg_population: 2360,
      lat: 32.97321771,
      long: -94.97860185
    },
    {
      "": 188,
      county_name: "Stephens",
      avg_distance: 235.388501,
      avg_population: 1475,
      lat: 32.73584155,
      long: -98.83612016
    },
    {
      "": 189,
      county_name: "Limestone",
      avg_distance: 235.210012666667,
      avg_population: 3782,
      lat: 31.54541898,
      long: -96.58056718
    },
    {
      "": 190,
      county_name: "Upshur",
      avg_distance: 232.31220075,
      avg_population: 7419,
      lat: 32.7362827,
      long: -94.94132011
    },
    {
      "": 191,
      county_name: "Panola",
      avg_distance: 231.273471166667,
      avg_population: 4100,
      lat: 32.16222886,
      long: -94.30552858
    },
    {
      "": 192,
      county_name: "Henderson",
      avg_distance: 229.5987755,
      avg_population: 13915,
      lat: 32.21188078,
      long: -95.85356847
    },
    {
      "": 193,
      county_name: "Titus",
      avg_distance: 227.627165,
      avg_population: 6381,
      lat: 33.2160906,
      long: -94.96509786
    },
    {
      "": 194,
      county_name: "Bosque",
      avg_distance: 226.945002333333,
      avg_population: 2881,
      lat: 31.90050476,
      long: -97.63437613
    },
    {
      "": 195,
      county_name: "Young",
      avg_distance: 225.154369166667,
      avg_population: 3048,
      lat: 33.17670764,
      long: -98.68781396
    },
    {
      "": 196,
      county_name: "Gregg",
      avg_distance: 225.030615166667,
      avg_population: 24570,
      lat: 32.48036452,
      long: -94.81723694
    },
    {
      "": 197,
      county_name: "Franklin",
      avg_distance: 224.476244,
      avg_population: 1779,
      lat: 33.17550691,
      long: -95.21841437
    },
    {
      "": 198,
      county_name: "Morris",
      avg_distance: 224.13733975,
      avg_population: 2083,
      lat: 33.11368507,
      long: -94.73205137
    },
    {
      "": 199,
      county_name: "Cass",
      avg_distance: 223.933530833333,
      avg_population: 4960,
      lat: 33.07750446,
      long: -94.34348771
    },
    {
      "": 200,
      county_name: "Bowie",
      avg_distance: 223.5493175,
      avg_population: 17036,
      lat: 33.44572786,
      long: -94.42324298
    },
    {
      "": 201,
      county_name: "Marion",
      avg_distance: 222.612499,
      avg_population: 1449,
      lat: 32.79797929,
      long: -94.35725239
    },
    {
      "": 202,
      county_name: "Harrison",
      avg_distance: 222.29854275,
      avg_population: 12301,
      lat: 32.54814898,
      long: -94.37155736
    },
    {
      "": 203,
      county_name: "Navarro",
      avg_distance: 218.355849,
      avg_population: 9208,
      lat: 32.04695429,
      long: -96.47248134
    },
    {
      "": 204,
      county_name: "Archer",
      avg_distance: 216.538225,
      avg_population: 1411,
      lat: 33.61539176,
      long: -98.68783437
    },
    {
      "": 205,
      county_name: "Hopkins",
      avg_distance: 215.2603275,
      avg_population: 6643,
      lat: 33.14933822,
      long: -95.56414173
    },
    {
      "": 206,
      county_name: "Hill",
      avg_distance: 215.152009166667,
      avg_population: 6325,
      lat: 31.99079033,
      long: -97.1324142
    },
    {
      "": 207,
      county_name: "Reeves",
      avg_distance: 214.94317,
      avg_population: 2413,
      lat: 31.32307061,
      long: -103.693143
    },
    {
      "": 208,
      county_name: "Somervell",
      avg_distance: 214.772603333333,
      avg_population: 1593,
      lat: 32.22229511,
      long: -97.77456553
    },
    {
      "": 209,
      county_name: "Rains",
      avg_distance: 214.350537166667,
      avg_population: 1898,
      lat: 32.87004212,
      long: -95.79347545
    },
    {
      "": 210,
      county_name: "Wichita",
      avg_distance: 213.421735,
      avg_population: 25699,
      lat: 33.98421585,
      long: -98.70153389
    },
    {
      "": 211,
      county_name: "Delta",
      avg_distance: 211.269926833333,
      avg_population: 868,
      lat: 33.38623601,
      long: -95.67221685
    },
    {
      "": 212,
      county_name: "Clay",
      avg_distance: 209.900075,
      avg_population: 1670,
      lat: 33.78379717,
      long: -98.208958
    },
    {
      "": 213,
      county_name: "Loving",
      avg_distance: 209.50493,
      avg_population: 32,
      lat: 31.84912973,
      long: -103.5799063
    },
    {
      "": 214,
      county_name: "Lamar",
      avg_distance: 208.876102166667,
      avg_population: 9000,
      lat: 33.66746186,
      long: -95.57110784
    },
    {
      "": 215,
      county_name: "Jack",
      avg_distance: 207.537979,
      avg_population: 1360,
      lat: 33.23345819,
      long: -98.1725509
    },
    {
      "": 216,
      county_name: "Montague",
      avg_distance: 202.9424655,
      avg_population: 3231,
      lat: 33.67496328,
      long: -97.72466993
    },
    {
      "": 217,
      county_name: "Hood",
      avg_distance: 199.602859333333,
      avg_population: 9941,
      lat: 32.43107878,
      long: -97.83280338
    },
    {
      "": 218,
      county_name: "Hunt",
      avg_distance: 196.676926,
      avg_population: 19196,
      lat: 33.123531,
      long: -96.08550014
    },
    {
      "": 219,
      county_name: "Kaufman",
      avg_distance: 194.917925166667,
      avg_population: 29881,
      lat: 32.59927808,
      long: -96.28779341
    },
    {
      "": 220,
      county_name: "Parker",
      avg_distance: 191.58106,
      avg_population: 27199,
      lat: 32.77852261,
      long: -97.80472194
    },
    {
      "": 221,
      county_name: "Wise",
      avg_distance: 190.670178,
      avg_population: 12969,
      lat: 33.21585061,
      long: -97.65444124
    },
    {
      "": 222,
      county_name: "Ellis",
      avg_distance: 189.5532125,
      avg_population: 38448,
      lat: 32.34839264,
      long: -96.79467417
    },
    {
      "": 223,
      county_name: "Johnson",
      avg_distance: 189.4116445,
      avg_population: 34692,
      lat: 32.37899918,
      long: -97.36660504
    },
    {
      "": 224,
      county_name: "Fannin",
      avg_distance: 188.4634875,
      avg_population: 5759,
      lat: 33.59396919,
      long: -96.10656755
    },
    {
      "": 225,
      county_name: "Rockwall",
      avg_distance: 187.1623835,
      avg_population: 21722,
      lat: 32.89786769,
      long: -96.40780584
    },
    {
      "": 226,
      county_name: "Grayson",
      avg_distance: 177.797139833333,
      avg_population: 25420,
      lat: 33.62684371,
      long: -96.67764864
    },
    {
      "": 227,
      county_name: "Tarrant",
      avg_distance: 174.5173795,
      avg_population: 458098,
      lat: 32.77185236,
      long: -97.29116473
    },
    {
      "": 228,
      county_name: "Collin",
      avg_distance: 173.587140016667,
      avg_population: 224771,
      lat: 33.18789055,
      long: -96.57248871
    },
    {
      "": 229,
      county_name: "Cooke",
      avg_distance: 172.2485945,
      avg_population: 7259,
      lat: 33.638465,
      long: -97.21247642
    },
    {
      "": 230,
      county_name: "Dallas",
      avg_distance: 171.476806616667,
      avg_population: 577952,
      lat: 32.76653746,
      long: -96.77781862
    },
    {
      "": 231,
      county_name: "Denton",
      avg_distance: 170.7941745,
      avg_population: 203188,
      lat: 33.205574,
      long: -97.11681154
    },
    {
      "": 232,
      county_name: "Culberson",
      avg_distance: 128.83604,
      avg_population: 347,
      lat: 31.44709817,
      long: -104.5177421
    },
    {
      "": 233,
      county_name: "Hudspeth",
      avg_distance: 73.1953505,
      avg_population: 992,
      lat: 31.45613738,
      long: -105.3869428
    }
  ]];
// Load external data and boot
d3.json("Texas_County_Boundaries.geojson").then( function(data){

const size = d3.scaleLinear()
    .domain([70,425])  // What's in the data
    .range([ 4, 50])  // Size in pixel
 // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .join("path")
          .attr("fill", "grey")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "none")

    // Add circles:
    svg
      .selectAll("myCircles")
      .data(markers)
      .join("circle")
        .attr("cx", d => projection([d.long, d.lat])[0] )
        .attr("cy", d => projection([d.long, d.lat])[1] )
        // .attr("cx", function (d) {
        //     console.log(d.long, d.lat); // -77.39215851 37.28969193
        //     coords = projection([d.long, d.lat]) 
        //     console.log(coords); // [459.16943166542296, NaN]
        //     return coords[0];
        //   })
        //   .attr("cy", function (d) {
        //     coords = projection([d.long, d.lat])
        //     return coords[1];
        //   })
        .attr("r", d => size(d.size))
        .style("fill", "69b3a2")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 3)
        .attr("fill-opacity", .4)
})