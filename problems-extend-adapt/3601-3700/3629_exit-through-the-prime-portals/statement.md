# Exit Through The Prime Portals

## Description

You are given an integer array `nums`. You begin at index 0 and want to
stand on index `nums.length - 1`.

Standing on index `i`, exactly two kinds of moves are available:

- Walk to the neighboring index `i + 1` or `i - 1`, when it exists.
- Open a portal: when `nums[i]` is a prime number `p`, jump in one move
  to any other index `j` (with `j != i`) whose value `nums[j]` is a
  multiple of `p`.

Every move — walk or portal — costs one step. Return the fewest steps
needed to finish on the last index.

### Example 1

```text
Input: nums = [3,5,25,100,9,8]
Output: 2
Explanation: nums[0] = 3 is prime, and nums[4] = 9 is a multiple of 3,
so the portal takes you from index 0 to index 4. One more walk reaches
index 5.
```

### Example 2

```text
Input: nums = [8,6,10,15]
Output: 3
Explanation: No value is prime, so no portal ever opens. The only route
is the walks 0 → 1 → 2 → 3.
```

### Example 3

```text
Input: nums = [2,4,8,16,1]
Output: 2
Explanation: nums[0] = 2 is prime and nums[3] = 16 is even, so a portal
lands on index 3 in one step; one final walk reaches index 4.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Model indices as graph nodes: each index links to its neighbors, and a
prime-valued index additionally links to every index whose value is a
multiple of that prime. Fewest moves is a breadth-first search.

### Hint 2

A sieve up to the largest value settles primality, and a value-to-
indices table lets you enumerate a prime's multiples on demand rather
than storing full index lists up front.

### Hint 3

Let each prime fire at most once: the first time the search settles an
index whose value is a prime `p`, enqueue every entry of `p`'s list and
then discard the list — the breadth-first order guarantees those
destinations were reached no later than any later firing could manage.
