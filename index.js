function solveForX() {
    console.log('start...');

    let x = 5,
        s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    for (let i = 0; i < s.length; i++) {

        if (i === x) {
            console.log('x is equal to ' + i);
            document.writeln('x is equal to ' + i);
        }

        else if (i < x) {
            console.log('x is greater than ' + i);
        }

        else if (i > x) {
            console.log('x is less than ' + i);
        }

    }

    console.log('...end');

}