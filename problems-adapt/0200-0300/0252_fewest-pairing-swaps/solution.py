class Solution:
    def fewestPairingSwaps(self, line: list[int]) -> int:
        line = list(line)
        n = len(line)
        pos = [0] * n
        for i, value in enumerate(line):
            pos[value] = i

        swaps = 0
        for i in range(0, n, 2):
            first = line[i]
            partner = first ^ 1  # partners are (0,1), (2,3), ...
            if line[i + 1] == partner:
                continue
            j = pos[partner]
            other = line[i + 1]
            # Swap the non-partner sitting next to `first` with `partner`.
            line[i + 1] = partner
            line[j] = other
            pos[partner] = i + 1
            pos[other] = j
            swaps += 1
        return swaps
