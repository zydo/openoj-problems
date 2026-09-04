# Solutions — Rising Numbers in a Sentence

## Track the previous number

Split the sentence into its space-separated tokens and inspect each token's
first character. Under the sentence rules a token that starts with a digit is
a number, so parse that token and compare it with the previous number seen.

If the current number does not exceed the previous one, the sequence is not
strictly increasing and `hasRisingNumbers` returns `false` on the spot.
Otherwise record the new value and continue; finishing the scan means every
consecutive pair of numbers was in ascending order.

**Complexity:** `O(|s|)` time and `O(|s|)` space for the tokenization.
