# Longest Word Chain

## Description

You are given a list of `words`. Every word is made of lowercase English
letters.

One word **grows into** another when the longer one can be produced from the
shorter by dropping in exactly one letter at some position, leaving the
remaining letters in their original sequence.

- For instance, `"rat"` grows into `"rate"`, and `"at"` grows into `"rat"`,
  but `"tone"` does not grow into `"notes"` — reaching it would mean
  reshuffling letters, not adding one.

A chain is a sequence of one or more words from the list in which each word
grows into the next. A word by itself counts as a chain of length 1.

Return the length of the longest chain that can be assembled out of the given
words.

### Example 1

```text
Input: words = ["r","ra","rat","rate","at","te"]
Output: 4
Explanation: r grows into ra, ra into rat, and rat into rate, for a chain of
four words. "at" also grows into "rat", but joining there yields only
["at","rat","rate"], which is shorter.
```

### Example 2

```text
Input: words = ["me","mel","melo","melon","melons"]
Output: 5
Explanation: Every word in the list takes part — each one adds a single
letter to the word before it.
```

### Example 3

```text
Input: words = ["tone","notes"]
Output: 1
Explanation: "notes" is one letter longer, yet no placement of an inserted
letter turns "tone" into it, since the shared letters would need to appear
in a different order. Each word stands alone.
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 16`
- `words[i]` contains lowercase English letters only.

## Hints

### Hint 1

Extending a word forward means guessing which letter to add and where — far
too many possibilities. What happens if you run the relation backwards and
shorten a word instead?

### Hint 2

Order the words by length. When you reach a word, every word one letter
shorter has already been handled, so each one-letter-shortened variant can be
looked up directly.

### Hint 3

The best chain ending at a word is one longer than the best chain ending at
any of its shortened variants that appear earlier in the list — or length 1
if none of them do.
