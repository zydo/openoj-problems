class TableStore {
    constructor(names: string[], columns: number[]) {}

    insertRow(name: string, row: string[]): boolean {}

    deleteRow(name: string, rowId: number) {}

    readCell(name: string, rowId: number, columnId: number): string {}

    exportRows(name: string): string[] {}
}
