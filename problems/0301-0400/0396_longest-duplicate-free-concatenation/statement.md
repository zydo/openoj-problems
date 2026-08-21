# Longest Duplicate-Free Concatenation

## Description

You are given a list of strings `arr`. Pick some of them — keeping the list
order — and join the picks into one string. The join is valid only if no
letter appears twice in it.

Return the length of the longest valid join. Picking nothing gives the empty
string of length 0.

### Example 1

```text
Input: arr = ["ab","cd","efg"]
Output: 7
Explanation: No letter occurs in two different strings, so everything can be
joined: "ab" + "cd" + "efg" = "abcdefg".
```

### Example 2

```text
Input: arr = ["sun","moon","star"]
Output: 4
Explanation: "moon" repeats an o, so it can never appear in a valid join.
"sun" and "star" both contain s, so they cannot be joined either; the best
single pick is "star" with 4 letters.
```

### Example 3

```text
Input: arr = ["e","g","pq","rs"]
Output: 6
Explanation: All four strings use disjoint letters, and "e" + "g" + "pq" +
"rs" reaches every one of the six letters.
```

### Constraints

- `1 <= arr.length <= 16`
- `1 <= arr[i].length <= 26`
- every string consists of lowercase English letters only

## Hints

### Hint 1

All that matters about a candidate join is which letters it already
contains — 26 facts that fit in one integer as a bitmask.

### Hint 2

Reduce each string to its mask first. Two strings can sit in the same join
exactly when their masks share no bit, and a string that repeats a letter
inside itself has no valid role at all.

### Hint 3

Walk the list left to right, carrying the mask of the letters used so far.
At every string, either skip it or, if its mask is disjoint from the
carried mask, take it and set the new bits.

### Hint 4

With at most 16 strings this exhaustive walk is small enough on its own;
the answer is the largest popcount any reachable mask attains.
