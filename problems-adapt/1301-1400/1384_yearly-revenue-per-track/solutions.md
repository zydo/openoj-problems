# Solutions — Yearly Revenue per Track

## Approach: Cross each licensing period with the report years and measure the overlap

One licensing period can straddle several years, so every `Licenses` row
is crossed with a small three-row table of report years (2018, 2019,
2020). Each pairing intersects `[licensed_from, licensed_to]` with that
year's `[Jan 1, Dec 31]`: the overlap runs from
`MAX(licensed_from, year start)` to `MIN(licensed_to, year end)`, and its
inclusive day count is the Julian-day difference plus one. Multiplying by
`daily_rate` prices that year's slice, and the `WHERE` clause drops
pairings whose period never reaches the year at all. Joining `Tracks`
supplies the name; the result is ordered by `track_id`, `report_year`.

**Complexity:** `O(L)` time for `L` license rows (each meets a constant
three-row year table), `O(T * 3)` output for `T` tracks.
