import { describe, expect, test} from "vitest";
import { generateTemplate } from "../js/template";

describe("generateTemplate", () => {
	test("return inspiration template", () => {
		expect(generateTemplate("inspiration", {artist:"Emilia Bertolé"})).toBe(
			"Inspirado en Emilia Bertolé",
		);
	});
	test("return empty for data empty", () => {
		expect(generateTemplate("inspiration")).toBe("");
	});
	test("return inspiration formatting", () => {
		expect(generateTemplate("inspiration", {artist:"emilia bertolé"})).toBe(
			`Inspirado en Emilia Bertolé`,
		);
	});
	test("return empty for empty args", () => {
		expect(generateTemplate()).toBe("");
	});

	test("return empty for  wrong type", () => {
		expect(generateTemplate("wrong", {artist:"Emilia Bertolé"})).toBe("");
	});
	test("return reference template", () => {
		expect(generateTemplate("reference", {artist:"Emilia Bertolé"})).toBe(
			"Referencia en obra de Emilia Bertolé",
		);
	});
	test("return empty with reference and data empty", () => {
		expect(generateTemplate("reference", " ")).toBe("");
	});
	test("return tribute template ", () => {
		expect(generateTemplate("tribute", {artist:"Emilia Bertolé"})).toBe(
			"Homenaje a Emilia Bertolé",
		);
	});
	test("return reinterpretation template ", () => {
		expect(generateTemplate("reinterpretation", {artist:"Emilia Bertolé"})).toBe(
			"Reinterpretacion de obra de Emilia Bertolé",
		);
	});
	test("return inspiration with artist and artist's work", () => {
		expect(
			generateTemplate("inspiration", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
			}),
		).toBe(`Inspirado en obra "Retrato de mi madre" de Emilia Bertolé`);
	});
});
