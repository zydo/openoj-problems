class Solution {
  public:
    string removeDuplicateLetters(string s) {
        array<int, 26> count{};
        for (char ch : s)
            count[ch - 'a']++;
        string stack;
        array<bool, 26> inStack{};
        for (char ch : s) {
            int c = ch - 'a';
            count[c]--;
            if (inStack[c])
                continue;
            while (!stack.empty()) {
                int top = stack.back() - 'a';
                if (top > c && count[top] > 0) {
                    inStack[top] = false;
                    stack.pop_back();
                } else {
                    break;
                }
            }
            stack.push_back(ch);
            inStack[c] = true;
        }
        return stack;
    }
};
