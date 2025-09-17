// Declaring a type to hold the song inormation 
type Song = {
    title: string; 
    artist: string; 
    numStreams: number; 
    credits: {producer: string; writer: string};
    time: number; 
    isPopular: boolean;
    recordingTime: number; 

}; 

// function to calculate the payout of a song 
const calculatePayout = (song: Song): number => {
    return song.numStreams * 0.0033;
}

// creating a song 
const mySong: Song = {
    title: "My Way",
    artist: "Frank Sinatra",
    numStreams: 1000000,
    credits: {
        producer: "Sergio Mendes",
        writer: "Paul Anka"
    },
    time: 150,
    isPopular: true,
    recordingTime: 45
}


// Gettin the result 
const payout = calculatePayout(mySong);
console.log(payout);