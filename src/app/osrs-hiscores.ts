import { ILevels } from "./types";


export async function lookupByRSN(name: string): Promise<ILevels> {
  // this is bad code
  // see: https://runescape.wiki/w/Application_programming_interface#Hiscores_Lite_2
  return new Promise((resolve, reject) => {
    // i have to make an api call to myself who then goes and gets the api from jagex
    // this is because jagex did not properly implement CORS

    // @todo: make this not hard coded
    const baseURLString = 
      "http://localhost:3000/pull-from-jagex?player="
    const sanName = name
      .split("")
      .filter((x) => !/[^0-9a-z\s]/gi.test(x))
      .join("");
    if (sanName.length > 12 || sanName.includes("mod")) {
      // @todo make this an error message in the ui itself
      alert("Runescape Name invalid. Please enter a valid one");
      reject(new Error("invalid name"));
    }
    const lookupURL = new URL(baseURLString + sanName);
    fetch(lookupURL).then((response) => {
      response.text().then((responseText) => {
        const statsArr = responseText
          .split("\n")
          .map((val) => parseInt(val.split(",")[1]), 10)
          .slice(1, 8);
        const levelsInOrder = {
          attack: statsArr[0],
          defence: statsArr[1],
          strength: statsArr[2],
          hitpoints: statsArr[3],
          ranged: statsArr[4],
          prayer: statsArr[5],
          magic: statsArr[6]
        }
        resolve(levelsInOrder);
      });
    });
  });
}