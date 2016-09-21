'use strict'

var Inky = require('inky').Inky;
var cheerio = require('cheerio');

module.exports = function (mikser, context) {
	if (context) {
		context.inky = function (input, options) {
			var i = new Inky(options);
			var html = cheerio.load(input)
			var convertedHtml = i.releaseTheKraken(html);
			return convertedHtml.html();
		}
	}
}