# Clean Up the Scan Log

## Description

Table: `Scans`

| Column    | Type    |
| --------- | ------- |
| scan_id   | int     |
| item_name | varchar |
| scan_date | date    |

`scan_id` is the column with unique values for this table. Each row is
one item sold at the till: the item's name exactly as a staff member
typed it into the register, and the date of the sale.

The names are entered by hand, so one and the same item can be logged
under several spellings — uppercase, lowercase, or mixed — and with
stray spaces before or after the name. Internal spacing is never added
or removed: `'Tape Dispenser'` and `'Tape  Dispenser'`, with two
spaces between the words, are two different items.

Clean up the log and report, for every item and calendar month it was
sold in:

- `item_name`, the name lowercased, with any leading and trailing
  spaces removed.
- `scan_date`, the calendar month of the sale, formatted `'YYYY-MM'`.
- `units`, how many times that item was scanned in that month.

Each testcase supplies its own `dataset`: the DDL seeds the `Scans`
table with that testcase's rows. Return the result table ordered by
`item_name` ascending; break ties by `scan_date` ascending. The result
format is in the following examples.

### Example 1

```text
Input: the Scans table from the dataset below.
scan_id | item_name  | scan_date
1       | FieldNotes | 2021-03-05
2       | FIELDNOTES | 2021-03-19
3       | fieldnotes | 2021-04-02
4       | ClipBoard  | 2021-04-11
5       | ClipBoard  | 2021-04-12
6       | InkBottle  | 2021-04-27
7       | inkbottle  | 2021-05-08
8       | DeskLamp   | 2021-05-30
9       | DeskLamp   | 2021-03-14
Output:
item_name  | scan_date | units
clipboard  | 2021-04   | 2
desklamp   | 2021-03   | 1
desklamp   | 2021-05   | 1
fieldnotes | 2021-03   | 2
fieldnotes | 2021-04   | 1
inkbottle  | 2021-04   | 1
inkbottle  | 2021-05   | 1
Explanation: After lowercasing, the three FieldNotes spellings are one
item, sold twice in March and once in April. ClipBoard's two rows land
in the same April group. InkBottle is scanned once in April and once
in May, and DeskLamp once in March and once in May.
```

### Example 2

```text
Input: the Scans table from the dataset below.
scan_id | item_name       | scan_date
1       | StickyNotes     | 2022-01-09
2       | STICKYNOTES     | 2022-01-10
3       | Tape Dispenser  | 2022-02-20
4       | Tape  Dispenser | 2022-02-21
5       | PencilCase      | 2022-03-01
6       | PENCILCASE      | 2022-03-02
Output:
item_name        | scan_date | units
pencilcase       | 2022-03   | 2
stickynotes      | 2022-01   | 2
tape  dispenser  | 2022-02   | 1
tape dispenser   | 2022-02   | 1
Explanation: Case is ignored, so StickyNotes and STICKYNOTES are the
same item, as are PencilCase and PENCILCASE. The gap between the two
words is part of the name, so the two tape dispenser spellings stay
separate items, one scan each.
```

## Hints

### Hint 1

`LOWER(TRIM(item_name))` collapses every casing and padding variant of
a name down to one canonical value — group by that expression rather
than by `item_name` itself, or `'FieldNotes'` and `' fieldnotes'` would
land in different groups.

### Hint 2

`strftime('%Y-%m', scan_date)` reads a `'YYYY-MM-DD'` value and keeps
only the year and month, so scans on different days of one month
collapse into the same group; grouping by this expression as well as
the canonical name is what separates an item's March sales from its
April sales.
