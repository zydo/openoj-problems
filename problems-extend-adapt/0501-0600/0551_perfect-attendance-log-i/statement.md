# Perfect Attendance Log I

## Description

A school keeps each student's daily attendance as a single string `s`, one
character per day, drawn from three marks:

- `'A'` — absent that day.
- `'L'` — late that day.
- `'P'` — present and on time that day.

A student qualifies for a perfect-attendance certificate only if the whole
log clears two rules at once:

- Across the **entire** log, the student was marked absent (`'A'`) on
  **fewer than 2** days.
- The log never contains **3 or more** `'L'` marks in a row.

Return `true` if the log clears both rules, or `false` if it breaks either
one.

### Example 1

```text
Input: s = "LPLAPP"
Output: true
Explanation: Only one absence appears, and no run of lates ever reaches
three in a row, so both rules hold.
```

### Example 2

```text
Input: s = "APLLPAL"
Output: false
Explanation: 'A' appears twice in the log, which alone breaks the
absence rule — the two late runs never grow past two anyway.
```

### Example 3

```text
Input: s = "PPLLLPP"
Output: false
Explanation: The middle three days are all 'L', a run of three
consecutive lates, which breaks the second rule even though the student
was never absent.
```

### Constraints

- `1 <= s.length <= 1000`
- Every character of `s` is `'A'`, `'L'`, or `'P'`.
