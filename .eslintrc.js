/** @type {import("eslint").Linter.RulesRecord} */
const common = {
    'no-void': 'off',
    semi: ['error', 'always'],
    indent: ['error', 4, { SwitchCase: 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'no-extra-boolean-cast': 'off',
};

for (const [key, value] of Object.entries(common)) {
    common[`@typescript-eslint/${key}`] = value;
}

/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true,
    },
    extends: 'standard-with-typescript',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: 'tsconfig.json',
    },
    plugins: ['import'],
    rules: Object.assign(common, {
        curly: 'error',
        'no-console': 'warn',
        'no-duplicate-imports': 'error',
        'no-case-declarations': 'off',
        'object-shorthand': [2, 'consistent'],
        'import/no-unassigned-import': 'warn',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {}],
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error',
            {
                ignoreConditionalTests: true,
                ignoreMixedLogicalExpressions: true,
            },
        ],
    }),
    ignorePatterns: ['/dist'],
};
