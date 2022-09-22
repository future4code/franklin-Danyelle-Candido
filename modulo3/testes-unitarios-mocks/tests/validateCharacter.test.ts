import {validateCharacter} from "../src/index"

describe("testes ValidateCharacter", () => {

  test("Should return false for empty name (exo 2-a) ", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for life equal 0 (exo 2-b) ", () => {
    const result = validateCharacter({
      name: "Inês Brasil",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for strength equal 0 (exo 2-c) ", () => {
    const result = validateCharacter({
      name: "Inês Brasil",
      life: 300,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for defense equal 0 (exo 2-c) ", () => {
    const result = validateCharacter({
      name: "Inês Brasil",
      life: 300,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });

  test("Should return false for life 0(exo 2-f)", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: -10,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return true for all valid inputs(exo 2-d)", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

});
