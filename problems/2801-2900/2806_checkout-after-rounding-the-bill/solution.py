class Solution:
    def balanceAfterCheckout(self, price: int) -> int:
        # Adding 5 before flooring to a multiple of 10 encodes the half-up
        # rounding rule: a ones digit of 0-4 stays on the lower multiple,
        # 6-9 crosses to the upper one, and an exact 5 lands on the upper
        # neighbor -- the larger of the two equally distant candidates.
        rounded = (price + 5) // 10 * 10
        # On 0 <= price <= 100 every intermediate is non-negative,
        # so the same one-line expression behaves identically in any language.
        return 100 - rounded
