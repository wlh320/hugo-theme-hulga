module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ['themes/hulga/layouts/**/*.html'],
            safelist: {
                standard: ['highlight',
                    'pre',
                    'video',
                    'img',
                    'code',
                    'content',
                    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p',
                    'ul', 'ol', 'li',
                    'blockquote',
                    'table',
                    'hr', 'br',
                    'back-to-top'
                ],
                deep: [/^content/, /^chroma/],
                greedy: [],
                keyframes: [],
                variables: []
            }
        },
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        }
    }
};
