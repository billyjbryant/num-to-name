/**
 * Function to take a valid positive integer number as input and convert it to its English word value
 *
 * @param {Integer} num - Positive Integer
 * @param {String} sep - Seperator to use for output, default is '-'
 *
 * @returns {String} Output is the resulting word name for the provided integer
 */
 function numToText(num, sep = '-') {
    if (isNaN(num)) throw new Error(`${num} is not a valid number!`);
    if (num < 0) throw new Error('Must provide a positive integer only!');

    const quintillion = Math.floor(num / 1000000000000000000); /* quintillion */
    num -= quintillion * 1000000000000000000;
    const quar = Math.floor(num / 1000000000000000); /* quadrillion */
    num -= quar * 1000000000000000;
    const trin = Math.floor(num / 1000000000000); /* trillion */
    num -= trin * 1000000000000;
    const Gn = Math.floor(num / 1000000000); /* billion */
    num -= Gn * 1000000000;
    const million = Math.floor(num / 1000000); /* million */
    num -= million * 1000000;
    const Hn = Math.floor(num / 1000); /* thousand */
    num -= Hn * 1000;
    const Dn = Math.floor(num / 100); /* Tens (deca) */
    num = num % 100; /* Ones */
    const tn = Math.floor(num / 10);
    const one = Math.floor(num % 10);
    let res = "";

    if (quintillion > 0) {
        res += (numToText(quintillion,sep,sep) + sep + "Quintillion");
    }
    if (quar > 0) {
        res += (numToText(quar,sep) + sep + "Quadrillion");
    }
    if (trin > 0) {
        res += (numToText(trin,sep) + sep + "Trillion");
    }
    if (Gn > 0) {
        res += (numToText(Gn,sep) + sep + "Billion");
    }
    if (million > 0) {
        res += (((res === "") ? "" : sep) + numToText(million,sep) + sep + "Million");
    }
    if (Hn > 0) {
        res += (((res === "") ? "" : sep) + numToText(Hn,sep) + sep + "Thousand");
    }

    if (Dn) {
        res += (((res === "") ? "" : sep) + numToText(Dn,sep) + sep + "Hundred");
    }

    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eightteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (tn > 0 || one > 0) {

        if (!(res === "")) {
            res += sep;
        }

        if (tn < 2) {
            res += ones[tn * 10 + one];
        } else {

            res += tens[tn];
            if (one > 0) {
                res += ("-" + ones[one]);
            }
        }
    }

    if (res === "") {
        res = "Zero";
    }
    return res;
}

module.exports = numToText();
