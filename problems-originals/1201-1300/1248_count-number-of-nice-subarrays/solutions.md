# Solutions — Count Number of Nice Subarrays

## Prefix Sum Counting

The key insight is that only the parity of each element matters: mapping every odd number to 1 and every even number to 0 turns "subarray with exactly `k` odd numbers" into "subarray with sum exactly `k`". That classic problem is solved by prefix sums — a subarray ending at the current position has `k` odds exactly when its odd-count prefix minus some earlier prefix equals `k`.

The solution keeps `odds`, the running count of odd numbers seen so far (the current prefix), and `counts[c]`, how many earlier prefixes had odd-count exactly `c`. At each element the parity bit `x & 1` updates the prefix, and every earlier prefix with count `odds - k` pairs with it to close one nice subarray, so `result += counts[odds - k]`. The current prefix is then recorded for future elements to pair with. Seeding `counts[0] = 1` accounts for the empty prefix at the very start, which is what makes subarrays beginning at index 0 countable.

The guard `odds - k >= 0` simply avoids negative indices before enough odds have accumulated; since `odds` never exceeds the array length `n`, the counts array of size `n + 1` covers every reachable prefix value. Each element is examined once with constant work, and an array with fewer than `k` odd numbers naturally yields 0 because the lookup index never becomes valid.

**Complexity:** `O(n)` time, `O(n)` space.
