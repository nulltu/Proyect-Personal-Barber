const Product = require('../models/product')

const productController ={

    //Cargar un producto nuevo a la BD
    addProduct : async (req, res) => {

		console.log(req.body)
		console.log(req.files)
        const {title, description, price} = req.body
        const folderImage = req.files.image
        const nameFolderImage = "rusbsssent.jpg"
        const serverURL = `${__dirname}uploads/${nameFolderImage}`
        folderImage.mv(serverURL)

        // const productExist = await Product.findOne({title})

        // if(productExist){
        //     res.json({success: false, error: "There is already a product with that title."})
        // }else {
            const newProduct = new Product({
                title, description, image: nameFolderImage, price
            })
            var product = await newProduct.save()
                // res.json({
                //     success: true, product
                // })

        
    

    // addProduct: async (req, res) => {

	// 	const { title, description, price } = req.body
	// 	const newProduct = new Product({ title, description, price})

	// 	newProduct.save()
		
	// 		.then(newProduct => {
	
	// 			if (req.files.image !== undefined) {
	// 				const path = require('path');
	// 				const file = req.files.image
	// 				const ruta = `${path.join(__dirname, '..', 'client', 'img')}/${newProduct._id}.jpg`
	// 				let error = false
	// 				file.mv(ruta, async err => {
	// 					if (err) {
	// 						error = "Error saving image";
	// 					}
	// 					else {
	// 						const newProducto = await Product.findOneAndUpdate({ _id: newProduct._id }, { image: `http://localhost:4000/${newProduct._id}.jpg` }, { new: true })
	// 						res.json({
	// 							success: !error ? true : false,
	// 							error,
	// 							newProducto
	// 						})
	// 					}
	// 				})
	// 			}
				
	// 		})
	// 		.catch(error =>{
				
				
	// 			res.json({ success: false, error })})


	},
}

module.exports = productController