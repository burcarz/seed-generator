const fs = require('fs');
const path = require('path');

const createSeedFile = function(data) {
    fs.writeFileSync(
        path.join(__dirname, '../data/seed.json'),
        JSON.stringify(data)
    );
};

module.exports = {
    createSeedFile
};