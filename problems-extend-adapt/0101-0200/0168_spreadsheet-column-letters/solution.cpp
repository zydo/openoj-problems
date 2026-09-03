class Solution {
  public:
    string columnLetters(int number) {
        // Bijective base-26: letters are digits 1..26 with no zero, so every
        // step subtracts one before dividing; the off-by-one is the whole problem.
        string letters;
        while (number > 0) {
            // Map 1..26 onto 0..25, borrowing one from the next letter up.
            number--;
            letters.push_back('A' + number % 26);
            number /= 26;
        }
        // Remainders arrive least-significant letter first.
        return string(letters.rbegin(), letters.rend());
    }
};
