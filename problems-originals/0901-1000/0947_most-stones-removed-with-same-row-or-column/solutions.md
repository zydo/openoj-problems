# Solutions — Most Stones Removed with Same Row or Column

## Union-find over rows and columns

Call two stones connected when a chain of shared rows and columns joins
them; connectivity partitions the plane into components, and a stone in one
component never shares a line with a stone in another. Within a component
of `k` stones, `k - 1` removals are always achievable — order the chain so
each removed stone still neighbors a survivor, leaving one stone per
component — and a `k`th removal never is, since the last stone of the plane
shares its row and column with nothing. The most removable stones is
therefore `n` minus the number of components, and the counting, not the
order, is the whole task.

An iterative union-find with path halving and union-by-size computes the
components without ever materializing the `O(n²)` adjacency: two hash maps
remember the first stone seen in each row and in each column, and stone `i`
unions with the stone those maps already hold for its row `xi` and its
column `yi`. Every stone of a row ends up merged transitively, likewise
every stone of a column, so the classes are exactly the components. A final
pass counts the indices that are their own root and returns `n` minus that
count.

Each of the `n` stones does two expected-`O(1)` map operations and at most
two finds, and the parent and size arrays hold one entry per stone.

**Complexity:** `O(n α(n))` time, `O(n)` space.
