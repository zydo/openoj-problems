# Solutions — Shortest Subarray with Sum at Least K

## Monotonic deque of prefix sums

With negative numbers present, the sliding window of the all-positive version breaks: growing the window no longer grows the sum. The fix is to think in prefix sums, where any subarray sum is `prefix[i] - prefix[j]` for a start index `j` before `i`. The wanted subarray ending at `i` is the shortest `j` with `prefix[j] <= prefix[i] - k`, and a single left-to-right sweep over `i` can find it if the candidate starts are kept in a deque ordered by both index and value.

The deque holds start indices whose prefix sums strictly increase from front to back. At each `i`, the front is consumed while it qualifies — `prefix[front] <= p - k` — and each pop offers the length `i - front` to the running minimum. Popping is safe because a start consumed now can only look worse for later endings: later `i` give strictly longer subarrays with the same start. Afterwards the tail is trimmed of every index whose prefix sum is `>= p`: a later index with an equal-or-smaller prefix dominates them as a future start (it is shorter from any future end and at least as likely to satisfy the threshold), so they can never again be useful.

Finally `i` itself joins as a candidate start. Each index enters and leaves the deque at most once, so despite the nested `while` loops the whole algorithm is linear. If no qualifying pair was ever found, `best` stays above `n` and the answer is `-1`; the leading sentinel `prefix[0] = 0` lets subarrays that start at index 0 compete.

**Complexity:** `O(n)` time, `O(n)` space.
