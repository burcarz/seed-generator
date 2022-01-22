const fs = require('fs');
const path = require('path');
const { names, sentences } = require('./info')

// prototype function that randomizes data based on user selection
const randomizeData = function(data) {
    // initialize empty variables
    let int = 1;
    let k;
    let v;
    let text = "";

    // ineffecient loop that checks v to it's value type and randomizes data
    for (i = 0; i < data.length; i++) {
        // k is a constant, becomes the json key (ie, username) to its corresponding value
        k = data[i].key;
        v = data[i].value;
        if (v === "INT") {
            v = Math.floor(Math.random * 100);
        }
        else if (v === "STRING") {
            v = names[Math.floor(Math.random() * names.length)];
        }
        else {
            for (j = 0; j < 6; j++) {
                let senSel = sentences[Math.floor(Math.random() * sentences.length)];
                text = text.concat(senSel, " ");
            }
            v = text;
        }
        console.log(k, v);
    }

}

const createSeedFile = function(data) {
    fs.writeFileSync(
        path.join(__dirname, '../data/seed.json'),
        JSON.stringify(data, null, 2)
    );
};

module.exports = {
    createSeedFile,
    randomizeData
};