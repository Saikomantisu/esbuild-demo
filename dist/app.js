(() => {
  // src/maths.ts
  function add(a, b) {
    return a + b;
  }
  function multiply(a, b) {
    return a * b;
  }

  // src/main.ts
  var heading = document.querySelector("#result");
  if (!heading) {
    throw new Error("Result element was not found");
  }
  var addition = add(10, 5);
  var multiplication = multiply(10, 5);
  heading.textContent = `
  10 + 5 = ${addition}
  | 10 \xD7 5 = ${multiplication}
`;
})();
//# sourceMappingURL=app.js.map
