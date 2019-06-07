const fs = require('fs-extra');
const archiver = require('archiver');
const { loadExtensionConfig, zipName } = require('../utils');

const extensionConfig = loadExtensionConfig();

const handler = () => {
    console.log();
    console.log('Creating a zip archive...');
    fs.ensureDirSync('dist');
    const output = fs.createWriteStream(`dist/${zipName()}`);
    const archive = archiver('zip', {
        zlib: { level: 9 },
    });

    output.on('close', function () {
        console.log('Archive has been created.');
    });
    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);
    archive.file('DESCRIPTION.md');
    archive.file('CHANGES.md');
    archive.glob('**', {
        cwd: 'src',
        ...extensionConfig.zip,
    });
    archive.finalize();
};

module.exports = {
    command: 'zip',
    desc: 'Create a zip archive with extension.',
    builder: {},
    handler,
};
