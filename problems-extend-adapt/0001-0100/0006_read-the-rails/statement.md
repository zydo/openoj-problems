# Read The Rails

## Description

Picture writing a message along a set of horizontal rails. The pen starts on
the top rail and lays down the message one letter per column, stepping down a
rail with each letter; on reaching the bottom rail it turns around and climbs
back up, bouncing between the two ends until the message runs out. A rail is
read by taking its letters from left to right, and the transformed message is
the rails read from top to bottom.

Given the original message `s` and the rail count `numRows`, return the
transformed message.

### Example 1

```text
Input: s = "RAILWAYSTATION", numRows = 3
Output: "RWTOALASAINIYT"
Explanation:
R   W   T   O
 A L A S A I N
  I   Y   T
```

The pen runs R, A, I, L down to the bottom rail, climbs back up through W, A,
Y, turns at the top again, and the rails read back as the output above.

### Example 2

```text
Input: s = "RAILWAYSTATION", numRows = 4
Output: "RYOAASINIWTTLA"
Explanation:
R     Y     O
 A   A S   I N
  I W   T T
   L     A
```

With four rails the down-and-up sweep spans more columns, so the letters
redistribute differently before the rails are read.

### Example 3

```text
Input: s = "Q", numRows = 1
Output: "Q"
```

A single rail never turns, so the message is already in rail order.

### Example 4

```text
Input: s = "HELLO,WORLD.", numRows = 3
Output: "HOREL,OL.LWD"
```

### Constraints

- `s` holds between 1 and 1000 characters.
- `s` consists of English letters in either case, ',', and '.'.
- `numRows` is between 1 and 1000.
