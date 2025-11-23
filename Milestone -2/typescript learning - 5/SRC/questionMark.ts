// ? : ternary operator : decision making


const eligible = (age: number) => {

    const result = age >= 21 ? "Eligible" : "Not eligible";

    console.log(result);
}

eligible(21)

// ?? : nullish coalescing operator : null/ undefined

const userTheme = undefined;
const selectedTheme = userTheme ?? "Light theme";

console.log(selectedTheme);

const isAuthenticated = true;

const resultWithTernary =  isAuthenticated ?
isAuthenticated : "you are guest ";

const resultWithNulish = isAuthenticated ?? 'you are gust';

console.log({resultWithTernary}, {resultWithNulish});


// ?. optional chaining

const user: {
      address: {
        city: string;
        town: string;
        postalCode?: string
    };
} = {
    address: {
        city: "Daka",
        town: "Banani",
    },
}
const postalCode = user?.address?.postalCode;
console.log(postalCode)
