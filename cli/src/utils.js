const fs = require('fs-extra');
const xmlParser = require('fast-xml-parser');
const { resolveAppPath } = require('@plesk/plesk-ext-sdk/lib/utils');

module.exports.loadExtensionConfig = () => {
    const configPath = resolveAppPath('extension.config.js');
    const defaults = {
        routes: [],
        zip: {
            ignore: [
                'frontend/**',
                'plib/vendor/plesk/**',
            ],
        },
    };

    if (fs.pathExistsSync(configPath)) {
        return {
            ...defaults,
            ...require(configPath),
        };
    }

    return defaults;
};

const metadata = xmlParser.parse(fs.readFileSync(resolveAppPath('src/meta.xml')).toString()).module;
module.exports.zipName = () => `${metadata.id}-${metadata.version}-${metadata.release}.zip`;
