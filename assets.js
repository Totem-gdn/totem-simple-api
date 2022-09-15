// Avatars
const BodyFatEnum = {
  Thin: 0,
  Fat: 1,
};
const BodyMusclesEnum = {
  Wimp: 0,
  Muscular: 1,
};
const HairStyleEnum = {
  Afro: 0,
  Asymmetrical: 1,
  Braids: 2,
  BuzzCut: 3,
  Dreadlocks: 4,
  Long: 5,
  Ponytail: 6,
  Short: 7,
};
const SexEnum = {
  Male: 0,
  Female: 1,
};

const avatars = [
  {
    sex: SexEnum.Female,
    skinColor: '#472422',
    hairColor: '#b1b1b1',
    hairStyle: HairStyleEnum.Dreadlocks,
    eyeColor: '#b5d6e0',
    bodyFat: BodyFatEnum.Thin,
    bodyMuscles: BodyMusclesEnum.Wimp,
  }, {
    sex: SexEnum.Male,
    skinColor: '#f9d4ab',
    hairColor: '#341c0d',
    hairStyle: HairStyleEnum.BuzzCut,
    eyeColor: '#7c8b4f',
    bodyFat: BodyFatEnum.Fat,
    bodyMuscles: BodyMusclesEnum.Muscular,
  }, {
    sex: SexEnum.Male,
    skinColor: '#81574b',
    hairColor: '#e4b877',
    hairStyle: HairStyleEnum.Asymmetrical,
    eyeColor: '#c4a05f',
    bodyFat: BodyFatEnum.Thin,
    bodyMuscles: BodyMusclesEnum.Muscular,
  }, {
    sex: SexEnum.Female,
    skinColor: '#efd2c4',
    hairColor: '#914329',
    hairStyle: HairStyleEnum.Braids,
    eyeColor: '#90b4ca',
    bodyFat: BodyFatEnum.Thin,
    bodyMuscles: BodyMusclesEnum.Muscular,
  }, {
    sex: SexEnum.Female,
    skinColor: '#c58351',
    hairColor: '#070504',
    hairStyle: HairStyleEnum.Ponytail,
    eyeColor: '#a97e33',
    bodyFat: BodyFatEnum.Fat,
    bodyMuscles: BodyMusclesEnum.Wimp,
  }, {
    sex: SexEnum.Male,
    skinColor: '#7a3e10',
    hairColor: '#cd622b',
    hairStyle: HairStyleEnum.Afro,
    eyeColor: '#a7ad7f',
    bodyFat: BodyFatEnum.Fat,
    bodyMuscles: BodyMusclesEnum.Wimp,
  }, {
    sex: SexEnum.Female,
    skinColor: '#8a6743',
    hairColor: '#62422e',
    hairStyle: HairStyleEnum.Long,
    eyeColor: '#3d0d04',
    bodyFat: BodyFatEnum.Fat,
    bodyMuscles: BodyMusclesEnum.Muscular,
  }, {
    sex: SexEnum.Male,
    skinColor: '#dca788',
    hairColor: '#ad7b41',
    hairStyle: HairStyleEnum.Short,
    eyeColor: '#7a3411',
    bodyFat: BodyFatEnum.Thin,
    bodyMuscles: BodyMusclesEnum.Wimp,
  },
];

// Items
const shaftColor1 = '#256D7B';
const shaftColor2 = '#c81d4a';
const shaftColor3 = '#6474b7';
const shaftColor4 = '#936529';
const shaftColor5 = '#f99595';
const shaftColor6 = '#7a7a30';
const shaftColor7 = '#91e676';
const shaftColor8 = '#bf6345';
const shaftColor9 = '#93b71e';
const shaftColor10 = '#d7668d';
const shaftColor11 = '#7ab1f7';
const shaftColor12 = '#9c96a6';
const shaftColor13 = '#c899e4';
const shaftColor14 = '#d1d21e';
const shaftColor15 = '#9acaa1';
const shaftColor16 = '#6b0734';

const ElementEnum = {
  Air: 0,
  Earth: 1,
  Water: 2,
  Fire: 3,
};
const ItemTypeEnum = {
  SPEAR: 'spear',
  SWORD: 'sword',
};
const TipMaterialEnum = {
  Wood: 0,
  Bone: 1,
  Flint: 2,
  Obsidian: 3,
};

