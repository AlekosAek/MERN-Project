import express from "express"

import { createProduct,getProducts, updateProduct,deleteProduct } from "../controllers/product.controller.js";

const router =express.Router();

router.get("/",getProducts)
// Define the /api/products POST route
router.post('/',createProduct);

router.put('/:id',updateProduct)

// Define the /api/products/:id DELETE route
router.delete('/:id',);

export default router;