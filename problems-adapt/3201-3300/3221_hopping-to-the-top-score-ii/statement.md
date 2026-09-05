# Hopping To The Top Score II

## Description

Begin at the first element of `nums` and hop across the array until you
stand on its last element. A hop goes from an index `i` to any later
index `j > i` and pays you `(j - i) * nums[j]` — the distance covered
times the value sitting on the landing spot.

Pick the hops to make the sum of payouts as large as possible, and return
that best achievable total.

### Example 1

```text
Input: nums = [3,1,6,4]
Output: 16
Explanation: The route 0 -> 2 -> 3 earns (2 - 0) * 6 + (3 - 2) * 4 = 16,
and no other way across the array collects more.
```

### Example 2

```text
Input: nums = [2,7,3,9,1]
Output: 28
Explanation: Hopping 0 -> 3 -> 4 collects (3 - 0) * 9 + (4 - 3) * 1 =
28.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

A leg's payout depends only on where it lands — distance times the
landing value — so the value at the takeoff spot plays no role.

### Hint 2

From wherever you stand, the largest value still to your right is the
interesting one; landing on the farthest index that carries it is never
worse than detouring elsewhere first.

### Hint 3

Sweep from the right, noting for every position the farthest maximum of
the suffix after it, then follow those pointers starting from index 0.
