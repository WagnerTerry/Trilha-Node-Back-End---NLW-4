import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {

    // http:localhost:3333/answers/1?u=95303948-0394--93232302
    /*

    Route Params => Parametros que compoe a rota (obrigatorios)
    routes.get("/answers/:value")

    Query Params => Busca, Paginação, não obrigatorio
    ? chave=valor
    */

    async execute(request: Request, response: Response){
        const { value } = request.params
        const { u } = request.query

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        })

        if(!surveyUser){
            throw new AppError("Survey does not exists");
            //Formato de erro sem o throw
            // return response.status(400).json({
            //     error: "Survey does not exists"
            // })
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser)
    }
}

export { AnswerController }