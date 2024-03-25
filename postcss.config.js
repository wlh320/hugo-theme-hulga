module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ["./hugo_stats.json"],
            defaultExtractor: (content) => {
                const els = JSON.parse(content).htmlElements;
                return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
            },
            safelist: {
                standard: [
                    'back-to-top',
                    'data-theme'
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
