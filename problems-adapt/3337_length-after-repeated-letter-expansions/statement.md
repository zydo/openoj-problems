# Length After Repeated Letter Expansions

## Description

You are given a string `s` of lowercase English letters, an integer `t`,
and an integer array `nums` of length 26 indexed by letter — `nums[0]`
governs `a`, `nums[1]` governs `b`, and so on.

In one round of expansion, every letter of `s` is replaced at the same
time by the `nums` letters that follow it in the alphabet, wrapping from
`z` back around to `a` when the run goes past the end. For instance,
with `nums[4] = 2` an `e` becomes `"fg"`, and with `nums[23] = 4` an `x`
becomes `"yzab"`.

Return the length of `s` after exactly `t` rounds.

Since the answer may be very large, return it modulo `10⁹ + 7`.

### Example 1

```text
Input: s = "cy", t = 1, nums = [1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1]
Output: 5
Explanation: With nums[2] = 2 the c grows into "de", and with nums[24] =
3 the y wraps around into "zab". One round turns "cy" into "dezab".
```

### Example 2

```text
Input: s = "a", t = 2, nums = [2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
Output: 3
Explanation: The first round sends "a" to "bc". In the second, the b
grows into "cd" (nums[1] = 2) and the c into "d" (nums[2] = 1), giving
"cdd".
```

### Example 3

```text
Input: s = "hi", t = 3, nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
Output: 2
Explanation: Every letter expands to exactly one letter, so the string
keeps its length forever; it merely slides forward along the alphabet.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains only lowercase English letters.
- `1 <= t <= 10⁹`
- `nums.length == 26`
- `1 <= nums[i] <= 25`

## Hints

### Hint 1

Letters never interact, so the string's order carries no information —
only the count of each letter does.

### Hint 2

One round replaces the 26 counts by fixed linear combinations of each
other. What does `t` rounds look like in that language?

### Hint 3

`t` can reach `10⁹`, far too many rounds to simulate — but a linear map
applied `t` times can be folded into `O(log t)` compositions.
