from typing import List, Optional


class Solution:
    def minimumMoney(self, transactions: List[List[int]]) -> int:
        total_lose = 0
        max_cashback_losing = 0
        max_cost_winning = 0
        for cost, cashback in transactions:
            if cashback < cost:
                total_lose += cost - cashback
                if cashback > max_cashback_losing:
                    max_cashback_losing = cashback
            else:
                if cost > max_cost_winning:
                    max_cost_winning = cost
        return total_lose + max(max_cashback_losing, max_cost_winning)
