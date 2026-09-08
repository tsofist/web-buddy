declare global {
    namespace NodeJS {
        interface ProcessEnv {
            WEB_BUDDY_STRICT?: string;
        }
    }
}

export {};
