# Solutions — Longest Run of Ones After One Deletion

## Sliding Window With At Most One Zero

Choosing which element to strike is only interesting when a `0` separates
two runs of ones: striking that `0` welds them, and striking anything else
changes nothing. So the task is the longest stretch of the array crossed
while stepping over no more than a single `0`, with that one `0` then
taking the compulsory deletion.

The implementation keeps such a window with a count of the zeros inside
it. Each entry from the right bumps the count if it is a `0`; the moment
the count reaches two, the left edge slides forward, giving up a zero of
its own when it passes one, until a single `0` remains inside. The widest
window ever seen is remembered. One deletion is mandatory, and the best
window's lone `0` is what gets deleted, so the answer is that width minus
one.

The all-ones array is the corner worth care. No window ever holds a `0`
there, so nothing inside it needs removing — yet one element must still
go, giving `n - 1`; the final zero count (zero itself) detects this and
returns directly. In every array that does contain a `0`, the final window
always ends holding exactly one: the left edge cannot slide past the last
`0` since only a second zero provokes the shrink, and there is nothing
after the last `0` to supply it. Subtracting one is therefore always
legitimate — including the all-zeros array, where the widest legal window
is a single `0` and the answer comes out `0`, as on
`[1,1,0,0,1,1,1,0,1,1]`: the two inner zeros can never share a window, so
the best crossing welds `1,1,1` with `1,1` for a width of six and an
answer of five.

**Complexity:** `O(n)` time, `O(1)` space.
