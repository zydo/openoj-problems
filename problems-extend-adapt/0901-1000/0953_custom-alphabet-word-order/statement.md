# Custom Alphabet Word Order

## Description

A language writes its words with the familiar 26 lowercase English
letters, but it ranks them by its own alphabet: `order` is a permutation
of the lowercase letters, and a letter counts as smaller the earlier it
appears in `order`.

You receive a list of `words` from that language together with its
alphabet `order`. Decide whether `words` is already in ascending
dictionary order under this alphabet, returning `true` when it is and
`false` otherwise.

Comparison works exactly as in an ordinary dictionary except for the
letter ranking: scanning two words from the left, the first position
where they hold different letters settles the pair, and when one word
runs out of letters first — a prefix of the other — it is the smaller of
the two.

### Example 1

```text
Input: words = ["tea","tie","toe"], order = "qwertyuiopmnbvcxzasdfghjkl"
Output: true
Explanation: In this alphabet 'e' is ranked before 'i', and 'i' before
'o'. The first letters all match, so the second letters decide each
adjacent pair, and the list ascends throughout.
```

### Example 2

```text
Input: words = ["cape","code"], order = "qwertyuiopmnbvcxzasdfghjkl"
Output: false
Explanation: After the shared leading 'c', the next letters are 'a' and
'o'. Here 'o' is ranked before 'a', so "code" belongs before "cape" and
the list is out of order.
```

### Example 3

```text
Input: words = ["harp","harpoon","harpoons"], order = "qwertyuiopmnbvcxzasdfghjkl"
Output: true
Explanation: Every word is a prefix of the next, and the shorter word is
always the smaller one, so this chain is in order regardless of the
alphabet.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 20`
- `order.length == 26`
- Every character in `words[i]` and `order` is a lowercase English
  letter.
