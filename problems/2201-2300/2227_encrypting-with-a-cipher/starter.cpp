class Cipher {
  public:
    Cipher(vector<string> keys, vector<string> values, vector<string> dictionary);
    string encrypt(string word1);
    int decrypt(string word2);
};
