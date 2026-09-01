# Digit Words Add Up

## Description

Give every lowercase letter the digit it spells: `'a'` stands for 0,
`'b'` for 1, and so on up to `'j'` for 9. A word made of those letters
then reads as one number — write down each letter's digit in order and
interpret the result as an integer.

- the word `"cbd"` spells the digits `"213"`, i.e. the number 213.

Leading `'a'` letters simply produce leading zero digits and do not
change the value.

You are given three words `firstWord`, `secondWord`, and `targetWord`,
all built from the letters `'a'` through `'j'`. Decide whether the
number spelled by `firstWord` plus the number spelled by `secondWord`
equals the number spelled by `targetWord`.

### Example 1

```text
Input: firstWord = "cb", secondWord = "da", targetWord = "fb"
Output: true
Explanation:
"cb" spells "21" -> 21.
"da" spells "30" -> 30.
"fb" spells "51" -> 51.
Since 21 + 30 == 51, the answer is true.
```

### Example 2

```text
Input: firstWord = "aa", secondWord = "bc", targetWord = "bc"
Output: true
Explanation:
"aa" spells "00" -> 0, while "bc" spells "12" -> 12. The leading zeros
contribute nothing, and 0 + 12 == 12.
```

### Example 3

```text
Input: firstWord = "cbd", secondWord = "ba", targetWord = "ebc"
Output: false
Explanation:
The words spell 213, 10, and 412. Since 213 + 10 != 412, the answer is
false.
```

### Constraints

- `1 <= firstWord.length, secondWord.length, targetWord.length <= 8`
- `firstWord`, `secondWord`, and `targetWord` consist of lowercase
  English letters from `'a'` to `'j'` inclusive.

### Hint 1

Each letter maps to exactly one decimal digit, so a word turns into a
number by folding left to right: multiply the running value by ten and
add the next letter's digit.

### Hint 2

Convert all three words and compare the sum of the first two against
the third.
