/**
 * countVowels
 * @param {string} text Text should not exceed 20 characters.
 * @returns {number} Returns the number of vowel(a, i, u, e, o) occurrences in the text.
 */
const countVowels = (text) => {
  // ==================================================
  // [STEP1]Validation
  // ==================================================
  if (text === null) {
    throw new Error('text is null!');
  }
  if (typeof text === 'string' || text instanceof String) {
    const textLength = text.length;
    if (textLength > 40) {
      throw new Error('text should not exceed 40 characters!');
    }
  } else {
    throw new Error('text is not string!');
  }

  // ==================================================
  // [STEP2]Main
  // ==================================================
  const modText = text.toLowerCase();
  let count = 0;
  for (let i = 0; i < modText.length; i += 1) {
    const targetEle = modText[i];
    if (
      targetEle === 'a' ||
      targetEle === 'i' ||
      targetEle === 'u' ||
      targetEle === 'e' ||
      targetEle === 'o'
    ) {
      count += 1;
    }
  }
  return count;
};

module.exports = {
  countVowels,
};
