import { Router } from "express";
import { ProductManager } from "../dao/mongoDB/controllers/productManager.js";

const prodRouter = Router();
const productManager = new ProductManager();

prodRouter.get("/", async (req, res) => {
  try {
    const { prods, ok, msg, error } = await productManager.getProducts();
    if (prods) {
    res.status(200).json({ prods });
    } else {
    res.status(404).send({ respuesta: "Error", msg, error });
    }
  } catch (error) {
    res.status(500).send({
    respuesta: "Error",
    error,
    });
}
});
