import React from "react";
import Prayer from "./Prayer";
import style from "./Prayer.module.css";
import { IPrayerEnabled, prayerKeys } from "./types";

// to whom it may concern: i am sorry
export default function Prayergrid({
  prayerBook,
  prayerState,
  prayerModify,
}: {
  prayerBook: "normal" | "ruinous";
  prayerState: IPrayerEnabled;
  prayerModify: (prayerName: prayerKeys) => void;
}) {
  const normalBook = (
    <div id="prayer-controls" style={{ width: "204px" }}>
      <div className={style.prayerList}>
        <Prayer
          src="/prayers/Thick_Skin.png"
          alt="Thick Skin"
          isActive={prayerState.thickSkin}
          onPress={() => {
            prayerModify("thickSkin");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Burst_of_Strength.png"
          alt="Burst of Strength"
          isActive={prayerState.burstStrength}
          onPress={() => {
            prayerModify("burstStrength");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Clarity_of_Thought.png"
          alt="Clarity of Thought"
          isActive={prayerState.clarityThought}
          onPress={() => {
            prayerModify("clarityThought");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Sharp_Eye.png"
          alt="Sharp Eye"
          isActive={prayerState.sharpEye}
          onPress={() => {
            prayerModify("sharpEye");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Mystic_Will.png"
          alt="Mystic Will"
          isActive={prayerState.mysticWill}
          onPress={() => {
            prayerModify("mysticWill");
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Rock_Skin.png"
          alt="Rock Skin"
          isActive={prayerState.rockSkin}
          onPress={() => {
            prayerModify("rockSkin");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Superhuman_Strength.png"
          alt="Superhuman Strength"
          isActive={prayerState.superStrength}
          onPress={() => {
            prayerModify("superStrength");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Improved_Reflexes.png"
          alt="Improved Reflexes"
          isActive={prayerState.improvedReflexes}
          onPress={() => {
            prayerModify("improvedReflexes");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Rapid_Restore.png"
          alt="Rapid Restore"
          isActive={prayerState.rapidRestore}
          onPress={() => {
            prayerModify("rapidRestore");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Rapid_Heal.png"
          alt="Rapid Heal"
          isActive={prayerState.rapidHeal}
          onPress={() => {
            prayerModify("rapidHeal");
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Protect_Item.png"
          alt="Protect Item"
          isActive={prayerState.protItem}
          onPress={() => {
            prayerModify("protItem");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Hawk_Eye.png"
          alt="Hawk Eye"
          isActive={prayerState.hawkEye}
          onPress={() => {
            prayerModify("hawkEye");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Mystic_Lore.png"
          alt="Mystic Lore"
          isActive={prayerState.mysticLore}
          onPress={() => {
            prayerModify("mysticLore");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Steel_Skin.png"
          alt="Steel Skin"
          isActive={prayerState.steelSkin}
          onPress={() => {
            prayerModify("steelSkin");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Ultimate_Strength.png"
          alt="Ultimate Strength"
          isActive={prayerState.ultimateStrength}
          onPress={() => {
            prayerModify("ultimateStrength");
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Incredible_Reflexes.png"
          alt="Incredible Reflexes"
          isActive={prayerState.incredibleReflexes}
          onPress={() => {
            prayerModify("incredibleReflexes");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Protect_from_Magic.png"
          alt="Protect from Magic"
          isActive={prayerState.protMagic}
          onPress={() => {
            prayerModify("protMagic");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Protect_from_Missiles.png"
          alt="Protect from Missiles"
          isActive={prayerState.protRanged}
          onPress={() => {
            prayerModify("protRanged");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Protect_from_Melee.png"
          alt="Protect from Melee"
          isActive={prayerState.protMelee}
          onPress={() => {
            prayerModify("protMelee");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Eagle_Eye.png"
          alt="Eagle Eye"
          isActive={prayerState.eagleEye}
          onPress={() => {
            prayerModify("eagleEye");
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Mystic_Might.png"
          alt="Mystic Might"
          isActive={prayerState.mysticMight}
          onPress={() => {
            prayerModify("mysticMight");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Retribution.png"
          alt="Retribution"
          isActive={prayerState.retribution}
          onPress={() => {
            prayerModify("retribution");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Redemption.png"
          alt="Redemption"
          isActive={prayerState.redemption}
          onPress={() => {
            prayerModify("redemption");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Smite.png"
          alt="Smite"
          isActive={prayerState.smite}
          onPress={() => {
            prayerModify("smite");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Preserve.png"
          alt="Preserve"
          isActive={prayerState.preserve}
          onPress={() => {
            prayerModify("preserve");
          }}
        ></Prayer>

        <Prayer
          src="/prayers/Chivalry.png"
          alt="Chivalry"
          isActive={prayerState.chivalry}
          onPress={() => {
            prayerModify("chivalry");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Piety.png"
          alt="Piety"
          isActive={prayerState.piety}
          onPress={() => {
            prayerModify("piety");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Rigour.png"
          alt="Rigour"
          isActive={prayerState.rigour}
          onPress={() => {
            prayerModify("rigour");
          }}
        ></Prayer>
        <Prayer
          src="/prayers/Augury.png"
          alt="Augury"
          isActive={prayerState.augury}
          onPress={() => {
            prayerModify("augury");
          }}
        ></Prayer>
      </div>
    </div>
  );

  // define this when the book comes out
  const ruinousBook = <></>;

  return normalBook;
}
