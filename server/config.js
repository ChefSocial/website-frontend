(function() {
	'use strict';

	module.exports = {
		env: process.env.CS_ENV || 'development',
		port: process.env.CS_PORT || '3003'
	}

})();