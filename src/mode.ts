import { env, argv0, argv } from 'node:process';
import type { WebBuddyStrictFeature } from './types.js';

export function isWebBuddyStrictFor(...feature: WebBuddyStrictFeature[]): boolean {
    const raw = env.WEB_BUDDY_STRICT ?? '0';

    if (!raw || raw === '0' || raw === 'false') return false;
    if (raw === '1' || raw === 'true') return true;
    if (!feature.length) return false;

    for (const item of raw.split(',')) {
        if (feature.includes(item)) return true;
    }

    return false;
}

/**
 * @example
 * ```shell
 *    # Bun Package Manager
 *    bun x @mercurio/protocol.oberon oberon.jwt.random-secret 48 HS512
 *
 *    # or as dependency in your project
 *    bun x oberon.jwt.random-secret 48 HS512
 *    bun run oberon.jwt.random-secret 48 HS512
 *
 *    # NPM Package Manager
 *    npx @mercurio/protocol.oberon oberon.jwt.random-secret 48 HS512
 *
 *    # or as dependency in your project
 *    npx oberon.jwt.random-secret 48 HS512
 *    npm exec oberon.jwt.random-secret 48 HS512
 * ```
 */
export function readPackageExecInfo(): PackageExecInfo | undefined {
    const lifecycle = env.npm_lifecycle_event;
    const ua = env.npm_config_user_agent;

    if (!ua || ua.length < 4) {
        return undefined;
    }

    const uaNameLen = ua.indexOf('/');

    if (uaNameLen < 3) {
        return undefined;
    }

    let packageManager = ua.substring(0, uaNameLen) as PackageManagerKind;

    if (!packageManager) {
        return undefined;
    } else if (
        // yarn classic (v1.x)
        packageManager === 'yarn' &&
        ua.substring(uaNameLen + 1, uaNameLen + 3) === '1.'
    ) {
        packageManager = 'yarn1';
    }

    const isBun = packageManager === 'bun';
    const command = env.npm_command ?? (isBun ? env.BUN_COMMAND : undefined);
    const isExec =
        lifecycle === 'npx' ||
        lifecycle === 'bunx' ||
        command === 'exec' ||
        command === 'run-script';

    if (!isExec) {
        return undefined;
    }

    let script = env.npm_lifecycle_script;

    if (script && script.length >= 2 && script.startsWith("'") && script.endsWith("'")) {
        script = script.substring(1, script.length - 1);
    }

    if (!script && argv.length) {
        const pBin = '/.bin/';
        let pTarget: string | undefined;
        let pBinPos: number | undefined;

        for (const item of argv) {
            if (item.startsWith('/') && (pBinPos = item.lastIndexOf(pBin))) {
                pTarget = item;
            }
        }

        if (pBinPos && pTarget && pBinPos + pBin.length < pTarget.length) {
            script = pTarget.substring(pBinPos + pBin.length);
        }
    }

    return {
        runtime: argv0,
        packageManager,
        packageName: env.npm_package_name,
        action: script ?? lifecycle ?? command ?? '',

        // raw: { lifecycle, script, command },
    };
}

type PackageManagerKind = 'npm' | 'pnpm' | 'yarn1' | 'yarn' | 'bun' | 'deno';

type PackageExecInfo = {
    /** source: process.argv0 */
    runtime: string;
    /** source: env.npm_config_user_agent */
    packageManager: PackageManagerKind;
    /** source: env.npm_package_name */
    packageName: string | undefined;
    /** executable */
    action: string;

    // raw: {
    //     /** source: env.npm_lifecycle_event */
    //     lifecycle: string | undefined;
    //     /**
    //      * source: env.npm_lifecycle_script
    //      */
    //     script: string | undefined;
    //     /**
    //      * source: env.npm_command
    //      */
    //     command: string | undefined;
    // };
};
