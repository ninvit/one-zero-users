import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const createUserController = new CreateUserController()

const router = Router();

router.post("/users", createUserController.handle);

export { router }