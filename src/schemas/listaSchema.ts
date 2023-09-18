import Joi from "joi"

export const listaSchema = Joi.object({
    item: Joi.string().required(),
    description: Joi.string().required()
})