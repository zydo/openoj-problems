// Problem-provided oracle (Interrogator), Rust side. Assembled into
// every submission's crate by the judge; never editable in the editor.
// Constructed from the case state: the wordlist and the secret word as
// generic values, then the guess budget.
#[allow(dead_code)]
pub struct Interrogator {
    secret: String,
    found: bool,
    budget: i64,
}

impl Interrogator {
    pub fn new(construction: &[OjValue], budget: i64) -> Self {
        match construction.first() {
            Some(OjValue::Array(_)) => {}
            _ => panic!("Interrogator wordlist must be an array"),
        }
        let secret = match construction.get(1) {
            Some(OjValue::Str(text)) => text.clone(),
            _ => panic!("Interrogator secret must be a string"),
        };
        Interrogator {
            secret,
            found: false,
            budget,
        }
    }

    pub fn guess(&mut self, word: &str) -> i32 {
        if self.budget <= 0 {
            panic!("Interrogator guess budget exhausted");
        }
        self.budget -= 1;
        if word == self.secret {
            self.found = true;
        }
        self.secret.bytes().zip(word.bytes()).filter(|(a, b)| a == b).count() as i32
    }

    pub fn verdict(&self) -> OjValue {
        OjValue::Bool(self.found)
    }
}
