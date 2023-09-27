interface JokeComponentObject {
    emojiList: string[];
    colorList: string[];
    counter: number[];
    emojiFunction: (votes: number) => string;
    colorFunction: (votes: number) => string;
}

export default JokeComponentObject;