import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const LOCAL_STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onVideoPlayer, 1000));
function onVideoPlayer (e) {
    const currentTime = e.seconds;
    localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
}

if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY))
};