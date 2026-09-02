# Well-Formed Words in a Sentence

## Description

A sentence is built from lowercase letters (`'a'`-`'z'`), digits
(`'0'`-`'9'`), hyphens (`'-'`), the punctuation marks `'!'`, `'.'` and
`','`, and spaces (`' '`). Splitting the sentence on the spaces — one or
more of which may sit between tokens — yields its tokens.

A token deserves to be called a word only when every one of these holds:

- It uses no digits; only lowercase letters, hyphens, and/or punctuation.
- It carries at most one hyphen `'-'`, and any hyphen must sit between two
  lowercase letters (`"a-b"` is fine, while `"-ab"` and `"ab-"` are not).
- It carries at most one punctuation mark, and only as its final character
  (`"ab,"`, `"cd!"` and `"."` are fine, while `"a!b"` and `"c.,"` are not).

Count how many tokens of the given sentence `sentence` qualify as words.

### Example 1

```text
Input: sentence = "farm-fresh eggs , 2 baskets"
Output: 4
Explanation: "farm-fresh", "eggs", "," and "baskets" all pass; "2" fails
because a digit may not appear inside a word.
```

### Example 2

```text
Input: sentence = "no-go9 -tail tail- x!!y"
Output: 0
Explanation: Every token breaks a rule. "no-go9" contains a digit, "-tail"
opens with a hyphen, "tail-" closes with one, and "x!!y" has a punctuation
mark away from the end.
```

### Example 3

```text
Input: sentence = "hello , world! he-llo- a1b"
Output: 3
Explanation: "hello", the standalone "," and "world!" are words. The
trailing hyphen disqualifies "he-llo-", and the digit disqualifies "a1b".
```

### Constraints

- `1 <= sentence.length <= 1000`
- `sentence` contains only lowercase English letters, digits, `' '`, `'-'`,
  `'!'`, `'.'` and `','`.
- The sentence contains at least one token.

## Hints

### Hint 1

Splitting on spaces produces the tokens; simply skip any empty pieces that
runs of spaces leave behind.

### Hint 2

For each token, one left-to-right pass can track how many hyphens and
punctuation marks have been seen and check where each one sits.
