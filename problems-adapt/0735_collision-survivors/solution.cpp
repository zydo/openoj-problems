class Solution {
  public:
    vector<int> collisionSurvivors(vector<int> &movers) {
        // The stack holds survivors — internally stable, all collisions resolved.
        vector<int> stack;
        for (int mover : movers) {
            bool alive = true;
            // A newcomer can only fight the top, and only when it moves left
            // against a right-moving survivor; other pairs never meet.
            while (alive && !stack.empty() && mover < 0 && stack.back() > 0) {
                int top = stack.back();
                if (top < -mover) {
                    // Top explodes; the newcomer continues against the new top.
                    stack.pop_back();
                } else if (top == -mover) {
                    // Equal sizes: both explode.
                    stack.pop_back();
                    alive = false;
                } else {
                    // Top is larger: the newcomer explodes.
                    alive = false;
                }
            }
            if (alive) {
                stack.push_back(mover);
            }
        }
        return stack;
    }
};
