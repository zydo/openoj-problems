class Solution {
  public:
    int fewestToggles(int start, int goal) { return popcount(static_cast<unsigned>(start ^ goal)); }
};
