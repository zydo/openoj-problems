#include <string>
#include <unordered_map>

// One map entry per message: the next timestamp it may print at.
class MessageCooldown {
  public:
    MessageCooldown() = default;

    bool allowMessage(int timestamp, string message) {
        auto entry = nextAllowed.find(message);
        if (entry != nextAllowed.end() && timestamp < entry->second) {
            return false;
        }
        nextAllowed[message] = timestamp + 10;
        return true;
    }

  private:
    unordered_map<string, int> nextAllowed;
};
