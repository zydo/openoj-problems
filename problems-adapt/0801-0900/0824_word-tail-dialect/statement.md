# Word Tail Dialect

## Description

Convert a sentence into a small word-by-word dialect. The sentence has words
separated by single spaces, and every word contains only English letters.
Apply the following transformation to the words in order:

- If a word starts with a vowel (`a`, `e`, `i`, `o`, or `u`, in either case),
  leave its letters in place. Otherwise, move its first letter to its end.
- Append `"ma"`.
- Append `'a'` repeated once for the first word, twice for the second word,
  and so on.

Return the transformed words joined by single spaces.

### Example 1

```text
Input: sentence = "Apple tree"
Output: "Applemaa reetmaaa"
```

### Example 2

```text
Input: sentence = "you Are Here"
Output: "ouymaa Aremaaa ereHmaaaa"
```

### Constraints

- `1 <= sentence.length <= 150`
- `sentence` contains English letters and spaces.
- It has no leading or trailing spaces.
- Adjacent words are separated by exactly one space.
