import { add, multiply } from "./maths";

const heading = document.querySelector<HTMLHeadingElement>("#result");

if (!heading) {
  throw new Error("Result element was not found");
}

const addition = add(10, 5);
const multiplication = multiply(10, 5);

heading.textContent = `
  10 + 5 = ${addition}
  | 10 × 5 = ${multiplication}
`;
