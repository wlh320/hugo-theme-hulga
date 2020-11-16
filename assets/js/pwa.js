{{ $swfile := resources.Get "/sw.js" }}
{{ $sw := $swfile | resources.Minify }}
if('serviceWorker' in navigator) {
    const PREFETCH = true;
    const PREFETCH_LINK_RELS = ['index','next', 'prev', 'prefetch'];
    function prefetchCache() {
        if(navigator.serviceWorker.controller) {
            let links = document.querySelectorAll(
                PREFETCH_LINK_RELS.map((rel) => {
                    return 'link[rel='+rel+']';
                }).join(',')
            );
            if(links.length > 0) {
                Array.from(links)
                    .map((link) => {
                        let href = link.getAttribute('href');
                        navigator.serviceWorker.controller.postMessage({
                            action : 'cache',
                            url : href,
                        });
                    });
            }
        }
    }

    navigator.serviceWorker
        .register('{{ $sw.Permalink | relURL }}', { scope: '/' })
        .then(() => {
            console.log('Service Worker Registered');
        });

    navigator.serviceWorker
        .ready
        .then(() => {
            if(PREFETCH) {
                prefetchCache();
            }
        });
}