# Solutions — Weighted End Deletions

## Dynamic Programming over Front-Counts

Grabbing the end with the larger immediate product fails once later weights
turn negative, but the game state is far smaller than the route tree suggests:
after `i` deletions with `l` of them taken from the front, exactly `r = i - l`
came from the back, and the array that remains is determined — its next front
candidate is `nums[l]`, its next back candidate `nums[n - 1 - r]`. The pair
`(i, l)` therefore describes a complete state, and an `O(m²)` table over those
pairs replaces the exponential enumeration of routes.

The implementation fills the table backwards over deletions, keeping one row
and overwriting it per stage. At stage `i`, for each `l` up to `i`, it compares
taking the front (`prev[l + 1] + weights[i] * nums[l]`) against taking the back
(`prev[l] + weights[i] * nums[n - 1 - (i - l)]`), where `prev` is stage `i + 1`
— the best that still lies ahead. Slots with `l > i` cannot occur at that stage
and hold negative infinity so they never win a comparison. Stage `m` is all
zeros: nothing is left to gain once every weight has been used.

![The stages of Example 1 drawn as a triangle over states (i, l): the base row is 0, stage i = 2 holds 27, 24 and -3, stage i = 1 holds 11 and 26, and the root resolves to 15 along a dashed path that corresponds to deleting the back end three times for 4 - 16 + 27.](figures/solution-dp-stages.svg)

Running `i` from `m - 1` down to `0` builds each row from the one beneath it,
and `prev[0]` at the end is the best score from "no deletions yet, nothing
taken from the front" — the answer. Rows hold `m + 1` entries because stage
`i` never has more than `i + 1` front-counts, and the `n - m` elements that
sit in the middle are simply never touched.

**Complexity:** `O(m²)` time, `O(m)` space.
