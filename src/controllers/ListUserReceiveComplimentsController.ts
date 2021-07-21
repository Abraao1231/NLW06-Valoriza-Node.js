import { Response, Request } from "express";
import { ListUserReceiveComplimentsService } from "../service/ListUserReceiveComplimentsService";


class ListUserReceivecomplimentsController{

    async handle(request: Request, response: Response){

        const {user_id} = request;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);                

        return response.json(compliments)
    }

}

export {ListUserReceivecomplimentsController};