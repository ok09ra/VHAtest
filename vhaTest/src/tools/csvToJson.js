

export var csvToJson = (filepath) => {
    const fs = require('fs');
    const csv = require('csv');
    var data = fs.createReadStream(filepath).pipe(csv.parse({columns: true}));
    
}