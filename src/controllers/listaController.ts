import { Request, Response } from "express";
import { listaServices } from "../services/listaServices";
import httpStatus from "http-status";
import { Item } from "protocols";

async function getLista(req: Request, res: Response) {
    const lista = await listaServices.getLista();
    res.send(lista);
}

async function postLista(req: Request, res: Response) {
    const item: Item = req.body; 
    const newItem = await listaServices.postLista(item);
    res.status(httpStatus.CREATED).json(newItem);
}

async function updateLista(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const item: Item = req.body;
    const updatedItem = await listaServices.updateLista(id, item);

    if (!updatedItem) {
        return res.status(httpStatus.NOT_FOUND).send("Item não encontrado");
    }

    res.status(httpStatus.OK).json(updatedItem);
}

async function deleteLista(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deletedItem = await listaServices.deleteLista(id);

    if (!deletedItem) {
        return res.status(httpStatus.NOT_FOUND).send("Item não encontrado");
    }

    res.status(httpStatus.OK).json(deletedItem);
}

export const listaController = { getLista, postLista, updateLista, deleteLista };
