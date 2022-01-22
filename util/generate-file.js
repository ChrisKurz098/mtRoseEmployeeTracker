const fs = require('fs');

module.exports = {

    writeFile (fileContent) {

        fs.writeFile('./output/TeamRoster.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            console.log('file created!');
        });

        

    }
}