interface Audioplayer{
    audioVolume:number;
    songDuration: number;
    song: string;
    details: Details
    
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: Audioplayer={
    audioVolume: 50,
    songDuration: 30,
    song: "happy",
    details: {
        author: "marshmello",
        year: 2017
    }
}

const song='new song';

const {
song:anotherSong,
    details
}= audioPlayer;

const {author}= details

 console.log('song',song)
console.log('song',anotherSong)
 console.log('author:', author )


const [p1,p2,p3 ,p4='no found']:string[]=['Goku','vegeta','trunks']

console.log(`personaje:${p1}`)

export{}