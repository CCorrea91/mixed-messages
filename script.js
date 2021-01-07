let parts = [
    beggining = ["What do you get when", "How can", "What does", "Why did"],
    subject = ["a person", "the pope", "a dog", "Chuck Norris", "Oprah", "a bucket of milk", "you"],
    verbs = ["get", "do", "have", "eat", "pump", "steal", "kick", "watch"],
    middle = ["at his birthday?", "as hard as a rock?", "on your birthday?", "on top of birthday cakes?"],
    object = ["a candle", "jet skis", "popsicles", "a parachute", "fantastic dance moves", "two litters of any liquid you can think of"],
    ending = ["in the face", "feeling crumbry", "to roll with", "and a happy ending", "and why wouldn't you"]
];

let randomizer = array => Math.floor(Math.random() * array.length);

let builder = array => {
    let joke = [];
    for ( let i = 0; i < array.length; i ++ ) {
        let currentArr = array[i];
        joke.push(currentArr[randomizer(currentArr)]);
    };
    console.log(joke.join(" ") + ".");
};

builder(parts);
