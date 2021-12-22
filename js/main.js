window.onload = async () => {
    'use strict';

    if('serviceWorker' in navigator) {
        console.log("registering sw")
        await navigator.serviceWorker.register("./sw.js")
        console.log("sw registered")
    }
    else {
        console.log("cant find serviceworker")
        console.log(`probably because you are using ${location.protocol} (should be https:)`)
    }
}
