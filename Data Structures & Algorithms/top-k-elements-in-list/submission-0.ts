class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums: number[], k: number): number[] {
        const bucket = new Array<Set<number>>(nums.length);

        nums.forEach((num) => {
            const freq = nums.filter((v) => v === num).length;
            const set = bucket[freq] ?? new Set<number>();
            bucket[freq] = set.add(num);
        });

        const res: number[] = []

        for (let i = bucket.length - 1; i >= 0; i--) {
            if(res.length === k) {
                return res;
            }
            const vals = bucket[i];
            vals?.forEach(val => {
                if (res.length < k) {
                    res.push(val);
                }
            })
        }
        
    }
}