const swords = [
  {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Bone,
      element: ElementEnum.Water,
      shaftColor: shaftColor1,
      range: 10.0,
      damage: 51.25,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Flint,
      element: ElementEnum.Fire,
      shaftColor: shaftColor2,
      range: 10.0,
      damage: 84.74,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Earth,
      shaftColor: shaftColor3,
      range: 10.0,
      damage: 45.29,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Obsidian,
      element: ElementEnum.Air,
      shaftColor: shaftColor4,
      range: 10.0,
      damage: 37.52,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Water,
      shaftColor: shaftColor5,
      range: 10.0,
      damage: 70.22,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Earth,
      shaftColor: shaftColor6,
      range: 10.0,
      damage: 72.02,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Earth,
      shaftColor: shaftColor7,
      range: 10.0,
      damage: 75.14,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Flint,
      element: ElementEnum.Water,
      shaftColor: shaftColor8,
      range: 10.0,
      damage: 46.34,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Air,
      shaftColor: shaftColor9,
      range: 10.0,
      damage: 43.9,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Fire,
      shaftColor: shaftColor10,
      range: 10.0,
      damage: 53.23,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Bone,
      element: ElementEnum.Earth,
      shaftColor: shaftColor11,
      range: 10.0,
      damage: 44.13,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Obsidian,
      element: ElementEnum.Air,
      shaftColor: shaftColor12,
      range: 10.0,
      damage: 69.1,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Flint,
      element: ElementEnum.Water,
      shaftColor: shaftColor13,
      range: 10.0,
      damage: 44.77,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Fire,
      shaftColor: shaftColor14,
      range: 10.0,
      damage: 42.51,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Bone,
      element: ElementEnum.Fire,
      shaftColor: shaftColor15,
      range: 10.0,
      damage: 26.8,
    },
  }, {
    type: ItemTypeEnum.SWORD,
    value: {
      tipMaterial: TipMaterialEnum.Flint,
      element: ElementEnum.Air,
      shaftColor: shaftColor16,
      range: 10.0,
      damage: 47.97,
    },
  },
];

const spears = [
  {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Bone,
      element: ElementEnum.Water,
      shaftColor: shaftColor1,
      range: 51.25,
      damage: 66.98,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Flint,
      element: ElementEnum.Fire,
      shaftColor: shaftColor2,
      range: 84.74,
      damage: 79.38,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Earth,
      shaftColor: shaftColor3,
      range: 45.29,
      damage: 46.06,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Obsidian,
      element: ElementEnum.Air,
      shaftColor: shaftColor4,
      range: 37.52,
      damage: 41.9,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Water,
      shaftColor: shaftColor5,
      range: 70.22,
      damage: 24.74,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Earth,
      shaftColor: shaftColor6,
      range: 72.02,
      damage: 60.29,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Earth,
      shaftColor: shaftColor7,
      range: 75.14,
      damage: 68.62,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Flint,
      element: ElementEnum.Water,
      shaftColor: shaftColor8,
      range: 46.34,
      damage: 56.66,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Air,
      shaftColor: shaftColor9,
      range: 43.9,
      damage: 37.75,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Fire,
      shaftColor: shaftColor10,
      range: 53.23,
      damage: 74.52,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Bone,
      element: ElementEnum.Earth,
      shaftColor: shaftColor11,
      range: 44.13,
      damage: 67.27,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Obsidian,
      element: ElementEnum.Air,
      shaftColor: shaftColor12,
      range: 69.1,
      damage: 77.31,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Flint,
      element: ElementEnum.Water,
      shaftColor: shaftColor13,
      range: 44.77,
      damage: 44.19,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Wood,
      element: ElementEnum.Fire,
      shaftColor: shaftColor14,
      range: 42.51,
      damage: 47.44,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Bone,
      element: ElementEnum.Fire,
      shaftColor: shaftColor15,
      range: 26.8,
      damage: 38.94,
    },
  }, {
    type: ItemTypeEnum.SPEAR,
    value: {
      tipMaterial: TipMaterialEnum.Flint,
      element: ElementEnum.Air,
      shaftColor: shaftColor16,
      range: 47.97,
      damage: 59.5,
    },
  },
];

function getRandomInt (min, max) {
  return parseInt((Math.random() * (max - min) + min).toFixed(0), 10);
}

function randomHex () {
  return `#${('00000' + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6)}`;
}

function randomDarkHex () {
  let color = '';
  for (let i = 0; i < 3; i++) {
    color += ('0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  }
  return `#${color}`;
}

function randomLightHex () {
  let color = '';
  for (let i = 0; i < 3; i++) {
    color += ('0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  }
  return `#${color}`;
}

function * generator (collection, modifier) {
  // if lambda not cached -- start from random collection item, then normal loop
  const initIdx = getRandomInt(0, collection.length - 1);
  for (let idx = initIdx; idx < collection.length; idx++) {
    if (modifier) {
      yield modifier(collection[idx]);
    } else {
      yield collection[idx];
    }
  }
  while (true) {
    for (const idx in collection) {
      if (modifier) {
        yield modifier(collection[idx]);
      } else {
        yield collection[idx];
      }
    }
  }
}

module.exports = {
  collections: {
    avatars: avatars,
    items: [...spears],
  },
  generators: {
    avatars: generator(avatars, (a) => {
      a.clothingColor = randomHex();
      return a;
    }),
    items: generator([...spears]),
  },
};
