const fs = require('fs');


fs.readFile('index.html', 'utf-8', (err, contenido) => {

    if (err) {
        console.log(err);
    } else {

        console.log(contenido);
    }

});


//adding with appendFile context to the end of the file..

// fs.appendFile('index.html', '<p>Hola</p>', (err) => {

//     if (err) {
//         throw err;
//     }
//     console.log('arhcivo actualizado');
// });


//replace all the context of the file...


// fs.writeFile('index.html', 'contenido nuevo', (err) => {

//     if (err) {
//         throw err;
//     }

//     console.log('contenido reemplazado exitosamente...');

// });


// delete file ......

// fs.unlink('main.html', (err) => {

//     if (err) {
//         throw err;
//     }

//     console.log('Archivo borrado...');
// });