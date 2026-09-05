# Reblocking a Phone Number

## Description

A phone number arrives as a string `number` made of digits plus stray spaces
`' '` and dashes `'-'`.

Reblock it as follows. First throw away every space and dash so only the
digits remain. Then walk those digits from the left, cutting them into blocks
of length 3 for as long as more than 4 digits are still waiting. Whatever
tail is left over — now 4 digits or fewer — groups by its own size:

- 2 digits: a single block of length 2.
- 3 digits: a single block of length 3.
- 4 digits: two blocks of length 2 apiece.

Finally join all the blocks with dashes. By construction the process never
creates a block of length 1, and at most two blocks of length 2 can occur.

Return the phone number after reblocking.

### Example 1

```text
Input: number = "4-0 18-67 3"
Output: "401-86-73"
Explanation: The digits are "4018673".
Step 1: Seven digits remain, so cut a block of 3. The 1st block is "401".
Step 2: Four digits are left, so they split into two blocks of length 2:
"86" and "73".
Joining the blocks gives "401-86-73".
```

### Example 2

```text
Input: number = "3 5-204 8"
Output: "352-048"
Explanation: The digits are "352048".
Step 1: Six digits remain, so cut a block of 3. The 1st block is "352".
Step 2: Three digits are left, so they form one block of length 3: "048".
Joining the blocks gives "352-048".
```

### Example 3

```text
Input: number = "90-7 6-51 29"
Output: "907-651-29"
Explanation: The digits are "90765129".
Step 1: The 1st block is "907".
Step 2: The 2nd block is "651".
Step 3: Two digits are left, so they form one block of length 2: "29".
Joining the blocks gives "907-651-29".
```

### Constraints

- `2 <= number.length <= 100`
- `number` consists of digits and the characters `'-'` and `' '`.
- `number` contains at least two digits.

## Hints

### Hint 1

Everything except the digits is decoration. Keep only the digit characters —
where the separators used to sit is irrelevant to the answer.

### Hint 2

Peel off groups of 3 digits while more than 4 remain. Once 4 or fewer are
left, the tail rule follows from the count alone: 2, 3, or 4 digits each have
their own fixed grouping.
