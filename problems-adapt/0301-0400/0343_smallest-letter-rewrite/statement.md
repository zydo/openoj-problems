# Smallest Letter Rewrite

## Description

Two strings `s1` and `s2` of matching length are read side by side. Each aligned
pair `s1[i]`, `s2[i]` declares that those two letters may stand in for each
other.

Standing in for spreads. A letter always stands in for itself, the permission
runs both ways, and it chains through intermediates — so the 26 lowercase
letters break into groups inside which any letter may replace any other.

Swapping letters inside `text` for their group mates produces many strings.
Return the alphabetically first of them, which you get by sending every letter
of `text` to the earliest letter of its group.

### Example 1

```text
Input: s1 = "flint", s2 = "brake", text = "trail"
Output: "elaal"
Explanation: The aligned pairs f/b, l/r, i/a, n/k, t/e give the groups {b,f},
{a,i}, {e,t}, {k,n}, {l,r}. Sending each letter of "trail" to its group's
earliest member turns t into e, r into l, and i into a.
```

### Example 2

```text
Input: s1 = "zoom", s2 = "yolk", text = "moody"
Output: "klldy"
Explanation: The pairs are z/y, o/o, o/l, m/k. One pair says nothing new, and
the groups come out as {y,z}, {k,m}, {l,o}. The letter d never appears in a
pair, so it survives the rewrite untouched.
```

### Example 3

```text
Input: s1 = "dcba", s2 = "cbaz", text = "zebra"
Output: "aeara"
Explanation: The pairs d/c, c/b, b/a, a/z chain into one group {a,b,c,d,z}.
Every one of those five letters becomes a, while e and r stand alone.
```

### Constraints

- `1 <= s1.length <= 1000` and `s1.length == s2.length`
- `1 <= text.length <= 1000`
- `s1`, `s2` and `text` are made of lowercase English letters only

## Hints

### Hint 1

The strings can be long, but only 26 letters exist. Every aligned pair is an
edge joining two of 26 nodes, and a group is a connected piece of that tiny
graph.

### Hint 2

Merging groups repeatedly is what a disjoint-set structure is for. Keep one
representative per group.

### Hint 3

Choose the representative deliberately: when two groups merge, let the
alphabetically earlier of the two representatives survive. Then the
representative of a letter's group _is_ its replacement, and one pass over
`text` finishes the job.
