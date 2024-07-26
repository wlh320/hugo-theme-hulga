module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: ["./hugo_stats.json"],
            defaultExtractor: (content) => {
                const els = JSON.parse(content).htmlElements;
                return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
            },
            variables: true,
            safelist: {
                standard: [
                    'disabled',
                    'back-to-top',
                    'data-theme',
                ],
                deep: [/^content/, /^chroma/],
                greedy: [],
                keyframes: [],
                variables: [/bulma-primary-100-l/, /bulma-primary-invert/]
            }
        },
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        },
    }
};
