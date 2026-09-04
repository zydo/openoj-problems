# Count Candidates Embedded in a Text

## Description

You are given a lowercase string `text` and a list of lowercase strings
`candidates`. Count how many list entries can be read from `text` in order.
Different entries are counted separately, even when their contents are equal.

An entry can be read in order when all its characters occur from left to right
in `text`. The chosen characters do not need to be adjacent, but their order
cannot change.

- For example, `"bar"` can be read in order from `"breadcrumb"`.

### Example 1

```text
Input: text = "abracadabra", candidates = ["ada","baa","aaa","cab","xyz","ada"]
Output: 5
Explanation: Every entry except "xyz" can be read in order. The two copies of "ada" are counted separately.
```

### Example 2

```text
Input: text = "programming", candidates = ["ring","gram","gaming","programming","rim","mmg","ingg"]
Output: 5
```

### Constraints

- `1 <= text.length <= 5 * 10^4`
- `1 <= candidates.length <= 5000`
- `1 <= candidates[i].length <= 50`
- `text` and every string in `candidates` contain only lowercase English
  letters.

## Hints

### Hint 1

Avoid scanning the entire text independently for every candidate. Instead,
consider advancing many candidates during one pass.

### Hint 2

Keep one bucket per letter. Each candidate waits in the bucket for the next
letter it needs.

### Hint 3

Another approach stores all positions of each letter in the text and uses
binary search to jump forward.
