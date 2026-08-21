# Solutions — All Balanced Bracket Strings

## Backtracking on prefix validity

The wasteful reading of this task is "generate, then test". The efficient one
is to notice that balance is a property of *prefixes*: a string is balanced
exactly when no prefix has more closers than openers and the totals match at
the end. So a prefix that is already ruined can never be repaired, and a prefix
that is still intact is worth extending. Growing the string character by
character under that rule means the search never visits a dead end.

Two counters carry all the state needed to apply the rule. An opener may be
written while the openers written so far number fewer than `n` — there are
simply that many to spend. A closer may be written while the closers still
trail the openers, since writing one then leaves the counts equal at worst,
which is still balanced. Nothing else can go wrong, so a string that reaches
length `2n` under these two guards is balanced by construction and is recorded
without any check.

The implementation keeps one mutable character buffer for the whole search: it
pushes a character, descends, and pops on the way back, so the buffer always
holds the current prefix and never more than `2n` characters. Each finished
string is frozen out of it with a single join. Because the opener is always
attempted before the closer, and `'('` sorts below `')'`, the finished strings
surface in lexicographic order with no sort afterwards — for `n = 2` that is
`(())` before `()()`, the nested arrangement ahead of the side-by-side one.

Every node the search visits is a prefix of at least one balanced string, so no
work is thrown away. The number of balanced strings of length `2n` is the
Catalan number, which grows like `4^n / √n`, and the search tree has that many
leaves with a bounded number of internal nodes per leaf.

**Complexity:** `O(4^n / √n)` time, `O(n)` space beyond the output.
