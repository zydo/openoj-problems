# Divisor Word Signs

## Description

Build a 1-indexed list `answer` of `n` strings. For each position `i`, the
string is decided by its divisors:

- `"FizzBuzz"` when `i` is divisible by both 3 and 5,
- `"Fizz"` when `i` is divisible by 3 (but not 5),
- `"Buzz"` when `i` is divisible by 5 (but not 3),
- the decimal spelling of `i` when divisible by neither.

### Example 1

```text
Input: n = 6
Output: ["1","2","Fizz","4","Buzz","Fizz"]
```

### Example 2

```text
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

### Constraints

- `1 <= n <= 10⁴`
