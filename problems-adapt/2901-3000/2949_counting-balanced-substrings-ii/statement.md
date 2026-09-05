# Counting Balanced Substrings II

## Description

This one hands you a lowercase string s and a positive integer k. Call a
substring of s balanced when both of the following are true:

- The number of vowels it contains equals the number of consonants.
- The product of those two counts is a multiple of k.

Vowels are the letters 'a', 'e', 'i', 'o', and 'u'; every other lowercase
letter is a consonant. A substring is any contiguous run of characters
taken from s. Return how many non-empty balanced substrings s has.

### Example 1

```text
Input: s = "eleven", k = 2
Output: 3
Explanation: "elev", "leve", and "even" each carry two vowels and two
consonants, and 2 * 2 is divisible by 2, so all three count. Every other
substring either tips the counts out of balance or fails k's test.
```

### Example 2

```text
Input: s = "ayayeaye", k = 4
Output: 3
Explanation: "ayay", "yaye", and "yeay" each hold two vowels and two
consonants, whose product 4 is divisible by k = 4. The full string tips
five vowels against three consonants, and nothing else evens out.
```

### Example 3

```text
Input: s = "abababab", k = 8
Output: 1
Explanation: Only the entire string qualifies: four a's against four b's
gives 4 * 4 = 16, a multiple of 8. A shorter even split would need counts
of 2, and 2 * 2 = 4 is not a multiple of 8.
```

### Constraints

- `1 <= s.length <= 5 * 10⁴`
- `1 <= k <= 1000`
- `s` consists of only English lowercase letters.

## Hints

### Hint 1

Factor k and derive the smallest x ≥ 1 such that x * x is divisible by k;
every vowel count that can pass the test is a multiple of that x.

### Hint 2

A substring has equal vowel and consonant counts exactly when the prefix
vowel-minus-consonant balance agrees at its two end positions, and every
qualifying length is a multiple of 2x.

### Hint 3

Sweep the string once, keeping a hash map keyed by the pair (running
balance, index mod 2x), and accumulate how many earlier positions match
each key.
