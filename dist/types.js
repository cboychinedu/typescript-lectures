"use strict";
// function to calculate the payout of a song 
const calculatePayout = (song) => {
    return song.numStreams * 0.0033;
};
// creating a song 
const mySong = {
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
};
// Gettin the result 
const payout = calculatePayout(mySong);
console.log(payout);
