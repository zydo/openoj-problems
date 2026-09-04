# Shifting Tokens For A Richer Sum

## Description

Two aligned sequences are given: an array of values `nums` and a binary
string `s`. Every position where `s` is `1` holds a token.

Each token may be shifted at most one step to the left — a token sitting at
index `i > 0` can move to `i - 1` — or it can stay put. Once every token has
settled, an index counts as covered exactly when a token rests on it, and a
single index cannot hold two tokens.

Choose the shifts to make the total of `nums` over all covered indices as
large as possible, and return that total.

### Example 1

```text
Input: nums = [4,8,3,6,5], s = "11011"
Output: 23
Explanation:
    The leading token pair stays on indices 0 and 1, worth 4 + 8.
    The trailing pair could reach any two of the cells 2..4; holding
    indices 3 and 4 is best because the cell it abandons, index 2,
    carries the cheapest value 3.
    The best total is (4 + 8) + (6 + 5) = 23.
```

### Example 2

```text
Input: nums = [7,2,9,4], s = "0110"
Output: 16
Explanation:
    Tokens sit on indices 1 and 2. Each can step left once, so together
    they can occupy any two of the cells 0..2.
    Dropping the smallest value 2 leaves 7 + 9 = 16.
```

### Example 3

```text
Input: nums = [5], s = "1"
Output: 5
Explanation:
    The lone token is already on index 0 and cannot be refused, so the
    answer is 5.
```

### Constraints

- `1 <= nums.length == s.length <= 10^5`
- `1 <= nums[i] <= 10^5`
- `s[i]` is `0` or `1`.

### Hint 1

Handle each maximal block of consecutive tokens together with the zero (and
its cell) just before it, if there is one.

### Hint 2

Such a block can fill all but one cell of that stretch, so keep the stretch
total and give up only its cheapest value. A block touching index 0 has no
spare cell and keeps everything it already covers.
