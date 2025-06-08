// callback-to-async-await.js


// --------------- CALLBACK-BASED CODE ----------------

const fs = require('fs');

// Reading file using callback
function readFileWithCallback(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file (callback):', err);
        } else {
            console.log('File content (callback):\n', data);
        }
    });
}

// --------------- PROMISE-BASED CODE ----------------

const fsPromises = require('fs').promises;

function readFileWithPromise(filePath) {
    fsPromises.readFile(filePath, 'utf8')
        .then(data => {
            console.log('File content (promise):\n', data);
        })
        .catch(err => {
            console.error('Error reading file (promise):', err);
        });
}

// --------------- ASYNC/AWAIT CODE ----------------

async function readFileWithAsyncAwait(filePath) {
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        console.log('File content (async/await):\n', data);
    } catch (err) {
        console.error('Error reading file (async/await):', err);
    }
}

// ----------------- USAGE -----------------

const filePath = './sample.txt'; // Make sure sample.txt exists

console.log('Using Callback:');
readFileWithCallback(filePath);

setTimeout(() => {
    console.log('\nUsing Promise:');
    readFileWithPromise(filePath);
}, 1000);

setTimeout(() => {
    console.log('\nUsing Async/Await:');
    readFileWithAsyncAwait(filePath);
}, 2000);
