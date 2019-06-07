// const { resolveAppPath } = require('@plesk/plesk-ext-sdk/lib/utils');

module.exports = {
    webpack: config => {
        /*
         * NOTE: This callback can be used to touch the webpack config before passing it to webpack itself.
         *       In the example below, the `frontend` dir has been moved to the root of the project.
         *
         * config.context = resolveAppPath('frontend');
         * config.module.rules[0].include[0] = resolveAppPath('frontend');
         * config.resolve.modules[0] = resolveAppPath('frontend');
         */
        return config;
    },
    /*
     * NOTE: This is the default config for zip command, uncomment to add further directories/files to exclude from the bundle.
     *
     * zip: {
     *     ignore: [
     *         'frontend/**',
     *         'plib/vendor/plesk/**',
     *     ],
     * },
     */
};
