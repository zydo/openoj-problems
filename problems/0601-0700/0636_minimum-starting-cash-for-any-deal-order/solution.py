class Solution:
    def minimumStartingCash(self, deals: list[list[int]]) -> int:
        total_drain = 0
        max_rebate_losing = 0
        max_price_winning = 0
        for price, rebate in deals:
            # losing deals (rebate < price) drain money permanently; profitable deals don't
            if rebate < price:
                # losing deals' total drain is fixed regardless of ordering
                total_drain += price - rebate
                # worst order: largest-rebate losing deal goes last, after every
                # other drain, yet its full price must still be covered
                if rebate > max_rebate_losing:
                    max_rebate_losing = rebate
            else:
                # profitable deals only matter via their largest upfront price, paid at
                # the lowest-funds point (right after the losing block)
                if price > max_price_winning:
                    max_price_winning = price
        # answer = total_drain + max(last losing deal's rebate, top profitable deal's price)
        return total_drain + max(max_rebate_losing, max_price_winning)
