import { ILevels } from "./types";

export default function StatOverview({
  levelState: levels,
  changeLevel: changeLevel,
}: {
  levelState: ILevels;
  changeLevel: (prayerName: keyof ILevels, lvl: number) => void;
}) {
  return (
    <div className="player-stats">
      <form>
        <label>
          Attack:
          <input
            type="number"
            value={levels.attack}
            onChange={(e) =>
              changeLevel("attack", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label>
          Strength:
          <input
            type="number"
            value={levels.strength}
            onChange={(e) =>
              changeLevel("strength", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label>
          Defence:
          <input
            type="number"
            value={levels.defence}
            onChange={(e) =>
              changeLevel("defence", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label>
          Ranged:
          <input
            type="number"
            value={levels.ranged}
            onChange={(e) =>
              changeLevel("ranged", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label>
          Prayer:
          <input
            type="number"
            value={levels.prayer}
            onChange={(e) =>
              changeLevel("prayer", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label>
          Magic:
          <input
            type="number"
            value={levels.magic}
            onChange={(e) =>
              changeLevel("magic", parseInt(e.target.value, 10))
            }
          ></input>
        </label>
        <label>
          Hitpoints:
          <input
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
