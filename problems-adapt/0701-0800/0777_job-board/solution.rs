use std::cmp::Reverse;
use std::collections::{BinaryHeap, HashMap};

pub struct JobBoard {
    records: HashMap<i32, (i32, i32)>, // jobId -> (priority, userId)
    // Reverse gives min-order over (-priority, -jobId, userId): the top is
    // the highest priority, tie-broken by the highest jobId.
    heap: BinaryHeap<Reverse<(i32, i32, i32)>>,
}

impl JobBoard {
    pub fn new(jobs: Vec<Vec<i32>>) -> Self {
        let mut board = JobBoard {
            records: HashMap::new(),
            heap: BinaryHeap::new(),
        };
        for job in &jobs {
            let (user_id, job_id, priority) = (job[0], job[1], job[2]);
            board.records.insert(job_id, (priority, user_id));
            board.heap.push(Reverse((-priority, -job_id, user_id)));
        }
        board
    }

    pub fn post(&mut self, user_id: i32, job_id: i32, priority: i32) {
        self.records.insert(job_id, (priority, user_id));
        self.heap.push(Reverse((-priority, -job_id, user_id)));
    }

    pub fn reprioritize(&mut self, job_id: i32, new_priority: i32) {
        let user_id = self.records[&job_id].1;
        self.records.insert(job_id, (new_priority, user_id));
        self.heap.push(Reverse((-new_priority, -job_id, user_id)));
    }

    pub fn withdraw(&mut self, job_id: i32) {
        self.records.remove(&job_id);
    }

    pub fn runTop(&mut self) -> i32 {
        while let Some(Reverse((negative_priority, negative_job, user_id))) = self.heap.pop() {
            // An entry is valid only when its priority still matches the
            // record's current priority; anything else is a stale leftover.
            let stale = match self.records.get(&-negative_job) {
                Some(&(priority, _)) => priority != -negative_priority,
                None => true,
            };
            if !stale {
                self.records.remove(&-negative_job);
                return user_id;
            }
        }
        -1
    }
}
