// Example utility functions for testing
export function add(a: number, b: number): number {
  return a + b;
}

export function formatName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim();
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Tests for utility functions
describe('Utility Functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('formatName', () => {
    it('should format first and last name', () => {
      expect(formatName('John', 'Doe')).toBe('John Doe');
    });

    it('should handle empty strings', () => {
      expect(formatName('', 'Doe')).toBe('Doe');
      expect(formatName('John', '')).toBe('John');
      expect(formatName('', '')).toBe('');
    });

    it('should trim whitespace', () => {
      expect(formatName(' John ', ' Doe ')).toBe('John   Doe');
    });
  });

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-2)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(-1)).toBe(false);
    });
  });
});
