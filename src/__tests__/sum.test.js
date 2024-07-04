import { Sum } from "../sum";

test("sum function should calculate the sum of two number", () => {
  const result = Sum(3, 4);

  expect(result).toBe(7);
});
