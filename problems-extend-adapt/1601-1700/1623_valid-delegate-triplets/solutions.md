# Solutions — Valid Delegate Triplets

## Cross join across the three offices filtered by pairwise distinctness

Since `OfficeA`, `OfficeB`, and `OfficeC` are separate pools with no
foreign-key relationship between them, every candidate triplet is a
member of the cross product `OfficeA × OfficeB × OfficeC` — one row
per office picked independently. A three-way join `FROM OfficeA a,
OfficeB b, OfficeC c` enumerates exactly that cross product without
any join condition needed to connect the tables.

The eligibility rule then narrows the cross product down with a
`WHERE` clause: all three `delegate_id` values must differ pairwise,
and all three `delegate_name` values must differ pairwise. Six
inequalities (id and name for each of the three unordered pairs)
capture the requirement completely, and the projection renames each
surviving row's three names to `delegate_A`, `delegate_B`, and
`delegate_C`.

**Complexity:** proportional to the size of the cross product of the
three offices, since every combination of one row from each table is
generated before the `WHERE` clause filters it.
