MOD = 10**9 + 7


class AffineSequence:
    """A running (mult, add) pair represents the affine transform every
    already-appended value has picked up so far: current value = stored *
    mult + add (mod MOD). shiftAll/scaleAll only touch that pair — O(1) — and
    never walk the sequence. append folds the transform's inverse into the
    value being stored, so that re-applying the transform later reproduces
    exactly the value that was appended, no matter how many shiftAll/scaleAll
    calls land in between.
    """

    def __init__(self):
        self.mult = 1
        self.add = 0
        self.stored = []

    def append(self, val: int):
        # Undo the current transform up front: stored * mult + add == val,
        # so stored == (val - add) * inverse(mult) (mod MOD). mult is never
        # 0 mod MOD (each scaleAll factor is 1..100, and MOD is prime), so
        # the modular inverse always exists.
        inv = pow(self.mult, MOD - 2, MOD)
        stored_val = ((val - self.add) % MOD) * inv % MOD
        self.stored.append(stored_val)

    def shiftAll(self, inc: int):
        self.add = (self.add + inc) % MOD

    def scaleAll(self, m: int):
        self.mult = (self.mult * m) % MOD
        self.add = (self.add * m) % MOD

    def getIndex(self, idx: int) -> int:
        if idx < 0 or idx >= len(self.stored):
            return -1
        return (self.stored[idx] * self.mult + self.add) % MOD
