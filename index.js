'use strict'

var Inky = require('inky').Inky;
var cheerio = require('cheerio');
let fs = require('fs');
let path = require('path');

module.exports = function (mikser, context) {
	if (context) {
		context.inky = function (input, options) {
			var i = new Inky(options);
			var html = cheerio.load(input)
			var convertedHtml = i.releaseTheKraken(html);
			return convertedHtml;
		}
		context.inky.style = function() {
			var style = path.join(__dirname,'inky.css');
			return '<style>' + fs.readFileSync(style , {
				encoding: 'utf8'
			}) + '</style>';
		}
	}
}