import {describe, it, assert} from 'poku';
import {add, subtract, multiply, divide} from '../math.ts';

describe('Operações matemáticas', () => {
    it('Testando o método "soma"', () => {
        assert.strictEqual(add(0, 0), 0, 'deve retornar zero');
        assert.strictEqual(add(0, 1), 1, 'deve retornar um');
        assert.strictEqual(add(1, 1), 2, 'deve retornar dois');
    });
    it('Testando o método "subtração"', () => {
        assert.strictEqual(subtract(0, 0), 0, 'deve retornar zero');
        assert.strictEqual(subtract(0, 1), -1, 'deve retornar um negativo');
        assert.strictEqual(subtract(1,1), 0, 'deve retornar zero');
    })
})