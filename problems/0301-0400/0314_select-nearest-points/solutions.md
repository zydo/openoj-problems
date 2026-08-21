# Solutions — Select Nearest Points

## Sort by Squared Distance

For a point `(x, y)`, use `x*x + y*y` as the ordering key. Taking a square
root cannot change the order of nonnegative values, and the squared form keeps
the comparison exact with integer arithmetic.

Copy the input points, sort the copy by this key, and return its first `k`
entries. Copying prevents the helper ordering from unexpectedly changing the
caller's array. The guaranteed unique selected set means any ordering among
the returned points is valid.

A bounded max-heap would reduce the time to `O(n log k)`, while quickselect
offers linear expected time, but a complete sort is simple and fast for at
most `10^4` points.

**Complexity:** `O(n log n)` time and `O(n)` auxiliary space.
