pub struct NestedSequenceIterator {
    values: Vec<i32>,
    cursor: usize,
}

impl NestedSequenceIterator {
    pub fn new(nestedList: NestedInteger) -> Self {
        fn walk(item: &NestedInteger, out: &mut Vec<i32>) {
            if item.is_integer() {
                out.push(item.get_integer());
                return;
            }
            for child in item.get_list() {
                walk(child, out);
            }
        }
        let mut values = Vec::new();
        for item in nestedList.get_list() {
            walk(item, &mut values);
        }
        NestedSequenceIterator { values, cursor: 0 }
    }

    pub fn nextValue(&mut self) -> i32 {
        let value = self.values[self.cursor];
        self.cursor += 1;
        value
    }

    pub fn hasMore(&mut self) -> bool {
        self.cursor < self.values.len()
    }
}
