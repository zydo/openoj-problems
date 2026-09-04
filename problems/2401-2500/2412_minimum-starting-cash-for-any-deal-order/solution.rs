impl Solution {
    pub fn minimum_starting_cash(deals: Vec<Vec<i32>>) -> i64 {
        let mut total_drain = 0i64;
        let mut max_rebate_losing = 0i64;
        let mut max_price_winning = 0i64;
        for t in &deals {
            let price = t[0] as i64;
            let rebate = t[1] as i64;
            // losing deals (rebate < price) drain money permanently; profitable deals don't
            if rebate < price {
                // losing deals' total drain is fixed regardless of ordering
                total_drain += price - rebate;
                // worst order: largest-rebate losing deal goes last, after every
                // other drain, yet its full price must still be covered
                if rebate > max_rebate_losing {
                    max_rebate_losing = rebate;
                }
            } else {
                // profitable deals only matter via their largest upfront price, paid at
                // the lowest-funds point (right after the losing block)
                if price > max_price_winning {
                    max_price_winning = price;
                }
            }
        }
        // answer = total_drain + max(last losing deal's rebate, top profitable deal's price)
        total_drain + max_rebate_losing.max(max_price_winning)
    }
}
