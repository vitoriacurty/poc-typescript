import { listaRepository } from "../repositories/listaRepository";
import { Item } from "protocols";

async function getLista() {
    const itens = await listaRepository.getItem();
    return itens;
}

async function postLista(item: Item) {
    const newItem = await listaRepository.postItem(item);
    return newItem;
}

async function updateLista(id: number, item: Item) {
    const updatedItem = await listaRepository.updateItem(id, item);
    return updatedItem;
}

async function deleteLista(id: number) {
    const deletedItem = await listaRepository.deleteItem(id);
    return deletedItem;
}

export const listaServices = { getLista, postLista, updateLista, deleteLista };

