{
    let name = 'Dog';
    let dob = '2020-10-10';
    let sound = 'Bark';
    let favoriteToy = 'Ball';

    function dogAge(obj: string): number {
        const age = Date.now() - new Date(dob).getTime();
        return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
    }

    function makeSound(name: string, sound: string): string {
        return `$(name) says ${sound}`;
        
    }
    console.log(dogAge(dob));
    console.log(makeSound(name, sound));

}