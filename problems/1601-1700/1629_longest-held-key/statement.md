# Longest-Held Key

## Description

A keypad trial consists of pressing `n` keys one after another. You are
given a string `keysPressed` of length `n`, where `keysPressed[i]` is the
`i`th key pressed (0-indexed), together with a strictly increasing array
`releaseTimes` of length `n`, where `releaseTimes[i]` is the moment the
`i`th key was released. The first key goes down at time `0`, and every
later key goes down the instant its predecessor is released.

Hence the `i`th press is held for `releaseTimes[i] - releaseTimes[i - 1]`,
while the very first press is held for `releaseTimes[0]`. One key may be
pressed many times over the trial, and separate presses of the same key
are not required to last equally long.

Report the key whose longest press outlasts every other press. Should
several presses share the longest duration, answer with the
lexicographically largest key among those presses.

### Example 1

```text
Input: releaseTimes = [8,20,32,33], keysPressed = "nknk"
Output: "n"
Explanation: The four presses last 8, 20 - 8 = 12, 32 - 20 = 12, and
33 - 32 = 1. The longest duration 12 belongs to both 'k' and the second
'n'; 'n' is the lexicographically larger of the two, so the answer is
"n".
```

### Example 2

```text
Input: releaseTimes = [4,11,25,31], keysPressed = "gdkm"
Output: "k"
Explanation: The presses last 4, 7, 14, and 6, so 'k' — held for 14 —
outlasts everything else.
```

### Constraints

- `releaseTimes.length == keysPressed.length == n`
- `2 <= n <= 1000`
- `1 <= releaseTimes[i] <= 10^9`
- `releaseTimes[i] < releaseTimes[i + 1]`
- `keysPressed` consists of lowercase English letters.

## Hints

### Hint 1

Line up each press with its key and the time it took.

### Hint 2

One pass over the presses is enough if you keep the best press seen so
far.

### Hint 3

Swap the champion only when the current press is strictly longer, or it
ties the champion and its key is lexicographically larger.
