# Word Lattices II

## Description

You are given an array words of distinct four-letter strings over the
lowercase English letters.

A lattice is an arrangement of 4 of those words — call them top, bottom,
left and right — where:

- top lays across the top row,
- bottom lays across the bottom row,
- left runs down the left column (top to bottom),
- right runs down the right column (top to bottom).

Reading the four corner letters off that frame forces these pairings:

- `top[0] == left[0]` and `top[3] == right[0]` on the top edge,
- `bottom[0] == left[3]` and `bottom[3] == right[3]` on the bottom edge.

List every distinct lattice the word set can frame, ordered ascending
lexicographically by the tuple (top, left, right, bottom).

### Example 1

```text
Input: words = ["cafe","cabs","exam","swim"]
Output: [["cabs","cafe","swim","exam"],["cafe","cabs","exam","swim"]]
Explanation: Two framings work, and they mirror each other. With
top = "cafe", left = "cabs", right = "exam", bottom = "swim": the top
corners give 'c' = 'c' and 'e' = 'e', and the bottom corners give
's' = 's' and 'm' = 'm'. Swapping the two c-words into each other's slots
(and likewise the e/s words) yields the second framing.
```

### Example 2

```text
Input: words = ["gate","glow","each","wish"]
Output: [["gate","glow","each","wish"],["glow","gate","wish","each"]]
Explanation: top = "gate" pairs with left = "glow" (both open with 'g')
and right = "each" (opening with gate's final 'e'); "wish" closes the
frame, opening with glow's 'w' and ending on each's 'h'. The roles of the
two g-words — and of the other two — may also be exchanged.
```

### Example 3

```text
Input: words = ["neon","moon","star","rust"]
Output: []
Explanation: The openings and endings of these words never line up into a
frame, so no lattice exists and the list is empty.
```

### Constraints

- `4 <= words.length <= 15`
- `words[i].length == 4`
- `words[i]` consists of only lowercase English letters.
- All `words[i]` are distinct.

## Hints

### Hint 1

The word count is tiny — enumerate. Fix the top word first, then try
candidates for the left and right edges, checking the two top-edge
pairings as soon as each word is placed.

### Hint 2

Bucket the words by first letter and by last letter; the bottom word is
then found by intersecting a first-letter bucket (matching left's last
letter) with a last-letter bucket (matching right's last letter).
