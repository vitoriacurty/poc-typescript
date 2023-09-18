import { Item } from "protocols";
import { db } from "../database/database.connection";

async function getItem() {
    const result = await db.query<Item>(`SELECT * FROM itens`);
    return result.rows;
}

async function postItem(item: Item) {
    const result = await db.query<Item>(`
        INSERT INTO itens (item, descrição)
        VALUES ($1, $2)
        RETURNING *;
    `, [item.item, item.descrição]);
    
    return result.rows[0];
}

async function updateItem(id: number, item: Item) {
    const result = await db.query<Item>(`
        UPDATE itens
        SET item = $1, descrição = $2
        WHERE id = $3
        RETURNING *;
    `, [item.item, item.descrição, id]);

    return result.rows[0];
}

async function deleteItem(id: number) {
    const result = await db.query<Item>(`
        DELETE FROM itens
        WHERE id = $1
        RETURNING *;
    `, [id]);

    return result.rows[0];
}

export const listaRepository = { getItem, postItem, updateItem, deleteItem };
