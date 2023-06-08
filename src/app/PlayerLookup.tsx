import style from "./StatOverview.module.css";

export default function PlayerLookup({
  onSubmit: submitFn,
}: {
  onSubmit: (x: string) => void;
}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitFn(
            new FormData(e.target as HTMLFormElement)
              .get("rsn-input")!
              .toString()
          );
        }}
      >
        <label className={style.statLabel}>
          RSN
          <input name="rsn-input" className={style.nameLookup}></input>
          <button type="submit">Lookup</button>
        </label>
      </form>
    </>
  );
}
