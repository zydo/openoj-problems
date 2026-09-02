class Solution:
    def numberOfCategories(self, kindOracle: KindOracle, n: int) -> int:
        # Keep one representative index per kind discovered so far.
        # Kind-sharing is an equivalence relation behind the oracle, so
        # by transitivity element i shares a kind with some earlier
        # element exactly when it shares one with that kind's
        # representative: scanning representatives only never misses a
        # join and never invents one. A miss across all representatives
        # means i opens a genuinely new kind and becomes its
        # representative; at most i queries are spent on element i, so
        # the whole sweep stays within n(n-1)/2 calls.
        representatives: list[int] = []
        for i in range(n):
            for rep in representatives:
                if kindOracle.hasSameKind(i, rep):
                    break
            else:
                representatives.append(i)
        return len(representatives)
