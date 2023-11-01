const csvData = `Dragon Child,10,10,0,10,15,10,10,5,5
Divine Dragon,10,10,0,10,15,15,15,10,5
Fell Child,10,10,25,10,5,10,25,0,0
Noble,15,15,0,5,5,20,5,15,0
Avenir,15,15,0,5,10,25,5,20,5
Noble,0,5,10,5,5,5,10,20,0
Vidame,5,10,15,5,5,5,15,20,0
Lord,15,20,0,10,10,10,0,5,0
Successeur,15,20,0,10,15,15,0,10,5
Lord,10,10,0,25,10,10,0,5,0
Tireur d’élite,10,10,0,30,10,15,5,5,0
Wing Tamer,5,0,20,0,0,10,20,0,0
Lindwurm,5,0,25,5,0,15,25,0,0
Wing Tamer,0,0,15,10,10,0,25,10,0
Sleipnir Rider,0,0,20,15,15,0,30,15,0
Sentinel,10,10,0,10,5,20,0,5,0
Picket,10,15,0,10,10,20,5,5,5
Sentinel,10,5,0,15,15,5,15,0,0
Cupido,10,5,5,20,20,5,20,0,0
Sword Fighter,10,10,0,15,20,0,15,10,0
Swordmaster,10,10,0,15,20,0,15,15,0
Hero,15,15,0,10,15,0,10,15,0
Lance Fighter,10,10,5,20,5,10,5,0,0
Halberdier,10,15,5,20,10,15,5,5,0
Royal Knight,5,10,15,15,15,5,20,10,0
Axe Fighter,25,20,0,5,10,5,0,0,5
Berserker,30,30,0,5,10,5,0,0,10
Warrior,25,20,0,10,15,10,5,0,5
Archer,10,15,0,25,10,5,0,5,0
Sniper,15,15,0,30,10,10,0,10,0
Bow Knight,10,10,0,20,20,0,15,15,0
Sword Armor,20,15,0,10,0,30,0,0,5
Lance Armor,20,15,0,10,0,30,0,0,5
Axe Armor,20,15,0,10,0,30,0,0,5
General,25,20,0,10,0,30,0,0,10
Great Knight,20,15,0,15,0,25,10,5,5
Sword Cavalier,10,10,0,10,10,10,10,10,0
Lance Cavalier,10,10,0,10,10,10,10,10,0
Axe Cavalier,10,10,0,10,10,10,10,10,0
Paladin,15,15,0,10,15,15,15,10,0
Wolf Knight,10,5,0,15,20,5,20,20,0
Mage,0,0,25,5,0,0,25,5,0
Sage,0,0,30,5,0,0,30,15,0
Mage Knight,5,5,25,0,5,10,25,5,0
Martial Monk,0,10,25,0,0,10,20,10,0
Martial Master,5,10,20,0,0,15,25,10,0
High Priest,0,0,25,0,5,0,30,30,0
Sword Flier,5,10,5,10,10,0,10,10,0
Lance Flier,5,10,5,10,10,0,10,10,0
Axe Flier,5,10,5,10,10,0,10,10,0
Griffin Knight,0,10,15,15,20,0,15,15,0
Wyvern Knight,20,20,0,10,5,20,5,5,5
Thief,5,10,0,20,15,15,5,15,0
Dancer,5,10,0,5,15,10,20,20,0
Fell Child Nel,10,15,10,10,15,15,15,0,5
Fell Child Rafal,15,20,0,5,5,20,10,0,10
Melusine,10,10,10,10,15,10,10,0,5
Enchanter,5,15,15,15,10,5,5,15,5
Mage Cannoneer,15,10,0,15,5,20,5,10,10`;

const lines = csvData.split('\n');
const result = {};
const names = [];

for (const line of lines) {
  const parts = line.split(',');
  const propertyName = parts[0];
  const values = parts.slice(1).map(Number);
  result[propertyName] = {label: propertyName, data: values};
  names.push(propertyName);
}
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5]

console.log(arr1.map((x, i) => x + arr2[i]))

