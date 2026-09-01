# Typing Time on a One-Row Keyboard

## Description

An unusual keyboard arranges all 26 lowercase keys in one straight row. Its
layout is given as the string `keyboard` of length 26, where `keyboard[i]`
is the key sitting at position `i`.

One finger does all the typing. It starts above position `0`, and typing a
letter means sliding the finger from its current position to the position of
that letter's key. Sliding from position `i` to position `j` costs `|i - j|`
units of time.

Given the layout and the string `word`, return the total time needed to type
every character of `word` in order.

### Example 1

```text
Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "hello"
Output: 20
Explanation: Starting at 0, the finger travels 0→7 (`h`), 7→4 (`e`),
4→11 (`l`), 11→11 (`l`), 11→14 (`o`), which costs 7 + 3 + 7 + 0 + 3 = 20.
```

### Example 2

```text
Input: keyboard = "zyxwvutsrqponmlkjihgfedcba", word = "abc"
Output: 27
Explanation: The row is reversed, so `a` sits at 25, `b` at 24, and `c` at
23: the finger pays 25 + 1 + 1 = 27.
```

### Example 3

```text
Input: keyboard = "qwertyuiopasdfghjklzxcvbnm", word = "typewriter"
Output: 29
```

### Constraints

- `keyboard` has exactly 26 characters and contains every lowercase English
  letter exactly once.
- `1 <= word.length <= 10⁴`
- `word` consists of lowercase English letters.

## Hints

### Hint 1

Break the trip into single-character hops; the answer is the sum of the hop
costs.

### Hint 2

Each hop only needs the positions of its two endpoint letters.

### Hint 3

Precompute each letter's position once, before typing anything.

### Hint 4

A direct letter-to-index map answers every hop in constant time.
