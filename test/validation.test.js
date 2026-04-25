import { describe, expect, test } from "vitest";
import { validationMaxLength, validationMinLength } from "../js/validation";

describe("function [validationMinLength & validationMaxLength]", () => {
    test("[validationMaxLegth]return false without param", () => {
        expect(validationMaxLength()).toBe(false);
    })
    test("[validationMaxLegth]return false without param {}", () => {
        expect(validationMaxLength({})).toBe(false);
    })
    test("[validationMaxLegth]return false with param number", () => {
        expect(validationMaxLength(1)).toBe(false);
    })
    test("[validationMaxLegth]return false with null", () => {
        expect(validationMaxLength(null)).toBe(false);
    })
    test("[validationMaxLegth]return false with param value:hola legth:2", () => {
        expect(validationMaxLength("hola", 2)).toBe(false);
    })
    test("[validationMaxLegth]return true without param value:hola lenght:4", () => {
        expect(validationMaxLength("hola")).toBe(true);
    })
    test("[validationMaxLegth]return true without param value:hola lenght:4", () => {
        expect(validationMaxLength("   hola")).toBe(true);
    })


    test("[validationMinLegth]return false without param", () => {
        expect(validationMinLength()).toBe(false);
    })

    test("[validationMinLegth]return false with param {}", () => {
        expect(validationMinLength({})).toBe(false);
    })

    test("[validationMinLegth]return false with param number", () => {
        expect(validationMinLength(1)).toBe(false);
    })

    test("[validationMinLegth]return false with null", () => {
        expect(validationMinLength(null)).toBe(false);
    })

    test("[validationMinLegth]return false with param value:' o' legth:2", () => {
        expect(validationMinLength(" o")).toBe(false);
    })

    test("[validationMinLegth]return true with param value:hola lenght:4", () => {
        expect(validationMinLength("hola", 4)).toBe(true);
    })

    test("[validationMinLegth]return false with param value:'    ' lenght:1", () => {
        expect(validationMinLength("   ", 1)).toBe(false);
    })


})