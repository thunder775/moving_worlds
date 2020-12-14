const nanoId = require('nanoid');

const chars = 'abcdefghijklmnopqrstuvwxyz'
const digits = '0123456789';
module.exports = nanoId.customAlphabet(chars + digits + chars.toUpperCase(), 6);
