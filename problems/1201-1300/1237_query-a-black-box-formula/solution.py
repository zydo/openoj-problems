class Solution:
    def collectPairs(self, hiddenFormula, z):
        pairs = []
        x, y = 1, 1000
        while x <= 1000 and y >= 1:
            value = hiddenFormula.evaluate(x, y)
            if value == z:
                pairs.append([x, y])
                x += 1
                y -= 1
            elif value < z:
                x += 1
            else:
                y -= 1
        return pairs
