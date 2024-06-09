const skills = {
  FireInRed: {
    name: "Fire in Red",
    castPC: 0.6, // cast time based on player gcd
    recastPC: 1, // recast time based on player gcd
    mpCost: 200,
    potency: 400,
    isCooldown: false,
    tooltip: `Deals fire damage with a potency of 440.
      Additional Effect: Grants Aetherhues
      Duration: 30s
      This action is affected by Hyperphantasia
    `,
    gaugeValue: 0,
    paint: null,
    comboAction: "AeroInGreen",
    comboHighlight: true,
    imgLocation: "/img/icons/FireInRed.png",
    isHyperPhantasia: true,
    buff: ["Aetherhues"],
    buffimg: ["/img/buffs/Aetherhues.png"],
    consume: [],
  },
  AeroInGreen: {
    name: "Aero In Green",
    castPC: 0.6,
    recastPC: 1,
    mpCost: 200,
    potency: 440,
    isCooldown: false,
    tooltip: `Deals wind damage with a potency of 440.
    Additional Effect: Grants Aetherhues II
    Duration: 30s
    Can only be executed while under the effect of Aetherhues.
    This action is affected by Hyperphantasia
    `,
    gaugeValue: 0,
    paint: null,
    comboAction: "WaterInBlue",
    comboHighlight: true,
    imgLocation: "/img/icons/AeroInGreen.png",
    isHyperPhantasia: true,
    buff: ["Aetherhues II"],
    buffimg: ["/img/buffs/AetherhuesII.png"],
    consume: ["Aetherhues"],
  },
  WaterInBlue: {
    name: "Water In Blue",
    castPC: 0.6,
    recastPC: 1,
    mpCost: 200,
    potency: 480,
    isCooldown: false,
    tooltip: `Deals water damage with a potency of 480.
    Additional Effect: Increases Palette Gauge by 25
    Additional Effect: Grants White Paint
    Maximum Stacks: 5
    Can only be executed while under the effect of Aetherhues II.
    This action is affected by Hyperphantasia
    `,
    gaugeValue: 25,
    paint: "white",
    comboAction: "FireInRed",
    comboHighlight: false,
    imgLocation: "/img/icons/WaterInBlue.png",
    isHyperPhantasia: true,
    buff: [],
    buffimg: [],
    consume: ["Aetherhues II"],
  },
  FireIIInRed: {
    name: "Fire II in Red",
    castPC: 0.6,
    recastPC: 1,
    mpCost: 300,
    potency: 80,
    isCooldown: false,
    tooltip: `Deals fire damage with a potency of 80 to target and all enemies nearby it.
      Additional Effect: Grants Aetherhues
      Duration: 30s
      This action is affected by Hyperphantasia
    `,
    gaugeValue: 0,
    paint: null,
    comboAction: "AeroIIInGreen",
    comboHighlight: true,
    imgLocation: "/img/icons/FireIIInRed.png",
    isHyperPhantasia: true,
    buff: ["Aetherhues"],
    buffimg: ["/img/buffs/Aetherhues.png"],
    consume: [],
  },
  AeroIIInGreen: {
    name: "Aero II In Green",
    castPC: 0.6,
    recastPC: 1,
    mpCost: 300,
    potency: 100,
    isCooldown: false,
    tooltip: `Deals wind damage with a potency of 100 to target and all enemies nearby it.
    Additional Effect: Grants Aetherhues II
    Duration: 30s
    Can only be executed while under the effect of Aetherhues.
    This action is affected by Hyperphantasia
    `,
    gaugeValue: 0,
    paint: null,
    comboAction: "WaterIIInBlue",
    comboHighlight: true,
    imgLocation: "/img/icons/AeroIIInGreen.png",
    isHyperPhantasia: true,
    buff: ["Aetherhues II"],
    buffimg: ["/img/buffs/AetherhuesII.png"],
    consume: ["Aetherhues"],
  },
  WaterIIInBlue: {
    name: "Water II In Blue",
    castPC: 0.6,
    recastPC: 1,
    mpCost: 300,
    potency: 120,
    isCooldown: false,
    tooltip: `Deals water damage with a potency of 120 to target and all enemies nearby it.
    Additional Effect: Increases Palette Gauge by 25
    Additional Effect: Grants White Paint
    Maximum Stacks: 5
    Can only be executed while under the effect of Aetherhues II.
    This action is affected by Hyperphantasia
    `,
    gaugeValue: 25,
    paint: "white",
    comboAction: "FireIIInRed",
    comboHighlight: false,
    imgLocation: "/img/icons/WaterIIInBlue.png",
    isHyperPhantasia: true,
    buff: [],
    buffimg: [],
    consume: ["Aetherhues II"],
  },
  SubtractivePalette: {
    name: "Subtractive Palette",
    castPC: 0,
    recastPC: 0.4,
    mpCost: 0,
    potency: 0,
    isOgcd: false,
    tooltip: `Grants 3 stacks of Subtractive Palette.
    Additional: Grants Monochrome Tones
    Monochrome Tones Effect: Converts one stack of White Paint into Black Paint
    Palette Gauge Cost: 50
    `,
    gaugeValue: -50,
    paint: "black",
    comboAction: null,
    comboHighlight: false,
    imgLocation: "/img/icons/SubstractivePalette.png",
    isHyperPhantasia: false,
    buff: ["Monochrome Tones"],
    buffimg: ["/img/buffs/MonochromeTones.png"],
    consume: [],
  },
  LivingMuse: {
    name: "Living Muse",
    castPC: 0,
    recastPC: 40,
    mpCost: 0,
    potency: 0,
    charge: 3,
    isOgcd: true,
    tooltip: `Render your depiction of a creature to life.
    Maximum charges: 3
    Can only be executed when a Creature Motif is depicted on the Creature Canvas.
    `,
    gaugeValue: 0,
    paint: null,
    comboAction: null,
    comboHighlight: false,
    imgLocation: "/img/icons/LivingMuse.png",
    isHyperPhantasia: false,
    buff: [],
    buffimg: [],
    consume: [],
  },
};
