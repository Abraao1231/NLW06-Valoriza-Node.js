import {Router} from "express"
import {CreateUserController} from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserCOntroller";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendcomplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceivecomplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListAllUsersController } from "./controllers/ListAllUsersController";

const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendcomplimentsController(); 
const listUserReceivecomplimentsController = new ListUserReceivecomplimentsController();
const listTagsController = new ListTagsController();
const listAllUsersController = new ListAllUsersController();


router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated,ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliment", ensureAuthenticated, complimentController.handle)


router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceivecomplimentsController.handle);
router.get("/tags",ensureAuthenticated,listTagsController.handle);
router.get("/users", ensureAuthenticated, listAllUsersController.handle)


export {router};