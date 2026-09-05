# An Alternating Chain Of Words

## Description

Two arrays of equal length `n` are given: `words`, a list of distinct
strings, and `groups`, where `groups[i]` is the binary label `0` or `1`
attached to `words[i]`.

A chain of words is a subsequence of `words`, and it is called
alternating when every adjacent pair in the chain carries different
labels — no two consecutive picks may share a label.

Build the longest alternating chain you can and return it. Whenever
several chains tie for the longest, any one of them is accepted.

### Example 1

```text
Input: words = ["sun","moon","star","sky","cloud"], groups = [1,1,0,0,1]
Output: ["sun","star","cloud"]
Explanation: The labels form three runs — 1, 1, then 0, 0, then 1 — and
an alternating chain can keep at most one word per run, so three is the
ceiling. Taking the first word of every run reaches it.
```

### Example 2

```text
Input: words = ["red","blue"], groups = [0,1]
Output: ["red","blue"]
Explanation: The two labels differ, so both words form an alternating
chain.
```

### Example 3

```text
Input: words = ["aa","bb","cc","dd"], groups = [1,1,1,1]
Output: ["aa"]
Explanation: Every word carries the same label, so no two words can sit
next to each other in an alternating chain, and a single word is the
most that can be kept.
```

### Constraints

- `1 <= n == words.length == groups.length <= 100`
- `1 <= words[i].length <= 10`
- `groups[i]` is either `0` or `1`.
- The strings in `words` are all distinct.
- `words[i]` consists of lowercase English letters.

## Hints

### Hint 1

A single left-to-right pass is enough — no search over all
subsequences is needed.

### Hint 2

Start the chain with the very first word. After that, keep
`words[i]` exactly when `groups[i]` differs from `groups[i - 1]`; in
other words, take one word per maximal run of equal labels.
