declare global {
    namespace NodeJS {
        interface ProcessEnv {
            WEB_BUDDY_STRICT?: string;
            /**
             * @example
             *   'P-+([0-9])'
             *   'ISS-+([0-9])-main'
             */
            WB_RELEASE_PRE_BRANCH?: string;
            /**
             * @example
             *   '${name}'
             *   'draft.${name}'
             */
            WB_RELEASE_PRE_CHANNEL?: string;
        }
    }
}

export {};
