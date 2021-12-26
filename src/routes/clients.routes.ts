import { Router } from "express";
import { createClientController } from "../controllers"

const clientRoutes = Router();

clientRoutes.get("/", (request, response) => {
    return response.send("Hello from express");
});

clientRoutes.post("/", createClientController.handle)



export { clientRoutes }