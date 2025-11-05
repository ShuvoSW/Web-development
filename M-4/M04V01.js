// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

const expensiveTask = (id) => {
    console.log("Run the expensive task foe", id);

    return {
        id: id,
        data: `Some data for id: ${id}`,
        timestamp: new Date().getTime(),
    };
};

const getData = (id) => {
    return expensiveTask(id);
}

console.log(getData(123))