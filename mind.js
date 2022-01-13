const fs = require('fs');
var readlineSync = require('readline-sync');

var mind = function(){

	function jsonReader(filePath, cb) {
		fs.readFile(filePath, 'utf-8', (err, fileData) =>{
			if (err) {
				return cb && cb(err);
			}
			try {
				const object = JSON.parse(fileData);
				return cb && cb(null, object);
			} catch (err) {
				return cb && cb(err);
			}
		});
	}

	let word = readlineSync.question('Word to learn: ');

	let object_id = 1;

	const newObject = 
	{
		id: object_id,
		word: word, // variavel em que foi escrito a palavra
	};

	fs.appendFile('./memory/content.json', JSON.stringify(newObject, null, 2), err =>{ // usando o fs.appendFile fica muito melhor
		if (err) {																// porque ele não vai ficar sobescrevendo no
			console.log(err);													// conteudo de antes ;)
		} else {
			console.log('Successfully learned!');
		}
	});
	
}

module.exports = mind;