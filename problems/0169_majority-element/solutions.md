# Solutions — Majority Element

## Boyer-Moore Voting

The key insight is that the majority element appears more than `n/2` times, so it outnumbers every other element combined. If you pair up each occurrence of the majority element with one occurrence of any different element, the pairs cancel out and at least one unpaired majority vote survives. This means a single pass with a running "vote count" can identify the majority without ever counting occurrences explicitly.

The algorithm keeps a `candidate` and a `count`. When the count reaches zero, the current element is adopted as the new candidate with count 1. Thereafter, each element equal to the candidate increments the count and each different element decrements it. Every decrement can be viewed as cancelling one candidate vote against one opposing vote, so segments where the count returns to zero are self-cancelling and cannot contain more than half of any true majority.

Because the problem guarantees a majority element exists, the surplus it accumulates over the entire array ensures the candidate left standing at the end is that majority element — no verification pass is needed. A single-element array simply adopts its only element on the first iteration, and the answer is returned as soon as the loop finishes.

**Complexity:** `O(n)` time, `O(1)` space.
