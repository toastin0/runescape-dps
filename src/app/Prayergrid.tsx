import React from "react";
import Prayer from "./Prayer";
import style from "./Prayer.module.css";
import { normalPrayers } from "./dps";

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
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Clarity_of_Thought.png"
          alt="Clarity of Thought"
          isActive={prayerState.clarityThought}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Sharp_Eye.png"
          alt="Sharp Eye"
          isActive={prayerState.sharpEye}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Mystic_Will.png"
          alt="Mystic Will"
          isActive={prayerState.mysticWill}
          onPress={() => {}}
        ></Prayer>

        <Prayer
          src="/prayers/Rock_Skin.png"
          alt="Rock Skin"
          isActive={prayerState.rockSkin}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Superhuman_Strength.png"
          alt="Superhuman Strength"
          isActive={prayerState.superStrength}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Improved_Reflexes.png"
          alt="Improved Reflexes"
          isActive={prayerState.improvedReflexes}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Rapid_Restore.png"
          alt="Rapid Restore"
          isActive={prayerState.rapidRestore}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Rapid_Heal.png"
          alt="Rapid Heal"
          isActive={prayerState.rapidHeal}
          onPress={() => {}}
        ></Prayer>

        <Prayer
          src="/prayers/Protect_Item.png"
          alt="Protect Item"
          isActive={prayerState.protItem}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Hawk_Eye.png"
          alt="Hawk Eye"
          isActive={prayerState.hawkEye}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Mystic_Lore.png"
          alt="Mystic Lore"
          isActive={prayerState.mysticLore}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Steel_Skin.png"
          alt="Steel Skin"
          isActive={prayerState.steelSkin}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Ultimate_Strength.png"
          alt="Ultimate Strength"
          isActive={prayerState.ultimateStrength}
          onPress={() => {}}
        ></Prayer>

        <Prayer
          src="/prayers/Incredible_Reflexes.png"
          alt="Incredible Reflexes"
          isActive={prayerState.incredibleReflexes}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Protect_from_Magic.png"
          alt="Protect from Magic"
          isActive={prayerState.protMagic}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Protect_from_Missiles.png"
          alt="Protect from Missiles"
          isActive={prayerState.protRanged}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Protect_from_Melee.png"
          alt="Protect from Melee"
          isActive={prayerState.protMelee}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Eagle_Eye.png"
          alt="Eagle Eye"
          isActive={prayerState.eagleEye}
          onPress={() => {}}
        ></Prayer>

        <Prayer
          src="/prayers/Mystic_Might.png"
          alt="Mystic Might"
          isActive={prayerState.mysticMight}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Retribution.png"
          alt="Retribution"
          isActive={prayerState.retribution}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Redemption.png"
          alt="Redemption"
          isActive={prayerState.redemption}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Smite.png"
          alt="Smite"
          isActive={prayerState.smite}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Preserve.png"
          alt="Preserve"
          isActive={prayerState.preserve}
          onPress={() => {}}
        ></Prayer>

        <Prayer
          src="/prayers/Chivalry.png"
          alt="Chivalry"
          isActive={prayerState.chivalry}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Piety.png"
          alt="Piety"
          isActive={prayerState.piety}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Rigour.png"
          alt="Rigour"
          isActive={prayerState.rigour}
          onPress={() => {}}
        ></Prayer>
        <Prayer
          src="/prayers/Augury.png"
          alt="Augury"
          isActive={prayerState.augury}
          onPress={() => {}}
        ></Prayer>
      </div>
    </div>
  );

  const ruinousBook = <></>;
  // define this when the book comes out

  return normalBook;
}
