# Encrypting With A Cipher

## Description

A substitution cipher maps single characters to two-character codes.
It is set up with a list of distinct characters and, for each one, the
code it becomes — several characters are allowed to share the same
code, which is exactly what makes decoding ambiguous. A dictionary of
permitted words is also fixed at setup.

- Encrypting a word replaces each of its characters with its code, in
  order. If the word contains a character that has no code, encryption
  is impossible and the result is the empty string.
- Decrypting a coded string asks: of the dictionary's words, how many
  encrypt to exactly this string? Because codes can collide, several
  words may qualify.

Implement the `Cipher` class:

- `Cipher(char[] keys, String[] values, String[] dictionary)` initializes
  the cipher with the distinct keys, their two-character codes, and the
  permitted dictionary.
- `String encrypt(String word1)` encrypts `word1` as described and
  returns the result.
- `int decrypt(String word2)` returns how many dictionary words encrypt
  to `word2`.

### Example 1

```text
Input:
["Cipher", "encrypt", "decrypt"]
[[["a", "b"], ["xx", "xx"], ["aa", "bb", "ab"]], ["aa"], ["xxxx"]]
Output: [null, "xxxx", 3]
Explanation:
Cipher cipher = new Cipher(['a', 'b'], ["xx", "xx"], ["aa", "bb", "ab"]);
cipher.encrypt("aa"); // return "xxxx". Both characters map to "xx".
cipher.decrypt("xxxx"); // return 3. All three dictionary words encrypt
                        // to "xxxx": "aa", "bb", and "ab".
```

### Constraints

- `1 <= keys.length == values.length <= 26`
- `values[i].length == 2`
- `1 <= dictionary.length <= 100`
- `1 <= dictionary[i].length <= 100`
- All `keys[i]` are distinct.
- `1 <= word1.length <= 2000`
- `2 <= word2.length <= 2000`
- `word2` has an even length.
- `word1` and `word2` consist only of characters present in `keys` (for
  `word2`, in pairs matching some `values[i]`).
- At most `200` calls in total are made to `encrypt` and `decrypt`.

## Hints

### Hint 1

Encryption is a simple lookup walk. Decryption, done word by word, is
far too slow — count backwards instead.

### Hint 2

A string decrypts from position 0 in blocks of two, and each block's
choices multiply independently: the answer is the product, over the
distinct blocks of `word2`, of how many keys map to that block — as
long as every block is a known code.
