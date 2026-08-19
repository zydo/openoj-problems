# Word Groups By Single-Letter Edits

## Description

You are given an array `words` of strings over the lowercase alphabet, and
no letter appears twice inside any one string.

Call two strings `s1` and `s2` **connected** when the letter set of `s2`
comes out of the letter set of `s1` by a single move:

- **Add** — one letter not in `s1` joins the set.
- **Remove** — one letter leaves the set.
- **Swap** — one letter in the set is traded for any other letter, itself
  included.

Split `words` into groups so that strings inside a group chain together
through these connections and no string in a group is connected to a string
outside it. (A string connected to nothing forms its own group.) This split
always exists and is unique.

Return `[groupCount, largestGroup]`: how many groups there are, and the size
of the biggest one.

### Example 1

```text
Input: words = ["at","bt","ct","pq"]
Output: [2,3]
Explanation: "at" and "bt" are connected (swap 'a' for 'b'), as are "bt" and
"ct", so the three form one group. Neither "pq" nor any swap of it appears
near the others — every move changes exactly one letter and never two — so
"pq" stands alone.
```

### Example 2

```text
Input: words = ["m","mn","mno","mnop"]
Output: [1,4]
Explanation: Each word grows from the previous by one added letter, so a
single chain links all four.
```

### Example 3

```text
Input: words = ["uv","uv","uw"]
Output: [1,3]
Explanation: The two copies of "uv" are connected through the swap move —
swapping a letter for itself counts — and "uw" is one swap away from "uv".
All three land in one group of size 3.
```

### Constraints

- `1 <= words.length <= 2 * 10^4`
- `1 <= words[i].length <= 26`
- `words[i]` consists of lowercase English letters only
- no letter occurs more than once inside any `words[i]`

## Hints

### Hint 1

Picture a graph whose nodes are the words, with an edge wherever two words
are connected. What does the requested split look like there?

### Hint 2

A word with no repeated letters is exactly its letter set — and a letter set
fits in 26 bits. What do the three moves become as bit operations?

### Hint 3

Comparing every pair of words is quadratic. From one word's mask, can you
*generate* every mask a single move could reach, then check which of those
exist in the input?

### Hint 4

Repeated words carry no new edges — a swap-for-itself already links them —
so fold duplicates into one node holding a count.
