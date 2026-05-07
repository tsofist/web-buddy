import { WebBuddyStylelintRules } from './rules.js';

export const WebBuddyStylelintConfig = {
    defaultSeverity: 'error',
    extends: [
        'stylelint-config-html',
        'stylelint-config-standard',
        'stylelint-config-standard-vue',
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss',
        'stylelint-prettier',
    ],
    plugins: ['stylelint-prettier', 'stylelint-scss', 'stylelint-order'],
    overrides: [
        {
            files: ['*.html'],
            customSyntax: 'postcss-html',
        },
    ],
    rules: WebBuddyStylelintRules,
};

export default WebBuddyStylelintConfig;
