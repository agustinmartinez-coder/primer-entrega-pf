import { Router } from "express";
import { CartManager } from "../dao/fileSystem/models/cartManager.js"
const cartRouter = Router()

const cartManager = new CartManager()


cartRouter.post("/", async (req, res) => {
    const validate = await cartManager.createCart();

    if (validate) {
    res.status(200).send("Carrito creado con éxito");
    } else {
    res.status(400).send("Error al crear carrito");
    }
});


cartRouter.delete("/:cid", async (req, res) => {
    const {cid} = req.params;
    const validate = await cartManager.deleteCart(parseInt(cid));

    if (validate) {
    res.status(200).send(`Carrito eliminado correctamente`);
    } else {
    res.status(400).send(`Error al eliminar el carrito`);
    }
});


cartRouter.get("/:cid", async (req, res) => {
    const cid = req.params.id;
    const cart = await cartManager.getCartById(parseInt(cid));

    if (cart) {
    res.status(200).send(cart);
    } else {
    res
        .status(404)
        .send("El carrito con el id: " + cid + " no se ha encontrado");
  }
});

