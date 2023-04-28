let x = [3, 1, 1, 2, 2, 2, 4, 5];
function getResult(a) {

    const length = a.length;
    const minArray = minValues(a);
    const min = minValue(a);
    let counter = 1;
    let isTrue = true;
    for (let i = 0; i < length; i++) {
        if (a[i] > 500 || a[i] < -500 || !Number.isInteger(a[i])) {
            isTrue = false;
            break;
        }
    }

    if (min < minArray) {
        isTrue = false;
    }

    if (length <= 10 && length >= 3 && isTrue === true) {
        let b = [], c = [];
        goesDown(a, b, minArray);
        goesUp(a, c, minArray);
        console.log(minArray);
        console.log(b);
        console.log(c);
        if (condition(b) && condition(c)) {
            counter = hotdogLength(a, counter);
        } else {
            counter = 0;
        }
    } else {
        counter = 0;
    }

    return counter;
}

function minValues(array) {
    let equalsArray = [];
    let j = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] === array[i]) {
            equalsArray[j] = array[i - 1];
            j++;
        } else {
            continue;
        }
    }

    return Math.min.apply(null, equalsArray);

}

function minValue(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

function goesDown(a, b, min) {
    for (let i = 1; i < a.length; i++) {
        if (a[i - 1] === a[i] && a[i - 1] === min) {
            break;
        }
        b[i - 1] = a[i - 1];
    }
}

function goesUp(a, c, min) {
    let lastIndex = a.length - 1;
    for (let i = lastIndex; i > 0; i--) {
        if (a[i] === a[i - 1] && a[i - 1] === min) {
            break;
        }
        c[lastIndex - i] = a[i];
    }
}

function condition(array) {
    let isTrue = true;
    if (array.length === 0) {
        isTrue = false;
    }
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] <= array[i]) {
            isTrue = false;
            break;
        }
    }

    return isTrue;
}

function hotdogLength(a, counter) {
    for (let i = 1; i < a.length; i++) {
        if (a[i - 1] === a[i]) {
            counter++;
        }
    }

    return counter;
}

console.log(getResult(x));