class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        return nums.map((num, i) => {
            const val = nums.reduce((acc, curr, j) => {
                if (j === i) return acc;
                return acc * curr;
            }, 1);
            return val;
        });
    }
}
