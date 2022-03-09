import serialize from "serialize-javascript";

export const template = (content, store, helmet) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
    
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="A server-side rendered React WebApp">

        <link rel="icon" type="image/png" href="/static/favicon.png">

        <script 
            defer
            src="https://unpkg.com/@highlightjs/cdn-assets@11.3.1/highlight.min.js"
            >
        </script>

        <link 
            defer
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css" 
            integrity="sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs" 
            crossorigin="anonymous"
        >

        <script 
            defer 
            src="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js" 
            integrity="sha384-z1fJDqw8ZApjGO3/unPWUPsIymfsJmyrDVWC8Tv/a1HeOtGmkwNd/7xUS0Xcnvsx" 
            crossorigin="anonymous"
            >
        </script>

        <link 
            defer
            rel="stylesheet" 
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
            crossorigin="anonymous"
        >
        
        <link defer rel="stylesheet" href="/dist/assets/css/index.css">
    </head>
    <body>
        <div id="root">${content}</div>

        <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
        </script>

        <script src="/dist/js/client.js"></script>
    </body>
    </html>`;
};