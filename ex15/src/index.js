function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    do {
        if (i < 9) {
            myNumbers = myNumbers + i + ", ";
        } else if (i === 9) {
            myNumbers = myNumbers + i;
        }
        i++;
    } while (i < 10);

    return myNumbers;
}

console.log(myDoWhile());
module.exports = myDoWhile;