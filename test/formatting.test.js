import { describe, expect, test } from "vitest";

import { formatArtist } from "../js/formatting";

describe("function [formatArtist]", () => {
	test("return empty witout artist", () => {
		expect(formatArtist()).toBe("");
	});
	test("return artist capitalized", () => {
		expect(formatArtist("EMilia berTolé")).toBe("Emilia Bertolé");
	});
	test("return artist collapse spaces", () => {
		expect(formatArtist("Emilia            Bertolé")).toBe("Emilia Bertolé");
	});
	test("return artist collapse spaces", () => {
		expect(formatArtist("Emilia\n            Bertolé")).toBe("Emilia Bertolé");
	});
});
