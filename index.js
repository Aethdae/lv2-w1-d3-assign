import { fibonacci, add, clamp, subtract } from "./utils/math.js";
import chalk from "chalk";

console.log(
  chalk.blue(`Fibonacci sequence in blue: ${fibonacci(120).join(" ")}.`),
);

console.log(
  chalk.red(
    `${clamp(Math.floor(Math.random() * 250), 10, 200)} should be between 10 and 200.`,
  ),
);

console.log(
  chalk.black.bgWhite(`Chaining chalk's methods: ${subtract(add(3, 5), 4)}.`),
);
