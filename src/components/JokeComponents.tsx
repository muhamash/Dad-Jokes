import JokeComponentObject from './types/types';

const jokeComponentObject: JokeComponentObject = {
    emojiList: [
        "em em-angry",
        "em em-confused",
        "em em-neutral_face",
        "em em-slightly_smiling_face",
        "em em-smiley",
        "em em-laughing",
        "em em-rolling_on_the_floor_laughing",
    ],
    counter: [ 0, 3, 6, 9, 12, 15 ],
    colorList: ["#f44336", "#FF9800", "#FFC107", "#FFEB3B", "#CDDC39", "#8BC34A", "#4CAF50"],
    emojiFunction: function ( votes: number )
    {
        const { emojiList, counter } = this;
        for (let i = 0; i < counter.length; i++) {
            if ( votes >= counter[i] )
            {
                console.log(emojiList[i], typeof(emojiList[i]))
                return emojiList[i];
            }
        }
        return "em em-neutral_face";
    },
    colorFunction: function ( votes: number )
    {
        const { colorList, counter } = this;
        for (let i = 0; i < counter.length; i++) {
            if ( votes >= counter[i] )
            {   
                console.log(colorList[i], typeof(colorList[i]))
                return colorList[i];
            }
        }
        return "#4CAF50";
    }
};

const  JokeComponent = () =>
{
    const votes = 12;
    const emoji = jokeComponentObject.emojiFunction(votes);
    const color = jokeComponentObject.colorFunction(votes);

    return (
        <div>
                <div className='w-1/4 h-[10px]'>
                    <i className='emoji' />
                    <p className='text-xl' style={{
                        color: color,
                    }}>test</p>
                </div>
        </div>
        );
};

export default JokeComponent;