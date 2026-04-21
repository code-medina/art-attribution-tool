import { describe, expect, test } from "vitest";

import { formatWork } from "../js/formatting";

describe("function [formatWork]", () => {
	test("return empty witout work", () => {
		expect(formatWork()).toBe("");
	});
	test("return work without double empty space", () => {
		expect(formatWork("EMilia     berTolé")).toBe("EMilia berTolé");
	});
	test("return work colapse space", () => {
		expect(formatWork("          Emilia            Bertolé")).toBe("Emilia Bertolé");
	});
	test("return artist collapse spaces", () => {
		expect(formatWork("Emilia\n            Bertolé")).toBe("Emilia Bertolé");
	});
});
