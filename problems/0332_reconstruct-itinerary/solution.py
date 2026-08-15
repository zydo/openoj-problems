from typing import List, Optional

from collections import defaultdict


class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = defaultdict(list)
        for departure, arrival in tickets:
            graph[departure].append(arrival)
        for airport in graph:
            graph[airport].sort(reverse=True)

        route = []

        def visit(airport):
            while graph[airport]:
                visit(graph[airport].pop())
            route.append(airport)

        visit("JFK")
        return route[::-1]
