# Even Out the Spaces Between Words

## Description

You receive a string `text` in which lowercase words sit scattered among
an assortment of space characters. Every word is at least one letter
long, consecutive words are separated by one or more spaces, and `text`
is guaranteed to hold at least one word.

Redistribute the spaces so that every gap between two neighboring words
holds the same number of spaces — as many as the supply allows. Whatever
spaces cannot fit into the equal gaps pile up at the end of the string,
so the output always has exactly the same length as `text`. Return the
rebuilt string.

### Example 1

```text
Input: text = " go   for  a  run  "
Output: "go   for   a   run "
Explanation: The string holds 10 spaces spread over 4 words, so each of
the 3 gaps takes 10 / 3 = 3 spaces and 1 space is left over. That leftover
space lands at the end.
```

### Example 2

```text
Input: text = "  one  two "
Output: "one     two"
Explanation: There are 5 spaces and just 2 words, so the single gap
absorbs all 5 and nothing remains for the end.
```

### Example 3

```text
Input: text = "   sleepy    "
Output: "sleepy       "
Explanation: Only one word is present, so there are no gaps to fill and
all 7 spaces become trailing spaces.
```

### Constraints

- `1 <= text.length <= 100`
- `text` consists of lowercase English letters and `' '`.
- `text` contains at least one word.

## Hints

### Hint 1

Tally the spaces and the words first. Integer division by the gap count
tells you how many spaces each gap gets; the remainder of that division
is what trails the last word.
