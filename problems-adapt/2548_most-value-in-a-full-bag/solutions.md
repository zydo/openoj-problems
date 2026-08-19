# Solutions — Most Value in a Full Bag

## Greedy Fill by Value Per Unit

Because every object can be cut with value and weight scaling by the same
fraction, this is a fractional knapsack with a single capacity, and the
optimal policy is greedy. Exchange argument: take any full load, and suppose
it assigns weight to an object whose value per unit is lower than some other
object's; moving that weight across changes the total by the difference of
the two rates times the amount moved, which is never negative. Repeating the
swap concentrates all weight on the dearest available units, so filling in
decreasing order of `value / weight` — whole objects while they fit, then a
single cut piece that tops the bag off — attains the optimum.

Feasibility comes first: when the weights sum to less than `capacity`, no
fractional assignment can reach a full bag, and the answer is `-1.0`.

The implementation sorts by unit value descending, then walks the sorted
order keeping a `remaining` budget: an object lighter than the budget is
added at full value, and the first object heavier than the budget
contributes `value * (remaining / weight)` — the one place floating point
enters. All values and weights are positive integers, so the comparator is
well defined and whole-object totals are exact; the judge's `10⁻⁵` tolerance
covers the single rounding at the cut. Sorting dominates at `O(n log n)`
time with an `O(n)` sorted copy.

Worked on Example 1, `items = [[3,2],[9,1],[30,4]]`, `capacity = 6`: unit
values are `1.5`, `9`, `7.5`, so the pour order is the second, third, then
first object. The second and third fit whole (value `39`, budget down to
`1`), and half of the first — weight `1`, value `1.5` — finishes the load at
`40.5`.

**Complexity:** `O(n log n)` time, `O(n)` space.
