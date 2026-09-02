# Longest Sentence Word Count

## Description

A sentence is a sequence of words with exactly one space between neighboring
words and no space at either end.

You are given an array of strings `sentences`, where `sentences[i]` is one
sentence.

Report how many words the wordiest of them contains.

### Example 1

```text
Input: sentences = ["the quick brown fox", "jumps over", "a lazy dog today"]
Output: 4
Explanation:
- "the quick brown fox" holds 4 words.
- "jumps over" holds 2 words.
- "a lazy dog today" holds 4 words.
The largest count among the sentences is 4.
```

### Example 2

```text
Input: sentences = ["one two three", "four five", "six seven eight"]
Output: 3
Explanation: Several sentences may tie for the largest count — here the
first and the third both contain 3 words.
```

### Constraints

- `1 <= sentences.length <= 100`
- `1 <= sentences[i].length <= 100`
- `sentences[i]` contains nothing but lowercase English letters and the space
  character `' '`.
- `sentences[i]` never starts or ends with a space.
- Within each `sentences[i]`, neighboring words are separated by exactly one
  space.

## Hints

### Hint 1

Work through the sentences one at a time. Because words are delimited by
single spaces, a sentence's word count is simply its number of spaces plus
one — then keep the largest count you see.
