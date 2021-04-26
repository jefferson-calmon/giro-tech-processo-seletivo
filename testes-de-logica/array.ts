/*
# This function return one array with one or more unpaired number.
*/

const handleGetUnpairedNumberFromArray = (array: Array<number>): number | number[] => {
    const numbersPaired = new Array<number>();

    array.forEach((numberArray, indexOfArray) => {
        const numberPaired = array.find((numberCriteria, indexCriteria) => numberArray === numberCriteria && indexOfArray !== indexCriteria);
        if (numberPaired && !numbersPaired.includes(numberPaired)) numbersPaired.push(numberPaired);
    })

    return array.filter(number => !numbersPaired.includes(number));
};

const 
    array = [9, 3, 9, 3, 9, 7, 9, 5],
    result = handleGetUnpairedNumberFromArray(array);

console.log(result);