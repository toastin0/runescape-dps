import style from "./StatInput.module.css";
import { ILevels } from "./types";

export default function StatInput({
  skillName: name,
  skillLevel: lvlNumber,
  changeLevel: changeLevel,
}: {
  skillName: keyof ILevels;
  skillLevel: number;
  changeLevel: (prayerName: keyof ILevels, lvl: number) => void;
}) {
  return (
    <label>
      <input
        className={`${style.statInput} ${style[name]}`}
        type="number"
        value={lvlNumber}
        onChange={(e) =>
          changeLevel(name, parseInt(e.target.value, 10))
        }
      ></input>
    </label>
  );
}
