const products = [
    
{
    id: 1,
    code: "001",
    name: "Expositor de Parafusos",
    category: "Parafusos",
    price: 600.00,
    package: 1,
    minQuantity: 1,
    image: "imagens/expositor.webp"
},
{
    id: 2,
    code: "002",
    name: "Expositor + 1200 encartelados",
    category: "Parafusos",
    price: 3240.00,
    package: 1,
    minQuantity: 1,
    image: "imagens/expositorcompleto.webp"
},
{
    id: 3,
    code: "1",
    name: "Cart. Parafuso Auto Atarraxante. 3,9 x 19 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 4,
    code: "2",
    name: "Cart. Parafuso Auto Atarraxante 3,9 x 25 - 8 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 5,
    code: "3",
    name: "Cart. Parafuso Auto Atarraxante  4,2 x 16 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 6,
    code: "4",
    name: "Cart. Parafuso Auto Atarraxante. 4,2 x 22 -  8 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 7,
    code: "5",
    name: "Cart. Parafuso Auto Atarraxante 4,2 x 25 -  8 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 8,
    code: "6",
    name: "Cart. Parafuso Auto  Atarraxante  4,2 x 32 - 7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 9,
    code: "7",
    name: "Cart. Parafuso Auto Atarraxante  4,2 x 38 -  6 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 10,
    code: "8",
    name: "Cart. Parafuso Auto Atarraxante  4,8 x 19 - 10 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 11,
    code: "9",
    name: "Cart. Parafuso Auto Atarraxante  4,8 x 38 -  6 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 12,
    code: "10",
    name: "Cart. Parafuso Auto Atarraxante  4,8 x 45 -  5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 13,
    code: "11",
    name: "Cart. Parafuso Auto Atarraxante  4,8 x 50 -  5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado1.webp"
},
{
    id: 14,
    code: "12",
    name: "Cart. Parafuso trombeta Drywall 3,5 x 25 - 9 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado2.webp"
},
{
    id: 15,
    code: "13",
    name: "Cart. Parafuso trombeta Drywall 3,5 x 55 - 7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado2.webp"
},
{
    id: 16,
    code: "14",
    name: "Cart. Parafuso madeira chipboard 3,5 x 30 -  9 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado3.webp"
},
{
    id: 17,
    code: "15",
    name: "Cart. Parafuso madeira chipboard 4,0 x 35 - 7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado3.webp"
},
{
    id: 18,
    code: "16",
    name: "Cart. Parafuso madeira chipboard 4,0 x 40 -  7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado3.webp"
},
{
    id: 19,
    code: "17",
    name: "Cart. Parafuso madeira chipboard 4,0 x 45 - 7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado3.webp"
},
{
    id: 20,
    code: "18",
    name: "Cart. Parafuso madeira chipboard 4,0 x 50 - 7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado3.webp"
},
{
    id: 21,
    code: "19",
    name: "Cart. Parafuso madeira chipboard 5,0 x 40 - 6 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado3.webp"
},
{
    id: 22,
    code: "20",
    name: "Cart. Parafuso madeira chipboard 5,0 x 50 - 5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado3.webp"
},
{
    id: 23,
    code: "21",
    name: "Cart. Parafuso madeira chipboard 5,0 x 60 - 4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado3.webp"
},
{
    id: 24,
    code: "22",
    name: "Cart. Parafuso madeira chipboard 5,0 x 70 - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado3.webp"
},
{
    id: 25,
    code: "23",
    name: "Cart. Parafuso máquina 1/4 x 1 c/ Arruela e porca - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado22.webp"
},
{
    id: 26,
    code: "24",
    name: "Cart. Parafuso máquina 1/4 x 1.1/2 c/ Arruela e porca -  3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado22.webp"
},
{
    id: 27,
    code: "25",
    name: "Cart. Parafuso máquina 1/4 x 2 c/ Arruela e porca - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado22.webp"
},
{
    id: 28,
    code: "26",
    name: "Cart. Parafuso máquina 1/4 x 3 c/ Arruela e porca -  2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado22.webp"
},
{
    id: 29,
    code: "27",
    name: "Cart. Parafuso máquina 3/16 x 1 c/ Arruela e porca - 5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado22.webp"
},
{
    id: 30,
    code: "28",
    name: "Cart. Parafuso máquina 3/16 x 1.1/2 c/ Arruela e porca -  3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado22.webp"
},
{
    id: 31,
    code: "29",
    name: "Cart. Parafuso máquina  3/16 x 2 c/ Arruela e porca -  3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado22.webp"
},
{
    id: 32,
    code: "30",
    name: "Cart. Parafuso máquina 3/16 x 2.1/2 c/ Arruela e porca - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado22.webp"
},
{
    id: 33,
    code: "31",
    name: "Cart. Parafuso máquina 3/16 x 3 c/ Arruela e porca - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado22.webp"
},
{
    id: 34,
    code: "32",
    name: "Cart. Parafuso máquina 5/32 x 1/2 -  9 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado4.webp"
},
{
    id: 35,
    code: "33",
    name: "Cart. Parafuso madeira 3,2 x 40 - 8 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 36,
    code: "34",
    name: "Cart. Parafuso madeira 3,5 x 20 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 37,
    code: "35",
    name: "Cart. Parafuso madeira 3,5 x 25 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 38,
    code: "36",
    name: "Cart. Parafuso madeira 3,8 x 22 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 39,
    code: "37",
    name: "Cart. Parafuso madeira 3,8 x 50 -  7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 40,
    code: "38",
    name: "Cart. Parafuso madeira 4,2 x 30 - 8 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 41,
    code: "39",
    name: "Cart. Parafuso madeira 4,2 x 40 c /Bucha nr 7- 6 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado21.webp"
},
{
    id: 42,
    code: "40",
    name: "Cart. Parafuso madeira 4,2 x 55 -  5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 43,
    code: "41",
    name: "Cart. Parafuso madeira 4,2 x 65 - 5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 44,
    code: "42",
    name: "Cart. Parafuso madeira 4,5 x 45 - 5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 45,
    code: "43",
    name: "Cart. Parafuso madeira 4,5 x 55 - 5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 46,
    code: "44",
    name: "Cart. Parafuso madeira 4,5 x 65 -  4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 47,
    code: "45",
    name: "Cart. Parafuso madeira 4,8 x 30 -  7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 48,
    code: "46",
    name: "Cart. Parafuso madeira  4,8 x 40 -  7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 49,
    code: "47",
    name: "Cart. Parafuso máquina cx luz 9/64 x 2 1/2 - 4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado6.webp"
},
{
    id: 50,
    code: "48",
    name: "Cart. Parafuso madeira 3,5 x 40 - 6 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 51,
    code: "49",
    name: "Cart. Parafuso madeira 3,8 x 40 c/Bucha nr 6 - 7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado21.webp"
},
{
    id: 52,
    code: "50",
    name: "Cart. Parafuso madeira 4,8 x 75 - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 53,
    code: "51",
    name: "Cart. Parafuso madeira 5,5 x 65 - 4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 54,
    code: "52",
    name: "Cart. Parafuso madeira 5,5 x 90 -  2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 55,
    code: "53",
    name: "Cart. Parafuso madeira 6,1 x 65 - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 56,
    code: "54",
    name: "Cart. Parafuso madeira 6,1 x 75 - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 57,
    code: "55",
    name: "Cart. Parafuso madeira 6,1 x 90 - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 58,
    code: "56",
    name: "Cart. Parafuso sextavado rosca soberba 1/4 x 50 c/Bucha 10 -  3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado23.webp"
},
{
    id: 59,
    code: "57",
    name: "Cart. Parafuso sextavado rosca soberba 1/4 x 60 c/Bucha 10 -  2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado23.webp"
},
{
    id: 60,
    code: "58",
    name: "Cart. Parafuso sextavado rosca soberba 1/4 x 75 c/Bucha 10 -  2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado23.webp"
},
{
    id: 61,
    code: "59",
    name: "Cart. Parafuso sextavado rosca soberba 3/16 x 50 - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado7.webp"
},
{
    id: 62,
    code: "60",
    name: "Cart. Parafuso sextavado rosca soberba 5/16 x 60 c/Bucha 12 - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado23.webp"
},
{
    id: 63,
    code: "61",
    name: "Cart. Parafuso sextavado rosca soberba 5/16 x 65  -  2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado7.webp"
},
{
    id: 64,
    code: "62",
    name: "Cart. Parafuso sextavado rosca inteira 1/4 x 1 c/Arruela e porca  - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado8.webp"
},
{
    id: 65,
    code: "63",
    name: "Cart. Parafuso sextavado rosca inteira 5/16 x 1 c/Arruela e porca  -  2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado8.webp"
},
{
    id: 66,
    code: "64",
    name: "Cart. Parafuso sextavado rosca inteira 5/16 x 1.1/2 c/Arruela e porca  - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado8.webp"
},
{
    id: 67,
    code: "65",
    name: "Cart. Parafuso sextavado rosca inteira 1/4 x 1 1/2 c/Arruela e porca.  - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado8.webp"
},
{
    id: 68,
    code: "66",
    name: "Cart. Parafuso sextavado rosca inteira 1/4 x 2 c/Arruela e porca. -  2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado8.webp"
},
{
    id: 69,
    code: "67",
    name: "Cart. Parafuso sextavado rosca inteira 1/4 x 2 1/2 c/Arruela e porca.  - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado8.webp"
},
{
    id: 70,
    code: "68",
    name: "Cart. Parafuso auto brocante 5,5 x 1.1/2 c/Arruela de vedação - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado9.webp"
},
{
    id: 71,
    code: "69",
    name: "Cart. Parafuso auto brocante 5,5 x 7/8 c/Arruela de vedação -  4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado9.webp"
},
{
    id: 72,
    code: "70",
    name: "Cart. Parafuso auto brocante 5,5 x 3 c/Arruela de vedação - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado9.webp"
},
{
    id: 73,
    code: "71",
    name: "Cart. Rebite 3,2 x 12 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 74,
    code: "72",
    name: "Cart. Rebite 4,0 x 12 - 10 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 75,
    code: "73",
    name: "Cart. Rebite 4,0 x 14 - 10 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 76,
    code: "74",
    name: "Cart. Rebite 4,0 x 22 - 8 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 77,
    code: "75",
    name: "Cart. Rebite 4,8 x 25 - 6 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 78,
    code: "76",
    name: "Cart. Rebite 4,8 x 30 -  5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 79,
    code: "77",
    name: "Cart. Rebite 3,2 x 14 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 80,
    code: "78",
    name: "Cart. Rebite 3,2 x 16 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 81,
    code: "79",
    name: "Cart. Rebite 4,0 x 16 -  9 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 82,
    code: "80",
    name: "Cart. Rebite 4,0 x 19 - 8 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 83,
    code: "81",
    name: "Cart. Rebite 4,8 x 19 - 7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado10.webp"
},
{
    id: 84,
    code: "82",
    name: "Cart. Prego c/ Cabeça 8 X 8 -  40gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado11.webp"
},
{
    id: 85,
    code: "83",
    name: "Cart. Prego c/ Cabeça 13 X 15 - 40gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado11.webp"
},
{
    id: 86,
    code: "84",
    name: "Cart. Prego c/ Cabeça 16 X 24 - 50gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado11.webp"
},
{
    id: 87,
    code: "85",
    name: "Cart. Prego s/ Cabeça 15 X 15 -  50gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado12.webp"
},
{
    id: 88,
    code: "86",
    name: "Cart. Prego c/ Cabeça 17 X 27 - 60gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado11.webp"
},
{
    id: 89,
    code: "87",
    name: "Cart. Prego s/ Cabeça  8 X 8 -  40gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado12.webp"
},
{
    id: 90,
    code: "88",
    name: "Cart. Prego c/ Cabeça 10 X 10 -  40gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado11.webp"
},
{
    id: 91,
    code: "89",
    name: "Cart. Prego s/ Cabeça 12 X 12 -  40gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado12.webp"
},
{
    id: 92,
    code: "90",
    name: "Cart. Prego s/ Cabeça 17 X 21 -  60gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado12.webp"
},
{
    id: 93,
    code: "91",
    name: "Cart. Prego de Aço 15 X 15 -  13 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado13.webp"
},
{
    id: 94,
    code: "92",
    name: "Cart. Prego de Aço 17 X 21 -  5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado13.webp"
},
{
    id: 95,
    code: "93",
    name: "Cart. Prego de Aço 17 X 27 -  5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado13.webp"
},
{
    id: 96,
    code: "94",
    name: "Cart. Bucha s/anel nr 6 -  15 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado14.webp"
},
{
    id: 97,
    code: "95",
    name: "Cart. Bucha s/anel nr 7 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado14.webp"
},
{
    id: 98,
    code: "96",
    name: "Cart. Bucha s/anel nr 8 -  8 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado14.webp"
},
{
    id: 99,
    code: "97",
    name: "Cart. Bucha s/anel nr 10 - 5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado14.webp"
},
{
    id: 100,
    code: "98",
    name: "Cart. Bucha s/anel nr 12 -  5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado14.webp"
},
{
    id: 101,
    code: "99",
    name: "Cart. Fixa Fio 9mm -  10 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado16.webp"
},
{
    id: 102,
    code: "100",
    name: "Cart. Escápula c/ Bucha nr 6 -  4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado17.webp"
},
{
    id: 103,
    code: "101",
    name: "Cart. Escápula c/ Bucha nr 8 -  3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado17.webp"
},
{
    id: 104,
    code: "102",
    name: "Cart. Pitão c/Bucha nr 6  - 4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado18.webp"
},
{
    id: 105,
    code: "103",
    name: "Cart. Pitão c/Bucha nr 8 -  3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado18.webp"
},
{
    id: 106,
    code: "104",
    name: "Cart. Pitão c/Bucha nr 10 -  2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado18.webp"
},
{
    id: 107,
    code: "105",
    name: "Cart. Gancho  c/Bucha nr 6  -4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado19.webp"
},
{
    id: 108,
    code: "106",
    name: "Cart. Gancho c/Bucha nr 8 -   3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado19.webp"
},
{
    id: 109,
    code: "107",
    name: "Cart. Gancho c/Bucha nr 10 -  2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado19.webp"
},
{
    id: 110,
    code: "108",
    name: "Cart. Parafuso madeira 3,5 x 45 -  7 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 111,
    code: "109",
    name: "Cart. Parafuso rosca soberba 4,8 x 45 -  5 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 112,
    code: "110",
    name: "Cart. Parafuso auto brocante 12 x 2.1/2 c/Arruela de vedação - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado9.webp"
},
{
    id: 113,
    code: "111",
    name: "Cart. Parafuso sextavado  rosca inteira 5/16 x 2 c/Arruela e porca  - 2 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado8.webp"
},
{
    id: 114,
    code: "112",
    name: "Cart. Parafuso madeira 5,5 x 50 -  4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado5.webp"
},
{
    id: 115,
    code: "113",
    name: "Cart. Prego c/ Cabeça 17 X 21 -  60gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado11.webp"
},
{
    id: 116,
    code: "114",
    name: "Cart. Fixa Fio coaxial 8 mm - 10 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado15.webp"
},
{
    id: 117,
    code: "115",
    name: "Cart. Fixa Fio coaxial 10mm - 10 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado15.webp"
},
{
    id: 118,
    code: "116",
    name: "Cart. Porca e Arruela 1/4 - 12 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado20.webp"
},
{
    id: 119,
    code: "117",
    name: "Cart. Porca e Arruela 5/16 - 10 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado20.webp"
},
{
    id: 120,
    code: "118",
    name: "Cart. Prego c/Cabeça 11 x 11 - 40gr",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado11.webp"
},
{
    id: 121,
    code: "119",
    name: "Cart. Parafuso madeira 4,8 x 50 c/Bucha nr 8 - 4 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado21.webp"
},
{
    id: 122,
    code: "120",
    name: "Cart. Parafuso madeira 5,5 x 65 c/Bucha nr 10 - 3 unidades",
    category: "Parafusos",
    price: 2.20,
    package: 1,
    minQuantity: 5,
    image: "imagens/encartelado21.webp"
},
];

