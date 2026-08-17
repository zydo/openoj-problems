import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

class FileSystem {

    private static final class Node {

        final TreeMap<String, Node> children = new TreeMap<>();
        StringBuilder content;
    }

    private final Node root = new Node();

    public FileSystem() {}

    public List<String> ls(String path) {
        String[] parts = split(path);
        Node node = root;
        for (String part : parts) {
            node = node.children.get(part);
        }
        if (node.content != null) {
            List<String> result = new ArrayList<>();
            result.add(parts[parts.length - 1]);
            return result;
        }
        return new ArrayList<>(node.children.keySet());
    }

    public void mkdir(String path) {
        Node node = root;
        for (String part : split(path)) {
            Node next = node.children.get(part);
            if (next == null) {
                next = new Node();
                node.children.put(part, next);
            }
            node = next;
        }
    }

    public void addContentToFile(String filePath, String content) {
        Node node = root;
        String[] parts = split(filePath);
        for (int index = 0; index < parts.length - 1; index++) {
            node = node.children.get(parts[index]);
        }
        Node file = node.children.get(parts[parts.length - 1]);
        if (file == null) {
            file = new Node();
            file.content = new StringBuilder();
            node.children.put(parts[parts.length - 1], file);
        } else if (file.content == null) {
            file.content = new StringBuilder();
        }
        file.content.append(content);
    }

    public String readContentFromFile(String filePath) {
        String[] parts = split(filePath);
        Node node = root;
        for (int index = 0; index < parts.length - 1; index++) {
            node = node.children.get(parts[index]);
        }
        return node.children.get(parts[parts.length - 1]).content.toString();
    }

    private static String[] split(String path) {
        List<String> parts = new ArrayList<>();
        for (String part : path.split("/")) {
            if (!part.isEmpty()) {
                parts.add(part);
            }
        }
        return parts.toArray(new String[0]);
    }
}
