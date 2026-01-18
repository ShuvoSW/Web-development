// oop - abstraction

//idea
//implementation proe kore

/*
two type abstraction
1. interface
2. abstract class
*/


// interface

//idea
// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// //implementation
// class MusicPlayer implements MediaPlayer {
//     play() {
//         console.log("Playing music...");
//     }
//     pause() {
//         console.log("Music paused...");
//     }
//     stop() {
//         console.log("Music stopped");
//     }
// }

// const MezbaPlayer = new MusicPlayer(); // instance
// MezbaPlayer.play();



// abstract class

// idea   
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

// implementation
class MezbaPlayer extends MediaPlayer {
    play() {
        console.log(`Playing music...`);
    }
    pause() {
        console.log(`Music is paused !`);
    }
    stop() {
        console.log(`Music is stopped !`);
    }
}

const mezbaPlayer1 = new MezbaPlayer()
mezbaPlayer1.play()