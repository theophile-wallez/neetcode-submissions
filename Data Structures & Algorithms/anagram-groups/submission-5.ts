class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const store = new Map<string, string[]>();

        strs.forEach(str => {
            const signature = str.split('').reduce<number[]>((acc, curr) => {
                const index = curr.charCodeAt(0) - 97;
                acc[index] = (acc[index] ?? 0) + 1;
                return acc;
            }, new Array<number>(26).fill(0));
            const sigStr = signature.join('/');

            const currentStr = store.get(sigStr) ?? [];
            const newStr = [...currentStr, str];

            store.set(sigStr, newStr)
        })

        const res = []

        for(const [, vals] of store) {
            res.push(vals);
        }

        return res;
    }
}
