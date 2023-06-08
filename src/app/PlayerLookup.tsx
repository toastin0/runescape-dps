import react from "react";
import { ILevels } from "./types";

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
        <label>
          RSN
          <input name="rsn-input"></input>
        </label>
        <button type="submit">Lookup</button>
      </form>
    </>
  );
}
