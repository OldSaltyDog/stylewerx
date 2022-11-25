const path = require('path')
const fs = require('fs')
const less = require("less")

const testMe = function(lessInput) {

	less.render(lesss)
    .then(function(output) {
        console.log('output', output.css)
	},
	function (error) {
		console.log('error', error)
	})
}

export {testMe}