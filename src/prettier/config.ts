export const WebBuddyPrettierConfig = {
    arrowParens: 'always',
    printWidth: 100,
    quoteProps: 'consistent',
    singleQuote: true,
    endOfLine: 'lf',
    tabWidth: 4,
    trailingComma: 'all',
    bracketSpacing: true,
    vueIndentScriptAndStyle: true,
    bracketSameLine: true,
    singleAttributePerLine: false,

    overrides: [
        {
            files: '*.{html,htm}',
            options: {
                singleQuote: false,
                tabWidth: 4,
            },
        },
        {
            files: '*.{yaml,yml}',
            parser: 'yaml',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.{json,jsonc,json5}',
            parser: 'json',
            options: {
                tabWidth: 2,
                trailingComma: 'none',
            },
        },
    ],
};

export default WebBuddyPrettierConfig;
