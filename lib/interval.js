// Friendly interval
// Initialize once, start, stop & restart with single funtion calls

'use strict';

var o = {
	init: function (f, i, start) {
		this.f = f;
		this.i = i;
		if (start) {
			this.start();
		}
		return this;
	},
	start: function () {
		if (!this.t) {
			this.t = setInterval(this.f, this.i);
		}
	},
	stop: function () {
		if (this.t) {
			clearInterval(this.t);
		}
	},
	restart: function () {
		this.stop();
		this.start();
	}
};

module.exports = function (f, i, start) {
	return Object.create(o).init(f, i, start);
};
