# Steps To The Nearest Binary Palindrome

## Description

An array of positive integers `nums` is given. In one step you may pick
any element and either raise it by one or lower it by one.

A positive integer counts as a binary palindrome when its binary form,
written without leading zeros, reads the same in both directions.

For every element, work out the fewest steps of that kind needed to land
the value on some binary palindrome. Return the answers as an array
`ans`, where `ans[i]` corresponds to `nums[i]`.

### Example 1

```text
Input: nums = [5,10,19]
Output: [0,1,2]
Explanation: 5 is "101", already a palindrome, so it needs no steps.
10 is "1010"; one step down reaches 9 = "1001". 19 is "10011"; two steps
down reach 17 = "10001". That gives ans = [0,1,2].
```

### Example 2

```text
Input: nums = [100,63,250]
Output: [1,0,5]
Explanation: 100 is "1100100"; one step down reaches 99 = "1100011".
63 is "111111", already a palindrome. 250 is "11111010"; no palindrome
sits closer than 255 = "11111111", five steps up. That gives
ans = [1,0,5].
```

### Constraints

- `1 <= nums.length <= 5000`
- `1 <= nums[i] <= 5000`

## Hints

### Hint 1

A binary palindrome is pinned down by its leading half of bits — mirror
that half around the middle and the rest of the string follows — so only
a handful of palindromes can live near any value this small.

### Hint 2

For a fixed value, just two neighbors matter: the nearest palindrome
below it and the nearest one above. Anything farther away is reached only
by passing one of those two first, and that detour never pays.
