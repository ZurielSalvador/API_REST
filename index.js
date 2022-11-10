var express = require ('express');

var app = express();

app.use(express.json()); //Recibir informacion es en formato json

app.use (express.urlencoded());//información proviene dde la url

const ruta = require ('path'); //obtener el directorio del servidor de forma automatica

var persona = {
    nombre : "",
    apellido: "",
    id:""
};


//1.mostart al cliente un menú registrar, consultar, eliminar un registro

app.get ('/', ()=>{  //Recibi rpeticiones y dar respuestas al cliente

    res.sendFile(ruta.join(__dirname+'/html/index.html'));

});

app.get ('/crearEntrada', (req,res)=>{  //Recibi rpeticiones y dar respuestas al cliente

    res.sendFile(ruta.join(__dirname+'/html/crearEntrada.html'));

});


app.get ('/consultaDatos', (req,res)=>{  //Recibi rpeticiones y dar respuestas al cliente

    if(persona.nombre!=='' && persona.apellido!=='' && persona.id!==''){

        res.json(persona);


    }else{
        res.send("NO hay registeo que mostar");
    }
    
});



app.get ('/eliminarDatos', () => {


    persona.nombre='';
    persona.apellido='';
    persona.id='';

    res.sendFile(ruta.join(__dirname+'/html/index.html'));


});




app.post ('/envioDatos', (req,res)=>{  //Recibi rpeticiones y dar respuestas al cliente

    persona.nombre = res.body.nombre;
    persona.apellido = res.body.apellido;
    persona.id = res.body.id;
    res.sendFile(ruta.join(__dirname+'/html/index.html'));

});





app.listen(9080, ()=> {

    console.log("El servidor esta trabajando por el puerto 8000");
})








