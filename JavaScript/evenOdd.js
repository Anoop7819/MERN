function printEvenNumbers(n) {
    if (n>100) {
        return;

    }
    console.log(n);
    printEvenNumbers(n + 2);

}
printEvenNumbers(2);