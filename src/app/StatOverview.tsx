import { ILevels } from "./types";
import style from "./inputs.module.css";
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
        <label className={style.statLabel}>
          Attack:
          <input
            className={style.statInput}
            type="number"
            value={levels.attack}
            onChange={(e) =>
              changeLevel("attack", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label className={style.statLabel}>
          Strength:
          <input
            className={style.statInput}
            type="number"
            value={levels.strength}
            onChange={(e) =>
              changeLevel("strength", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label className={style.statLabel}>
          Defence:
          <input
            className={style.statInput}
            type="number"
            value={levels.defence}
            onChange={(e) =>
              changeLevel("defence", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label className={style.statLabel}>
          Ranged:
          <input
            className={style.statInput}
            type="number"
            value={levels.ranged}
            onChange={(e) =>
              changeLevel("ranged", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label className={style.statLabel}>
          Prayer:
          <input
            className={style.statInput}
            type="number"
            value={levels.prayer}
            onChange={(e) =>
              changeLevel("prayer", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label className={style.statLabel}>
          Magic:
          <input
            className={style.statInput}
            type="number"
            value={levels.magic}
            onChange={(e) => changeLevel("magic", parseInt(e.target.value, 10))}
          ></input>
        </label>
        <label className={style.statLabel}>
          Hitpoints:
          <input
            className={style.statInput}
            type="number"
            value={levels.hitpoints}
            onChange={(e) =>
              changeLevel("hitpoints", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
      </form>
    </div>
  );
}
