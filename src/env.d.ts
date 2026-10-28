declare global {
    namespace NodeJS {
        interface ProcessEnv {
            WEB_BUDDY_STRICT?: string;
            /**
             * @example
             *   '?(fix/|feat/|refactor/|perf/)TASK-+([0-9])'
             *   'P-+([0-9])'
             *   'ISS-+([0-9])-main'
             *
             * @see https://github.com/micromatch/micromatch micromatch | Github
             */
            WB_RELEASE_PRE_BRANCH?: string;
            /**
             * @example
             *   '${name}'
             *   'draft.${name}'
             *
             * @see https://github.com/micromatch/micromatch micromatch | Github
             * @default '${name}'
             */
            WB_RELEASE_PRE_CHANNEL?: string;
            /**
             * @example
             *   '${name}'
             *   'draft.${name}'
             *
             * @see https://github.com/micromatch/micromatch micromatch | Github
             * @default '${name}'
             */
            WB_RELEASE_PRE_NAME?: string;
        }
    }
}

export {};
