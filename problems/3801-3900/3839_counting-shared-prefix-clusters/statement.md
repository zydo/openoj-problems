# Counting Shared-Prefix Clusters

## Description

You are given an array of strings `words` and an integer `k`.

Two words at distinct indices are `k`-matched when their first `k`
characters are identical. A cluster is a set of words in which every
pair of words is `k`-matched.

Return how many clusters contain at least two words.

Note:

- A word shorter than `k` characters has no first `k` characters at
  all; it can never join a cluster and is ignored.
- Repeated strings count as separate words.

### Example 1

```text
Input: words = ["log","low","lag"], k = 2
Output: 1
Explanation: The two-character heads are "lo", "lo", and "la". The
first two words agree, "log" and "low", so they form one cluster;
"lag" sits alone. The answer is 1.
```

### Example 2

```text
Input: words = ["ab","ac","de","df","dg"], k = 1
Output: 2
Explanation: Matching on just the first letter puts "ab" and "ac" in
one cluster under 'a', and "de", "df", "dg" in another under 'd'. Both
clusters hold at least two words, so the answer is 2.
```

### Example 3

```text
Input: words = ["abc","abd","ab","cd"], k = 3
Output: 0
Explanation: The three-character heads are "abc" and "abd"; "ab" is
too short to take part and "cd" is too short as well. No head occurs
twice, so no cluster exists and the answer is 0.
```

### Constraints

- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 100`
- `1 <= k <= 100`
- Every word consists of lowercase English letters.

## Hints

### Hint 1

Words with fewer than `k` characters can never be `k`-matched with
anything — set them aside before doing any grouping.

### Hint 2

Sharing the first `k` characters is transitive, so a whole cluster is
captured by one value: the shared `k`-character head itself.

### Hint 3

Tally how many surviving words carry each `k`-character head in a hash
map; the answer is the number of heads whose tally reaches two.
