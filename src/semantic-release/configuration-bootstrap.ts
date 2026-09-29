/**
 * @internal
 */
export function bootstrapSemanticReleaseConfig(
    platform: SemanticReleasePlatform,
    branchesFlow: SemanticReleaseBranchesFlow = DEF_BRANCHES_FLOW,
) {
    const branches: SemanticReleaseBranchDef[] = [
        'main',
        'master',
        { name: 'next', prerelease: true },
        { name: 'stage', prerelease: true },
        { name: 'dev', prerelease: true },
        { name: 'beta', prerelease: true },
        { name: 'alpha', prerelease: true },
    ];

    if (branchesFlow.maintenance) {
        const prefix =
            branchesFlow.maintenance.branchPrefix ?? DEF_BRANCHES_FLOW.maintenance.branchPrefix;
        const channel =
            branchesFlow.maintenance.releaseChannel ?? DEF_BRANCHES_FLOW.maintenance.releaseChannel;
        const name = `${prefix}/+([0-9])?(.{+([0-9]),x}).x`;

        branches.push({ name, channel });
    }

    if (branchesFlow.draft) {
        const prefix = branchesFlow.draft.branchPrefix ?? DEF_BRANCHES_FLOW.draft.branchPrefix;
        const channel = branchesFlow.draft.releaseChannel ?? DEF_BRANCHES_FLOW.draft.releaseChannel;
        const name = `${prefix}/*`;
        const prerelease = `\${name.replace(/^${channel}\\//, '${channel}.')}`;

        branches.push({ name, channel, prerelease });
    }

    return {
        branches,
        plugins: [
            '@semantic-release/commit-analyzer',
            '@semantic-release/release-notes-generator',
            `@semantic-release/${platform}`,
            '@semantic-release/npm',
            [
                '@semantic-release/git',
                {
                    assets: ['package.json', 'package-lock.json'],
                    message:
                        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
                },
            ],
        ],
    };
}

export type SemanticReleasePlatform = 'github' | 'gitlab';

export type SemanticReleaseBranchesFlow = {
    /**
     * ### Defaults:
     * - __Channel name__: `maintenance`
     * - __Branch name template:__ `maintenance/+([0-9])?(.{+([0-9]),x}).x`
     */
    maintenance?: ReleaseBranchFlowParams;
    /**
     * ### Defaults:
     * - __Channel name__: `draft`
     * - __Branch name template:__ `draft/*`
     */
    draft?: ReleaseBranchFlowParams;
};

export type ReleaseBranchFlowParams = {
    branchPrefix?: string;
    releaseChannel?: string;
};

/**
 * @see https://semantic-release.gitbook.io/semantic-release/usage/configuration#branches Branches | semantic-release
 * @see https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#workflow-configuration Workflow | semantic-release
 */
type SemanticReleaseBranchDef =
    // Workflow: Distribution channel
    | SemanticReleaseBranchDistributionChannel
    // Workflow: Pre-Release
    | SemanticReleaseBranchPreRelease
    // Workflow: Maintenance
    | SemanticReleaseBranchMaintenance;

/**
 * Prerelease branch definition
 * ---
 *
 * @example
 * ```TypeScript
 *   // `prerelease` is set to `true` as it is the value of `name`
 *   { name: "master", prerelease: true }
 *   // `prerelease` is built with the template `${name.replace(/^pre\\//g, "")}`
 *   { name: "pre/rc", channel: "pre/rc", prerelease: "rc" }
 *   // `prerelease` is set to `beta` as it is the value of `name`
 *   { name: "beta", channel: "beta", prerelease: true }
 *   // `prerelease` is built with the template `${name.replace(/^wip\\//, 'wip.')}`
 *   { name: "wip", channel: "wip", prerelease: "${name.replace(/^wip\\//, 'wip.')}" }
 * ```
 *
 * @see https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#workflow-configuration#pre-release-branches Pre-release branches | semantic-release
 * @see https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases Workflow: Pre-releases | semantic-release
 */
type SemanticReleaseBranchPreRelease = {
    name: string;
    prerelease: true | string;
    channel?: string;
};

/**
 * Maintenance branch definition
 * ---
 *
 * @example
 * ```TypeScript
 *   { name: "maintenance/+([0-9])?(.{+([0-9]),x}).x", channel: "maintenance" }
 *   // `channel` is built with the template `channel-${name}`
 *   {name: "next", channel: "channel-${name}"}
 *   // only after the `1.x` is created in the repo
 *   { name: "1.x", channel: "1.x", range: "1.x" },
 * ```
 *
 * @see https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#workflow-configuration#maintenance-branches Maintenance branches | semantic-release
 * @see https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases Workflow: Maintenance releases | semantic-release
 */
type SemanticReleaseBranchMaintenance = {
    name: string;
    channel: string;
    range?: string;
};

/**
 * @see https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels Workflow: Distribution channels | semantic-release
 */
type SemanticReleaseBranchDistributionChannel = string;

const DEF_BRANCHES_FLOW = {
    maintenance: {
        releaseChannel: 'maintenance',
        branchPrefix: 'maintenance',
    } as const,
    draft: {
        releaseChannel: 'draft',
        branchPrefix: 'draft',
    } as const,
} as const satisfies Required<SemanticReleaseBranchesFlow>;
