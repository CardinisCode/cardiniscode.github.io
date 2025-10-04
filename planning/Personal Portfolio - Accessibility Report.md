# Accessibility Report - 04 Oct '25'


## Use efficient cache lifetimes 

* Est savings of 3,491 KiB
* A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/?utm_source=lighthouse&utm_medium=devtools).FCPLCP

| Request                                                                                          | Cache TTL | Transfer Size |
| ------------------------------------------------------------------------------------------------ | --------- | ------------- |
| andreafolgado.com<br><br> 1st party                                                              |           | 3,809 KiB     |
| [/img/capetown2.jpg](https://www.andreafolgado.com/img/capetown2.jpg)<br>(www.andreafolgado.com) | 10m       | 3,554 KiB     |

## Render blocking requests 

* Est savings of 2,050 ms
* Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://web.dev/learn/performance/understanding-the-critical-path?utm_source=lighthouse&utm_medium=devtools#render-blocking_resources) can move these network requests out of the critical path.FCPLCP

| URL                                                                                                                                                                  | Transfer Size | Duration |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| andreafolgado.com<br><br> 1st party                                                                                                                                  | 42.6 KiB      | 600 ms   |
| […css/font-awesome.min.css](https://www.andreafolgado.com/css/font-awesome/css/font-awesome.min.css)<br><br>(www.andreafolgado.com)                                  | 6.3 KiB       | 150 ms   |
| [/styles.css](https://www.andreafolgado.com/styles.css)<br><br>(www.andreafolgado.com)                                                                               | 1.7 KiB       |          |
| [/css/custom-typography.css](https://www.andreafolgado.com/css/custom-typography.css)<br><br>(www.andreafolgado.com)                                                 | 5.9 KiB       | 150 ms   |
| [/css/bootstrap.min.css](https://www.andreafolgado.com/css/bootstrap.min.css)<br><br>(www.andreafolgado.com)                                                         | 19.8 KiB      | 300 ms   |
| [/css/custom-bootstrap.css](https://www.andreafolgado.com/css/custom-bootstrap.css)<br><br>(www.andreafolgado.com)                                                   | 3.5 KiB       |          |
| [/css/agency.css](https://www.andreafolgado.com/css/agency.css)<br><br>(www.andreafolgado.com)                                                                       | 5.4 KiB       |          |
| Google Fonts<br><br> cdn [](https://fonts.google.com/ "Open in a new tab")                                                                                           | 4.1 KiB       | 930 ms   |
| [/css?family=Montserrat:400,700](https://fonts.googleapis.com/css?family=Montserrat:400,700)<br><br>(fonts.googleapis.com)                                           | 0.7 KiB       | 780 ms   |
| [/css?family=Caudex:400,700](https://fonts.googleapis.com/css?family=Caudex:400,700)<br><br>(fonts.googleapis.com)                                                   | 0.7 KiB       |          |
| [/css?family=Roboto+Slab:400,100,300,700](https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700)<br><br>(fonts.googleapis.com)                         | 0.8 KiB       |          |
| [/css?family=Droid+Serif:400,700,400italic,700italic](https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic)<br><br>(fonts.googleapis.com) | 0.5 KiB       |          |
| [/css?family=Lato:400,700,400italic,700italic](https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic)<br><br>(fonts.googleapis.com)               | 0.6 KiB       |          |
| [/css?family=Kaushan+Script](https://fonts.googleapis.com/css?family=Kaushan+Script)<br><br>(fonts.googleapis.com)                                                   | 0.8 KiB       | 150 ms   |

## Font Display

* Est savings of 140 ms
* Consider setting [`font-display`](https://developer.chrome.com/blog/font-display?utm_source=lighthouse&utm_medium=devtools) to `swap` or `optional` to ensure text is consistently visible. `swap` can be further optimized to mitigate layout shifts with [font metric overrides](https://developer.chrome.com/blog/font-fallbacks?utm_source=lighthouse&utm_medium=devtools).FCP

| URL                                                                                                                                                               | Est Savings |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| andreafolgado.com<br><br> 1st party                                                                                                                               | 140 ms      |
| […fonts/fontawesome-webfont.woff2?v=4.5.0](https://www.andreafolgado.com/css/font-awesome/fonts/fontawesome-webfont.woff2?v=4.5.0)<br><br>(www.andreafolgado.com) | 140 ms      |
| Google Fonts<br><br> cdn [](https://fonts.google.com/ "Open in a new tab")                                                                                        | 60 ms       |
| […v36/BngMUXZYT….woff2](https://fonts.gstatic.com/s/robotoslab/v36/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2)<br><br>(fonts.gstatic.com)                             | 20 ms       |
| […v19/vm8vdRfvX….woff2](https://fonts.gstatic.com/s/kaushanscript/v19/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2)<br><br>(fonts.gstatic.com)                      | 20 ms       |
| […v19/esDT311QO….woff2](https://fonts.gstatic.com/s/caudex/v19/esDT311QOP6BJUrwdteUkp8DOJKuGA.woff2)<br><br>(fonts.gstatic.com)                                   | 20 ms       |

## Improve image delivery 

* Est savings of 1,439 KiB
* Reducing the download time of images can improve the perceived load time of the page and LCP. [Learn more about optimizing image size](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/?utm_source=lighthouse&utm_medium=devtools)FCPLCP

| URL                                                                                                                    | Resource Size | Est Savings |
| ---------------------------------------------------------------------------------------------------------------------- | ------------- | ----------- |
| andreafolgado.com<br><br> 1st party                                                                                    | 3,551.7 KiB   | 1,439.2 KiB |
| [/img/capetown2.jpg](https://www.andreafolgado.com/img/capetown2.jpg)<br><br>(www.andreafolgado.com)                   | 3,551.7 KiB   | 1,439.2 KiB |
| Using a modern image format (WebP, AVIF) or increasing the image compression could improve this image's download size. |               | 1,439.2 KiB |

## Forced Reflow 

* A forced reflow occurs when JavaScript queries geometric properties (such as `offsetWidth`) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about [forced reflows](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing?utm_source=lighthouse&utm_medium=devtools#avoid-forced-synchronous-layouts) and possible mitigations.

| Source         | Total reflow time |
| -------------- | ----------------- |
| [unattributed] | 61 ms             |

## LCP request discovery

* Optimize LCP by making the LCP image [discoverable](https://web.dev/articles/optimize-lcp?utm_source=lighthouse&utm_medium=devtools#1_eliminate_resource_load_delay) from the HTML immediately, and [avoiding lazy-loading](https://web.dev/articles/lcp-lazy-loading?utm_source=lighthouse&utm_medium=devtools)LCP

- fetchpriority=high should be applied
- Request is discoverable in initial document
- lazy load not applied 

-> image banner (landing page)

## Network dependency tree

* [Avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains?utm_source=lighthouse&utm_medium=devtools) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCP

* Maximum critical path latency: **15,597 ms**
- Initial Navigation
	* [https://www.andreafolgado.com](https://www.andreafolgado.com/) 15,263 ms, 5.02 KiB
		* [/js/modals.js](https://www.andreafolgado.com/js/modals.js) (www.andreafolgado.com) 15,597 ms, 2.01 KiB
		* […css/font-awesome.min.css](https://www.andreafolgado.com/css/font-awesome/css/font-awesome.min.css) (www.andreafolgado.com) 15,401 ms, 6.34 KiB
			* […fonts/fontawesome-webfont.woff2?v=4.5.0](https://www.andreafolgado.com/css/font-awesome/fonts/fontawesome-webfont.woff2?v=4.5.0) (www.andreafolgado.com) 15,593 ms, 65.30 KiB

		* [/js/contact_me.js](https://www.andreafolgado.com/js/contact_me.js) (www.andreafolgado.com) 15,586 ms, 1.10 KiB
		* [/js/agency.js](https://www.andreafolgado.com/js/agency.js) (www.andreafolgado.com) 15,585 ms, 0.75 KiB
		* [/js/jqBootstrapValidation.js](https://www.andreafolgado.com/js/jqBootstrapValidation.js) (www.andreafolgado.com) 15,583 ms, 6.91 KiB
		* [/js/cbpAnimatedHeader.js](https://www.andreafolgado.com/js/cbpAnimatedHeader.js) (www.andreafolgado.com) 15,552 ms, 0.65 KiB
		* [/js/classie.js](https://www.andreafolgado.com/js/classie.js) (www.andreafolgado.com) 15,552 ms, 0.83 KiB
		* [/js/jquery.easing.min.js](https://www.andreafolgado.com/js/jquery.easing.min.js) (www.andreafolgado.com) 15,552 ms, 1.99 KiB
		* [/js/jquery-1.11.0.js](https://www.andreafolgado.com/js/jquery-1.11.0.js) (www.andreafolgado.com) 15,544 ms, 33.07 KiB
		* [/js/bootstrap.min.js](https://www.andreafolgado.com/js/bootstrap.min.js) (www.andreafolgado.com) 15,479 ms, 8.56 KiB
		* [/css?family=Kaushan+Script](https://fonts.googleapis.com/css?family=Kaushan+Script) (fonts.googleapis.com) 15,313 ms, 0.84 KiB
			* […v19/vm8vdRfvX….woff2](https://fonts.gstatic.com/s/kaushanscript/v19/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2) (fonts.gstatic.com) 15,471 ms, 23.18 KiB
		* [/css?family=Roboto+Slab:400,100,300,700](https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700) (fonts.googleapis.com) 15,316 ms, 0.83 KiB
			* […v36/BngMUXZYT….woff2](https://fonts.gstatic.com/s/robotoslab/v36/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2) (fonts.gstatic.com) 15,470 ms, 33.39 KiB
		* [/css?family=Caudex:400,700](https://fonts.googleapis.com/css?family=Caudex:400,700) (fonts.googleapis.com) 15,320 ms, 0.69 KiB
			* […v19/esDT311QO….woff2](https://fonts.gstatic.com/s/caudex/v19/esDT311QOP6BJUrwdteUkp8DOJKuGA.woff2) (fonts.gstatic.com) 15,463 ms, 16.17 KiB
		* [/css?family=Montserrat:400,700](https://fonts.googleapis.com/css?family=Montserrat:400,700) (fonts.googleapis.com) 15,394 ms, 0.67 KiB
		* [/styles.css](https://www.andreafolgado.com/styles.css) (www.andreafolgado.com) 15,390 ms, 1.67 KiB
		* [/css/custom-typography.css](https://www.andreafolgado.com/css/custom-typography.css) (www.andreafolgado.com) 15,390 ms, 5.93 KiB
		* [/css/bootstrap.min.css](https://www.andreafolgado.com/css/bootstrap.min.css) (www.andreafolgado.com) 15,385 ms, 19.78 KiB
		* [/css/custom-bootstrap.css](https://www.andreafolgado.com/css/custom-bootstrap.css) (www.andreafolgado.com) 15,381 ms, 3.49 KiB
		* [/css/agency.css](https://www.andreafolgado.com/css/agency.css) (www.andreafolgado.com) 15,381 ms, 5.40 KiB
		* [/css?family=Droid+Serif:400,700,400italic,700italic](https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic) (fonts.googleapis.com) 15,313 ms, 0.46 KiB
		* [/css?family=Lato:400,700,400italic,700italic](https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic) (fonts.googleapis.com) 15,313 ms, 0.58 KiB

* Preconnected origins
	* [preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools) hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
	* no origins were preconnected

* Preconnect candidates
	* Add [preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools) hints to your most important origins, but try to use no more than 4.
	* No additional origins are good candidates for preconnecting

## Layout shift culprits

* Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts](https://web.dev/articles/optimize-cls?utm_source=lighthouse&utm_medium=devtools), such as elements being added, removed, or their fonts changing as the page loads.CLS

| Element                                                                                                                                      | Layout shift score |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Total                                                                                                                                        | 0.017              |
| div.col-xs-12                                                                                                                                | 0.016              |
| div.navbar-header.page-scroll                                                                                                                | 0.001              |
| […v36/BngMUXZYT….woff2](https://fonts.gstatic.com/s/robotoslab/v36/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2)<br><br>(fonts.gstatic.com)        | Web font           |
| […v19/vm8vdRfvX….woff2](https://fonts.gstatic.com/s/kaushanscript/v19/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2)<br><br>(fonts.gstatic.com) | Web font           |
| h2.section-heading                                                                                                                           | 0.000              |
| […v19/esDT311QO….woff2](https://fonts.gstatic.com/s/caudex/v19/esDT311QOP6BJUrwdteUkp8DOJKuGA.woff2)<br><br>(fonts.gstatic.com)              | Web font           |

## Optimize DOM size

* A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. 
* A large DOM will also increase memory usage. [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/?utm_source=lighthouse&utm_medium=devtools).

|Statistic|Element|Value|
|---|---|---|
|Total elements||175|
|Most children|body#page-top.index|19|
|DOM depth|i.fa.fa-envelope|9|

## LCP breakdown

* Each [subpart has specific improvement strategies](https://web.dev/articles/optimize-lcp?utm_source=lighthouse&utm_medium=devtools#lcp-breakdown). 
* Ideally, most of the LCP time should be spent on loading the resources, not within delays.LCP

|Subpart|Duration|
|---|---|
|Time to first byte|110 ms|
|Resource load delay|15,300 ms|
|Resource load duration|180 ms|
|Element render delay|120 ms|-

-> header (banner) - landing page 

## 3rd parties

* 3rd party code can significantly impact load performance. 
* [Reduce and defer loading of 3rd party code](https://web.dev/articles/optimizing-content-efficiency-loading-third-party-javascript/?utm_source=lighthouse&utm_medium=devtools) to prioritize your page's content.

| 3rd party                                                                                                                                                            | Transfer size | Main thread time |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------- |
| hdokiejnpimakedhajhdlcegeplioahd                                                                                                                                     | 0 KiB         | 110 ms           |
| chrome-extension://hdokiejnpimakedhajhdlcegeplioahd/web-client-content-script.js                                                                                     | 0 KiB         | 110 ms           |
| aapbdbdomjkkjkaonfhkkikfgjllcleb                                                                                                                                     | 0 KiB         | 94 ms            |
| chrome-extension://aapbdbdomjkkjkaonfhkkikfgjllcleb/bubble_compiled.js                                                                                               | 0 KiB         | 94 ms            |
| pejdijmoenmkgeppbflobdenhhabjlaj                                                                                                                                     | 0 KiB         | 27 ms            |
| chrome-extension://pejdijmoenmkgeppbflobdenhhabjlaj/content_script.js                                                                                                | 0 KiB         | 27 ms            |
| Google Fonts<br><br> cdn [](https://fonts.google.com/ "Open in a new tab")                                                                                           | 77 KiB        | 0 ms             |
| […v36/BngMUXZYT….woff2](https://fonts.gstatic.com/s/robotoslab/v36/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2)<br><br>(fonts.gstatic.com)                                | 33 KiB        | 0 ms             |
| […v19/vm8vdRfvX….woff2](https://fonts.gstatic.com/s/kaushanscript/v19/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2)<br><br>(fonts.gstatic.com)                         | 23 KiB        | 0 ms             |
| […v19/esDT311QO….woff2](https://fonts.gstatic.com/s/caudex/v19/esDT311QOP6BJUrwdteUkp8DOJKuGA.woff2)<br><br>(fonts.gstatic.com)                                      | 16 KiB        | 0 ms             |
| [/css?family=Kaushan+Script](https://fonts.googleapis.com/css?family=Kaushan+Script)<br><br>(fonts.googleapis.com)                                                   | 1 KiB         | 0 ms             |
| [/css?family=Roboto+Slab:400,100,300,700](https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700)<br><br>(fonts.googleapis.com)                         | 1 KiB         | 0 ms             |
| [/css?family=Caudex:400,700](https://fonts.googleapis.com/css?family=Caudex:400,700)<br><br>(fonts.googleapis.com)                                                   | 1 KiB         | 0 ms             |
| [/css?family=Montserrat:400,700](https://fonts.googleapis.com/css?family=Montserrat:400,700)<br><br>(fonts.googleapis.com)                                           | 1 KiB         | 0 ms             |
| [/css?family=Lato:400,700,400italic,700italic](https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic)<br><br>(fonts.googleapis.com)               | 1 KiB         | 0 ms             |
| [/css?family=Droid+Serif:400,700,400italic,700italic](https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic)<br><br>(fonts.googleapis.com) | 0 KiB         | 0 ms             |
These insights are also available in the Chrome DevTools Performance Panel - [record a trace](https://developer.chrome.com/docs/devtools/performance/reference?utm_source=lighthouse&utm_medium=devtools) to view more detailed information.

## Diagnostics

### Minify CSS 

* Est savings of 2 KiB
* Minifying CSS files can reduce network payload sizes. 
* [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/?utm_source=lighthouse&utm_medium=devtools).FCPLCP

|URL|Transfer Size|Est Savings|
|---|---|---|
|andreafolgado.com<br><br> 1st party|5.9 KiB|2.5 KiB|
|[/css/custom-typography.css](https://www.andreafolgado.com/css/custom-typography.css)<br><br>(www.andreafolgado.com)|5.9 KiB|2.5 KiB|
### Minify JavaScript 

* Est savings of 3 KiB
* Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/?utm_source=lighthouse&utm_medium=devtools).FCPLCP

|URL|Transfer Size|Est Savings|
|---|---|---|
|andreafolgado.com<br><br> 1st party|6.7 KiB|3.0 KiB|
|[/js/jqBootstrapValidation.js](https://www.andreafolgado.com/js/jqBootstrapValidation.js)<br><br>(www.andreafolgado.com)|6.7 KiB|3.0 KiB|
### Avoid serving legacy JavaScript to modern browsers 

* Est savings of 13 KiB
* Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. 
* Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/baseline?utm_source=lighthouse&utm_medium=devtools) features, unless you know you must support legacy browsers. 
* [Learn why most sites can deploy ES6+ code without transpiling](https://philipwalton.com/articles/the-state-of-es5-on-the-web/)FCPLCP

|URL||Est Savings|
|---|---|---|
|chrome-extension://aapbdbdomjkkjkaonfhkkikfgjllcleb/bubble_compiled.js||12.0 KiB|
|bubble_compiled.js:17|@babel/plugin-transform-regenerator||
|bubble_compiled.js:4667|Promise.allSettled||
|chrome-extension://hdokiejnpimakedhajhdlcegeplioahd/web-client-content-script.js||0.7 KiB|
|web-client-content-script.js:2|@babel/plugin-transform-classes||
|web-client-content-script.js:2|@babel/plugin-transform-regenerator||
|web-client-content-script.js:2|@babel/plugin-transform-spread||

### Reduce unused CSS 

* Est savings of 19 KiB
* Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. 
* [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/?utm_source=lighthouse&utm_medium=devtools).FCPLCP

|URL|Transfer Size|Est Savings|
|---|---|---|
|andreafolgado.com<br><br> 1st party|19.6 KiB|18.6 KiB|
|[/css/bootstrap.min.css](https://www.andreafolgado.com/css/bootstrap.min.css)<br><br>(www.andreafolgado.com)|19.6 KiB|18.6 KiB|
### Reduce unused JavaScript 

* Est savings of 780 KiB
* Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. 
* [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/?utm_source=lighthouse&utm_medium=devtools).FCPLCP

|URL|Transfer Size|Est Savings|
|---|---|---|
|chrome-extension://aapbdbdomjkkjkaonfhkkikfgjllcleb/bubble_compiled.js|737.6 KiB|422.5 KiB|
|chrome-extension://hdokiejnpimakedhajhdlcegeplioahd/web-client-content-script.js|837.7 KiB|315.5 KiB|
|chrome-extension://pejdijmoenmkgeppbflobdenhhabjlaj/content_script.js|137.5 KiB|42.0 KiB|
### Avoid enormous network payloads 

* Total size was 5,169 KiB
* Large network payloads cost users real money and are highly correlated with long load times. 
* [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/?utm_source=lighthouse&utm_medium=devtools).

| URL                                                                                                                                                               | Transfer Size |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| andreafolgado.com<br><br> 1st party                                                                                                                               | 5,047.3 KiB   |
| [/img/capetown2.jpg](https://www.andreafolgado.com/img/capetown2.jpg)<br><br>(www.andreafolgado.com)                                                              | 3,553.8 KiB   |
| […personalised_logo/andi_logo_favicon.png](https://www.andreafolgado.com/img/logos/personalised_logo/andi_logo_favicon.png)<br><br>(www.andreafolgado.com)        | 1,275.9 KiB   |
| […about/Picture_M….jpeg](https://www.andreafolgado.com/img/about/Picture_Me_Portfolio2.jpeg)<br><br>(www.andreafolgado.com)                                       | 90.9 KiB      |
| […fonts/fontawesome-webfont.woff2?v=4.5.0](https://www.andreafolgado.com/css/font-awesome/fonts/fontawesome-webfont.woff2?v=4.5.0)<br><br>(www.andreafolgado.com) | 65.3 KiB      |
| [/js/jquery-1.11.0.js](https://www.andreafolgado.com/js/jquery-1.11.0.js)<br><br>(www.andreafolgado.com)                                                          | 33.1 KiB      |
| [/css/bootstrap.min.css](https://www.andreafolgado.com/css/bootstrap.min.css)<br><br>(www.andreafolgado.com)                                                      | 19.8 KiB      |
| [/js/bootstrap.min.js](https://www.andreafolgado.com/js/bootstrap.min.js)<br><br>(www.andreafolgado.com)                                                          | 8.6 KiB       |
| Google Fonts<br><br> cdn [](https://fonts.google.com/ "Open in a new tab")                                                                                        | 72.7 KiB      |
| […v36/BngMUXZYT….woff2](https://fonts.gstatic.com/s/robotoslab/v36/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2)<br><br>(fonts.gstatic.com)                             | 33.4 KiB      |
| […v19/vm8vdRfvX….woff2](https://fonts.gstatic.com/s/kaushanscript/v19/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2)<br><br>(fonts.gstatic.com)                      | 23.2 KiB      |
| […v19/esDT311QO….woff2](https://fonts.gstatic.com/s/caudex/v19/esDT311QOP6BJUrwdteUkp8DOJKuGA.woff2)<br><br>(fonts.gstatic.com)                                   | 16.2 KiB      |
### Avoid long main-thread tasks 

* 7 long tasks found
* Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. 
* [Learn how to avoid long main-thread tasks](https://web.dev/articles/optimize-long-tasks?utm_source=lighthouse&utm_medium=devtools)TBT

| URL                                                                              | Start Time | Duration |
| -------------------------------------------------------------------------------- | ---------- | -------- |
| Unattributable                                                                   |            | 990 ms   |
| chrome-extension://hdokiejnpimakedhajhdlcegeplioahd/web-client-content-script.js | 1,511 ms   | 446 ms   |
| chrome-extension://aapbdbdomjkkjkaonfhkkikfgjllcleb/bubble_compiled.js           | 1,111 ms   | 376 ms   |
| chrome-extension://pejdijmoenmkgeppbflobdenhhabjlaj/content_script.js            | 1,957 ms   | 109 ms   |
| Unattributable                                                                   | 2,066 ms   | 59 ms    |
| andreafolgado.com<br><br> 1st party                                              |            | 251 ms   |
| [https://www.andreafolgado.com](https://www.andreafolgado.com/)                  | 987 ms     | 124 ms   |
| [https://www.andreafolgado.com](https://www.andreafolgado.com/)                  | 912 ms     | 75 ms    |
| [https://www.andreafolgado.com](https://www.andreafolgado.com/)                  | 847 ms     | 52 ms    |

More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/?utm_source=lighthouse&utm_medium=devtools) the Performance score.

## Passed audits (14)

* Duplicated JavaScript
	* Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity.
* INP breakdown
	* Start investigating with the longest subpart. [Delays can be minimized](https://web.dev/articles/optimize-inp?utm_source=lighthouse&utm_medium=devtools#optimize_interactions). To reduce processing duration, [optimize the main-thread costs](https://web.dev/articles/optimize-long-tasks?utm_source=lighthouse&utm_medium=devtools), often JS.
* Legacy JavaScript
	* Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/articles/baseline-and-polyfills?utm_source=lighthouse&utm_medium=devtools) features, unless you know you must support older browsers. [Learn why most sites can deploy ES6+ code without transpiling](https://philipwalton.com/articles/the-state-of-es5-on-the-web/)
* Modern HTTP
	* Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/articles/baseline-and-polyfills?utm_source=lighthouse&utm_medium=devtools) features, unless you know you must support older browsers. [Learn why most sites can deploy ES6+ code without transpiling](https://philipwalton.com/articles/the-state-of-es5-on-the-web/)
* Modern HTTP
	* HTTP/2 and HTTP/3 offer many benefits over HTTP/1.1, such as multiplexing. [Learn more about using modern HTTP](https://developer.chrome.com/docs/lighthouse/best-practices/uses-http2/?utm_source=lighthouse&utm_medium=devtools).
* Optimize viewport for mobile (green)
	* Tap interactions may be [delayed by up to 300 ms](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/?utm_source=lighthouse&utm_medium=devtools) if the viewport is not optimized for mobile.
* Defer offscreen images - green
	* Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/?utm_source=lighthouse&utm_medium=devtools).FCPLCP
* Use HTTP/2 - green
	* HTTP/2 offers many benefits over HTTP/1.1, including binary headers and multiplexing. [Learn more about HTTP/2](https://developer.chrome.com/docs/lighthouse/best-practices/uses-http2/?utm_source=lighthouse&utm_medium=devtools).LCPFCP
* User Timing marks and measures
	* Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/?utm_source=lighthouse&utm_medium=devtools).
* JavaScript execution time 1.0 s - green
	* Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/?utm_source=lighthouse&utm_medium=devtools).TBT
* Minimizes main-thread work 2.0 s - green
	* Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/?utm_source=lighthouse&utm_medium=devtools)TBT
* Lazy load third-party resources with facades
	* Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/?utm_source=lighthouse&utm_medium=devtools).TBT
* Uses passive listeners to improve scrolling performance - green
	* Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/?utm_source=lighthouse&utm_medium=devtools).
* Avoids `document.write()` - green
	* Avoids `document.write()`
* Page didn't prevent back/forward cache restoration - green
	* Many navigations are performed by going back to a previous page, or forwards again. The back/forward cache (bfcache) can speed up these return navigations. [Learn more about the bfcache](https://developer.chrome.com/docs/lighthouse/performance/bf-cache/?utm_source=lighthouse&utm_medium=devtools)

## Accessibility - Score 74

These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/?utm_source=lighthouse&utm_medium=devtools). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/articles/how-to-review?utm_source=lighthouse&utm_medium=devtools) is also encouraged.

### Contrast
* Background and foreground colors do not have a sufficient contrast ratio: 
	* Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast).
	* Failing elements: 
		* a.btn.btn-xl - "View Resume" (Landing page / index.html)
		* a.btn.btn-xl.btn-primary - "View All Projects" (Landing page / index.html)
	* These are opportunities to improve the legibility of your content.

### Internationalization and localization - ✅ Resolved
* `<html>` element does not have a `[lang]` attribute
	* If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-has-lang).
* Failing elements: 
	* html
		* _layouts/default
	* my code before: 
		``` html
		<!DOCTYPE html>
		<html>
		</html>
		```
	* my code after: 
	``` html 
		<!DOCTYPE html>
		<html lang="en">
		</html>
		```
	* Pushed changes (04 Oct '25)

### Names and labels - ✅ Resolved
* Links do not have a discernible name
	* Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.10/link-name).
	* Failing Elements 
		* mail icon -> SM 
		* Github icon -> SM 
		* LI icon -> SM 
	* Updated the links to use "class="sr-only"
		* will display labels to screen readers ONLY
			* Email, Github, Linkedin
* These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.

### Navigation - ✅ Resolved

* Heading elements are not in a sequentially-descending order
	* Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.10/heading-order).
	* Failing Elements
		* h4.skills-heading -> Skills section
			* I used the H4 heading which did not fit the heading hierarchy
		* ✅ Fixed! I updated the H4 elements to be H3 elements

### Additional items to manually check (10)

These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/articles/how-to-review?utm_source=lighthouse&utm_medium=devtools).

#### Passed audits (9) - Green light

* ✅ `[aria-hidden="true"]` is not present on the document `<body>` - green
* ✅ Buttons have an accessible name - green
* ✅ Image elements have `[alt]` attributes - green
* ✅ `[user-scalable="no"]` is not used in the `<meta name="viewport">` element and the `[maximum-scale]` attribute is not less than 5.
* ✅ Document has a `<title>` element
* ✅ Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).
* ✅ List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements
* ✅ Touch targets have sufficient size and spacing.
* ✅ Image elements do not have `[alt]` attributes that are redundant text

## Best Practices - 100% 

## SEO - 100% 

These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/explore/vitals?utm_source=lighthouse&utm_medium=devtools). [Learn more about Google Search Essentials](https://support.google.com/webmasters/answer/35769).

### Additional items to manually check (1) -> To do

* Structured data is valid
	* Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/?utm_source=lighthouse&utm_medium=devtools).
	* Run these additional validators on your site to check additional SEO best practices

### Passed audits (10)

* ✅ Page isn’t blocked from indexing
* ✅ Document has a `<title>` element
* ✅ Document has a meta description
* ✅ Page has successful HTTP status code
* ✅ Links have descriptive text
* ✅ Links are crawlable
* ✅ robots.txt is valid
* ✅ Image elements have `[alt]` attributes
* ✅ Document has a valid `hreflang`
* ✅ Document has a valid `rel=canonical`

- Captured at Oct 4, 2025, 10:17 AM GMT+1
- Emulated Moto G Power with Lighthouse 12.8.1
- Single page session
- Initial page load
- Slow 4G throttling
- Using Chromium 140.0.0.0 with devtools

