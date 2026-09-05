# Morse Signal Variants

## Description

The 26 lowercase English letters have the following International Morse Code
encodings, in alphabetic order from `a` through `z`:

```text
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
```

Encode a word by concatenating the Morse encodings of its letters without
separators. Given an array `words` of lowercase words, return how many
distinct encoded signals the array produces.

### Example 1

```text
Input: words = ["a","et","t"]
Output: 2
Explanation: "a" and "et" both encode to ".-", while "t" encodes to "-".
```

### Example 2

```text
Input: words = ["sos","sos","to"]
Output: 2
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 12`
- Each `words[i]` contains only lowercase English letters.
