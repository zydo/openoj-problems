import java.util.ArrayList;
import java.util.List;

class ChunkStream {

    // One slot per id (index 0 unused) plus ptr, the next id the output is
    // waiting for.
    private final String[] slots;
    private int ptr;

    public ChunkStream(int n) {
        slots = new String[n + 1];
        ptr = 1;
    }

    public String[] insert(int idKey, String value) {
        slots[idKey] = value;
        List<String> chunk = new ArrayList<>();
        while (ptr < slots.length && slots[ptr] != null) {
            chunk.add(slots[ptr]);
            ptr++;
        }
        return chunk.toArray(new String[0]);
    }
}
