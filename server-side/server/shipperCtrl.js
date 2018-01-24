var bl = require('./bl');

// CRUD
function read(callback) {

    bl.shippers.getShippers(function(err, shipArray) {
        if (err) {
            callback(err);
        }

        callback(null, shipArray);
    })
}


module.exports.Read = read;