'use strict';

// eslint-disable-next-line no-undef
module.exports = {
    process() {
        return { code: `module.exports = {};` };
    },
    getCacheKey() {
        // The output is always the same.
        return 'cssTransform';
    },
};