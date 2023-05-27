import React, { useState } from "react";
import Prayergrid from "./Prayergrid";

export interface normalPrayers {
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
  hawkEye: boolean; // nice hawk
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

export default function Dps() {
  const [currentPrayers, setCurrentPrayers] = useState({
    thickSkin: false,
    burstStrength: false,
    clarityThought: false,
    sharpEye: false,
    mysticWill: false,
    rockSkin: false,
    superStrength: false,
    improvedReflexes: false,
    rapidRestore: false,
    rapidHeal: false,
    protItem: false,
    hawkEye: false,
    mysticLore: false,
    steelSkin: false,
    ultimateStrength: false,
    incredibleReflexes: false,
    protMagic: false,
    protRanged: false,
    protMelee: false,
    eagleEye: false,
    mysticMight: false,
    retribution: false,
    redemption: false,
    smite: false,
    preserve: false,
    chivalry: false,
    piety: false,
    rigour: false,
    augury: false,
  });
  return (
    <div>
      <h1>runescape dps</h1>
      <h2>yeah i bet you want to know</h2>
      <Prayergrid
        prayerBook="normal"
        prayerState={currentPrayers}
        prayerModify={setCurrentPrayers}
      ></Prayergrid>
    </div>
  );
}
