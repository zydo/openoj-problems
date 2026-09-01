# Letters Shared by Every Word

## Description

You are given an array of lowercase strings `words`. Collect every
character that appears in all of them at once: a letter qualifies if it is
present in each string of `words`, and it is reported as many times as the
smallest number of occurrences it has in any single one of those strings.

The judge compares the result exactly, so the order is fixed — return the
characters sorted in ascending alphabetical order.

### Example 1

```text
Input: words = ["garage","village","cabbage"]
Output: ["a","e","g"]
Explanation: Every word contains `a`, `e`, and `g` at least once, and no
other letter reaches all three strings, so each of those letters is
reported exactly once.
```

### Example 2

```text
Input: words = ["moonlight","lighthouse"]
Output: ["g","h","i","l","o","t"]
Explanation: The two strings share six distinct letters, each occurring
at least once in both, listed alphabetically.
```

### Example 3

```text
Input: words = ["kayak","kiosk","khaki"]
Output: ["k","k"]
Explanation: `k` appears twice in every word while every other letter
misses at least one of them, so the doubled `k` is reported twice.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- every string in `words` consists of lowercase English letters.
