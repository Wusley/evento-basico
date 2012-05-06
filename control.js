
	//objeto que trata eventos
	var EventEmitter 	= require('events').EventEmitter;
	var objEvento 		= new EventEmitter();
	
	//criando um evento
	//É possível passar usar a função anônima passada diretamente 
	//ou passar uma referencia
	//var getNome = function(nome) { console.log("A " + nome + " ficou com raiva e quebrou o Ipad3."); }
	// on 	= pode invocar o evento quantas vezes quiser
	// once = pode ser invocado apenas uma vez
	
	//on == addListener
	//removeListener
	
	//Listeners = informações sobre o evento
	objEvento.on('namoradacomraiva',function(nome) {
		
		console.log("A " + nome + " ficou com raiva e quebrou o Ipad3.");
		
	});
	
	//acionando evento
	objEvento.emit('namoradacomraiva','namorada');