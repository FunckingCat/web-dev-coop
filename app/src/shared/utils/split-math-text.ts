interface ISplittedText {
  type: 'math' | 'plain'
  value: string
}

export const splitMathText = (text: string, separator: string): ISplittedText[] => {
  const splittedText: ISplittedText[] = [];
  const { length } = text;

  let left = 0;
  let right = 0;
  let isMathSubstring = false;

  while (right <= length) {
    if (text[right] === separator || right === length) {
      splittedText.push({
        type: isMathSubstring ? 'math' : 'plain',
        value: text.substring(left, right)
      });

      left = right + 1;
      isMathSubstring = !isMathSubstring;
    }

    right++;
  }

  return splittedText;
};
