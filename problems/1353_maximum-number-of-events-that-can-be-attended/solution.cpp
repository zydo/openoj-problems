class Solution {
  public:
    int maxEvents(vector<vector<int>> &events) {
        sort(events.begin(), events.end());
        int n = events.size();
        int i = 0;
        int day = 1;
        int attended = 0;
        priority_queue<int, vector<int>, greater<int>> openEnds;
        while (i < n || !openEnds.empty()) {
            if (openEnds.empty()) {
                day = max(day, events[i][0]);
            }
            while (i < n && events[i][0] <= day) {
                openEnds.push(events[i][1]);
                i++;
            }
            while (!openEnds.empty() && openEnds.top() < day) {
                openEnds.pop();
            }
            if (!openEnds.empty()) {
                openEnds.pop();
                attended++;
            }
            day++;
        }
        return attended;
    }
};
