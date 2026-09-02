# Sentence Shuffle Count

## Description

You are given a string `s` made up of one or more words, with exactly one
space `' '` between neighboring words.

Think of another string `t` as a reshuffling of `s` when each word of `t`
is a permutation of the word sitting in the same position of `s`. As a
concrete illustration, `"acb dfe"` is a reshuffling of `"abc def"`,
while `"def cab"` and `"adc bef"` are not — the first rearranged whole
words, the second changed which letters belong to which slot.

Count the distinct strings that are reshufflings of `s`. The total can be
enormous, so report it modulo `10⁹ + 7`.

### Example 1

```text
Input: s = "cat dog"
Output: 36
Explanation: Each word holds three distinct letters, so either word can
appear in 3! = 6 orders. The choices are independent: 6 · 6 = 36.
```

### Example 2

```text
Input: s = "llama"
Output: 30
Explanation: The word has five letters with l twice and a twice, so its
distinct orders number 5!/(2!·2!) = 30.
```

### Example 3

```text
Input: s = "top secret"
Output: 2160
Explanation: "top" contributes 3! = 6 orders. "secret" has six letters
with e appearing twice, contributing 6!/2! = 360. The product is
6 · 360 = 2160.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters and spaces `' '`.
- There is a single space between consecutive words.

## Hints

### Hint 1

Treat one word at a time: if all of a word's letters were distinct, its
orders would simply be the factorial of its length.

### Hint 2

Repeated letters are what remove overcounting — divide by the factorial
of each letter's multiplicity.

### Hint 3

Words never interact, so multiply every word's distinct-permutation count
together under the modulus.
