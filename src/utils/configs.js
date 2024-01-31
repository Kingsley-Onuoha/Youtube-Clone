export const OFFSET_LIVE_CHAT = 10

export const YOUTUBE_VIDEO_API =`https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=32&regionCode=NG&key=${process.env.REACT_APP_GOOGLE_API_KEY}`


export const YOUTUBE_VIDEO_API_SEARCH_SUGGESTIONS ="https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="