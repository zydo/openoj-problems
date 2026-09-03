# Solutions — The Majority Element

## Boyer-Moore voting

The scan keeps exactly one candidate and one counter. When the counter sits at zero the
current element is adopted as the new candidate; afterwards a match with the candidate
raises the counter and a mismatch spends it, so every element votes for or against a
single standing value. No table of counts is ever kept — the pair `(candidate, count)`
is the entire state, which is what the follow-up's `O(1)` space asks for.

Why the survivor is the majority: every mismatch cancels one occurrence of the candidate
against one occurrence of some other value, so each unit the counter drops stands for a
pair of elements deleted from consideration. Any stretch of the array in which the
majority element is the candidate can lose at most the minority elements it holds, and
any stretch in which it is not still deletes at least as many minority elements as
majority ones. Since the majority owns more than half of all elements, it cannot be
fully cancelled across the whole array, and the candidate left standing at the end is
it.

The code needs no second pass to confirm the winner because the statement guarantees a
majority element exists, and it initializes `candidate` with the first element purely so
the zero-counter swap on the very first step is harmless — adopting `nums[0]` when the
count is zero is exactly what the loop does anyway.

**Complexity:** `O(n)` time, `O(1)` space.
