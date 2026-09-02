# Lowest-Cost Word Wrapping

## Description

You are given a string `sentence` made of lowercase words separated by
single spaces, along with an integer `k`. Break the sentence into rows so
that no row carries more than `k` characters. Line breaks may only fall
between words — a word is never split across rows — and the words must
appear in their original order, each used exactly once. No row may start
or end with a space, and `sentence` itself never begins or ends with one.

A row whose filled length is `n` costs `(k - n)²`, and the total cost adds
up this charge for every row except the final one.

Return the smallest total cost achievable by any valid way of breaking the
sentence into rows.

### Example 1

```text
Input: sentence = "calm rivers flow", k = 12
Output: 1
Explanation:
Putting "calm rivers" on the first row (length 11) and "flow" on the
second costs (12 - 11)² = 1.
Putting "calm" alone on the first row costs (12 - 4)² = 64, which is
worse.
The minimum total cost is 1.
```

### Example 2

```text
Input: sentence = "maple syrup tastes sweet", k = 11
Output: 25
Explanation:
Rows "maple syrup" (length 11), "tastes", and "sweet" cost
(11 - 11)² + (11 - 6)² = 25.
Splitting every word onto its own row would instead cost
(11 - 5)² + (11 - 5)² + (11 - 6)² = 97.
The minimum total cost is 25.
```

### Example 3

```text
Input: sentence = "calm", k = 7
Output: 0
Explanation:
The sentence fills a single row, and the final row is never charged, so
the total cost is 0.
```

### Constraints

- `1 <= sentence.length <= 5000`
- `1 <= k <= 5000`
- Every word in `sentence` has length at most `k`.
- `sentence` contains only lowercase English letters and spaces.
- `sentence` does not begin or end with a space.
- Words in `sentence` are separated by exactly one space.

## Hints

### Hint 1

Cut the sentence into its individual words first; every row is then a
contiguous run of those words.

### Hint 2

Dynamic programming over the word sequence works well.

### Hint 3

Let `dp[i]` hold the least cost of wrapping everything from word `i`
onward, and grow each row word by word until the width cap stops it.
