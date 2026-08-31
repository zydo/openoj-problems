import java.util.HashMap;
import java.util.Map;

class MessageCooldown {

    // One map entry per message: the next timestamp it may print at.
    private final Map<String, Integer> nextAllowed = new HashMap<>();

    public MessageCooldown() {}

    public boolean allowMessage(int timestamp, String message) {
        Integer allowed = nextAllowed.get(message);
        if (allowed != null && timestamp < allowed) {
            return false;
        }
        nextAllowed.put(message, timestamp + 10);
        return true;
    }
}
