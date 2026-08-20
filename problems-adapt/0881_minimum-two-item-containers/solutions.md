# Solutions — Minimum Two-Item Containers

## Sort and Two Pointers

Sort the weights. The heaviest remaining item must occupy a container. Its
best possible companion is the lightest remaining item: if those two exceed
the capacity, every other potential companion is at least as heavy, so the
heaviest item must go alone.

Maintain pointers at both ends of the sorted array. Use one container for the
heaviest item on every iteration. When it fits with the lightest item, advance
both pointers; otherwise advance only the heavy pointer. A strict pointer
check prevents pairing the final item with itself.

Pairing whenever possible is optimal because it fills the mandatory container
for the heaviest item without making any later item harder to place. The
exchange argument above also proves that the solo case is forced.

**Complexity:** `O(n log n)` time and `O(n)` space.
