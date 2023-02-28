import { strict } from "assert";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let numbers2: number[];
    const len = numbers.length;
    if (numbers.length == 0) {
        numbers2 = [];
    } else if (numbers.length == 1) {
        numbers2 = [...numbers, ...numbers];
    } else {
        numbers2 = [numbers[0]];
        numbers2.splice(2, 0, numbers[len - 1]);
    }
    return numbers2;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let asNums = numbers.map((numbers: string): number => Number(numbers));
    asNums = asNums.map((asNums: number): number =>
        Number.isNaN(asNums) ? (asNums = 0) : asNums
    );
    return asNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removedDollar = amounts.map((amounts: string): string =>
        amounts.startsWith("$") ? amounts.substr(1) : amounts
    );
    return stringsToIntegers(removedDollar);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let alteredList = [...messages];
    alteredList = alteredList.map((alteredList: string): string =>
        alteredList.endsWith("!") ? alteredList.toUpperCase() : alteredList
    );
    alteredList = alteredList.filter(
        (alteredList: string): boolean => !alteredList.endsWith("?")
    );
    return alteredList;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter(
        (words: string): boolean => words.length < 4
    );

    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    }
    const rgb = colors.every((colors: string): boolean =>
        ["red", "green", "blue"].includes(colors)
    );
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // let str = "";
    // const newList = [...addends];
    // let asStr: string[] = [];
    // if (newList.length == 0) {
    //     return "0=0";
    // }
    // const total = newList.reduce(
    //     (count: number, num: number) => count + num,
    //     0
    // );
    // asStr = newList.map((newList: number): string => newList.toString());
    // str += total.toString() + "=";

    // return "";
    if (addends.length == 0) {
        return "0=0";
    } else {
        const total = addends.reduce((a, b) => a + b, 0);
        const asMath = addends.map((num: number): string => num.toString());
        return total + "=" + asMath.join("+");
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newlist = [...values];
    //let neg1 = -1;
    const neg1 = values.find((values: number): boolean => values < 0);
    const negIndex = values.findIndex((values: number): boolean => values < 0);
    if (!neg1) {
        const total = values.reduce(
            (runningTot: number, num: number) => runningTot + num,
            0
        );
        newlist.push(total);
    } else {
        const clone = values.slice(0, negIndex);
        const total = clone.reduce(
            (runningTot: number, num: number) => runningTot + num,
            0
        );
        newlist.splice(negIndex + 1, 0, total);
    }
    return newlist;
}
