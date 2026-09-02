# Tidying Headline Case

## Description

A headline arrives as a string `title`: one or more words of English
letters, separated from each other by exactly one space. Straighten out its
letter casing word by word:

- A word no longer than two letters is written entirely in lowercase.
- Every longer word keeps lowercase everywhere except its first letter,
  which becomes uppercase.

Return the tidied headline.

### Example 1

```text
Input: title = "mIxEd cAsEs Are fuN"
Output: "Mixed Cases Are Fun"
Explanation: Every word here is at least three letters long, so each one
starts with a capital letter and continues in lowercase.
```

### Example 2

```text
Input: title = "gO oN Then"
Output: "go on Then"
Explanation: The two words "go" and "on" are only two letters long, so both
come out fully lowercase. "Then" is longer, so only its opening letter is
capitalized.
```

### Example 3

```text
Input: title = "a bIG dReAm"
Output: "a Big Dream"
Explanation: The lone letter word "a" stays lowercase, while the remaining
words get an uppercase first letter and lowercase after it.
```

### Constraints

- `1 <= title.length <= 100`
- `title` is a sequence of words separated by single spaces, with no space
  at either end.
- Each word is non-empty and made of upper- and lowercase English letters.

## Hints

### Hint 1

Break the string apart on its spaces to handle one word at a time.

### Hint 2

For each word, the length alone decides the treatment, so the whole task is
a direct simulation of the two rules.
