// Spread operator

const friends = ["Rahim", "karim"];

const schoolFriends = ["Pinto", "Chinto", "Bulbul"];

const collageFriends = ["Mr. Smart", "Mr very very Smart "];

friends.push(...schoolFriends);
friends.push(...collageFriends);

console.log(friends);

// Object spread

const user = { name: "Shuvo", phoneNo: "01700000000"};

const otherInfo = { hobby: "outing", favouriteColor: "Black"};

const userInfo = { ...user, ...otherInfo};

console.log(userInfo);

// Rest operator

const sendInvite = (...friends: string[]) => {
    friends.forEach((friends: string) => console.log(`Send invitation to ${friends}`));
};

sendInvite("Pintu", "cintu", "bulbul", "chulbul", "shuvo")