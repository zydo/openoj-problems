# Deal the Letters Evenly

## Description

You are given an array of strings `words` (**0-indexed**).

One move takes a single character out of some non-empty `words[i]` and
inserts it anywhere inside another word `words[j]`, where `i` and `j`
are distinct indices.

Decide whether, after any number of such moves, every string in
`words` can be made identical. Report `true` when it can and `false`
when it cannot.

### Example 1

```text
Input: words = ["cd","cdcd","d","c"]
Output: true
Explanation: Pooling the letters gives four 'c's and four 'd's, so
each of the four words can be dealt a 'c' and a 'd' — for instance
move one 'd' from words[1] onto words[3] and then one 'c' from
words[1] onto words[2], leaving every word as "cd".
```

### Example 2

```text
Input: words = ["xy","x"]
Output: false
Explanation: The two words would each need one 'x' and one 'y', but
there is only a single 'y' in total.
```

### Example 3

```text
Input: words = ["p"]
Output: true
Explanation: With a single word there is nothing to balance — it is
already the equal copy of itself.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists of lowercase English letters.

## Hints

### Hint 1

Moves can rearrange letters arbitrarily, so where a letter sits never
matters — only how many times each letter appears in total.

### Hint 2

Equal final words must contain the same letters, so each letter's
total count has to split evenly among the words.
