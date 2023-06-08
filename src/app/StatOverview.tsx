import { ILevels } from "./types";
import style from "./StatOverview.module.css";
import SkillInput from "./SkillInput";
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
        <SkillInput skillName="attack" skillLevel={levels.attack} changeLevel={changeLevel}></SkillInput>
        <SkillInput skillName="strength" skillLevel={levels.strength} changeLevel={changeLevel}></SkillInput>
        <SkillInput skillName="defence" skillLevel={levels.defence} changeLevel={changeLevel}></SkillInput>
        <SkillInput skillName="ranged" skillLevel={levels.ranged} changeLevel={changeLevel}></SkillInput>
        <SkillInput skillName="prayer" skillLevel={levels.prayer} changeLevel={changeLevel}></SkillInput>
        <SkillInput skillName="magic" skillLevel={levels.magic} changeLevel={changeLevel}></SkillInput>
        <SkillInput skillName="hitpoints" skillLevel={levels.hitpoints} changeLevel={changeLevel}></SkillInput>
      </form>
    </div>
  );
}
