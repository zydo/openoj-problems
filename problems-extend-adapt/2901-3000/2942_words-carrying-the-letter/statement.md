# Words Carrying The Letter

## Description

You are given a 0-indexed array of strings `words` and a character `x`.
Collect the position of every word in which `x` appears at least once, and
return those positions.

The answer may list the positions in any order.

### Example 1

```text
Input: words = ["glow","ram","olive","drum"], x = "m"
Output: [1,3]
Explanation: The letter "m" turns up in "ram" and in "drum", so their
positions 1 and 3 form the answer.
```

### Example 2

```text
Input: words = ["sun","moon","star","sky"], x = "s"
Output: [0,2,3]
Explanation: "sun", "star", and "sky" all start things off with "s";
"moon" never contains it. Positions 0, 2, and 3 are returned.
```

### Example 3

```text
Input: words = ["ivy","oak","fern"], x = "q"
Output: []
Explanation: No word here contains "q", so nothing is returned.
```

### Constraints

- `1 <= words.length <= 50`
- `1 <= words[i].length <= 50`
- `x` is a lowercase English letter.
- `words[i]` consists only of lowercase English letters.

## Hints

### Hint 1

One pass over the list nested with one pass along each word is enough.
