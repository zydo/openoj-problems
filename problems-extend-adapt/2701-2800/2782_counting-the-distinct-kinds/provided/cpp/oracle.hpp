// Problem-provided oracle (KindOracle), C++ side. Compiled into the
// judge's wrapper alongside every submission; never editable in the
// editor. Constructed from the case state: the kinds assignment as one
// generic OjValue plus the query budget; only hasSameKind reveals it.
#pragma once

class KindOracle {
public:
    KindOracle(const OjValue& values, long long budget) : budget_(budget) {
        if (values.kind != OjValue::Array) throw std::runtime_error("KindOracle kinds must be an array");
        kinds_.reserve(values.items.size());
        for (const OjValue& item : values.items) {
            if (item.kind != OjValue::Int) throw std::runtime_error("KindOracle kinds must be integers");
            kinds_.push_back(static_cast<int>(item.integer));
        }
    }

    bool hasSameKind(int a, int b) {
        spend();
        if (a < 0 || a >= static_cast<int>(kinds_.size()) || b < 0 ||
            b >= static_cast<int>(kinds_.size())) {
            return false;
        }
        return kinds_[a] == kinds_[b];
    }

private:
    void spend() {
        if (budget_ <= 0) throw std::runtime_error("KindOracle query budget exhausted");
        budget_ -= 1;
    }

    std::vector<int> kinds_;
    long long budget_;
};
