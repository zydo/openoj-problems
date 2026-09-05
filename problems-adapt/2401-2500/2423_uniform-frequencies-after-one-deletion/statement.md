# Uniform Frequencies After One Deletion

## Description

You are given a 0-indexed string `word` consisting of lowercase English
letters. You must select exactly one index, remove the letter at that
index, and look at the resulting string.

Return `true` if, after that single deletion, every letter still present
in the string occurs the same number of times, and `false` otherwise.

The frequency of a letter is the number of times it appears in the string.
You may not choose to delete nothing.

### Example 1

```text
Input: word = "abc"
Output: true
Explanation: Delete the 'a', leaving "bc"; both letters now appear exactly
once.
```

### Example 2

```text
Input: word = "aabbc"
Output: true
Explanation: Delete the lone 'c', leaving "aabb"; 'a' and 'b' each appear
twice.
```

### Example 3

```text
Input: word = "aabb"
Output: false
Explanation: Deleting an 'a' leaves "abb" (one 'a' and two 'b's), and
deleting a 'b' leaves "aab" (two 'a's and one 'b'). No deletion leaves
equal frequencies.
```

### Constraints

- `2 <= word.length <= 100`
- `word` consists of lowercase English letters only.

## Hints

### Hint 1

Only the 26 letter counts matter, so the whole decision fits in a
fixed-size frequency array.

### Hint 2

The removed character is always one occurrence of some letter that is
present. Try each present letter, decrement its count, and test whether
every remaining positive count is the same value.
