import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    // receber token
    const authtoken = request.headers.authorization

    const [,token] = authtoken.split(" ");

    if(!authtoken){
        return response.status(400).end();
    }

    try{
        const {sub} = verify(token,"8511606d285051a76ea7b2d834b44804" ) as IPayload;
        request.user_id = sub;
    }catch(err){
        response.status(401).end();
    }



    return next();
    
    // validar token preenchido


    // validar token válido


    // recuperar informações do user


}