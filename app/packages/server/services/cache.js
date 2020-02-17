const moment = require('moment');

const cache = {};

module.exports = {
  CACHE_SHORT: 60*1000,
  CACHE_MEDIUM: 60*5*1000,
  CACHE_LONG: 60*30*1000,
  CACHE_EXTRA_LONG: 60*60*24*1000,

  get: (cacheKey) => {
    const stored = cache[cacheKey];

    if (!stored) {
      return null;
    }

    const currentTime = moment().valueOf();

    if (currentTime > stored.expires) {
      delete cache[cacheKey];

      return null;
    }

    return stored.data;
  },

  set: (cacheKey, data, cacheLength = 60*5*1000) => {
    cache[cacheKey] = {
      expires: moment().valueOf() + cacheLength,
      data,
    };
  },
}
