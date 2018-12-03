require('./kulModel');

var mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost/WebKayit';

mongoose.connect(mongoDB, function(res){
	if (res) {
		console.log('mongoose hatasi' + err);
	} else {
		console.log('mongoose baglandi ' + mongoDB);
	}
})