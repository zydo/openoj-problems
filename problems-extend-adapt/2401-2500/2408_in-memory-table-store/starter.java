class TableStore {

    public TableStore(String[] names, int[] columns) {}

    public boolean insertRow(String name, String[] row) {}

    public void deleteRow(String name, int rowId) {}

    public String readCell(String name, int rowId, int columnId) {}

    public String[] exportRows(String name) {}
}
