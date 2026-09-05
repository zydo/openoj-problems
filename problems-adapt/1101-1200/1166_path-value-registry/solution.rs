use std::collections::HashMap;

pub struct PathRegistry {
    values: HashMap<String, i32>,
}

impl PathRegistry {
    pub fn new() -> Self {
        Self { values: HashMap::new() }
    }

    pub fn addPath(&mut self, path: String, value: i32) -> bool {
        if self.values.contains_key(&path) {
            return false;
        }
        let slash = path.rfind('/').unwrap();
        let parent = &path[..slash];
        if !parent.is_empty() && !self.values.contains_key(parent) {
            return false;
        }
        self.values.insert(path, value);
        true
    }

    pub fn get(&mut self, path: String) -> i32 {
        self.values.get(&path).copied().unwrap_or(-1)
    }
}
