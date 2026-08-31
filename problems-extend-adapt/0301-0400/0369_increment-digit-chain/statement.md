# Increment Digit Chain

## Description

A non-negative integer is stored in a singly linked list, one decimal digit
per node. The head holds the most significant digit. Add one to the encoded
number and return the head of the resulting digit chain.

A carry may travel across consecutive trailing `9` digits. The input has no
leading zero unless the entire number is zero.

### Example 1

```text
Input: head = [2,4,8]
Output: [2,4,9]
Explanation: The list represents 248, and increasing it by one produces 249.
```

### Example 2

```text
Input: head = [1,9,9]
Output: [2,0,0]
Explanation: Adding one to 199 carries through both trailing 9 digits.
```

### Constraints

- The linked list contains between `1` and `100` nodes, inclusive.
- `0 <= Node.val <= 9`
- Apart from the single-node representation of zero, the input number has
  no leading zero.
