const http = require('http');
const url = require('url');
const { createFile, readFile, deleteFile } = require('./fileManager');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // console.log("Request : ", req)

    const parsedUrl = url.parse(req.url, true);

    const { pathname, query } = parsedUrl;
    console.log("Pathname : ", pathname);
    console.log("query : ", {...query});

    if (pathname === '/create' && req.method === 'GET') {
        const { filename, content } = query;
        if (!filename || !content) {
            res.end(JSON.stringify({ error: 'Missing filename or content' }));
            return;
        }
        createFile(filename, content, (err, message) => {
            res.end(JSON.stringify(err ? { error: err.message } : { message }));
        });
    }

    else if (pathname === '/read' && req.method === 'GET') {
        const { filename } = query;
        if (!filename) {
            res.end(JSON.stringify({ error: 'Missing filename' }));
            return;
        }
        readFile(filename, (err, data) => {
            res.end(JSON.stringify(err ? { error: err.message } : { content: data }));
        });
    }

    else if (pathname === '/delete' && req.method === 'GET') {
        const { filename } = query;
        if (!filename) {
            res.end(JSON.stringify({ error: 'Missing filename' }));
            return;
        }
        deleteFile(filename, (err, message) => {
            res.end(JSON.stringify(err ? { error: err.message } : { message }));
        });
    }

    else {
        res.end(JSON.stringify({ error: 'Invalid endpoint or method' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
