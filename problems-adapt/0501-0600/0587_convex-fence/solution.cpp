class Solution {
    long long cross(const pair<int, int> &o, const pair<int, int> &a, const pair<int, int> &b) {
        return (long long)(a.first - o.first) * (b.second - o.second) -
               (long long)(a.second - o.second) * (b.first - o.first);
    }

    vector<vector<int>> toVec(const vector<pair<int, int>> &ps) {
        vector<vector<int>> out;
        out.reserve(ps.size());
        for (auto &p : ps)
            out.push_back({p.first, p.second});
        return out;
    }

  public:
    vector<vector<int>> fencePoints(vector<vector<int>> &posts) {
        vector<pair<int, int>> unique;
        for (auto &t : posts)
            unique.push_back({t[0], t[1]});
        sort(unique.begin(), unique.end());
        unique.erase(std::unique(unique.begin(), unique.end()), unique.end());
        if (unique.size() <= 1)
            return toVec(unique);

        // Strict convex hull vertices (cross <= 0 pops collinear interior unique).
        vector<pair<int, int>> lower;
        for (auto &p : unique) {
            while (lower.size() >= 2 && cross(lower[lower.size() - 2], lower[lower.size() - 1], p) <= 0) {
                lower.pop_back();
            }
            lower.push_back(p);
        }
        vector<pair<int, int>> upper;
        for (int i = (int)unique.size() - 1; i >= 0; i--) {
            const pair<int, int> &p = unique[i];
            while (upper.size() >= 2 && cross(upper[upper.size() - 2], upper[upper.size() - 1], p) <= 0) {
                upper.pop_back();
            }
            upper.push_back(p);
        }
        vector<pair<int, int>> hull(lower.begin(), lower.end() - 1);
        hull.insert(hull.end(), upper.begin(), upper.end() - 1);

        vector<pair<int, int>> result = hull;
        size_t n = hull.size();
        if (n < 2)
            return toVec(unique);

        set<pair<int, int>> inResult(hull.begin(), hull.end());
        // Add collinear unique lying on hull edges (boundary unique not at vertices).
        for (size_t i = 0; i < n; i++) {
            const pair<int, int> &a = hull[i];
            const pair<int, int> &b = hull[(i + 1) % n];
            for (auto &p : unique) {
                if (inResult.count(p))
                    continue;
                if (cross(a, b, p) == 0) {
                    if (min(a.first, b.first) <= p.first && p.first <= max(a.first, b.first) &&
                        min(a.second, b.second) <= p.second && p.second <= max(a.second, b.second)) {
                        result.push_back(p);
                        inResult.insert(p);
                    }
                }
            }
        }
        return toVec(result);
    }
};
