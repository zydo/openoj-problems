class Solution:
    def read(self, charSource, n, buf):
        total = 0
        buf4 = [None] * 4
        while total < n:
            count = charSource.read4(buf4)
            if count == 0:
                break
            take = min(count, n - total)
            for index in range(take):
                buf[total + index] = buf4[index]
            total += take
        return total
