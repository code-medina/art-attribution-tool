import { describe, expect, test } from 'vitest'
import { generateTemplate } from "../js/template";

describe("generateTemplate ",()=>{


  test("return inspiration template", () => {
    expect(generateTemplate("inspiration", "Emilia Bertolé"))
      .toBe(
        "Inspirado en Emilia Bertolé",
      );
  });
  test("return empty for data empty", () => {
    expect(generateTemplate("inspiration"))
      .toBe("");
  });
  test("return inspiration formatting", () => {
    expect(generateTemplate("reference", "emilia bertolé")).
      toBe(`Inspirado en Emilia Bertolé`);
  });
})
