// Recursive Example
function countDown(num) {
    if (num <= 0) {
        console.log('All donee!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(10);
