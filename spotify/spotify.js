function simpleList() {
    const list = document.createElement("ol")
    spotifyData.items.forEach(element => {
        const track = document.createElement("li")
        
        const song = document.createElement("p")
        song.appendChild(document.createTextNode(element.name))
        song.classList.add("song")
        

        const artist = document.createElement("p")
        artist.appendChild(document.createTextNode(element.artists[0].name))
        artist.classList.add("artist")

        track.appendChild(song)
        track.appendChild(artist)

        list.appendChild(track)
    });

    document.getElementById("spotify").appendChild(list)
}

function embeds(){
    //use iFrames to embed
    //https://developer.spotify.com/documentation/embeds/guides/using-the-iframe-api/
}

simpleList()