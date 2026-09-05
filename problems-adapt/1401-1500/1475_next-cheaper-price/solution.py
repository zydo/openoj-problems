class Solution:
    def discountedPrices(self, prices: list[int]) -> list[int]:
        answer = list(prices)
        stack = []  # indices with pending discount
        for i, price in enumerate(prices):
            while stack and prices[stack[-1]] >= price:
                answer[stack.pop()] -= price
            stack.append(i)
        return answer