export const unitNames = [
    'Alear',    'Vander',   'Clanne',    'Framme',
    'Alfred',   'Etie',     'Boucheron', 'Céline',
    'Chloé',    'Louis',    'Yunaka',    'Alcryst',
    'Citrinne', 'Lapis',    'Diamant',   'Amber',
    'Jade',     'Ivy',      'Kagetsu',   'Zelkov',
    'Fogado',   'Pandreo',  'Bunet',     'Timerra',
    'Panette',  'Merrin',   'Hortensia', 'Seadall',
    'Rosado',   'Goldmary', 'Lindon',    'Saphir',
    'Veyle',    'Mauvier',  'Anna',      'Jean',
    'Nel',      'Rafal',    'Zelestia',  'Gregory',
    'Madeline'
  ]

export const units = 
  {
    Alear: {
      label: 'Alear',      
      data: [
        60, 35, 20, 45, 50,
        40, 25, 25,  5     
      ]
    },
    Vander: {
      label: 'Vander',     
      data: [
        60, 25, 10, 25, 35,
        35, 20, 10,  5
      ]
    },
    Clanne: {
      label: 'Clanne',
      data: [
        40, 35, 10, 40, 50,
        30, 25, 20,  5
      ]
    },
    Framme: {
      label: 'Framme',
      data: [
        55, 30, 25, 35, 55,
        25, 30, 25,  0
      ]
    },
    Alfred: {
      label: 'Alfred',
      data: [
        65, 40,  5, 35, 40,
        40, 20, 40, 10
      ]
    },
    Etie: {
      label: 'Etie',
      data: [
        45, 40,  0, 25, 35,
        25, 30, 25,  5
      ]
    },
    Boucheron: {
      label: 'Boucheron',
      data: [
        85, 20,  0, 50, 45,
        35, 20, 15, 20
      ]
    },
    'Céline': {
      label: 'Céline',
      data: [
        50, 35, 25, 30, 45,
        30, 40, 50,  5
      ]
    },
    'Chloé': {
      label: 'Chloé',
      data: [
        75, 25, 35, 40, 55,
        30, 25, 25,  5
      ]
    },
    Louis: {
      label: 'Louis',
      data: [
        75, 40,  0, 25, 25,
        50, 20, 25, 15
      ]
    },
    Yunaka: {
      label: 'Yunaka',
      data: [
        50, 35, 25, 40, 45,
        15, 45, 25,  5
      ]
    },
    Alcryst: {
      label: 'Alcryst',
      data: [
        65, 30, 10, 40, 45,
        30, 20, 15, 10
      ]
    },
    Citrinne: {
      label: 'Citrinne',
      data: [
        45, 10, 40, 25, 30,
        20, 40, 25,  5
      ]
    },
    Lapis: {
      label: 'Lapis',
      data: [
        55, 25, 20, 35, 55,
        35, 30, 25,  5
      ]
    },
    Diamant: {
      label: 'Diamant',
      data: [
        75, 30, 15, 20, 40,
        40, 25, 20, 15
      ]
    },
    Amber: {
      label: 'Amber',
      data: [
        65, 45,  0, 25, 30,
        35,  5, 35, 15
      ]
    },
    Jade: {
      label: 'Jade',
      data: [
        55, 35, 25, 35, 30,
        40, 30, 20, 10
      ]
    },
    Ivy: {
      label: 'Ivy',
      data: [
        55, 25, 30, 25, 40,
        30, 35, 15, 10
      ]
    },
    Kagetsu: {
      label: 'Kagetsu',
      data: [
        60, 30, 15, 50, 50,
        40, 25, 40, 10
      ]
    },
    Zelkov: {
      label: 'Zelkov',
      data: [
        65, 35, 15, 40, 35,
        35, 15, 25, 10
      ]
    },
    Fogado: {
      label: 'Fogado',
      data: [
        60, 30, 25, 30, 55,
        30, 35, 25, 10
      ]
    },
    Pandreo: {
      label: 'Pandreo',
      data: [
        60,  5, 30, 45, 45,
        15, 55, 30, 15
      ]
    },
    Bunet: {
      label: 'Bunet',
      data: [
        65, 30, 10, 40, 35,
        45, 25, 40, 10
      ]
    },
    Timerra: {
      label: 'Timerra',
      data: [
        55, 25, 25, 45, 45,
        30, 30, 30, 10
      ]
    },
    Panette: {
      label: 'Panette',
      data: [
        75, 45, 10, 40, 25,
        30, 15, 20, 15
      ]
    },
    Merrin: {
      label: 'Merrin',
      data: [
        55, 25, 25, 40, 50,
        30, 30, 25, 10
      ]
    },
    Hortensia: {
      label: 'Hortensia',
      data: [
        40, 20, 20, 35, 50,
        25, 55, 50,  0
      ]
    },
    Seadall: {
      label: 'Seadall',
      data: [
        55, 25, 15, 25, 50,
        25, 25, 35, 10
      ]
    },
    Rosado: {
      label: 'Rosado',
      data: [
        75, 45, 25, 40, 45,
        30, 30, 20,  5
      ]
    },
    Goldmary: {
      label: 'Goldmary',
      data: [
        65, 30,  5, 25, 25,
        55, 25, 25,  5
      ]
    },
    Lindon: {
      label: 'Lindon',
      data: [
        65, 25, 25, 25, 40,
        25, 40, 15, 10
      ]
    },
    Saphir: {
      label: 'Saphir',
      data: [
        80, 35,  0, 25, 30,
        30,  5, 20, 10
      ]
    },
    Veyle: {
      label: 'Veyle',
      data: [
        40, 25, 45, 35, 30,
        25, 35, 20,  0
      ]
    },
    Mauvier: {
      label: 'Mauvier',
      data: [
        70, 35, 40, 40, 35,
        50, 45, 15, 15
      ]
    },
    Anna: {
      label: 'Anna',
      data: [
        55, 15, 50, 50, 50,
        20, 35, 45,  5
      ]
    },
    Jean: {
      label: 'Jean',
      data: [
        50, 20, 20, 35, 40,
        25, 20, 25,  5
      ]
    },
    Nel: {
      label: 'Nel',
      data: [
        55, 30, 25, 40, 45,
        30, 35, 30, 10
      ]
    },
    Rafal: {
      label: 'Rafal',
      data: [
        70, 40, 10, 40, 35,
        45, 20, 10, 10
      ]
    },
    Zelestia: {
      label: 'Zelestia',
      data: [
        60, 35, 35, 35, 50,
        30, 35, 20,  5
      ]
    },
    Gregory: {
      label: 'Gregory',
      data: [
        55, 30, 50, 20, 25,
        35, 50, 25,  5
      ]
    },
    Madeline: {
      label: 'Madeline',
      data: [
        75, 50, 20, 15, 15,
        55, 25, 25, 10
      ]
    }
  }

