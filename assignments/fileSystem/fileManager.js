const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'files');

// Ensure the 'files' directory exists
if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
}

const createFile = (filename, content, callback) => {
    const filePath = path.join(baseDir, filename);
    fs.writeFile(filePath, content, (err) => {
        callback(err, 'File created successfully.');
    });
};

const readFile = (filename, callback) => {
    const filePath = path.join(baseDir, filename);
    fs.readFile(filePath, 'utf8', (err, data) => {
        callback(err, data);
    });
};

const deleteFile = (filename, callback) => {
    const filePath = path.join(baseDir, filename);
    fs.unlink(filePath, (err) => {
        callback(err, 'File deleted successfully.');
    });
};

module.exports = {
    createFile,
    readFile,
    deleteFile
};
