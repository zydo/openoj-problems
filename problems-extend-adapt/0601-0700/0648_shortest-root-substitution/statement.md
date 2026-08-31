# Shortest Root Substitution

## Description

A _root_ is a short word that can grow into a longer word by having
extra letters tacked onto its end; call that longer word its
_derivative_. For instance the root `"help"` followed by `"ful"` forms
the derivative `"helpful"`.

You are given a `dictionary` of roots and a `sentence` made of
lowercase words separated by single spaces. Replace every word in the
sentence that is a derivative of some root in the dictionary with that
root. When a word is a derivative of several dictionary roots, use the
shortest one among them.

Return the sentence after all such replacements.

### Example 1

```text
Input: dictionary = ["run","runner","jump"],
       sentence = "the runner started running before the jumper jumped"
Output: "the run started run before the jump jump"
```

### Example 2

```text
Input: dictionary = ["x","y","z"],
       sentence = "xylophone yarn zebra abcdxyz"
Output: "x y z abcdxyz"
```

### Constraints

- `1 <= dictionary.length <= 1000`
- `1 <= dictionary[i].length <= 100`
- Every word in `dictionary` consists only of lowercase letters.
- `1 <= sentence.length <= 10⁶`
- `sentence` consists only of lowercase letters and spaces.
- `sentence` contains between `1` and `1000` words.
- Every word in `sentence` has length between `1` and `1000`.
- Consecutive words in `sentence` are separated by exactly one space.
- `sentence` has no leading or trailing space.
