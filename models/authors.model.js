const pool = require('../config/db_pgsql');
const queries = require('../queries/authors.queries');

const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllAuthors);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAuthorByEmail, [email]);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

const createAuthor = async (author) => {
    const {name, surname, email, image} = author;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createAuthor, [name, surname, email, image]);
        result = {message: `Usuario creado: ${email}`};
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}

const updateAuthor = async (data) => {
    let {email, name, surname, newEmail, image} = data;
    if (newEmail == undefined) {newEmail = email};
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.updateAuthor, [email, name, surname, newEmail, image])
        result = {message: `Usuario actualizado: ${email}`};
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteAuthor, [email]);
        result = {message: `Se ha borrado '${email}'`};
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    console.log(result);
    return result;
}

const models = {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

module.exports = models;
