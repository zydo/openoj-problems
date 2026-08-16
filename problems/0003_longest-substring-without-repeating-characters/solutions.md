# Solutions — Longest Substring Without Repeating Characters

## Sliding window with last-seen indices

Maintain the invariant that the window `s[start..i]` never contains a duplicate character, and remember in a dict `last_seen` the most recent index of every character encountered. When the character `c` arriving at index `i` already appears inside the current window, the window can no longer include that older occurrence, so `start` jumps directly to `last_seen[c] + 1`. This is a sliding window that never shrinks one position at a time — it leaps over the conflict.

![Four snapshots of the window over "abcabcbb": start leaps to 1, then 3, 5, and 7 as duplicate characters arrive, while the best length stays 3.](figures/solution-sliding-window.svg)

The guard `last_seen[c] >= start` is the subtle part: it ensures an occurrence that lies to the left of the window is simply ignored. Without it, `start` could be dragged backwards and the window would incorrectly lose characters that are no longer inside it. Because `start` only ever moves right, each character enters and leaves consideration in a single forward sweep, and after processing index `i` the window is again duplicate-free; the best length is updated as `i - start + 1`.

Edge cases fall out of the loop structure: an empty string never enters the loop and returns 0, and a string of one repeated character keeps the window pinned at size 1. The `last_seen` map holds at most one entry per distinct character `k`, and the input alphabet is tiny, so the extra memory is negligible next to the input.

**Complexity:** `O(n)` time, `O(k)` space (where `k` is the number of distinct characters).
