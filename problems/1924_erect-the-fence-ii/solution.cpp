class Solution {
  private:
    bool inside(const double *circle, double x, double y) {
        double dx = x - circle[0], dy = y - circle[1];
        return dx * dx + dy * dy <= circle[2] + 1e-7;
    }

    void from2(double ax, double ay, double bx, double by, double *out) {
        double cx = (ax + bx) / 2.0, cy = (ay + by) / 2.0;
        double dx = ax - bx, dy = ay - by;
        out[0] = cx;
        out[1] = cy;
        out[2] = (dx * dx + dy * dy) / 4.0;
    }

    void from3(double ax, double ay, double bx, double by, double cx, double cy, double *out) {
        double d = 2.0 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
        if (d == 0.0) {
            double best[3], cand[3];
            from2(ax, ay, bx, by, best);
            from2(ax, ay, cx, cy, cand);
            if (cand[2] < best[2]) {
                for (int t = 0; t < 3; t++) {
                    best[t] = cand[t];
                }
            }
            from2(bx, by, cx, cy, cand);
            if (cand[2] < best[2]) {
                for (int t = 0; t < 3; t++) {
                    best[t] = cand[t];
                }
            }
            for (int t = 0; t < 3; t++) {
                out[t] = best[t];
            }
            return;
        }
        double aa = ax * ax + ay * ay;
        double bb = bx * bx + by * by;
        double cc = cx * cx + cy * cy;
        double ux = (aa * (by - cy) + bb * (cy - ay) + cc * (ay - by)) / d;
        double uy = (aa * (cx - bx) + bb * (ax - cx) + cc * (bx - ax)) / d;
        double dx = ax - ux, dy = ay - uy;
        out[0] = ux;
        out[1] = uy;
        out[2] = dx * dx + dy * dy;
    }

  public:
    vector<double> outerTrees(vector<vector<int>> &trees) {
        int n = trees.size();
        double ox = trees[0][0], oy = trees[0][1];
        vector<double> xs(n), ys(n);
        for (int i = 0; i < n; i++) {
            xs[i] = trees[i][0] - ox;
            ys[i] = trees[i][1] - oy;
        }
        double circle[3] = {xs[0], ys[0], 0.0};
        for (int i = 1; i < n; i++) {
            if (inside(circle, xs[i], ys[i])) {
                continue;
            }
            double fresh[3] = {xs[i], ys[i], 0.0};
            for (int t = 0; t < 3; t++) {
                circle[t] = fresh[t];
            }
            for (int j = 0; j < i; j++) {
                if (inside(circle, xs[j], ys[j])) {
                    continue;
                }
                from2(xs[i], ys[i], xs[j], ys[j], circle);
                for (int k = 0; k < j; k++) {
                    if (inside(circle, xs[k], ys[k])) {
                        continue;
                    }
                    from3(xs[i], ys[i], xs[j], ys[j], xs[k], ys[k], circle);
                }
            }
        }
        return {circle[0] + ox, circle[1] + oy, std::sqrt(circle[2])};
    }
};
