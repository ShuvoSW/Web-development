export async function getServices(delay = 2000 ) {
    return await new Promise((resolve) => setTimeout(resolve, delay));
}