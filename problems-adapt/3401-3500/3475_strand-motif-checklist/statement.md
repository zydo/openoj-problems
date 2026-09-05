# Strand Motif Checklist

## Description

Table: `specimens`

| Column Name | Type    |
| ----------- | ------- |
| specimen_id | int     |
| strand      | varchar |
| organism    | varchar |

(`specimen_id`) is the unique key for this table.
Each row is one lab specimen: an id, a strand of DNA written over the
letters A, T, G, and C, and the organism it came from.

The lab screens every strand against a short checklist of motifs and
records four flags per row:

- `has_start` is `1` when the strand opens with ATG (the common start
  codon), and `0` otherwise.
- `has_stop` is `1` when the strand closes with TAA, TAG, or TGA (the
  stop codons), and `0` otherwise.
- `has_atat` is `1` when the repeated motif ATAT occurs anywhere in the
  strand, and `0` otherwise.
- `has_ggg` is `1` when the strand contains a run of at least three
  consecutive G's (GGG or longer), and `0` otherwise.

Return the result table ordered by `specimen_id` in ascending order.

Each testcase supplies its own `dataset`: the script seeds the `specimens`
table before your query runs. The result format is in the following
example.

### Example 1

```text
Input:

specimens table:

+-------------+-------------+----------+
| specimen_id | strand      | organism |
+-------------+-------------+----------+
| 1           | ATGTTAGGTAA | Fern     |
| 2           | CCCTGA      | Moth     |
| 3           | ATATCGGGA   | Newt     |
| 4           | TATGGGC     | Toad     |
| 5           | ATGCCCTAG   | Wasp     |
| 6           | AGGGTAA     | Crab     |
| 7           | GATGATG     | Cod      |
| 8           | ATGATATCTGA | Beetle   |
+-------------+-------------+----------+

Output:

+-------------+-------------+----------+-----------+----------+----------+---------+
| specimen_id | strand      | organism | has_start | has_stop | has_atat | has_ggg |
+-------------+-------------+----------+-----------+----------+----------+---------+
| 1           | ATGTTAGGTAA | Fern     | 1         | 1        | 0        | 0       |
| 2           | CCCTGA      | Moth     | 0         | 1        | 0        | 0       |
| 3           | ATATCGGGA   | Newt     | 0         | 0        | 1        | 1       |
| 4           | TATGGGC     | Toad     | 0         | 0        | 0        | 1       |
| 5           | ATGCCCTAG   | Wasp     | 1         | 1        | 0        | 0       |
| 6           | AGGGTAA     | Crab     | 0         | 1        | 0        | 1       |
| 7           | GATGATG     | Cod      | 0         | 0        | 0        | 0       |
| 8           | ATGATATCTGA | Beetle   | 1         | 1        | 1        | 0       |
+-------------+-------------+----------+-----------+----------+----------+---------+

Explanation:

Specimen 1 opens with ATG and closes with TAA, so its first two flags are
set; it has neither the ATAT motif nor a triple-G run. Specimen 2 only
ends with the stop codon TGA. Specimen 3 begins with the ATAT motif and
also carries a GGG run, but its opening ATA is not a start codon and its
final GGA is not a stop codon. Specimen 4 owes its single set flag to the
GGG run in its middle. Specimen 5 opens with ATG and ends with TAG.
Specimen 6 ends with TAA and contains GGG. Specimen 7 trips none of the
four rules — its ATG sits in the middle, not at the front, and no motif
anywhere matches. Specimen 8 sets all of the start, stop, and ATAT flags
at once: it opens with ATG, ends with TGA, and hides ATAT from its fourth
letter onward.

For each pattern flag, `1` means the pattern is present and `0` means it
is not. The result is ordered by specimen_id in ascending order.
```

Write your solution as a single `SELECT` query returning seven columns —
`specimen_id`, `strand`, `organism`, `has_start`, `has_stop`, `has_atat`,
and `has_ggg` — one row for every specimen, each flag `1` when its pattern
is present and `0` when it is not, ordered by `specimen_id` in ascending
order.
