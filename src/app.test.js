const fn = require('./fn');

const { countVowels } = fn;

/**
 * countVowels
 */
describe('[countVowels]', () => {
  /**
   * NORMAL TEST
   */
  describe('[NORMAL TEST]', () => {
    describe('[CASE1]Hello, world!', () => {
      test('The number of vowel occurrences in text should be 3', () => {
        const result = countVowels('hello, world!');
        expect(result).toBe(3);
        expect(result).toBeGreaterThan(0);
      });

      test('The number of vowel occurrences in text should be 3', () => {
        const result = countVowels('HELLO, WORLD!');
        expect(result).toBe(3);
        expect(result).toBeGreaterThan(0);
      });
    });
    describe('[CASE2]Long time no see!', () => {
      test('The number of vowel occurrences in text should be 6', () => {
        const result = countVowels('Long time no see!');
        expect(result).toBe(6);
        expect(result).toBeGreaterThan(0);
      });

      test('The number of vowel occurrences in text should be 6', () => {
        const result = countVowels('long_time_no_see');
        expect(result).toBe(6);
        expect(result).toBeGreaterThan(0);
      });
    });
    describe('[CASE3]Thank you for your cooperation!!', () => {
      test('The number of vowel occurrences in text should be 12', () => {
        const result = countVowels('Thank you for your cooperation!!');
        expect(result).toBe(12);
        expect(result).toBeGreaterThan(0);
      });

      test('The number of vowel occurrences in text should be 12', () => {
        const result = countVowels('ThankYouForYourCooperation');
        expect(result).toBe(12);
        expect(result).toBeGreaterThan(0);
      });
    });
  });
  /**
   * EXCEPTION TEST
   */
  describe('[EXCEPTION TEST]', () => {
    describe('[CASE1]Validation', () => {
      test('should throw an error(text is null!)', () => {
        const text = null;
        try {
          const result = countVowels(text);
          console.info(`[${text}]countVowels result=`, result);
        } catch (error) {
          console.info(`[ERROR]countVowels error=`, error);
          expect(error.message).toMatch(/null/);
          expect(() => countVowels(text)).toThrow(/null/);
        }
      });
      test('should throw an error(text is not string!)', () => {
        const text = 0;
        try {
          const result = countVowels(text);
          console.info(`[${text}]countVowels result=`, result);
        } catch (error) {
          console.info(`[ERROR]countVowels error=`, error);
          expect(error.message).toMatch(/not string/);
          expect(() => countVowels(text)).toThrow(/not string/);
        }
      });
      test('should throw an error(text should not exceed 40 characters!)', () => {
        const text =
          'rwqeruweyrowurywiqreywoirywiryqiweruyiwrfasdfsadfasfsafasfafsafayiqwerywqirueyo';
        try {
          const result = countVowels(text);
          console.info(`[${text}]countVowels result=`, result);
        } catch (error) {
          console.info(`[ERROR]countVowels error=`, error);
          expect(error.message).toMatch(/not exceed 40 characters/);
          expect(() => countVowels(text)).toThrow(/not exceed 40 characters/);
        }
      });
    });
  });
});
