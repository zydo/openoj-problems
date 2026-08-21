// Problem-provided oracle (BitStream), C++ side. Compiled into the
// judge's wrapper alongside every submission; never editable in the
// editor. Constructed from the case state: the recorded bit prefix as
// one generic OjValue, then the query budget.
#pragma once

class BitStream {
public:
    BitStream(const OjValue& bits, long long budget) : budget_(budget) {
        if (bits.kind != OjValue::Array) throw std::runtime_error("BitStream bits must be an array");
        bits_.reserve(bits.items.size());
        for (const OjValue& bit : bits.items) {
            if (bit.kind != OjValue::Int) throw std::runtime_error("BitStream bits must be integers");
            bits_.push_back(static_cast<int>(bit.integer));
        }
    }

    int next() {
        if (budget_ <= 0) throw std::runtime_error("BitStream query budget exhausted");
        budget_ -= 1;
        return bits_[static_cast<size_t>(position_++)];
    }

private:
    std::vector<int> bits_;
    long long position_ = 0;
    long long budget_;
};
