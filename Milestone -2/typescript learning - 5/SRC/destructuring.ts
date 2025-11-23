// Object destructuring

// const user = {
//     name: {
//         firstName: "mezbaul",
//         middleName: "Abedin",
//         lastName: "Forhan"
//     },
//     gender: "male",
//     favouriteColor: "black"
// }

// const {favouriteColor: myFavouriteColor, name: {middleName: myMiddleName}} = user;  // nameElias

// console.log(myFavouriteColor, myMiddleName )

// array destructuring

const friends = ["karim", "rahim", "mahim"];

// const [, myBestFriend] = friends;
const [, ,myBestFriend] = friends;

console.log(myBestFriend)