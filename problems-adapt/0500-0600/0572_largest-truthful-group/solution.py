class Solution:
    def mostTruthful(self, statements: list[list[int]]) -> int:
        n = len(statements)
        best = 0
        # Enumerate every assignment: bit i set means person i is truthful.
        # The constraint is one-sided — truthful people must tell the truth,
        # unreliable people may say anything.
        for mask in range(1 << n):
            truthful = [i for i in range(n) if mask & (1 << i)]
            valid = True
            for i in truthful:
                for j in range(n):
                    # 2 = no statement; a "j is truthful" claim requires bit j
                    # set and a "j is unreliable" claim requires it clear.
                    if statements[i][j] == 2:
                        continue
                    is_truthful = bool(mask & (1 << j))
                    if is_truthful != (statements[i][j] == 1):
                        valid = False
                        break
                if not valid:
                    break
            if valid:
                best = max(best, len(truthful))
        return best
