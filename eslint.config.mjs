import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
    features: {
        typescript: true,
        stylistic: {
            semi: true,
            indent: 4,
            quotes: 'single',
            commaDangle: 'always-multiline',
        },
    },
});
