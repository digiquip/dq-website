const youtube_url = "https://www.youtube-nocookie.com/embed/";
const youtube_autoplay = "?autoplay=1";
const youtube_noautoplay = "?autoplay=0";
const youtube_params = "&cc_load_policy=0&disablekb=0&enablejsapi=1&fs=1&iv_load_policy=3&playsinline=1&rel=0&wmode=opaque&start=0";
const youtube_widgetid = "&widgetid=";

const safetyVideoLink =
{
    withoutAutoPlay: youtube_url + "HHi45YCFPBc" + youtube_noautoplay + youtube_params + youtube_widgetid + "1",
    withAutoPlay: youtube_url + "HHi45YCFPBc" + youtube_autoplay + youtube_params + youtube_widgetid + "1"
}

const easyflowVideoLink = {
    withoutAutoPlay: youtube_url + "Lgg8cZHoiH4" + youtube_noautoplay + youtube_params + youtube_widgetid + "4",
    withAutoPlay: youtube_url + "Lgg8cZHoiH4" + youtube_autoplay + youtube_params + youtube_widgetid + "4"
}

const inspectionVideoLink = {
    withoutAutoPlay: youtube_url + "aKWABYqQR2Q" + youtube_noautoplay + youtube_params + youtube_widgetid + "3",
    withAutoPlay: youtube_url + "aKWABYqQR2Q" + youtube_autoplay + youtube_params + youtube_widgetid + "3"
}

const logsVideoLink = {
    withoutAutoPlay: youtube_url + "jxjmZ4mG1tA" + youtube_noautoplay + youtube_params + youtube_widgetid + "2",
    withAutoPlay: youtube_url + "jxjmZ4mG1tA" + youtube_autoplay + youtube_params + youtube_widgetid + "2"
}

const easyTraining = {
    withoutAutoPlay: youtube_url + "WWZ7bptGkA8" + youtube_noautoplay + youtube_params + youtube_widgetid + "1",
    withAutoPlay: youtube_url + "WWZ7bptGkA8" + youtube_autoplay + youtube_params + youtube_widgetid + "1"
}

const youtubePlayList = {
    safetyVideoLink,
    easyflowVideoLink,
    inspectionVideoLink,
    logsVideoLink,
    easyTraining
}


export default youtubePlayList;