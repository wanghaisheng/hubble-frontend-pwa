import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    rollup: { cjsBridge: true },
    entries: [
        './src/module',
        // Shopware
        {
            input: './src/platforms/shopware/api-client/',
            outDir: './dist/platforms/shopware/api-client',
            declaration: true
        },
        {
            input: './src/platforms/shopware/bin/',
            outDir: './dist/platforms/shopware/bin',
            declaration: false,
            ext: 'js'
        },
        {
            input: './src/platforms/shopware/composables/',
            outDir: './dist/platforms/shopware/composables',
            declaration: false,
            ext: 'ts'
        },
        {
            input: './src/platforms/shopware/utils/',
            outDir: './dist/platforms/shopware/utils',
            declaration: false,
            ext: 'ts'
        },
        {
            builder: 'mkdist',
            input: './src/platforms/shopware/config/',
            outDir: './dist/platforms/shopware/config'
        },
        // Theme
        {
            input: './src/theme/',
            outDir: './dist/theme',
            declaration: false,
            ext: 'ts'
        },
        // Commons
        {
            input: './src/commons/',
            outDir: './dist/commons',
            declaration: false,
            ext: 'ts'
        }
    ],
    externals: [
        'chokidar',
        'fs-extra',
        'defu'
    ]
})
