import style from './PlayerLookup.module.css'

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
          <input name="rsn-input" className={style.inputBox}></input>
          <button type="submit" className={style.submitButton}>Lookup</button>
        </label>
      </form>
    </>
  );
}
