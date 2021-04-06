// Arrow function
const calcAge = birthYear => 2021 - birthYear;

const age = calcAge(1998);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1998, 'Vlad'));

console.log(yearsUntilRetirement(1980, 'Bob'));
