export function calculateCost(storage) {
    const rate = storage <= 10
        ? 4 //Less then 10 notes is $4 dollar per note
        : storage <= 100
            ? 2 //11 to 100 notes is $2 dollar per note
            : 1; //More than 100 is $1 per note

    return rate * storage * 100; //Specify in pennies, that's why * 100 is done
}