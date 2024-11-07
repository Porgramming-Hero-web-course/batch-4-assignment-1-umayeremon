{
  //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  function countWordOccurrences(sentence: string, word: string): number {
    const sentenceCase = sentence.toLowerCase();
    const wordCase = word.toLowerCase();

    const ignoreDot = sentenceCase.replace(/[.,!?;:]/g, "");

    const findWord = ignoreDot.split(" ");
    return findWord.filter((word) => word === wordCase).length;
  }

  const countedWord = countWordOccurrences(
    "i Love typescript. i Love typescript.",
    "typescript"
  );
  console.log(countedWord);
  //
}
