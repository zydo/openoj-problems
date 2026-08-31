from typing import List, Optional


class TableStore:
    def __init__(self, names: List[str], columns: List[int]):
        raise NotImplementedError("TODO")

    def insertRow(self, name: str, row: List[str]) -> bool:
        raise NotImplementedError("TODO")

    def deleteRow(self, name: str, rowId: int):
        raise NotImplementedError("TODO")

    def readCell(self, name: str, rowId: int, columnId: int) -> str:
        raise NotImplementedError("TODO")

    def exportRows(self, name: str) -> List[str]:
        raise NotImplementedError("TODO")
