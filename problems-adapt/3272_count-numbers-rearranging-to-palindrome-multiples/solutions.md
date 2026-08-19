# Solutions — Count Numbers Rearranging to Palindrome Multiples

## Palindrome enumeration with multiset counting

An integer qualifies when its digits permute into a palindrome divisible by
`k`, and a length-`n` palindrome is determined by its leading `⌈n/2⌉` digits
(the middle one shared when `n` is odd). Enumerating `10^⌈n/2⌉` halves,
mirroring each, and discarding candidates that start with `0` or fail
divisibility by `k` therefore visits every qualifying palindrome once. Each
survivor is reduced to its digit-count vector and dropped into a set, so
palindromes sharing digits — like `212` and `122`-producing twins — collapse
to a single record instead of being recounted.

A record's contribution is the number of distinct `n`-digit integers spelling
its multiset: the multinomial `n! / ∏ c_d!`. Spellings that open with `0` are
not `n`-digit numbers, so when the zero count is positive they are removed by
fixing a `0` in front and permuting the remaining `n - 1` digits,
`(n-1)! / ((c_0 - 1)! · ∏_{d>0} c_d!)`. The example `n = 3, k = 4` makes both
halves visible: `212` gives `122`, `212`, `221`, while `404` gives only `404`
and `440` because `044` opens with zero.

Each integer belongs to exactly one digit multiset, so summing contributions
over the deduplicated records counts every qualifying integer exactly once.
With `n <= 10` the enumeration tops out at `10⁵` candidates, and the
factorials come from one small table.

**Complexity:** `O(10^⌈n/2⌉ · n)` time, `O(10^⌈n/2⌉)` space.
