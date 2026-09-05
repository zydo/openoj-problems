/**
 * @param {string[][]} logins
 * @return {string[]}
 */
var findBurstyEmployees = function (logins) {
    // Bucket per employee; "HHMM" becomes 60 * HH + MM so the one-hour
    // rule is a plain integer span. After sorting a bucket, the employee
    // is bursty iff some three consecutive stamps span < 60: any
    // qualifying triple's earliest three members are consecutive, and a
    // consecutive triple under an hour is itself a witness.
    const buckets = new Map();
    for (const [name, stamp] of logins) {
        const minutes = 60 * Number(stamp.slice(0, 2)) + Number(stamp.slice(2));
        if (!buckets.has(name)) buckets.set(name, []);
        buckets.get(name).push(minutes);
    }
    const answer = [];
    for (const [name, minutes] of buckets) {
        minutes.sort((a, b) => a - b);
        for (let k = 0; k + 2 < minutes.length; ++k) {
            if (minutes[k + 2] - minutes[k] < 60) {
                answer.push(name);
                break;
            }
        }
    }
    return answer;
};
