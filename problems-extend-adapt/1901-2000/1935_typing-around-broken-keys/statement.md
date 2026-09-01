# Typing Around Broken Keys

## Description

A keyboard has a handful of dead keys: every letter that appears in a
given list refuses to register when pressed, while all the remaining keys
behave normally.

You are given a string `text` made up of lowercase words separated by
single spaces (there is no leading or trailing space), and a string
`brokenLetters` listing the distinct lowercase letters whose keys are
broken. Count how many words of `text` can be typed in full — a word
qualifies only when none of its letters sits on a broken key.

### Example 1

```text
Input: text = "keep going", brokenLetters = "e"
Output: 1
Explanation: the broken 'e' stops "keep" partway through, but "going"
needs no broken key.
```

### Example 2

```text
Input: text = "run walk climb", brokenLetters = "uz"
Output: 2
Explanation: "run" hits the dead 'u', while "walk" and "climb" use only
working keys.
```

### Example 3

```text
Input: text = "daily practice", brokenLetters = ""
Output: 2
Explanation: with no broken keys, every word goes through untouched.
```

### Constraints

- `1 <= text.length <= 10⁴`
- `0 <= brokenLetters.length <= 26`
- `text` is a sequence of words separated by single spaces, with no
  leading or trailing spaces.
- Every word consists of lowercase English letters.
- `brokenLetters` consists of distinct lowercase English letters.

## Hints

### Hint 1

Judge each word on its own; the words never interact.

### Hint 2

A word passes exactly when none of its characters belongs to the broken
set. With at most 26 distinct broken letters, collecting them into a set
makes every check constant time.
