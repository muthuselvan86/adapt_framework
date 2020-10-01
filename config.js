require.config({
    paths: {
        jquery: 'empty:',
        underscore: 'empty:',
        backbone: 'empty:',
        modernizr: 'empty:',
        handlebars: 'empty:',
        velocity: 'empty:',
        imageReady: 'empty:',
        inview: 'empty:',
        a11y: 'empty:',
        scrollTo: 'empty:',
        libraries: 'empty:',
        bowser: 'empty:',
        codemirror: 'empty:',
        lottie: 'empty:',
        'core/js/libraries/bowser': 'empty:',
        'coreJS/libraries/bowser': 'empty:',
    },
    map: {
        '*': {
            coreJS: 'core/js',
            coreViews: 'core/js/views',
            coreModels: 'core/js/models',
            coreCollections: 'core/js/collections',
            coreHelpers: 'core/js/helpers',
        },
    },
    packages: [
        {
            name: 'diff_match_patch',
            location: 'components/adapt-codi-codecomparator/libraries',
            main: 'diff_match_patch',
        },
    ],
})
