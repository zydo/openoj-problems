#include <string>
#include <vector>

class Solution {
  public:
    // The first word fixes the target vowel count; every later word
    // sharing it is reversed, the rest pass through untouched.
    string reverseWords(string s) {
        vector<string> words;
        size_t start = 0;
        while (start <= s.size()) {
            size_t end = s.find(' ', start);
            if (end == string::npos) {
                end = s.size();
            }
            words.push_back(s.substr(start, end - start));
            if (end == s.size()) {
                break;
            }
            start = end + 1;
        }
        int target = countVowels(words[0]);
        string out = words[0];
        for (size_t i = 1; i < words.size(); i++) {
            out += ' ';
            if (countVowels(words[i]) == target) {
                out += string(words[i].rbegin(), words[i].rend());
            } else {
                out += words[i];
            }
        }
        return out;
    }

  private:
    int countVowels(const string &word) {
        int count = 0;
        for (char c : word) {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }
        return count;
    }
};
