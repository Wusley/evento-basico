
	//objeto que trata eventos
	var EventEmitter 	= require('events').EventEmitter;
	var objEvento 		= new EventEmitter();
	
	//criando um evento
	objEvento.on('namoradacomraiva',function(nome){
		
		console.log("A " + nome + " ficou com raiva e quebrou o Ipad3.");
		
	});
	
	//acionando evento
	objEvento.emit('namoradacomraiva','namorada');