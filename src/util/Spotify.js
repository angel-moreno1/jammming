const clientId = "29d3f329a0be403791a0968951f5c65d"
const redirectUrl = "http://localhost:3000"
let  accessTokenGlobal;

const Spotify = {
    getAccessToken() {
        if(accessTokenGlobal){
            return accessTokenGlobal
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/access_token=([^&]*)/)
        if(accessTokenMatch && expiresInMatch) {
            accessTokenGlobal = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])
            setTimeout(() => accessTokenGlobal = "", expiresIn * 1000)
            window.history.pushState("access_token", null, "")
            return accessTokenGlobal
        }else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
            window.location = accessUrl
        }
    },
    async search(term) {
        if(term === "") {
            return []
        }
        try {
            const accessToken= this.getAccessToken()
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { headers: { Authorization: `Bearer ${accessToken}` } });
            const data = await response.json();
            console.log(data)
            if (!data.tracks) {
                return [];
            }
            return data.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album,
                uri: track.uri,
                preview_url: track.preview_url
            })); 
        } catch (error) {
            return
        }
    },
    async savePlayList(playListName, uris) {
        if(!playListName || !uris) {
            return
        }
        const accessToken = this.getAccessToken()
        const userID = {}
        const r = await fetch("https://api.spotify.com/v1/me", {headers: { Authorization: `Bearer ${accessToken}` }});
        const r_1 = await r.json();
        return console.log(r_1);
    }
}


export default Spotify