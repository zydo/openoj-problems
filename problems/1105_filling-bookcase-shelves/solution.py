from typing import List, Optional


class Solution:
    def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:
        count = len(books)
        dp = [0] * (count + 1)
        for i in range(1, count + 1):
            width = 0
            height = 0
            dp[i] = float("inf")
            j = i - 1
            while j >= 0:
                thickness, book_height = books[j]
                width += thickness
                if width > shelfWidth:
                    break
                height = max(height, book_height)
                dp[i] = min(dp[i], dp[j] + height)
                j -= 1
        return dp[count]
