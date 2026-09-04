class Solution:
    def __init__(self):
        self.buf4 = [None] * 4
        self.buf4_count = 0
        self.buf4_index = 0

    def read(self, charSource, queries, buf):
        total = 0
        for n in queries:
            total += self._transfer(charSource, n, buf, total)
        return total

    def _transfer(self, charSource, n, buf, offset):
        transferred = 0
        while transferred < n:
            if self.buf4_index == self.buf4_count:
                self.buf4_count = charSource.read4(self.buf4)
                self.buf4_index = 0
                if self.buf4_count == 0:
                    break
            take = min(self.buf4_count - self.buf4_index, n - transferred)
            for index in range(take):
                buf[offset + transferred + index] = self.buf4[self.buf4_index + index]
            self.buf4_index += take
            transferred += take
        return transferred
