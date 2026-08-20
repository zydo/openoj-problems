from collections import defaultdict


class Solution:
    def orderFlights(self, flights: list[list[str]]) -> list[str]:
        graph = defaultdict(list)
        for departure, arrival in flights:
            graph[departure].append(arrival)
        # Reverse-sorted so pop() always takes the lexicographically
        # smallest unused flight.
        for airport in graph:
            graph[airport].sort(reverse=True)

        route = []

        def visit(airport):
            while graph[airport]:
                visit(graph[airport].pop())
            # Record only in postorder, after every outgoing edge is used:
            # dead-end airports land at their latest possible position.
            route.append(airport)

        visit("JFK")
        # Reversed postorder is a valid Eulerian path; exploring the
        # smallest edge first makes it the lexicographically smallest one.
        return route[::-1]
