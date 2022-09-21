const https = require('https')
const fs = require('fs')
const json = require('./json/feed.json')

const download_img = url => {
    var file = fs.createWriteStream(`./img/${url.split('/').pop(-1)}`);
    
    https.get(url, function(response) {
        response.pipe(file);
    });
}

for (var i = json.length - 1; i >= 0; i--) {
    const { img_url } = json[i]

    download_img(img_url)
}