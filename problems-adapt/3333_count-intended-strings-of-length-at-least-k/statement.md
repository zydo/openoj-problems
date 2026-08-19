# Count Intended Strings of Length at Least K

## Description

Someone is typing a string one key at a time, and now and then a key is
held down a moment too long, so its letter comes out repeated. The text
that ends up on the screen, given as the string `word`, may therefore be
longer than the string that was meant.

Whatever was actually meant, `word` still shows it with some blocks of
repeated letters stretched: each maximal block of one letter in `word`
stands for at least one and at most that many intended copies of the
letter, and the order of the blocks never changes.

You are also given a positive integer `k`. Return the number of distinct
strings of length at least `k` that could have been the intended one.

Since the answer may be very large, return it modulo `10⁹ + 7`.

### Example 1

```text
Input: word = "pppqq", k = 2
Output: 6
Explanation: The p-block stands for 1 to 3 p's and the q-block for 1 to
2 q's, giving six possible strings: "pq", "pqq", "ppq", "ppqq", "pppq",
"pppqq". Every one of them has at least 2 letters, so all six count.
```

### Example 2

```text
Input: word = "abbbcc", k = 5
Output: 3
Explanation: Of the six strings the blocks could encode, three are too
short: "abc", "abbc", and "abcc" have 3 or 4 letters. The qualifying
ones are "abbbc", "abbcc", and "abbbcc".
```

### Example 3

```text
Input: word = "zzzzzz", k = 4
Output: 3
Explanation: One block of six z's can stand for 1 to 6 z's, and the
strings of at least 4 letters are "zzzz", "zzzzz", and "zzzzzz".
```

### Constraints

- `1 <= word.length <= 5 · 10⁵`
- `word` contains only lowercase English letters.
- `1 <= k <= 2000`

## Hints

### Hint 1

Each block of equal letters contributes one free choice — how many
copies it stands for. A lower bound on the total is awkward to count
directly; what happens if you count the opposite and subtract?

### Hint 2

Tuples of per-block counts, each capped by its block length, summing to
less than `k`: that is a bounded knapsack. Prefix sums over the length
axis keep every block's transition linear.

### Hint 3

No block can contribute fewer than one letter, so when `k` is at most
the number of blocks, every tuple already qualifies — the answer is then
just the product of the block lengths.
