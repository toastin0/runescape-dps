import React, { useState } from "react";
import Prayergrid from "./Prayergrid";
import prayerData from "../../public/data/prayers.json";
import { prayerKeys } from "./types";

export default function Dps() {
  const playerStats: {
    atkStab: number;
    atkSlash: number;
    atkCrush: number;
    atkMagic: number;
    atkRange: number;
    defStab: number;
    defSlash: number;
    defCrush: number;
    defMagic: number;
    defRange: number;
    meleeStr: number;
    rangedStr: number;
    magicDmg: number;
    prayerBonus: number;
    atkSpeed: number;
    undeadBonus: number;
    slayerBonus: number;
    setEffect: string[];
    activePrayers: Object[];
  } = {
    atkStab: 0,
    atkSlash: 0,
    atkCrush: 0,
    atkMagic: 0,
    atkRange: 0,
    defStab: 0,
    defSlash: 0,
    defCrush: 0,
    defMagic: 0,
    defRange: 0,
    meleeStr: 0,
    rangedStr: 0,
    magicDmg: 0,
    prayerBonus: 0,
    atkSpeed: 4,
    undeadBonus: 0,
    slayerBonus: 0,
    setEffect: [],
    activePrayers: [],
  };

  function handlePrayerClick(prayerName: prayerKeys) {
    const clickedPrayer = prayerData[prayerName];
    const newState = { ...currentPrayers };
    newState[prayerName] = !newState[prayerName];
    if (playerStats.activePrayers.includes(clickedPrayer)) {
      playerStats.activePrayers.splice(
        playerStats.activePrayers.indexOf(prayerData[prayerName]),
        1
      );
    } else {
      playerStats.activePrayers.push(prayerData[prayerName]);
      clickedPrayer.conflictWith.forEach((arg) => {
        newState[arg as prayerKeys] = false;
      });
    }
    // there has to be a better way to do this, but i don't know how

    setCurrentPrayers(newState);
  }
  const [currentPrayers, setCurrentPrayers] = useState({
    // this is only used for displaying the prayers, the actual calculations are done
    // in another place TODO: say where the place is
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
        prayerModify={handlePrayerClick}
      ></Prayergrid>
    </div>
  );
}
