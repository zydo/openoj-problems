// Problem-provided oracle (SealedListNode), Rust side. Assembled into
// every submission's crate by the judge; never editable in the editor.
// Constructed from the case state: the serialized linked list as one
// generic value, then the query budget. The chain is wired at
// construction; the solution receives `&mut` sealedListNode with plain references
// along `next`.
#[allow(dead_code)]
pub struct SealedListNode {
    value: i64,
    next: Option<&'static mut SealedListNode>,
    transcript: std::rc::Rc<std::cell::RefCell<Vec<i64>>>,
    budget: std::cell::Cell<i64>,
}

impl SealedListNode {
    pub fn new(construction: &[OjValue], budget: i64) -> Self {
        let raw = match construction.first() {
            Some(OjValue::Str(text)) => text.clone(),
            _ => panic!("SealedListNode sealedListNode must be a string"),
        };
        let values: Vec<i64> = raw
            .split(',')
            .filter(|part| !part.is_empty())
            .map(|part| {
                part.parse::<i64>()
                    .expect("SealedListNode sealedListNode must contain integers")
            })
            .collect();
        let transcript = std::rc::Rc::new(std::cell::RefCell::new(Vec::new()));
        // Wire the chain from the tail inward using boxed, leaked nodes so
        // `next` can be a plain mutable reference — the list is immutable
        // to the solver anyway and lives for the whole run.
        let mut tail: Option<&'static mut SealedListNode> = None;
        for i in (1..values.len()).rev() {
            let node = Box::leak(Box::new(SealedListNode {
                value: values[i],
                next: None,
                transcript: std::rc::Rc::clone(&transcript),
                budget: std::cell::Cell::new(i64::MAX),
            }));
            node.next = tail;
            tail = Some(node);
        }
        let head_value = values.first().copied().unwrap_or(0);
        SealedListNode {
            value: head_value,
            next: tail,
            transcript,
            budget: std::cell::Cell::new(budget),
        }
    }

    /// Records the current node's value into the judged transcript.
    pub fn print_value(&mut self) {
        if self.budget.get() <= 0 {
            panic!("SealedListNode query budget exhausted");
        }
        self.budget.set(self.budget.get() - 1);
        self.transcript.borrow_mut().push(self.value);
    }

    /// Returns the next node for traversal, or None past the end.
    pub fn get_next(&mut self) -> Option<&'static mut SealedListNode> {
        self.next.take()
    }

    /// The observable effect: the exact sequence of printed values.
    pub fn verdict(&self) -> OjValue {
        OjValue::Array(self.transcript.borrow().iter().map(|v| OjValue::Int(*v)).collect())
    }
}
