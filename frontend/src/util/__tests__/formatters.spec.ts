import { FormatPrice } from "util/formatters";

describe('formatPrice for positive numbers', () => {
  //it('formatPrice should format number pt-BR when given 10.1', () => {
    test('formatPrice should format number pt-BR when given 10.1', () => {
        // ARRANGE
        const value = 10.1;
        // ACT
        const result = FormatPrice(value);
        // ASSERT
        expect(result).toEqual('10,10');
    });

    test('formatPrice should format number pt-BR when given 0.1', () => {
        const value = 0.1;
        const result = FormatPrice(value);
        expect(result).toEqual('0,10');
    });
})

describe('formatPrice for non-positive numbers', () => {
    test('formatPrice should format number pt-BR when given 0', () => {
        const value = 0;
        const result = FormatPrice(value);
        expect(result).toEqual('0,00');
    });

    test('formatPrice should format number pt-BR when given -5.1', () => {
        const value = -5.1;
        const result = FormatPrice(value);
        expect(result).toEqual('-5,10');
    });
})