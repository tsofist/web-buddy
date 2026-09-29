import type { StylelintRuleSet } from '../types.js';

const VuePseudoClasses = [
    'deep',
    'slotted',
    'global',
    // legacy ->
    'v-deep',
    'v-slotted',
    'v-global',
];

export const WebBuddyStylelintRules: StylelintRuleSet = {
    'prettier/prettier': true,
    'order/properties-alphabetical-order': true,
    'no-empty-source': null,
    'declaration-property-value-no-unknown': true,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: VuePseudoClasses }],
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: VuePseudoClasses }],
    'scss/at-rule-no-unknown': null,
    'scss/comment-no-empty': null,
};
