# Cheapest Walk Around The Ring

## Description

You are given two integer arrays `forward` and `backward`, both of length
`n`, and another integer array `queries`.

`n` houses stand on a circular road. Every pair of neighboring houses is
joined by one road in each direction, and the two directions are priced
independently:

- walking forward from house `i` reaches house `(i + 1) mod n` over a
  road of `forward[i]` meters;
- walking backward from house `i` reaches house `(i - 1) mod n` over a
  road of `backward[i]` meters.

You walk at one meter per second. Starting from house `0`, you must call
at the house of each `queries[i]`, in order. A single hop may travel in
either direction and may pass other houses on the way.

Return the minimum number of seconds the whole walk takes.

### Example 1

```text
Input: forward = [2,3,5], backward = [1,2,4], queries = [2,1]
Output: 5
Explanation: Hop to house 2 by walking backward over the 1-meter road
(1 second) — the forward route would cost 2 + 3 = 5. Then hop to house 1
by walking backward again, spending backward[2] = 4 seconds, while going
forward would take 5 + 2 = 7. The walk finishes in 1 + 4 = 5 seconds.
```

### Example 2

```text
Input: forward = [4,2,6,3], backward = [1,5,2,3], queries = [3,1,2]
Output: 8
Explanation: House 3 costs 1 second by the backward road. From there,
house 1 is 5 seconds away backward (3 + 2) against 7 seconds forward
(3 + 4), and house 2 is then 2 seconds away in either direction. The
total is 1 + 5 + 2 = 8 seconds.
```

### Example 3

```text
Input: forward = [1,1,1,1,1], backward = [9,9,9,9,9], queries = [1,3,4]
Output: 4
Explanation: Every forward road is 1 meter and every backward road is 9,
so the walk simply keeps moving forward: 0 → 1 (1s), 1 → 3 (2s), then
3 → 4 (1s), for 4 seconds in all.
```

### Constraints

- `2 <= n <= 10⁵`
- `n == forward.length == backward.length`
- `1 <= forward[i], backward[i] <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `0 <= queries[i] < n`
- `queries[i] != queries[i + 1]`
- `queries[0] is not 0.`

## Hints

### Hint 1

Between two consecutive stops it never pays to reverse course — every
hop costs the cheaper of the two one-direction tours around the ring.

### Hint 2

Build a prefix sum over each road set: the forward distance from `a` to
`b` spends `forward[a], forward[a+1], ...`, while the backward distance
spends `backward[a], backward[a-1], ...`. Each is then two lookups.

### Hint 3

Both distance families wrap around the circle; absorb the wrap with the
ring's total length so every hop stays `O(1)`.

### Hint 4

A single distance can reach `10¹⁰` meters and the full walk `10¹⁵`, so
prefix sums and the running total need 64-bit integers.