export const classNames = [
    'Dragon Child',   'Divine Dragon',    'Fell Child',
    'Noble',          'Avenir',           'Noble',
    'Vidame',         'Lord',             'Successeur',
    'Lord',           'Tireur d’élite',   'Wing Tamer',
    'Lindwurm',       'Wing Tamer',       'Sleipnir Rider',
    'Sentinel',       'Picket',           'Sentinel',
    'Cupido',         'Sword Fighter',    'Swordmaster',
    'Hero',           'Lance Fighter',    'Halberdier',
    'Royal Knight',   'Axe Fighter',      'Berserker',
    'Warrior',        'Archer',           'Sniper',
    'Bow Knight',     'Sword Armor',      'Lance Armor',
    'Axe Armor',      'General',          'Great Knight',
    'Sword Cavalier', 'Lance Cavalier',   'Axe Cavalier',
    'Paladin',        'Wolf Knight',      'Mage',
    'Sage',           'Mage Knight',      'Martial Monk',
    'Martial Master', 'High Priest',      'Sword Flier',
    'Lance Flier',    'Axe Flier',        'Griffin Knight',
    'Wyvern Knight',  'Thief',            'Dancer',
    'Fell Child Nel', 'Fell Child Rafal', 'Melusine',
    'Enchanter',      'Mage Cannoneer'
  ]

  export const classes = 
  {
    'Dragon Child': {        
      label: 'Dragon Child', 
      data: [
        10, 10, 0, 10, 15,   
        10, 10, 5,  5        
      ]
    },
    'Divine Dragon': {       
      label: 'Divine Dragon',
      data: [
        10, 10,  0, 10, 15,  
        15, 15, 10,  5
      ]
    },
    'Fell Child': {
      label: 'Fell Child',
      data: [
        10, 10, 25, 10, 5,
        10, 25,  0,  0
      ]
    },
    Noble: {
      label: 'Noble',
      data: [
        0,  5, 10, 5, 5,
        5, 10, 20, 0
      ]
    },
    Avenir: {
      label: 'Avenir',
      data: [
        15, 15,  0, 5, 10,
        25,  5, 20, 5
      ]
    },
    Vidame: {
      label: 'Vidame',
      data: [
        5, 10, 15, 5, 5,
        5, 15, 20, 0
      ]
    },
    Lord: {
      label: 'Lord',
      data: [
        10, 10, 0, 25, 10,
        10,  0, 5,  0
      ]
    },
    Successeur: {
      label: 'Successeur',
      data: [
        15, 20,  0, 10, 15,
        15,  0, 10,  5
      ]
    },
    'Tireur d’élite': {
      label: 'Tireur d’élite',
      data: [
        10, 10, 0, 30, 10,
        15,  5, 5,  0
      ]
    },
    'Wing Tamer': {
      label: 'Wing Tamer',
      data: [
        0,  0, 15, 10, 10,
        0, 25, 10,  0
      ]
    },
    Lindwurm: {
      label: 'Lindwurm',
      data: [
         5,  0, 25, 5, 0,
        15, 25,  0, 0
      ]
    },
    'Sleipnir Rider': {
      label: 'Sleipnir Rider',
      data: [
        0,  0, 20, 15, 15,
        0, 30, 15,  0
      ]
    },
    Sentinel: {
      label: 'Sentinel',
      data: [
        10,  5, 0, 15, 15,
         5, 15, 0,  0
      ]
    },
    Picket: {
      label: 'Picket',
      data: [
        10, 15, 0, 10, 10,
        20,  5, 5,  5
      ]
    },
    Cupido: {
      label: 'Cupido',
      data: [
        10,  5, 5, 20, 20,
         5, 20, 0,  0
      ]
    },
    'Sword Fighter': {
      label: 'Sword Fighter',
      data: [
        10, 10,  0, 15, 20,
         0, 15, 10,  0
      ]
    },
    Swordmaster: {
      label: 'Swordmaster',
      data: [
        10, 10,  0, 15, 20,
         0, 15, 15,  0
      ]
    },
    Hero: {
      label: 'Hero',
      data: [
        15, 15,  0, 10, 15,
         0, 10, 15,  0
      ]
    },
    'Lance Fighter': {
      label: 'Lance Fighter',
      data: [
        10, 10, 5, 20, 5,
        10,  5, 0,  0
      ]
    },
    Halberdier: {
      label: 'Halberdier',
      data: [
        10, 15, 5, 20, 10,
        15,  5, 5,  0
      ]
    },
    'Royal Knight': {
      label: 'Royal Knight',
      data: [
        5, 10, 15, 15, 15,
        5, 20, 10,  0
      ]
    },
    'Axe Fighter': {
      label: 'Axe Fighter',
      data: [
        25, 20, 0, 5, 10,
         5,  0, 0, 5
      ]
    },
    Berserker: {
      label: 'Berserker',
      data: [
        30, 30, 0,  5, 10,
         5,  0, 0, 10
      ]
    },
    Warrior: {
      label: 'Warrior',
      data: [
        25, 20, 0, 10, 15,
        10,  5, 0,  5
      ]
    },
    Archer: {
      label: 'Archer',
      data: [
        10, 15, 0, 25, 10,
         5,  0, 5,  0
      ]
    },
    Sniper: {
      label: 'Sniper',
      data: [
        15, 15,  0, 30, 10,
        10,  0, 10,  0
      ]
    },
    'Bow Knight': {
      label: 'Bow Knight',
      data: [
        10, 10,  0, 20, 20,
         0, 15, 15,  0
      ]
    },
    'Sword Armor': {
      label: 'Sword Armor',
      data: [
        20, 15, 0, 10, 0,
        30,  0, 0,  5
      ]
    },
    'Lance Armor': {
      label: 'Lance Armor',
      data: [
        20, 15, 0, 10, 0,
        30,  0, 0,  5
      ]
    },
    'Axe Armor': {
      label: 'Axe Armor',
      data: [
        20, 15, 0, 10, 0,
        30,  0, 0,  5
      ]
    },
    General: {
      label: 'General',
      data: [
        25, 20, 0, 10, 0,
        30,  0, 0, 10
      ]
    },
    'Great Knight': {
      label: 'Great Knight',
      data: [
        20, 15, 0, 15, 0,
        25, 10, 5,  5
      ]
    },
    'Sword Cavalier': {
      label: 'Sword Cavalier',
      data: [
        10, 10,  0, 10, 10,
        10, 10, 10,  0
      ]
    },
    'Lance Cavalier': {
      label: 'Lance Cavalier',
      data: [
        10, 10,  0, 10, 10,
        10, 10, 10,  0
      ]
    },
    'Axe Cavalier': {
      label: 'Axe Cavalier',
      data: [
        10, 10,  0, 10, 10,
        10, 10, 10,  0
      ]
    },
    Paladin: {
      label: 'Paladin',
      data: [
        15, 15,  0, 10, 15,
        15, 15, 10,  0
      ]
    },
    'Wolf Knight': {
      label: 'Wolf Knight',
      data: [
        10,  5,  0, 15, 20,
         5, 20, 20,  0
      ]
    },
    Mage: {
      label: 'Mage',
      data: [
        0,  0, 25, 5, 0,
        0, 25,  5, 0
      ]
    },
    Sage: {
      label: 'Sage',
      data: [
        0,  0, 30, 5, 0,
        0, 30, 15, 0
      ]
    },
    'Mage Knight': {
      label: 'Mage Knight',
      data: [
         5,  5, 25, 0, 5,
        10, 25,  5, 0
      ]
    },
    'Martial Monk': {
      label: 'Martial Monk',
      data: [
         0, 10, 25, 0, 0,
        10, 20, 10, 0
      ]
    },
    'Martial Master': {
      label: 'Martial Master',
      data: [
         5, 10, 20, 0, 0,
        15, 25, 10, 0
      ]
    },
    'High Priest': {
      label: 'High Priest',
      data: [
        0,  0, 25, 0, 5,
        0, 30, 30, 0
      ]
    },
    'Sword Flier': {
      label: 'Sword Flier',
      data: [
        5, 10,  5, 10, 10,
        0, 10, 10,  0
      ]
    },
    'Lance Flier': {
      label: 'Lance Flier',
      data: [
        5, 10,  5, 10, 10,
        0, 10, 10,  0
      ]
    },
    'Axe Flier': {
      label: 'Axe Flier',
      data: [
        5, 10,  5, 10, 10,
        0, 10, 10,  0
      ]
    },
    'Griffin Knight': {
      label: 'Griffin Knight',
      data: [
        0, 10, 15, 15, 20,
        0, 15, 15,  0
      ]
    },
    'Wyvern Knight': {
      label: 'Wyvern Knight',
      data: [
        20, 20, 0, 10, 5,
        20,  5, 5,  5
      ]
    },
    Thief: {
      label: 'Thief',
      data: [
         5, 10,  0, 20, 15,
        15,  5, 15,  0
      ]
    },
    Dancer: {
      label: 'Dancer',
      data: [
         5, 10,  0, 5, 15,
        10, 20, 20, 0
      ]
    },
    'Fell Child Nel': {
      label: 'Fell Child Nel',
      data: [
        10, 15, 10, 10, 15,
        15, 15,  0,  5
      ]
    },
    'Fell Child Rafal': {
      label: 'Fell Child Rafal',
      data: [
        15, 20, 0,  5, 5,
        20, 10, 0, 10
      ]
    },
    Melusine: {
      label: 'Melusine',
      data: [
        10, 10, 10, 10, 15,
        10, 10,  0,  5
      ]
    },
    Enchanter: {
      label: 'Enchanter',
      data: [
        5, 15, 15, 15, 10,
        5,  5, 15,  5
      ]
    },
    'Mage Cannoneer': {
      label: 'Mage Cannoneer',
      data: [
        15, 10,  0, 15, 5,
        20,  5, 10, 10
      ]
    }
  }

  console.log(units.Alear.data.map((x, i) => x + classes['Dragon Child'].data[i]))