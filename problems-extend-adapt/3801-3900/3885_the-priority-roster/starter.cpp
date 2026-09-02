class PriorityRoster {
  public:
    PriorityRoster(vector<vector<int>> events);
    void updatePriority(int eventId, int newPriority);
    int pollHighest();
};
