# Vowel-Capped Words in Range

## Description

You are given an array of strings `words` together with two indices,
`left` and `right`. A word is called vowel-capped when its first letter
and its last letter are both vowels, where the vowels are `a`, `e`,
`i`, `o`, and `u`. A one-letter word qualifies whenever that single
letter is a vowel, since it doubles as both caps.

Count the words `words[i]` that are vowel-capped and whose index `i`
falls inside the inclusive span `[left, right]`.

### Example 1

```text
Input: words = ["area","orbit","ultra","roar","idea"], left = 0, right = 4
Output: 3
Explanation:
- "area" is vowel-capped: it begins with 'a' and ends with 'a'.
- "orbit" is not: it ends with 't'.
- "ultra" is vowel-capped: it begins with 'u' and ends with 'a'.
- "roar" is not: it begins with 'r'.
- "idea" is vowel-capped: it begins with 'i' and ends with 'a'.
That makes 3 vowel-capped words in the range.
```

### Example 2

```text
Input: words = ["emu","alias","aurora"], left = 0, right = 2
Output: 2
Explanation:
- "emu" is vowel-capped: it begins with 'e' and ends with 'u'.
- "alias" is not: it ends with 's'.
- "aurora" is vowel-capped: it begins with 'a' and ends with 'a'.
That makes 2 vowel-capped words in the range.
```

### Example 3

```text
Input: words = ["o"], left = 0, right = 0
Output: 1
Explanation: The lone letter 'o' is a vowel serving as both the first
and the last character, so the word counts.
```

### Constraints

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 10`
- each word uses lowercase English letters only
- `0 <= left <= right < words.length`

## Hints

### Hint 1

Walk the indices from `left` through `right`, and tally every word
whose first and last characters both belong to the vowel set.
