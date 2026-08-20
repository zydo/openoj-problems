# Smallest Number After Deletions

## Description

The string `digits` spells a non-negative integer in decimal. Erase exactly `k`
of its characters, push the survivors together, and read the result as a number.
Over every possible choice of which `k` characters to erase, return the smallest
number reachable, again as a string.

Erasing never reorders anything: whatever survives stays in the order it already
had. Report the answer without padding on the front — `304`, not `0304` — and
report `0` when nothing at all survives.

### Example 1

```text
Input: digits = "4275316", k = 3
Output: "2316"
Explanation: Erasing 4, 7 and 5 leaves 2316. Four characters must survive, and
no other four of them, in order, read lower than that.
```

### Example 2

```text
Input: digits = "20304", k = 1
Output: "304"
Explanation: Erasing the leading 2 leaves 0304, which as a number is 304.
```

### Example 3

```text
Input: digits = "45", k = 2
Output: "0"
Explanation: Nothing survives, and an empty result counts as zero.
```

### Constraints

- `1 <= k <= digits.length <= 10^5`
- Every character of `digits` is one of `0` through `9`.
- No padding zero sits at the front of `digits`, unless `digits` is the single
  character `0`.

## Hints

### Hint 1

Any two candidates that survive have the same length, so the comparison between
them is settled at the earliest position where they disagree. That makes the
front of the answer worth far more than the back: get a small character into an
early slot and nothing further right can undo the gain.

### Hint 2

Sweep the characters left to right, carrying the run you have committed to so
far. If the arriving character is below the last committed one, that committed
character occupies a slot it does not deserve — discard it, charge one erasure,
and compare against the new last. The committed run never descends.

### Hint 3

Two loose ends once the sweep finishes. Erasures you never had to spend come off
the tail, since that is where the run parks its largest characters. Then shed
any zeros that surfaced at the front, and answer `0` if that empties the string.
