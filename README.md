# Gif Display App
An HTML and JS app to search for gifs using the [Giphy API](https://developers.giphy.com/). Users can click a button to display the gifs resulting from a search query of that button's term, and can enter terms to generate more buttons for searching.

In order to use the API yourself, you need to generate your own Giphy API key. My html links to a JS file (not uploaded to keep my key secure) with the following line defining the API key for use in the JS script:

```javascript
var mykey = "yourApiKey";
```

Up to 10 gifs from the search query will be displayed on the screen. Clicking on a gif will toggle the movement; gifs will not move until clicked. Once moving, the movement can be stopped by clicking the gif again.