let cart = [];

function formatMoney(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function displayProducts(list) {
    const grid = document.getElementById("productsGrid");

    grid.innerHTML = "";

    list.forEach(product => {

        grid.innerHTML += `
    <div class="product">

        ${product.image ? `
            <img class="product-image"
                 src="${product.image}"
                 alt="${product.name}">
        ` : ""}

        <p class="product-code">
            CÓD - ${product.code ?? product.id}
        </p>

        <h3>${product.name}</h3>

        <p class="product-package">
            Embalagem: ${product.package ?? 1}
        </p>


        <p class="product-price">
            <strong>${formatMoney(product.price)}</strong>
        </p>

        <div class="product-buy-row">

            <input
                type="number"
                id="quantity-${product.id}"
                value="${product.minQuantity ?? 1}"
                min="${product.minQuantity ?? 1}"
                step="${product.package ?? 1}"
            >

            <button onclick="addQuantityToCart(${product.id})">
                🛒 ADICIONAR
            </button>

        </div>

    </div>
`;

    });
}

function filterCategory(category) {
    const filtered = products.filter(product =>
        product.category === category
    );

    displayProducts(filtered);
}

function addToCart(id) {
    const product = products.find(product => product.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}
function addQuantityToCart(id) {
    const product = products.find(product => product.id === id);

    const input = document.getElementById(`quantity-${id}`);

    let quantity = parseInt(input.value);

    const minQuantity = product.minQuantity ?? 1;
    const packageQuantity = product.package ?? 1;

    if (isNaN(quantity) || quantity < minQuantity) {
        alert(`A quantidade mínima para este produto é ${minQuantity}.`);
        input.value = minQuantity;
        return;
    }

    if (quantity % packageQuantity !== 0) {
        alert(`Este produto deve ser comprado em múltiplos de ${packageQuantity}.`);
        return;
    }

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    updateCart();
    openCart();
}
function changeQuantity(id, amount) {
    const item = cart.find(item => item.id === id);

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    updateCart();
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);

    updateCart();
}
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    const headerCartCount = document.getElementById("headerCartCount");
    const headerCartTotal = document.getElementById("headerCartTotal");

    cartItems.innerHTML = "";

    let quantity = 0;
    let total = 0;

    cart.forEach(item => {
        quantity += item.quantity;
        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div class="cart-product-info">

                    ${item.image ? `
                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            class="cart-product-image"
                        >
                    ` : ""}

                    <div>
                        <strong>${item.name}</strong>

                        <p>
                            ${formatMoney(item.price * item.quantity)}
                        </p>
                    </div>

                </div>

                <div>
                    <button onclick="changeQuantity(${item.id}, -1)">
                        ➖
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${item.id}, 1)">
                        ➕
                    </button>
                </div>

                <button onclick="removeItem(${item.id})">
                    🗑️ Remover
                </button>

            </div>
        `;
    });

    cartTotal.textContent = formatMoney(total);

    headerCartCount.textContent = `${quantity} itens`;
    headerCartTotal.textContent = formatMoney(total);
}

function openCart() {
    document.getElementById("cart").classList.add("active");
}

function closeCart() {
    document.getElementById("cart").classList.remove("active");
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    let message = "Olá! Gostaria de fazer um pedido na Safa Onça:\n\n";

    cart.forEach(item => {
        message += `${item.name}\n`;
        message += `Quantidade: ${item.quantity}\n`;
        message += `Valor: ${formatMoney(item.price * item.quantity)}\n\n`;
    });

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    message += `Total: ${formatMoney(total)}`;

    const phone = "5521964060467";

    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}
function searchProducts() {
    const searchText = document
        .getElementById("searchInput")
        .value
        .trim();

    const search = searchText.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    );

    const catalogTitle = document.getElementById("catalogTitle");
    const heroSection = document.getElementById("heroSection");

    if (searchText === "") {
    catalogTitle.textContent = "Produtos";
    heroSection.style.display = "";
} else {
    catalogTitle.textContent =
        `Resultado para a busca: ${searchText}`;

    heroSection.style.display = "none";
}

    displayProducts(filtered);
}
function applyProductFilters() {
    const itemsPerPage = parseInt(
        document.getElementById("itemsPerPage").value
    );

    const sortType =
        document.getElementById("sortProducts").value;

    let filteredProducts = [...products];

    if (sortType === "name-asc") {
        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sortType === "name-desc") {
        filteredProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }
    if (sortType === "code-asc") {
    filteredProducts.sort((a, b) =>
        Number(a.code ?? a.id) - Number(b.code ?? b.id)
    );
    }

    if (sortType === "code-desc") {
    filteredProducts.sort((a, b) =>
        Number(b.code ?? b.id) - Number(a.code ?? a.id)
    );
    }
    if (sortType === "price-asc") {
        filteredProducts.sort((a, b) =>
            a.price - b.price
        );
    }

    if (sortType === "price-desc") {
        filteredProducts.sort((a, b) =>
            b.price - a.price
        );
    }

    filteredProducts =
        filteredProducts.slice(0, itemsPerPage);

    displayProducts(filteredProducts);
}
document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });
applyProductFilters();
updateCart();