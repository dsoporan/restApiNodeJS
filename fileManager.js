const fs = require('fs');

module.exports = {
    saveJsonObjectToFile: (obj, fileName) => {
        const jsonString = JSON.stringify(obj);
        fs.writeFileSync(fileName, jsonString, 'utf-8', (err, data) =>
        {
            if(err) throw err;
            else{
                console.log(`Saved to file ${filename}`);
            }

        });
    },
    appendJsonObjectToFile: (obj, filename) => {
        var json = JSON.parse(fs.readFileSync(filename, 'utf-8'));
        json.push(obj);
        console.log(obj);
        fs.writeFileSync(filename, JSON.stringify(json));
    },
    readJsonObjectFromFile: (filename) => {
        var jsonObj = JSON.parse(fs.readFileSync(filename, 'utf-8'));
        return jsonObj;
    },
    readOneJsonObjectFromFile: (filename, id) => {
        var jsonObj = JSON.parse(fs.readFileSync(filename, 'utf-8'));
        return jsonObj[id - 1];
    }
};