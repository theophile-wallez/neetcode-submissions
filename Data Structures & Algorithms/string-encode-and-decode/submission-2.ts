
const SEPARATOR = '___'
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = '';
        strs.forEach(el => {
            encoded += `${el}${SEPARATOR}`;
        })
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        console.log(str)
        const decoded = str.split('___');
        decoded.pop();
        return decoded;
    }
}
