import React, { useState } from "react";
import Prayergrid from "./Prayergrid";
import prayerData from "../../public/data/prayers.json";
import { prayerKeys, IPlayerStats, ILevels } from "./types";
import PlayerLookup from "./PlayerLookup";
import { lookupByRSN } from "./osrs-hiscores";
import StatOverview from "./StatOverview";

export default function Dps() {
  const [currentPrayers, setCurrentPrayers] = useState({
    // this is only used for displaying the prayers, the actual calculations are done *elsewhere*

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

  const [playerStats, setPlayerStats] = useState<IPlayerStats>({
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
    levels: {
      strength: 1,
      attack: 1,
      defence: 1,
      ranged: 1,
      magic: 1,
      hitpoints: 10,
      prayer: 1,
    },
  });

  function changeLevel(level: keyof IPlayerStats["levels"], value: number) {
    let roundedValue = Math.round(value);
    if (roundedValue > 99) {
      roundedValue = 99;
    }
    if (roundedValue < 0) {
      roundedValue = 1;
    }
    const newState = { ...playerStats };
    newState.levels[level] = roundedValue;
    setPlayerStats(newState);
  }

  function handlePrayerClick(prayerName: prayerKeys) {
    const clickedPrayer = prayerData[prayerName];
    const newState = { ...currentPrayers };
    newState[prayerName] = !newState[prayerName];
    if (newState[prayerName] === true) {
      clickedPrayer.conflictWith.forEach((arg) => {
        newState[arg as prayerKeys] = false;
      });
    }
    // there has to be a better way to do this, but i don't know how

    setCurrentPrayers(newState);
  }

  return (
    <div>
      <h1>runescape dps</h1>
      <h2>yeah i bet you want to know</h2>
      <Prayergrid
        prayerBook="normal"
        prayerState={currentPrayers}
        prayerModify={handlePrayerClick}
      ></Prayergrid>
      <PlayerLookup onSubmit={(name: string) => {
        lookupByRSN(name).then(response => {
          setPlayerStats({...playerStats, levels: response})
        })
      }}></PlayerLookup>
      <StatOverview levelState={playerStats.levels}></StatOverview>
    </div>
  );
}
