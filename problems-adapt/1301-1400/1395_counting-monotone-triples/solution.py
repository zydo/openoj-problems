class Solution:
    def countMonotoneTriples(self, rating: List[int]) -> int:
        # Fix the middle index j: a rising triple picks any smaller rating
        # on the left and any larger on the right; a falling triple mirrors
        # it. Summing the four counts over every j counts each triple
        # exactly once, by its middle element.
        n = len(rating)
        triples = 0
        for j in range(n):
            less_left = sum(1 for i in range(j) if rating[i] < rating[j])
            greater_left = j - less_left
            greater_right = sum(1 for k in range(j + 1, n) if rating[k] > rating[j])
            less_right = n - 1 - j - greater_right
            triples += less_left * greater_right + greater_left * less_right
        return triples
