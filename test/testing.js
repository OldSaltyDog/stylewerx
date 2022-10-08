const path = require('path')
const fs = require('fs')
const less = require("less")


const args = process.argv.slice(2);

var lessInput = `.sticky(@len: 0; @side: bottom) {
	position: sticky;
	@{side}: @len;
}`

less.render(lessInput)
    .then(function(output) {
//        console.log(process.argv[2]);
		console.log(output.css.toString())
// output.css = string of css
        // output.map = string of sourcemap
})