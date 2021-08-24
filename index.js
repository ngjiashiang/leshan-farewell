var giphyApiKey = "6IyGcLxdNyq5HbOezENTjn8wmO2cpJhI"
var giphyApiUrl = "https://api.giphy.com/v1/gifs/search?q=sad-goodbye&rating=g&api_key=6IyGcLxdNyq5HbOezENTjn8wmO2cpJhI"
var giphyApiUrl2 = "https://api.giphy.com/v1/gifs/search?q=sad-goodbye&offset=50&rating=g&api_key=6IyGcLxdNyq5HbOezENTjn8wmO2cpJhI"

for (let index = 0; index < 2; index++) {
    var imageArr = []
    if(index == 0) {
        var giphyApiUrl = "https://api.giphy.com/v1/gifs/search?q=sad-goodbye&rating=g&api_key=6IyGcLxdNyq5HbOezENTjn8wmO2cpJhI"
    } else [
        giphyApiUrl = "https://api.giphy.com/v1/gifs/search?q=sad-goodbye&offset=50&rating=g&api_key=6IyGcLxdNyq5HbOezENTjn8wmO2cpJhI"
    ]
    fetch(giphyApiUrl).then(function(data){
        return data.json()
    })
    .then(function(json){
        for (let index = 0; index < 49; index++) {
            imageArr.push(json.data[index].images.fixed_height.url)
        }
    }).then(function(){
        for (let i = 0; i < imageArr.length; i++) {
            var div = `<div class="inline">
            <img src="${imageArr[i]}"/>
            </div>
            `;
            document.getElementById("push-gif-here").insertAdjacentHTML("beforeend",div);
        }
    })
}
