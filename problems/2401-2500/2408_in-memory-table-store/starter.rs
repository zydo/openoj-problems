pub struct TableStore;

impl TableStore {
    pub fn new(names: Vec<String>, columns: Vec<i32>) -> Self {
        panic!("TODO")
    }

    pub fn insertRow(&mut self, name: String, row: Vec<String>) -> bool {
        panic!("TODO")
    }

    pub fn deleteRow(&mut self, name: String, rowId: i32) {
        panic!("TODO")
    }

    pub fn readCell(&mut self, name: String, rowId: i32, columnId: i32) -> String {
        panic!("TODO")
    }

    pub fn exportRows(&mut self, name: String) -> Vec<String> {
        panic!("TODO")
    }
}
