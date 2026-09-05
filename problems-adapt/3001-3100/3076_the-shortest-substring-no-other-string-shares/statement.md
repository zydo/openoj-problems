# The Shortest Substring No Other String Shares

## Description

You are given `arr`, an array of `n` non-empty strings. Build an array
`answer` of the same length where, for every index `i`:

- `answer[i]` is a shortest substring of `arr[i]` that appears as a
  substring of none of the other strings in `arr`;
- when several substrings tie for shortest, `answer[i]` is the
  lexicographically smallest of them;
- when no substring of `arr[i]` qualifies, `answer[i]` is the empty string.

Return `answer`.

### Example 1

```text
Input: arr = ["moon","nova","tuna"]
Output: ["m","v","t"]
Explanation: For "moon", the single letters o and n both occur in "nova",
while m occurs in neither other string, so "m" is picked. For "nova", both
n and o occur in "moon", leaving the exclusive "v". For "tuna", the letter
t appears in no other string, so "t" qualifies at once.
```

### Example 2

```text
Input: arr = ["card","dock","cart"]
Output: ["rd","k","t"]
Explanation: Every letter of "card" repeats elsewhere (c, a, r in "cart";
d in "dock"), and of its length-2 substrings only "rd" is absent from the
other strings. For "dock", the exclusive single letters are k and o, and
"k" wins the tie as lexicographically smaller. For "cart", the letter t
occurs in neither other string.
```

### Example 3

```text
Input: arr = ["ab","ab"]
Output: ["",""]
Explanation: The two entries are identical, so every substring of either
string also occurs in the other and neither has any qualifying substring.
```

### Constraints

- `n == arr.length`
- `2 <= n <= 100`
- `1 <= arr[i].length <= 20`
- Each `arr[i]` consists only of lowercase English letters.

## Hints

### Hint 1

A brute-force pass is affordable: enumerate every substring of every
string and record where each one occurs.

### Hint 2

A hash map keyed by substring — storing the set of strings that contain
it, or a count of owning strings — answers "does this substring appear in
any other string" in constant time per lookup.
