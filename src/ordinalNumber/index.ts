/**
 * Takes a number and turns it into an ordinal number.
 *
 * @param {number} input The input number to turn into an ordinal number.
 * @returns {string} A string representation of the input number as an ordinal number
 */

export function oN(input: number): string {
  let stringToAdd = ["th", "st", "nd", "rd"];
  let outputNum = input % 100;
  return (
    input +
    (stringToAdd[(outputNum - 20) % 10] ||
      stringToAdd[outputNum] ||
      stringToAdd[0])
  );
}

declare global {
  interface Number {
    /**
     * Takes a number and turns it into an ordinal number.
     *
     * @returns {string} A string representation of the input number as an ordinal number
     */
    oN: () => string;
  }
}

Number.prototype.oN = function () {
  let stringToAdd = ["th", "st", "nd", "rd"];
  let outputNum = this % 100;
  return (
    this +
    (stringToAdd[(outputNum - 20) % 10] ||
      stringToAdd[outputNum] ||
      stringToAdd[0])
  );
};