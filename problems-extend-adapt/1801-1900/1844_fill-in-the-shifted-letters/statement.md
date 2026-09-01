# Fill In the Shifted Letters

## Description

The string `s` is built on a strict alternation: every even index holds a
lowercase English letter and every odd index holds a digit.

Define an advance of a character: advancing `c` by `k` lands on the
character `k` positions further along the alphabet, so advancing `'a'` by
`4` reaches `'e'`, and advancing by `0` leaves `c` unchanged.

Walk the string once and overwrite each digit at an odd index `i` with the
character you reach by advancing `s[i - 1]` by the digit's numeric value.
Return the string after every digit has been filled in. You may assume no
advance ever pushes past `'z'`.

The advance is a step your own code performs — there is no library
routine that provides it.

### Example 1

```text
Input: s = "b2d4f1"
Output: "bddhfg"
Explanation: The digits fill in as follows:
- s[1] -> advance 'b' by 2 -> 'd'
- s[3] -> advance 'd' by 4 -> 'h'
- s[5] -> advance 'f' by 1 -> 'g'
```

### Example 2

```text
Input: s = "h0j2l3"
Output: "hhjllo"
Explanation: The digits fill in as follows:
- s[1] -> advance 'h' by 0 -> 'h'
- s[3] -> advance 'j' by 2 -> 'l'
- s[5] -> advance 'l' by 3 -> 'o'
```

### Constraints

- `1 <= s.length <= 100`
- `s` contains only lowercase English letters and digits.
- Advancing `s[i - 1]` by `s[i]` never goes beyond `'z'` for any odd
  index `i`.

## Hints

### Hint 1

Every odd slot is determined entirely by the letter just before it, so a
single left-to-right pass fills the whole string.

### Hint 2

Convert the preceding letter to its alphabet position, add the digit, and
read the character at the resulting position.
