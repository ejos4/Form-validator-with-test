function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

// Prevent throwing the error of uncompatible method between node and the script of index.html
try {
    module.exports = {sum, mult};
} catch (error) {
    // alert(error);
}