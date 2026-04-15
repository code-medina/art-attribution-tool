import { describe, expect, test } from "vitest";
import { generateTemplate } from "../js/template";

describe("generateTemplate", () => {
	test("return inspiration template", () => {
		expect(generateTemplate("inspiration", { artist: "Emilia Bertolé" })).toBe(
			"Inspirado en Emilia Bertolé.",
		);
	});
	test("return empty for data empty", () => {
		expect(generateTemplate("inspiration")).toBe("");
	});
	test("return inspiration formatting", () => {
		expect(generateTemplate("inspiration", { artist: "emilia bertolé" })).toBe(
			`Inspirado en Emilia Bertolé.`,
		);
	});
	test("return empty for empty args", () => {
		expect(generateTemplate()).toBe("");
	});

	test("return empty for  wrong type", () => {
		expect(generateTemplate("wrong", { artist: "Emilia Bertolé" })).toBe("");
	});
	test("return reference template", () => {
		expect(generateTemplate("reference", { artist: "Emilia Bertolé" })).toBe(
			"Referencia a la obra de Emilia Bertolé.",
		);
	});
	test("return empty with reference and data empty", () => {
		expect(generateTemplate("reference", " ")).toBe("");
	});
	test("return tribute template ", () => {
		expect(generateTemplate("tribute", { artist: "Emilia Bertolé" })).toBe(
			"Homenaje a Emilia Bertolé.",
		);
	});
	test("return reinterpretation template ", () => {
		expect(
			generateTemplate("reinterpretation", { artist: "Emilia Bertolé" }),
		).toBe("Reinterpretación de obra de Emilia Bertolé.");
	});
	test("return inspiration with artist and artist's work", () => {
		expect(
			generateTemplate("inspiration", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
			}),
		).toBe(`Inspirado en la obra "Retrato de mi madre", de Emilia Bertolé.`);
	});

	test("return reference with artist and artist's work", () => {
		expect(
			generateTemplate("reference", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
			}),
		).toBe(`Referencia a la obra "Retrato de mi madre", de Emilia Bertolé.`);
	});
	test("return tribute with artist and artist's work", () => {
		expect(
			generateTemplate("tribute", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
			}),
		).toBe(`Homenaje a la obra "Retrato de mi madre", de Emilia Bertolé.`);
	});
	test("return reinterpretation with artist and artist's work", () => {
		expect(
			generateTemplate("reinterpretation", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
			}),
		).toBe(
			`Reinterpretación de la obra "Retrato de mi madre", de Emilia Bertolé.`,
		);
	});
	test("return inspiration with artist and artist's work,year", () => {
		expect(
			generateTemplate("inspiration", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
				year: 1928,
			}),
		).toBe(
			`Inspirado en la obra "Retrato de mi madre" (1928), de Emilia Bertolé.`,
		);
	});
	test("return reference with artist and artist's work,year", () => {
		expect(
			generateTemplate("reference", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
				year: 1928,
			}),
		).toBe(
			`Referencia a la obra "Retrato de mi madre" (1928), de Emilia Bertolé.`,
		);
	});
	test("return tribute with artist and artist's work", () => {
		expect(
			generateTemplate("tribute", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
				year: 1928,
			}),
		).toBe(
			`Homenaje a la obra "Retrato de mi madre" (1928), de Emilia Bertolé.`,
		);
	});
	test("return reinterpretation with artist and artist's work", () => {
		expect(
			generateTemplate("reinterpretation", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
				year: 1928,
			}),
		).toBe(
			`Reinterpretación de la obra "Retrato de mi madre" (1928), de Emilia Bertolé.`,
		);
	});

	test("return inspiration with artist and artist's work,year,ubication", () => {
		expect(
			generateTemplate("inspiration", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
				year: 1928,
				ubication: "Museo de la Plata",
			}),
		).toBe(
			`Inspirado en la obra "Retrato de mi madre" (1928), de Emilia Bertolé. Museo de la Plata`,
		);
	});
	test("return reference with artist and artist's work,year,ubication", () => {
		expect(
			generateTemplate("reference", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
				year: 1928,
				ubication: "Museo de la Plata",
			}),
		).toBe(
			`Referencia a la obra "Retrato de mi madre" (1928), de Emilia Bertolé. Museo de la Plata`,
		);
	});
	test("return tribute with artist and artist's work,year,ubication", () => {
		expect(
			generateTemplate("tribute", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
				year: 1928,
				ubication: "Museo de La Plata",
			}),
		).toBe(
			`Homenaje a la obra "Retrato de mi madre" (1928), de Emilia Bertolé. Museo de La Plata`,
		);
	});
	test("return reinterpretation with artist and artist's work,ubication", () => {
		expect(
			generateTemplate("reinterpretation", {
				artist: "Emilia Bertolé",
				work: "Retrato de mi madre",
				year: 1928,
				ubication: "Museo de La Plata",
			}),
		).toBe(
			`Reinterpretación de la obra "Retrato de mi madre" (1928), de Emilia Bertolé. Museo de La Plata`,
		);
	});
});
//Apellido, N. (año). Título de la Obra de Arte [Formato]. Ubicación de la obra. URL
