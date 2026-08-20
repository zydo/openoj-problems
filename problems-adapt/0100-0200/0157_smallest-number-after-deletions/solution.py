class Solution:
    def smallestAfterDeletions(self, digits: str, k: int) -> str:
        stack = []
        for ch in digits:
            # A kept digit larger than the arriving one should go: a smaller
            # digit in a more significant position outweighs anything later.
            while k and stack and stack[-1] > ch:
                stack.pop()
                k -= 1
            stack.append(ch)
        # Unspent removals mean the digits were non-decreasing; drop from the
        # end, where the largest digits sit.
        if k:
            stack = stack[:-k]
        # Strip leading zeros; a fully consumed input yields "0", not "".
        result = "".join(stack).lstrip("0")
        return result if result else "0"
