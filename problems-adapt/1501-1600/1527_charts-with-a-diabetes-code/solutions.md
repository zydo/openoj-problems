# Solutions — Charts With a Diabetes Code

## Match the prefix only at a code boundary

`diagnoses` packs a variable number of codes into a single string,
separated by single spaces, so a qualifying code can land anywhere from
first to last. Two `LIKE` patterns between them cover every position:
`diagnoses LIKE 'DIAB1%'` matches a code that opens the string, and
`diagnoses LIKE '% DIAB1%'` matches one that begins right after the
space ending the previous code. That leading space in the second
pattern is the whole trick — it pins `DIAB1` to the start of a code,
where a looser `LIKE '%DIAB1%'` would wave through a chart whose codes
merely contain those five characters mid-word, such as `PREDIAB1` or
`XDIAB199`. `OR`-ing the patterns selects a row as soon as either
succeeds; a chart with no matching code — or an empty `diagnoses`
string — satisfies neither and is filtered out.

The scan is a single pass of plain substring tests, with no splitting
or normalization of the string.

**Complexity:** `O(n)` time, `O(1)` auxiliary space, for `n` rows in
`Charts`.
