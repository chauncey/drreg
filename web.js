var express  = require('express'),

app = express();
app.set('title', 'DrRegister');
app.set('version', '0.0.1');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port'));
