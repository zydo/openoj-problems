# How Often Each Word Shows Up

## Description

A text file arrives on standard input as a stream of lowercase words:
letters and single spaces only, with one or more spaces between
neighbouring words and any number of spaces around the line breaks.
Print every distinct word once — the word, a single space, its count —
ordered by descending count. No two words ever share a count, so the
order is always unambiguous.

### Example 1

```text
Input:
the day is sunny the the
the sunny is is
Output:
the 4
is 3
sunny 2
day 1
Explanation: `the` appears four times, `is` three, `sunny` twice and
`day` once, so the counts run down from four to one.
```

### Constraints

- The file holds between 1 and 1000 words.
- Every word is 1 to 20 lowercase English letters.
- Words are separated by one or more spaces; line breaks may sit
  between words.
- All word counts are distinct.
