// Date object that always reflects current time (with one second resolution)

'use strict';

var curry = require('es5-ext/lib/Function/curry').call

  , update;

update = function () {
	this.setTime(Date.now());
};

module.exports = function () {
	var date = new Date();
	date.clear = curry(clearInterval, setInterval(update.bind(date), 1000));
	return date;
};
