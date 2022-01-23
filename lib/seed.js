const fs = require('fs');
const path = require('path');
const { names, sentences } = require('./info');

// random number generator 1-100
const randInt = function() {
    let int = Math.floor(Math.random() * 100);
    return int;
}
// randomly generates a string/name
const randStr = function() {
    str = names[Math.floor(Math.random() * names.length)];
    return str;
}
// randomly generates paragraphs up to 6 sentences long
const randText = function() {
    let text = '';

    for (j = 0; j < 7; j++) {
        let senSel = sentences[Math.floor(Math.random() * sentences.length)];
        text = text.concat(senSel, " ");
    }
    return text;
}

// parse information 
const parseData = function(data) {
    let seedNum;
    let modelName;
    // loop through the data, assign values to global seed/model vars
    for (i = 0; i < data.length; i++) {
        if (data[i].amt) {
            seedNum = data[i].amt;
        }
        if (data[i].model) {
            modelName = data[i].model;
        }
    }
    // pop the amount and model values out of the data array
    data.pop();
    randomizeData(data, seedNum, modelName);
}

// prototype function that randomizes data based on user selection
const randomizeData = function(data, amt, model) {
    // initialize empty variables
    let amount = JSON.parse(amt)
    console.log(amount);
    const randArr = [];
    let n = 1;
    let k;
    let v;
    // ineffecient loop that checks v to it's value type and randomizes data
    for (i = 0; i < amount; i++) {
        let keyObj = {};
        for (j = 0; j < data.length; j++) {
            k = data[j].key;
            v = data[j].value;
            // if user submitted and int with a key of id ++ n
            if (v === "INT" && k === "id") {
                v = n++;
            }
            else if (v === "INT") {
                v = randInt();
            }
            else if (v === "STRING") {
                v = randStr();
            }
            else {
                v = randText();
            }
            // create object using k and v, push it into new array
            keyObj[k] = v;
            // check for duplicate adds, this loop is currently adding duplicates so this is needed lol
            if (randArr.includes(keyObj) === false) {
            randArr.push(keyObj);
            }
        }
    }
    console.log(randArr);
    createSeedFile(randArr);
}

const createSeedFile = function(data) {
    fs.writeFileSync(
        path.join(__dirname, '../data/seed.json'),
        JSON.stringify(data, null, 2)
    );
};

module.exports = {
    createSeedFile,
    randomizeData,
    parseData
};