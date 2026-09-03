# The Winning Frequency Group

## Description

You are given a string `s` made up of lowercase English letters.

Group the distinct letters by how many times each one appears: for every
count `k`, the frequency group of `k` holds exactly the letters that occur
`k` times in `s`. Among all these groups, the winning group is the one
with the most distinct letters. When several groups share that largest
size, the group with the higher count `k` wins — since each group has its
own `k`, one unique winner always exists.

Return the letters of the winning group as a string. The underlying
problem accepts any order of those letters; this judge compares the
returned string exactly, so return them in ascending (lexicographic)
order — the accepted answer set is unchanged, since every accepted string
carries the same characters.

### Example 1

```text
Input: s = "eexxxtttqq"
Output: "tx"
Explanation: The group k = 3 holds {t, x} and the group k = 2 holds
{e, q}; both contain two distinct letters, so the tie breaks toward the
larger frequency and 't' with 'x' are returned.
```

### Example 2

```text
Input: s = "mnnn"
Output: "n"
Explanation: 'm' forms the group k = 1 and 'n' the group k = 3. Each
group holds a single letter, and the tie goes to k = 3, so "n" is
returned.
```

### Example 3

```text
Input: s = "baboon"
Output: "bo"
Explanation: 'b' and 'o' each appear twice and form the group k = 2,
while 'a' and 'n' appear once. The two-letter group wins outright.
```

### Example 4

```text
Input: s = "wwww"
Output: "w"
Explanation: The only group is k = 4, holding 'w' alone.
```

### Constraints

- `1 <= s.length <= 100`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Count how often every letter occurs before doing anything else.

### Hint 2

Use those counts to bucket the letters — one bucket per distinct count.

### Hint 3

Scan the buckets for the one holding the most distinct letters.

### Hint 4

Prefer the higher count whenever two buckets are equally large, then
assemble those letters into the answer.
