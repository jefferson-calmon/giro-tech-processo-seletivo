/*
# This function return quantity of distinct numbers from one array.
*/

const handleGetDistinctNumbers = (array: Array<number>): number | number[] => {
    const numbersDistinct = new Array<number>();

    array.forEach((number) => {
        if (!numbersDistinct.includes(number)) numbersDistinct.push(number);
    })

    return numbersDistinct.length;
};

const 
    array = [9, 3, 9, 3, 9, 7, 9],
    result = handleGetDistinctNumbers(array);

console.log(result);