# Solutions — Every Copy Checked Out

## Inner join on open loans, exact-exhaustion filter

A volume qualifies only if two things hold at once: at least one lending of
it is still open (`brought_back IS NULL`), and the number of open lendings
equals every copy the library owns — that is what "zero copies available"
means, since available = `copies_owned` minus open lendings. The inner
join to `checkouts` restricted by `brought_back IS NULL` supplies the
first condition for free: a volume with no open loan produces no joined
rows at all and drops out, which also rules out the never-borrowed and
fully-returned volumes even when their shelf slots happen to be free.

Grouping by the shelf columns collapses each volume's open loans into one
row, and `COUNT(c.checkout_id)` becomes the required `active_readers`
column. The `HAVING` clause keeps exactly the volumes where that count
equals `copies_owned` — volumes with copies still on the shelf fail it. The
outer `ORDER BY` presents the survivors by descending reader count and
then ascending title, matching the required output order.

**Complexity:** `O(B + R log B)` for `B` volumes and `R` checkout records
(join plus the grouping aggregate), `O(B)` space for the grouped rows.
