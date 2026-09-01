# Smallest Frog Chorus

## Description

A pond microphone recorded one long string over the letters `'c'`,
`'r'`, `'o'`, `'a'`, and `'k'`. Each frog in the pond sings the same
five-letter call `c` → `r` → `o` → `a` → `k`, in that exact order and
with no gaps — a frog that starts a call must finish all five letters
before it is done. Several frogs can sing at once, so calls overlap and
the letters of different calls interleave freely in the recording.

Return the fewest frogs the pond could hold while producing exactly this
recording. If the string cannot be split into interleaved complete calls
at all, return `-1`.

### Example 1

```text
Input: croakOfFrogs = "croak"
Output: 1
Explanation: A single frog sings the one complete call.
```

### Example 2

```text
Input: croakOfFrogs = "ccroroakak"
Output: 2
Explanation: Two frogs start together (the two leading c's). Their calls
interleave — one reaches its k first, frees up, and the other finishes
shortly after, so two frogs suffice.
```

### Example 3

```text
Input: croakOfFrogs = "croakra"
Output: -1
Explanation: After one complete call the trailing r has no c before it
to attach to, so the recording is not a valid interleaving.
```

### Constraints

- `1 <= croakOfFrogs.length <= 10⁵`
- Every character of `croakOfFrogs` is one of `'c'`, `'r'`, `'o'`,
  `'a'`, `'k'`.

## Hints

### Hint 1

Keep one counter per letter. A letter may only be sung when some singer
is currently stuck at its predecessor; singing it moves that singer one
step along.

### Hint 2

The answer is the peak number of calls in flight at any moment: a `'c'`
puts one more frog to work, a `'k'` releases one, and any leftover
unfinished call at the end means `-1`.
