class TableStore {
  public:
    TableStore(vector<string> names, vector<int> columns);
    bool insertRow(string name, vector<string> row);
    void deleteRow(string name, int rowId);
    string readCell(string name, int rowId, int columnId);
    vector<string> exportRows(string name);
};
