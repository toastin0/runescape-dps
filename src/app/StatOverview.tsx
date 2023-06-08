import { ILevels } from "./types";
import style from "./StatOverview.module.css";
import StatInput from "./StatInput";
export default function StatOverview({
  levelState: levels,
  changeLevel: changeLevel,
}: {
  levelState: ILevels;
  changeLevel: (prayerName: keyof ILevels, lvl: number) => void;
}) {
  return (
    <div className={style.statDisplay}>
      <form>
        <StatInput skillName="attack" skillLevel={levels.attack} changeLevel={changeLevel}></StatInput>
        <StatInput skillName="strength" skillLevel={levels.strength} changeLevel={changeLevel}></StatInput>
        <StatInput skillName="defence" skillLevel={levels.defence} changeLevel={changeLevel}></StatInput>
        <StatInput skillName="ranged" skillLevel={levels.ranged} changeLevel={changeLevel}></StatInput>
        <StatInput skillName="prayer" skillLevel={levels.prayer} changeLevel={changeLevel}></StatInput>
        <StatInput skillName="magic" skillLevel={levels.magic} changeLevel={changeLevel}></StatInput>
        <StatInput skillName="hitpoints" skillLevel={levels.hitpoints} changeLevel={changeLevel}></StatInput>
      </form>
    </div>
  );
}
