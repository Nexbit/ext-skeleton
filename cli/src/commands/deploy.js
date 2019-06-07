const fs = require('fs-extra');
const { scp } = require('scp2');
const exec = require('node-ssh-exec');
const prompts = require('prompts');
const { zipName } = require('../utils');

const handler = () => {
    const filename = zipName();
    const questions = [
        {
            type: 'text',
            name: 'host',
            message: 'Enter Plesk hostname',
        },
        {
            type: 'text',
            name: 'username',
            message: 'Enter username',
            initial: 'root',
        },
        {
            type: 'password',
            name: 'password',
            message: 'Enter password',
        },
    ];

    (async () => {
        const { host, username, password } = await prompts(questions);

        scp(`dist/${filename}`, `${username}:${password}@${host}:/tmp/`, function (err) {
            if (err) {
                throw err;
            }

            exec({ host, username, password }, `plesk bin extension -i /tmp/${filename}`, (err, response) => {
                if (err) {
                    throw err;
                }

                console.log(response);
            });
        });
    })();
};

module.exports = {
    command: 'deploy',
    desc: 'Deploy prepared zip archive to Plesk.',
    builder: {},
    handler,
};
