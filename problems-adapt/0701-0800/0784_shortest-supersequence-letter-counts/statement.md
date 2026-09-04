# Shortest Supersequence Letter Counts

## Description

You are given an array of strings `words`. A _supersequence_ of `words` is a
string in which every entry of `words` appears as a subsequence — its letters
occur in order, not necessarily side by side. A supersequence is _shortest_
if none is shorter.

Two supersequences that use the same number of each letter are rearrangements
of one another and count once.

Find every shortest supersequence up to rearrangement, and describe each by
its letter counts: return a 2D array `freqs` where `freqs[i]` has 26 entries,
the frequency of each lowercase letter in one shortest supersequence. The rows
may come back in any order.

### Example 1

```text
Input: words = ["cd","dc"]
Output: [[0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
Explanation: Both orders of the pair must be embedded, which one copy of each
letter cannot do. The shortest supersequences are "cdc" and "dcd": one uses
c once and d twice, the other the reverse, and they are not rearrangements,
so both rows appear.
```

### Example 2

```text
Input: words = ["bb","bd"]
Output: [[0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
Explanation: The doubled word "bb" pins two copies of b. The shortest
supersequences are "bbd" and "bdb", which use the same letters in the same
amounts, so a single row represents them both.
```

### Example 3

```text
Input: words = ["ab","cd","ef"]
Output: [[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
Explanation: Six distinct letters must appear, so six is the floor, and a
string such as "abcdef" reaches it. Every shortest supersequence spends one
copy of each letter.
```

### Constraints

- `1 <= words.length <= 256`
- `words[i].length == 2`
- Across all of `words`, at most `16` distinct lowercase letters appear.
- The strings in `words` are unique.

## Hints

### Hint 1

How many copies of one letter can a shortest supersequence ever need? What
could you delete from a string that used three?

### Hint 2

With the cap from hint 1, a candidate is just a choice, per letter, of one or
two copies. Enumerate the choices — at most `2^16` of them.

### Hint 3

A choice is realizable when the two-letter words among the once-only letters
can all be laid out in one string, which is exactly a topological-order
question on the directed graph those words form.
