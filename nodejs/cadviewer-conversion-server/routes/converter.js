const { response } = require('express');
const express = require('express');
let router = express.Router();
// let router = app.Router();
const multer = require('multer');
function converter(req, res) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './nodejs/cadviewer-conversion-server/content/drawings/dwg/');
        },
        // Criando script para o mostrar um arquivo dwg no cadviewer
        filename: function (req, file, cb) {
            const extensaoArquivo = file.originalname.split('.')[1];
            const today = new Date()
            let data = today.toISOString();
            let hj = data.replace(/\.|\:|\-/g, '');
            // Cria um código randômico que será o nome do arquivo
            const novoNomeArquivo = file.originalname.split('.')[0];
            let newname = `${novoNomeArquivo}_${hj}.${extensaoArquivo}`
            // Indica o novo nome do arquivo:
            cb(null, `${newname}`)
        }
    });
    const upload = multer({
        storage: storage,
    });

    // Configuração de armazenamento
    router.post('/converter', upload.single('dwg'), (req, res) => {
        console.log('res:', res)
        return res.status(201).send(response)
    });
}
converter()
module.exports = router;