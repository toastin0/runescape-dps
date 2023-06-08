import { ActiveTab } from "./types";
import style from "./Menubar.module.css";
export default function Menubar({
  currentTab: currentTab,
  changeTab: changeTab,
}: {
  currentTab: ActiveTab;
  changeTab: (tab: ActiveTab) => void;
}) {
  return (
    <nav>
      <ul className={style.menuBar}>
        <li>
          <h2 className={style.appTitle}>Runescape DPS</h2>
        </li>
        <li>
          <button
            className={style.menuButton}
            onClick={() => changeTab(ActiveTab.Setup)}
          >
            Setup
          </button>
        </li>
        <li>
          <button
            className={style.menuButton}
            onClick={() => changeTab(ActiveTab.Results)}
          >
            Results
          </button>
        </li>
      </ul>
    </nav>
  );
}
