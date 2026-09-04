# How Often Each Word Shows Up

## Description

The entire text of a file arrives as one string, `content`. A word is
any maximal run of non-whitespace characters, and neighboring words sit
one or more whitespace characters apart. Tally how many times each
distinct word appears, and return the tally as one `"word count"`
string per distinct word — ranked from most frequent to least, with
equally frequent words broken in ascending alphabetical order.

### Example 1

```text
Input: content = "rain in spain falls main\nplain in rain"
Output: ["in 2", "rain 2", "falls 1", "main 1", "plain 1", "spain 1"]
Explanation: "in" and "rain" tie at two appearances and lead the list;
the four once-only words follow in alphabetical order.
```

### Example 2

```text
Input: content = "echo echo delta echo delta bravo"
Output: ["echo 3", "delta 2", "bravo 1"]
```

### Example 3

```text
Input: content = "lone"
Output: ["lone 1"]
Explanation: A file with a single word yields a single line.
```

### Constraints

- `content` contains lowercase letters, digits, and the whitespace
  characters space `' '` and newline `'\n'`.
- Neighboring words are separated by one or more whitespace characters.
- Words with the same count are listed in ascending lexicographic
  order.

### Follow-up

If the file were far too large to hold in memory all at once, how would
your counting and ranking change?
