class Solution {
  public:
    vector<int> asteroidCollision(vector<int> &asteroids) {
        vector<int> stack;
        for (int asteroid : asteroids) {
            bool alive = true;
            while (alive && !stack.empty() && asteroid < 0 && stack.back() > 0) {
                int top = stack.back();
                if (top < -asteroid) {
                    stack.pop_back();
                } else if (top == -asteroid) {
                    stack.pop_back();
                    alive = false;
                } else {
                    alive = false;
                }
            }
            if (alive) {
                stack.push_back(asteroid);
            }
        }
        return stack;
    }
};
