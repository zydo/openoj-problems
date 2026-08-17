from typing import List


class FileSystem:
    def __init__(self) -> None:
        self.root = {}

    def ls(self, path: str) -> List[str]:
        parts = [part for part in path.split("/") if part]
        node = self.root
        for part in parts[:-1]:
            node = node[part]
        if not parts:
            return sorted(self.root)
        child = node[parts[-1]]
        if isinstance(child, dict):
            return sorted(child)
        return [parts[-1]]

    def mkdir(self, path: str) -> None:
        node = self.root
        for part in path.split("/"):
            if part:
                node = node.setdefault(part, {})

    def addContentToFile(self, filePath: str, content: str) -> None:
        parts = [part for part in filePath.split("/") if part]
        node = self.root
        for part in parts[:-1]:
            node = node[part]
        name = parts[-1]
        if isinstance(node.get(name), str):
            node[name] += content
        else:
            node[name] = content

    def readContentFromFile(self, filePath: str) -> str:
        parts = [part for part in filePath.split("/") if part]
        node = self.root
        for part in parts[:-1]:
            node = node[part]
        return node[parts[-1]]
