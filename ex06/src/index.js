function comparisonToEqual(a) {
    if(a < 5) {
        return "Less than 5";
    } 
    if(5 <= a && a < 10) {
        return "Less than 10";
    }
    if(10 <= a && a <= 20) {
        return "10 or over";
    }
    if(a > 20) {
        return "More than 20";
    }
}

console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));

module.exports = comparisonToEqual;