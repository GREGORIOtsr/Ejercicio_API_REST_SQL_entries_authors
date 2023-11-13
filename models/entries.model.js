const pool = require('../config/db_pgsql');
const queries = require('../queries/entries.queries');

const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllEntries);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

const createEntry = async (entry) => {
    const {title, content, email, category} = entry;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createEntry, [title, content, email, category]);
        result = {message: `Se ha creado la entry '${title}'`};
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}

const updateEntry = async (entry) => {
    let {title, newTitle, content, email, category} = entry;
    if (newTitle == undefined) {newTitle = title};
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.updateEntry, [title, newTitle, content, email, category]);
        result = {message: `Se ha modificado la entry '${title}'`};
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

const deleteEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteEntry, [title]);
        result = {message: `Se ha borrado la entry '${title}'`};
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}

const models = {
    getAllEntries,
    createEntry,
    updateEntry,
    deleteEntry
}

module.exports = models;
