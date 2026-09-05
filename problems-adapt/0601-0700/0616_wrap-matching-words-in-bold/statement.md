# Wrap Matching Words in Bold

## Description

Given a string `s` and a list of distinct strings `words`, produce a new
string in which every character belonging to at least one occurrence of a
word is enclosed by `<b>` and `</b>` tags.

Occurrences may overlap, and two matched ranges may meet edge-to-edge. In
either situation they form one continuous bold region: do not emit nested
tags or separate tag pairs between touching characters. Text not covered by
any match remains unchanged. Return the resulting string.

### Example 1

```text
Input: s = "hijabcklm", words = ["ij","abc"]
Output: "h<b>ijabc</b>klm"
Explanation: The two matches touch, so their combined range uses one pair of
tags.
```

### Example 2

```text
Input: s = "bananabox", words = ["ana","box"]
Output: "b<b>ananabox</b>"
Explanation: The overlapping occurrences of "ana" cover "anana", and that
run immediately meets the match for "box".
```

### Constraints

- `1 <= s.length <= 1000`
- `0 <= words.length <= 100`
- `1 <= words[i].length <= 1000`
- `s` and `words[i]` consist of English letters and digits.
- Every string in `words` is unique.
