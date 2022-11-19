type Day4 = {
  <T>(arr: T[], item?: T): T[] | T;
};

const last: Day4 = (arr) => arr[arr.length - 1]; // arr.at(-1) : undefined

const prepend: Day4 = (arr, item) => {
  if (item !== undefined) {
    arr.unshift(item);
  }
  return arr;
};

let fruits = ["🍇", "🍋", "🍓", "🍎", "🥑"];

console.log(last(fruits));
console.log(prepend(fruits, "🍊"));
