import {expect, test} from "bun:test";
import { add, subtract, multiply, divide } from "../math";

test("soma", () =>  {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
    expect(add(1.5, 2.5)).toBe(4);
    expect(add(-1.5, 1.5)).toBe(0);
} )

test("subtração", () =>  {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(-1, -1)).toBe(0);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(1.5, 0.5)).toBe(1);
    expect(subtract(-1.5, 1.5)).toBe(-3);
} )

test("multiplicação", () =>  {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(1.5, 2)).toBe(3);
    expect(multiply(-1.5, 2)).toBe(-3);
} )

test("divisão", () =>  {
    expect(divide(6, 2)).toBe(3);
    expect(divide(-1, -1)).toBe(1);
    expect(divide(0, 5)).toBe(0);
    expect(divide(1.5, 0.5)).toBe(3);
    expect(divide(-1.5, 2)).toBe(-0.75);
    expect(() => divide(5, 0)).toThrow("Divisão por zero não é permitida");
} )