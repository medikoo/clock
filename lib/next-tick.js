// Perform task in a future turn of the event loop.

'use strict';

module.exports = function (f) {
	setTimeout(f, 0);
};
