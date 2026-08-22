class Solution:
    def sweepRoom(self, sweeper: Sweeper) -> None:
        dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]  # up, right, down, left
        visited = {(0, 0)}
        sweeper.clean()
        # Iterative spiral DFS (a 100 x 200 grid overflows recursive DFS):
        # a frame is [row, col, entry direction, next relative direction].
        # Invariant: iteration i of the top frame starts with the sweeper
        # facing (entry + i) % 4, and every iteration ends with exactly one
        # turnRight — either directly (blocked ahead) or deferred, arriving
        # from the child via the back-out sequence below.
        stack = [[0, 0, 0, 0]]
        while stack:
            frame = stack[-1]
            row, col, entry, index = frame
            if index == 4:
                stack.pop()
                if stack:
                    # Back out of the child: about-face, retrace the step,
                    # about-face, then the parent's trailing turnRight into
                    # its next direction.
                    sweeper.turnRight()
                    sweeper.turnRight()
                    sweeper.move()
                    sweeper.turnRight()
                    sweeper.turnRight()
                    sweeper.turnRight()
                continue
            face = (entry + index) % 4
            nrow, ncol = row + dirs[face][0], col + dirs[face][1]
            if (nrow, ncol) not in visited and sweeper.move():
                visited.add((nrow, ncol))
                sweeper.clean()
                frame[3] = index + 1
                stack.append([nrow, ncol, face, 0])
            else:
                sweeper.turnRight()
                frame[3] = index + 1
