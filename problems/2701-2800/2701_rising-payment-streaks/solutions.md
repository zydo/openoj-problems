# Solutions — Rising Payment Streaks

## Gaps-and-islands over daily streaks

Each payer's days must be cut into maximal stretches where every adjacent
pair is both one calendar day apart and strictly rising in total, so the
query first fetches each row's predecessor inside its payer: a `marked`
CTE applies two `LAG` window functions partitioned by `payer_id` and
ordered by `paid_on`, exposing the previous day and total. A row continues
its streak exactly when its date equals `date(prev_date, '+1 day')` and
its total exceeds `prev_total`; otherwise it starts a new streak. The
first day of every payer has a null predecessor whose comparisons fail,
which correctly seeds one new streak per payer.

The second CTE turns those continue-or-break flags into a streak key: a
running `SUM(...) OVER (PARTITION BY payer_id ORDER BY paid_on)` of the
break indicator (0 when continuing, 1 when breaking) is constant within
each maximal stretch and jumps across boundaries — the classic
gaps-and-islands grouping. The final query groups by `payer_id` and that
key, collapses each stretch to its `MIN`/`MAX` dates as `streak_start`
and `streak_end`, filters stretches shorter than three days with
`HAVING COUNT(*) >= 3`, and orders by the three output columns, so runs
of four or more rising days yield one covering row rather than
sub-windows.

Every step is one pass over data sorted per payer: the two `LAG`s share
one sort of `Payments`, the running sum reuses that order, and the
grouping aggregates the intermediate once more, all bounded by
streak-count output. With `n` payment rows the whole pipeline is therefore
dominated by the initial per-payer sort.

**Complexity:** `O(n log n)` time, `O(n)` space.
