# Three Largest Primes Hiding In Digits

## Description

Handed a string `s` of digits, look at every substring it contains and
read each one as a number — leading zeros simply disappear in the parse,
so `"07"` and `"7"` both mean 7, and an all-zeros substring means 0. Some
of those numbers are prime.

Gather every distinct prime that shows up this way, keep the three
largest, and return their sum. If fewer than three primes exist, sum
whichever ones there are; if the string yields no prime at all, return
`0`. A prime counts once no matter how many different substrings spell
it.

### Example 1

```text
Input: s = "4307"
Output: 357
Explanation:
The primes hiding in the substrings of "4307" are 3, 7, 43, and 307
(the full string is 59 × 73 and misses the cut). The three largest are
307, 43, and 7, and they sum to 357.
```

### Example 2

```text
Input: s = "003"
Output: 3
Explanation:
Once leading zeros are ignored, the substrings read as just 0 and 3.
Only the 3 is prime, so the sum is 3.
```

### Example 3

```text
Input: s = "2468"
Output: 2
Explanation:
Every multi-digit cut of "2468" is even, so the lone 2 is the only
prime anywhere in the string.
```

### Constraints

- `1 <= s.length <= 10`
- Every character of `s` is a digit.

## Hints

### Hint 1

A ten-character string holds only a few dozen substrings — cut at every
pair of positions and parse each piece as a number.

### Hint 2

Each candidate is at most ten digits long, so trial division up to its
square root decides primality in `O(sqrt(n))` time.

### Hint 3

Keep the distinct prime values, then take the three largest; walking the
candidates from the top down lets you stop as soon as the third prime
is found.
