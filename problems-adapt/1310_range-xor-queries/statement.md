# Range XOR Queries

## Description

You are given an array `nums` of positive integers and a list of `queries`,
where each query is a pair `[left, right]` naming a stretch of the array.

For every query, compute the XOR of `nums[left]` through `nums[right]`
inclusive. Return the results in the order the queries were given.

### Example 1

```text
Input: nums = [5,6,3,9], queries = [[0,1],[1,3],[0,3],[2,2]]
Output: [3,12,9,3]
Explanation: In binary the elements are 5 = 0101, 6 = 0110, 3 = 0011,
9 = 1001. The answers come out as
[0,1] = 5 xor 6 = 3
[1,3] = 6 xor 3 xor 9 = 12
[0,3] = 5 xor 6 xor 3 xor 9 = 9
[2,2] = 3
```

### Example 2

```text
Input: nums = [2,2,8], queries = [[0,1],[0,2],[1,1]]
Output: [0,8,2]
Explanation: The two 2s cancel each other: the range [0,1] XORs to 0, and
the whole array XORs to 8.
```

### Example 3

```text
Input: nums = [12], queries = [[0,0]]
Output: [12]
Explanation: A range of one element is that element.
```

### Constraints

- `1 <= nums.length, queries.length <= 3 * 10⁴`
- `1 <= nums[i] <= 10⁹`
- `queries[i].length == 2`
- `0 <= left <= right < nums.length`

## Hints

### Hint 1

What happens to `x` when it is XORed with itself? And with 0?

### Hint 2

Use that answer to cancel everything standing before a range: a running XOR
of the prefixes makes each element before `left` appear exactly twice in the
combination of two prefix values.

### Hint 3

With `prefix[t]` the XOR of the first `t` elements, one more XOR per query
answers it in constant time.
