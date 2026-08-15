from typing import List, Optional


class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        parent = {}

        def find(x):
            parent.setdefault(x, x)
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(a, b):
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb

        owner = {}
        for account in accounts:
            name, emails = account[0], account[1:]
            for email in emails:
                parent.setdefault(email, email)
                owner[email] = name
            for email in emails[1:]:
                union(emails[0], email)

        groups = {}
        order = []
        for account in accounts:
            for email in account[1:]:
                root = find(email)
                if root not in groups:
                    groups[root] = set()
                    order.append(root)
                groups[root].add(email)

        merged = []
        for root in order:
            merged.append([owner[root]] + sorted(groups[root]))
        return merged
