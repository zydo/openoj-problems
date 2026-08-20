class FileTree:
    def __init__(self) -> None:
        raise NotImplementedError("TODO")

    def ls(self, path: str) -> list[str]:
        raise NotImplementedError("TODO")

    def mkdir(self, path: str) -> None:
        raise NotImplementedError("TODO")

    def appendToFile(self, filePath: str, content: str) -> None:
        raise NotImplementedError("TODO")

    def readFile(self, filePath: str) -> str:
        raise NotImplementedError("TODO")
