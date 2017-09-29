const largestOfFour = arr => {
    let arr2 = [],
        arr3 = arr.map(a => a.sort((c, d) => (c - d))).map(b => arr2.push(b[3]));
    return arr3;
}


largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);