"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(minAsciiSymb, maxAsciiSymb, shift) {
        this.minAsciiSymb = minAsciiSymb;
        this.maxAsciiSymb = maxAsciiSymb;
        this.shift = shift;
        this.amount = maxAsciiSymb - minAsciiSymb + 1;
    }
    getCipher(str) {
        return this.cipherDecipher(str, this.minAsciiSymb, mapperCipher);
    }
    getDecipher(str) {
        return this.cipherDecipher(str, this.maxAsciiSymb, mapperDecipher);
    }
    mapperCipher(symb, shift) {
        const actualShift = (symb.charCodeAt(0) - this.minAsciiSymb + shift) % this.amount;
        return String.fromCharCode(this.minAsciiSymb + actualShift);
    }
    mapperDecipher(symb, shift) {
        const actualShift = (this.minAsciiSymb - symb.charCodeAt(0) + shift) % this.amount;
        return String.fromCharCode(this.maxAsciiSymb - actualShift);
    }
    cipherDecipher(str, shift, mapperFun) {
        const arStr = Array.from(str);
        const arRes = arStr.map(symb => {
            let res = symb;
            if (symb <= 'DEL' && symb >= 'NUL') {
                res = mapperFun(symb, this.shift, this.amount);
            }
            return res;
        });
        return arRes.join('');
    }
}
exports.CipherDecipher = CipherDecipher;
function mapperCipher(symb, shift, minAsciiSymb, amount) {
    const actualShift = (symb.charCodeAt(0) - minAsciiSymb + shift) % amount;
    return String.fromCharCode(minAsciiSymb + actualShift);
}
function mapperDecipher(symb, shift, maxAsciiSymb, amount) {
    const actualShift = (maxAsciiSymb - symb.charCodeAt(0) + shift) % amount;
    return String.fromCharCode(maxAsciiSymb - actualShift);
}
//# sourceMappingURL=CipherDecipher.js.map