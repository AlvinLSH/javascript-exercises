const removeFromArray = function(arr, ...args) {
    const new_array = [];

    arr.forEach((item) => {
        if (!args.includes(item)) {
            new_array.push(item);
        }
    });
    return new_array;

    // more advanced but concise method:
    // return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
