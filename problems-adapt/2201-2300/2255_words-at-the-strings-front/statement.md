# Words at the String's Front

## Description

You are given a string array `words` and a string `s`. Everything in `words`
and in `s` uses only lowercase English letters.

Count how many strings in `words` sit at the front of `s` — that is, `s`
begins with them.

A word occupies the front of `s` when it matches a contiguous run of
characters that starts at `s`'s first character.

### Example 1

```text
Input: words = ["he","hell","hello","heap","h"], s = "hello"
Output: 4
Explanation:
"hello" starts with "h", "he", "hell", and "hello", but not with "heap",
so the count is 4.
```

### Example 2

```text
Input: words = ["ap","app","p"], s = "app"
Output: 2
Explanation:
"app" begins with "ap" and with "app". It does not begin with "p".
```

### Example 3

```text
Input: words = ["b","bb","b"], s = "c"
Output: 0
Explanation:
None of the words match the front of "c", so nothing is counted.
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length, s.length <= 10`
- `words[i]` and `s` contain lowercase English letters only.

## Hints

### Hint 1

Take each word in turn and test whether `s` starts with it; add one
whenever it does.

### Hint 2

The same word may appear several times in `words`, and every occurrence
counts on its own.
