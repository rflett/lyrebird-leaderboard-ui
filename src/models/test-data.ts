import { ScorecardUser } from "./scorecard-user";
import { LeaderboardUser } from "./leaderboard-user";

export const testUsers: ScorecardUser[] = [
    {
        name: "James",
        correctGuesses: [
            {
                position: 1,
                title: "Song",
                artist: "My Artiste 1",
            },

            {
                position: 20,
                title: "Song",
                artist: "My Artiste 2",
            },
            {
                position: 15,
                title: "Song",
                artist: "My Artiste 3",
            }
        ],
    },
    {
        name: "SomeoneElse",
        correctGuesses: [
            {
                position: 1,
                title: "Song",
                artist: "My Artiste 1",
            },

            {
                position: 20,
                title: "Song",
                artist: "My Artiste 2",
            },
            {
                position: 15,
                title: "Song",
                artist: "My Artiste 3",
            }
        ],
    },
    {
        name: "Another Person",
        correctGuesses: [
            {
                position: 1,
                title: "Song",
                artist: "My Artiste 1",
            },

            {
                position: 20,
                title: "Song",
                artist: "My Artiste 2",
            },
            {
                position: 15,
                title: "Song",
                artist: "My Artiste 3",
            }
        ],
    },
    {
        name: "Person 4",
        correctGuesses: [
            {
                position: 1,
                title: "Song",
                artist: "My Artiste 1",
            },

            {
                position: 20,
                title: "Song",
                artist: "My Artiste 2",
            },
            {
                position: 15,
                title: "Song",
                artist: "My Artiste 3",
            }
        ],
    },
    {
        name: "Person 5",
        correctGuesses: [],
    }
];


export const testLeaders: LeaderboardUser[] = [
    {name: "James", score: 113},
    {name: "James", score: 262},
    {name: "James", score: 3345},
    {name: "James", score: 231},
    {name: "James", score: 556},
    {name: "James", score: 543},
    {name: "James", score: 112},
    {name: "James", score: 231},
    {name: "James", score: 643},
    {name: "James", score: 132},
];
