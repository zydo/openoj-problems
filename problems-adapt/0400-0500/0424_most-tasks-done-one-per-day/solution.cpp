class Solution {
  public:
    int maxTasks(vector<vector<int>> &windows) {
        // Day sweep over windows sorted by start day; a min-heap of end days
        // holds the windows available today.
        sort(windows.begin(), windows.end());
        int n = windows.size();
        int i = 0;
        int day = 1;
        int attended = 0;
        priority_queue<int, vector<int>, greater<int>> openEnds;
        while (i < n || !openEnds.empty()) {
            // Heap empty: skip idle days by jumping the clock straight to
            // the next event's start day.
            if (openEnds.empty()) {
                day = max(day, windows[i][0]);
            }
            // Every event that has started becomes available today.
            while (i < n && windows[i][0] <= day) {
                openEnds.push(windows[i][1]);
                i++;
            }
            // Discard windows whose end day already passed — lost regardless.
            while (!openEnds.empty() && openEnds.top() < day) {
                openEnds.pop();
            }
            // Attend the soonest-ending (most perishable) event; an exchange
            // argument shows swapping it in never breaks feasibility.
            if (!openEnds.empty()) {
                openEnds.pop();
                attended++;
            }
            day++;
        }
        return attended;
    }
};
