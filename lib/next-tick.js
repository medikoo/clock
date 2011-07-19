// Perform task in future turn of event loop.

'use strict';

module.exports = function (f) {
	setTimeout(f, 0);
};
