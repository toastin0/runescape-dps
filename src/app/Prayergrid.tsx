import React from "react"
import Prayer from "./Prayer"
import style from './Prayer.module.css'
export default function Prayergrid({prayerBook}: {prayerBook: "normal" | "ruinous"}) {
  // i don't think there is a way to programmatically import
  // many images at once, so i am pretty sure that i just have to
  // manually do this. i am going to blame tc39 for this,
  // and choose not to blame myself
  const normalBook = 
    (
    <div id="prayer-controls" style={{width:"204px"}}>
      <div className={style.prayerList}>
          <Prayer src="/prayers/Thick_Skin.png" alt="Thick Skin"></Prayer>
          <Prayer src="/prayers/Burst_of_Strength.png" alt="Burst of Strength"></Prayer>
          <Prayer src="/prayers/Clarity_of_Thought.png" alt="Clarity of Thought"></Prayer>
          <Prayer src="/prayers/Sharp_Eye.png" alt="Sharp Eye"></Prayer>
          <Prayer src="/prayers/Mystic_Will.png" alt="Mystic Will"></Prayer>
        
          <Prayer src="/prayers/Rock_Skin.png" alt="Rock Skin"></Prayer>
          <Prayer src="/prayers/Superhuman_Strength.png" alt="Superhuman Strength"></Prayer>
          <Prayer src="/prayers/Improved_Reflexes.png" alt="Improved Reflexes"></Prayer>
          <Prayer src="/prayers/Rapid_Restore.png" alt="Rapid Restore"></Prayer>
          <Prayer src="/prayers/Rapid_Heal.png" alt="Rapid Heal"></Prayer>
        
          <Prayer src="/prayers/Protect_Item.png" alt="Protect Item"></Prayer>
          <Prayer src="/prayers/Hawk_Eye.png" alt="Hawk Eye"></Prayer>
          <Prayer src="/prayers/Mystic_Lore.png" alt="Mystic Lore"></Prayer>
          <Prayer src="/prayers/Steel_Skin.png" alt="Steel Skin"></Prayer>
          <Prayer src="/prayers/Ultimate_Strength.png" alt="Ultimate Strength"></Prayer>
        
          <Prayer src="/prayers/Incredible_Reflexes.png" alt="Incredible Reflexes"></Prayer>
          <Prayer src="/prayers/Protect_from_Magic.png" alt="Protect from Magic"></Prayer>
          <Prayer src="/prayers/Protect_from_Missiles.png" alt="Protect from Missiles"></Prayer>
          <Prayer src="/prayers/Protect_from_Melee.png" alt="Protect from Melee"></Prayer>
          <Prayer src="/prayers/Eagle_Eye.png" alt="Eagle Eye"></Prayer>
        
          <Prayer src="/prayers/Mystic_Might.png" alt="Mystic Might"></Prayer>
          <Prayer src="/prayers/Retribution.png" alt="Retribution"></Prayer>
          <Prayer src="/prayers/Redemption.png" alt="Redemption"></Prayer>
          <Prayer src="/prayers/Smite.png" alt="Smite"></Prayer>
          <Prayer src="/prayers/Preserve.png" alt="Preserve"></Prayer>
        
          <Prayer src="/prayers/Chivalry.png" alt="Chivalry"></Prayer>
          <Prayer src="/prayers/Piety.png" alt="Piety"></Prayer>
          <Prayer src="/prayers/Rigour.png" alt="Rigour"></Prayer>
          <Prayer src="/prayers/Augury.png" alt="Augury"></Prayer>
        

      </div>
    </div>
  )
  
  const ruinousBook = <></> 
  // define this when the book comes out

  return normalBook;
}