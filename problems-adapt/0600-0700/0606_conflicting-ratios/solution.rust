use std::collections::HashMap;

impl Solution {
    pub fn has_ratio_conflict(pairs: Vec<Vec<String>>, ratios: Vec<f64>) -> bool {
        let eps: f64 = 1e-5;
        let mut id: HashMap<String, usize> = HashMap::new();
        let cap = pairs.len() * 2;
        let mut parent: Vec<usize> = (0..cap).collect();
        let mut weight: Vec<f64> = vec![1.0; cap];

        // Returns (root, x / root).
        fn find(x: usize, parent: &mut Vec<usize>, weight: &mut Vec<f64>) -> (usize, f64) {
            if parent[x] == x {
                return (x, 1.0);
            }
            let (root, w) = find(parent[x], parent, weight);
            parent[x] = root;
            weight[x] *= w;
            (root, weight[x])
        }

        for i in 0..pairs.len() {
            let a = {
                let s = &pairs[i][0];
                let fresh = id.len();
                *id.entry(s.clone()).or_insert(fresh)
            };
            let b = {
                let s = &pairs[i][1];
                let fresh = id.len();
                *id.entry(s.clone()).or_insert(fresh)
            };
            let w = ratios[i];
            let (root_a, wa) = find(a, &mut parent, &mut weight);
            let (root_b, wb) = find(b, &mut parent, &mut weight);
            if root_a == root_b {
                if (wa / wb - w).abs() > eps {
                    return true;
                }
            } else {
                parent[root_a] = root_b;
                weight[root_a] = wb * w / wa;
            }
        }
        false
    }
}
