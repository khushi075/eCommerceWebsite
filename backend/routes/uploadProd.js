const router = require ('express').Router();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const requireSAuth = require('../middleware/requireSAuth')
router.use(requireSAuth)

let Product = require('../models/productModel');

//set storage engine
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function(req, file, cb){
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});



//check file type
function checkFileType(file, cb){
    //allowed extensions
    const filetypes = /jpeg|jpg|png|gif/;
    //check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true);
    }else{
        cb('Error: Images Only!');
    }
}

//init upload
const upload = multer({
    storage: storage,
    // limits: {fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
});


router.route('/add').post( upload.single('photo'), (req, res) => {
    const name = req.body.name;
    const photo = req.file.filename;
    const store = req.body.store;
    const descr = req.body.descr;
    const price = Number(req.body.price);
    const region = req.body.region;
    const category = req.body.category;
    const seller_id = req.body.seller_id;

    const newProduct = new Product({
        name,
        photo,
        store,
        descr,
        price,
        region,
        category,
        seller_id
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rec').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});





module.exports = router;


