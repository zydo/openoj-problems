# A Board Of Chores

## Description

A shared chore board serves many household members. Chores carry a due
date, a description, and any number of tags, and members can view
their outstanding chores — everything, or just those with a given tag —
always soonest-due first. Completing hides a chore from these views;
ids are handed out sequentially starting from 1, board-wide.

Implement the `ChoreBoard` class:

- `ChoreBoard()` initializes the board with no chores.
- `int addTask(int userId, String taskDescription, int dueDate,
List<String> tags)` adds a chore for member `userId` with the given
  description, due date, and tags, and returns its id — the first chore
  ever added gets id `1`, the second `2`, and so on.
- `List<String> getAllTasks(int userId)` returns the descriptions of
  member `userId`'s uncompleted chores, ordered by due date, or an
  empty list if there are none.
- `List<String> getTasksForTag(int userId, String tag)` returns the
  descriptions of member `userId`'s uncompleted chores carrying `tag`,
  ordered by due date, or an empty list if there are none.
- `void completeTask(int userId, int taskId)` marks the chore with id
  `taskId` completed — but only if it exists, belongs to `userId`, and
  is not already completed.

### Example 1

```text
Input:
["ChoreBoard", "addTask", "addTask", "addTask", "getAllTasks", "getTasksForTag", "completeTask", "completeTask", "getAllTasks", "addTask", "getTasksForTag", "getAllTasks"]
[[], [3, "sweep", 40, ["home"]], [3, "laundry", 10, ["home", "weekly"]], [2, "filetaxes", 70, []], [3], [3, "home"], [2, 1], [3, 1], [3], [3, "water", 90, ["weekly"]], [3, "weekly"], [9]]
Output: [null, 1, 2, 3, ["laundry", "sweep"], ["laundry", "sweep"], null, null, ["laundry"], 4, ["laundry", "water"], []]
Explanation:
ChoreBoard board = new ChoreBoard();
board.addTask(3, "sweep", 40, ["home"]); // return 1. Member 3 can now
                     // see this chore.
board.addTask(3, "laundry", 10, ["home", "weekly"]); // return 2.
board.addTask(2, "filetaxes", 70, []); // return 3. Belongs to member 2.
board.getAllTasks(3); // return ["laundry", "sweep"], ordered by due
                      // date (10 before 40).
board.getTasksForTag(3, "home"); // both chores carry "home", so return
                                 // ["laundry", "sweep"].
board.completeTask(2, 1); // does nothing: chore 1 belongs to member 3.
board.completeTask(3, 1); // chore 1 ("sweep") is now completed.
board.getAllTasks(3); // return ["laundry"], the only chore left.
board.addTask(3, "water", 90, ["weekly"]); // return 4.
board.getTasksForTag(3, "weekly"); // return ["laundry", "water"].
board.getAllTasks(9); // member 9 has no chores, return [].
```

### Constraints

- `1 <= userId, taskId, dueDate <= 100`
- `0 <= tags.length <= 100`
- `1 <= taskDescription.length <= 50`
- `1 <= tags[i].length, tag.length <= 20`
- All `dueDate` values are unique.
- All strings consist of lowercase and uppercase English letters and
  digits.
- At most `100` calls are made to each method.

## Hints

### Hint 1

A map from member to their chores is the backbone; each chore needs to
remember its id, description, due date, tags, and completion state.

### Hint 2

Views differ only in their filter, so one sort-by-due-date pass over
the member's uncompleted chores can serve both `getAllTasks` and
`getTasksForTag` — at most 100 calls each, so re-sorting per query is
well within budget.
