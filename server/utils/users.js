const urlToCode = new Map();
const shortcodeMap = new Map();
const idGenerator = require('./id_generator');
const register = (url, shortCode) => {
    if (urlToCode.get(url)) {
        updateShortCodeMap(urlToCode.get(url))
        return urlToCode.get(url);
    }
    return registerNewUser(url, shortCode);
}

function updateShortCodeMap(shortCode) {
    let {url, createdOn, timesClicked} = shortcodeMap.get(shortCode);
    timesClicked += 1;
    shortcodeMap.set(shortCode, {url, createdOn, lastAccessed: Date.now(), timesClicked});
}

function getStats(shortCode) {
    return shortcodeMap.get(shortCode)
}

function getUrl(shortCode) {
    if (shortcodeMap.get(shortCode)) updateShortCodeMap(shortCode);
    return shortcodeMap.get(shortCode).url || null;
}


function registerNewUser(url, shortCode) {
    if (!shortCode) {
        shortCode = idGenerator();
    }
    urlToCode.set(url, shortCode);
    shortcodeMap.set(shortCode, {url, createdOn: Date.now(), lastAccessed: Date.now(), timesClicked: 0});
    return shortCode;
}

module.exports = {register, getStats, getUrl};