# Solutions — Staff Buried In Meetings

The question folds into two levels of aggregation: first total each staff
member's booked hours per calendar week and keep the weeks that cross the
20-hour overloaded threshold, then count those weeks per staff member and
keep only staff with at least two. Joining back to `staff` restores the
name and division the answer must carry.

## Group per staff member per week, then count overloaded weeks

`date(session_date, 'weekday 0', '-6 days')` maps every date to the Monday
of its Monday-to-Sunday week (the `weekday 0` modifier advances to the
following Sunday, and subtracting six days lands on that week's Monday; a
Sunday already stays put, so the week that contains it is still the one
ending that day — Ana's Sunday session in the example lands in her Mar 4-10
week). Grouping the `sessions` rows by staff member and that Monday,
`SUM(length_hours)` is the weekly load and `HAVING SUM(length_hours) > 20`
keeps exactly the overloaded weeks — the comparison is strict, so a week of
exactly 20.0 hours does not count.

The inner result is one row per (staff member, overloaded week). Joining it
to `staff` and grouping by `staff_id` collapses each person's overloaded
weeks, and `COUNT(*)` then counts them; `HAVING COUNT(*) >= 2` drops
everyone short of two. The final
`ORDER BY overloaded_weeks DESC, staff_name ASC` reproduces the required
ordering — in example 1 both survivors have two overloaded weeks, so Ana
Petrov sorts before Cato Lund.

**Complexity:** `O(n log n)` time, `O(n)` space (n session rows).
