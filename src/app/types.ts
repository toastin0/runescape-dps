import prayerData from "../../public/data/prayers.json";
export type prayerKeys = keyof typeof prayerData;

export interface prayerEnabled {
  thickSkin: boolean;
  burstStrength: boolean;
  clarityThought: boolean;
  sharpEye: boolean;
  mysticWill: boolean;
  rockSkin: boolean;
  superStrength: boolean;
  improvedReflexes: boolean;
  rapidRestore: boolean;
  rapidHeal: boolean;
  protItem: boolean;
  hawkEye: boolean;
  mysticLore: boolean;
  steelSkin: boolean;
  ultimateStrength: boolean;
  incredibleReflexes: boolean;
  protMagic: boolean;
  protRanged: boolean;
  protMelee: boolean;
  eagleEye: boolean;
  mysticMight: boolean;
  retribution: boolean;
  redemption: boolean;
  smite: boolean;
  preserve: boolean;
  chivalry: boolean;
  piety: boolean;
  rigour: boolean;
  augury: boolean;
}

export interface conflictData {
  strength: boolean;
  attack: boolean;
  ranged: boolean;
  defence: boolean;
  magic: boolean;
  overhead: boolean;
  tier: number;
}

export interface levels {
    strength: number;
    attack: number;
    defence: number;
    ranged: number;
    magic: number;
    hitpoints: number;
    prayer: number;
  }
