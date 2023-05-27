import React from "react";
import Prayer from "./Prayer";
import style from "./Prayer.module.css";
import { normalPrayers } from "./dps";


// to whom it may concern: i am sorry
export default function Prayergrid({
  prayerBook,
  prayerState,
  prayerModify,
}: {
  prayerBook: "normal" | "ruinous";
  prayerState: normalPrayers;
  prayerModify: (x: normalPrayers) => void;
}) {
  // i don't think there is a way to programmatically import
  // many images at once, so i am pretty sure that i just have to
  // manually do this. i am going to blame tc39 for this,
  // and choose not to blame myself
  const normalBook = (
    <div id="prayer-controls" style={{ width: "204px" }}>
      <div className={style.prayerList}>
        <Prayer
          src="/prayers/Thick_Skin.png"
          alt="Thick Skin"
          isActive={prayerState.thickSkin}
          onPress={() => {
            prayerModify({ ...prayerState, thickSkin: !prayerState.thickSkin });
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Burst_of_Strength.png"
          alt="Burst of Strength"
          isActive={prayerState.burstStrength}
          onPress={() => {
            prayerModify({ ...prayerState, burstStrength: !prayerState.burstStrength })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Clarity_of_Thought.png"
          alt="Clarity of Thought"
          isActive={prayerState.clarityThought}
          onPress={() => {
            prayerModify({ ...prayerState, clarityThought: !prayerState.clarityThought })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Sharp_Eye.png"
          alt="Sharp Eye"
          isActive={prayerState.sharpEye}
          onPress={() => {
            prayerModify({ ...prayerState, sharpEye: !prayerState.sharpEye})
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Mystic_Will.png"
          alt="Mystic Will"
          isActive={prayerState.mysticWill}
          onPress={() => {
            prayerModify({ ...prayerState, mysticWill: !prayerState.mysticWill })
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Rock_Skin.png"
          alt="Rock Skin"
          isActive={prayerState.rockSkin}
          onPress={() => {
            prayerModify({ ...prayerState, rockSkin: !prayerState.rockSkin })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Superhuman_Strength.png"
          alt="Superhuman Strength"
          isActive={prayerState.superStrength}
          onPress={() => {
            prayerModify({ ...prayerState, superStrength: !prayerState.superStrength })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Improved_Reflexes.png"
          alt="Improved Reflexes"
          isActive={prayerState.improvedReflexes}
          onPress={() => {
            prayerModify({ ...prayerState, improvedReflexes: !prayerState.improvedReflexes})
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Rapid_Restore.png"
          alt="Rapid Restore"
          isActive={prayerState.rapidRestore}
          onPress={() => {
            prayerModify({ ...prayerState, rapidRestore: !prayerState.rapidRestore })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Rapid_Heal.png"
          alt="Rapid Heal"
          isActive={prayerState.rapidHeal}
          onPress={() => {
            prayerModify({ ...prayerState, rapidHeal: !prayerState.rapidHeal })
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Protect_Item.png"
          alt="Protect Item"
          isActive={prayerState.protItem}
          onPress={() => {
            prayerModify({ ...prayerState, protItem: !prayerState.protItem })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Hawk_Eye.png"
          alt="Hawk Eye"
          isActive={prayerState.hawkEye}
          onPress={() => {
            prayerModify({ ...prayerState, hawkEye: !prayerState.hawkEye })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Mystic_Lore.png"
          alt="Mystic Lore"
          isActive={prayerState.mysticLore}
          onPress={() => {
            prayerModify({ ...prayerState, mysticLore: !prayerState.mysticLore })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Steel_Skin.png"
          alt="Steel Skin"
          isActive={prayerState.steelSkin}
          onPress={() => {
            prayerModify({ ...prayerState, steelSkin: !prayerState.steelSkin })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Ultimate_Strength.png"
          alt="Ultimate Strength"
          isActive={prayerState.ultimateStrength}
          onPress={() => {
            prayerModify({ ...prayerState, ultimateStrength: !prayerState.ultimateStrength })
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Incredible_Reflexes.png"
          alt="Incredible Reflexes"
          isActive={prayerState.incredibleReflexes}
          onPress={() => {
            prayerModify({ ...prayerState, incredibleReflexes: !prayerState.incredibleReflexes})
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Protect_from_Magic.png"
          alt="Protect from Magic"
          isActive={prayerState.protMagic}
          onPress={() => {
            prayerModify({ ...prayerState, protMagic: !prayerState.protMagic })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Protect_from_Missiles.png"
          alt="Protect from Missiles"
          isActive={prayerState.protRanged}
          onPress={() => {
            prayerModify({ ...prayerState, protRanged: !prayerState.protMagic })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Protect_from_Melee.png"
          alt="Protect from Melee"
          isActive={prayerState.protMelee}
          onPress={() => {
            prayerModify({ ...prayerState, protMelee: !prayerState.protMelee })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Eagle_Eye.png"
          alt="Eagle Eye"
          isActive={prayerState.eagleEye}
          onPress={() => {
            prayerModify({ ...prayerState, eagleEye: !prayerState.eagleEye })
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Mystic_Might.png"
          alt="Mystic Might"
          isActive={prayerState.mysticMight}
          onPress={() => {
            prayerModify({ ...prayerState, mysticMight: !prayerState.mysticMight })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Retribution.png"
          alt="Retribution"
          isActive={prayerState.retribution}
          onPress={() => {
            prayerModify({ ...prayerState, retribution: !prayerState.retribution})
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Redemption.png"
          alt="Redemption"
          isActive={prayerState.redemption}
          onPress={() => {
            prayerModify({ ...prayerState, redemption: !prayerState.redemption })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Smite.png"
          alt="Smite"
          isActive={prayerState.smite}
          onPress={() => {
            prayerModify({ ...prayerState, smite: !prayerState.smite })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Preserve.png"
          alt="Preserve"
          isActive={prayerState.preserve}
          onPress={() => {
            prayerModify({ ...prayerState, preserve: !prayerState.preserve })
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Chivalry.png"
          alt="Chivalry"
          isActive={prayerState.chivalry}
          onPress={() => {
            prayerModify({ ...prayerState, chivalry: !prayerState.chivalry })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Piety.png"
          alt="Piety"
          isActive={prayerState.piety}
          onPress={() => {
            prayerModify({ ...prayerState, piety: !prayerState.piety })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Rigour.png"
          alt="Rigour"
          isActive={prayerState.rigour}
          onPress={() => {
            prayerModify({ ...prayerState, rigour: !prayerState.rigour })
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Augury.png"
          alt="Augury"
          isActive={prayerState.augury}
          onPress={() => {
            prayerModify({ ...prayerState, augury: !prayerState.augury })
          }}
        ></Prayer>
      </div>
    </div>
  );

  const ruinousBook = <></>;
  // define this when the book comes out

  return normalBook;
}
