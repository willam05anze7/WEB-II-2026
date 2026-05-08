
// //-------trabajo realizado con SQL SERVER-------

// const express = require('express');
// const cors    = require('cors');
// const { pool, poolConnect, sql } = require('./conexion');
// require('dotenv').config();

// const app  = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // =================== CLIENTES ===================

// app.get('/clientes', async (req, res) => {
//     try {
//         await poolConnect;
//         const result = await pool.request().query('SELECT * FROM clientes');
//         res.json(result.recordset);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.get('/clientes/:id', async (req, res) => {
//     try {
//         await poolConnect;
//         const result = await pool.request()
//             .input('id', sql.NVarChar, req.params.id)
//             .query('SELECT * FROM clientes WHERE id = @id');
//         if (result.recordset.length === 0) return res.status(404).json({ error: 'cliente no encontrado' });
//         res.json(result.recordset[0]);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.post('/clientes', async (req, res) => {
//     try {
//         await poolConnect;
//         const { nombre, email } = req.body;
//         const id = require('crypto').randomUUID();
//         await pool.request()
//             .input('id',     sql.NVarChar, id)
//             .input('nombre', sql.NVarChar, nombre)
//             .input('email',  sql.NVarChar, email)
//             .query('INSERT INTO clientes (id, nombre, email) VALUES (@id, @nombre, @email)');
//         res.status(201).json({ message: 'cliente creado', id });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.put('/clientes/:id', async (req, res) => {
//     try {
//         await poolConnect;
//         const { nombre, email } = req.body;
//         await pool.request()
//             .input('id',     sql.NVarChar, req.params.id)
//             .input('nombre', sql.NVarChar, nombre)
//             .input('email',  sql.NVarChar, email)
//             .query('UPDATE clientes SET nombre=@nombre, email=@email WHERE id=@id');
//         res.json({ message: 'cliente actualizado' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.delete('/clientes/:id', async (req, res) => {
//     try {
//         await poolConnect;
//         await pool.request()
//             .input('id', sql.NVarChar, req.params.id)
//             .query('DELETE FROM clientes WHERE id=@id');
//         res.json({ message: 'cliente eliminado' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // =================== PRODUCTOS ===================

// app.get('/productos', async (req, res) => {
//     try {
//         await poolConnect;
//         const result = await pool.request().query('SELECT * FROM productos');
//         res.json(result.recordset);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.get('/productos/:id', async (req, res) => {
//     try {
//         await poolConnect;
//         const result = await pool.request()
//             .input('id', sql.NVarChar, req.params.id)
//             .query('SELECT * FROM productos WHERE id = @id');
//         if (result.recordset.length === 0) return res.status(404).json({ error: 'producto no encontrado' });
//         res.json(result.recordset[0]);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.post('/productos', async (req, res) => {
//     try {
//         await poolConnect;
//         const { nombre, precio, descripcion } = req.body;
//         const id = require('crypto').randomUUID();
//         await pool.request()
//             .input('id',          sql.NVarChar,      id)
//             .input('nombre',      sql.NVarChar,      nombre)
//             .input('precio',      sql.Decimal(10,2), precio)
//             .input('descripcion', sql.NVarChar,      descripcion)
//             .query('INSERT INTO productos (id, nombre, precio, descripcion) VALUES (@id, @nombre, @precio, @descripcion)');
//         res.status(201).json({ message: 'producto creado', id });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.put('/productos/:id', async (req, res) => {
//     try {
//         await poolConnect;
//         const { nombre, precio, descripcion } = req.body;
//         await pool.request()
//             .input('id',          sql.NVarChar,      req.params.id)
//             .input('nombre',      sql.NVarChar,      nombre)
//             .input('precio',      sql.Decimal(10,2), precio)
//             .input('descripcion', sql.NVarChar,      descripcion)
//             .query('UPDATE productos SET nombre=@nombre, precio=@precio, descripcion=@descripcion WHERE id=@id');
//         res.json({ message: 'producto actualizado' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.delete('/productos/:id', async (req, res) => {
//     try {
//         await poolConnect;
//         await pool.request()
//             .input('id', sql.NVarChar, req.params.id)
//             .query('DELETE FROM productos WHERE id=@id');
//         res.json({ message: 'producto eliminado' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // =================== PETS ===================

// app.get('/pets', async (req, res) => {
//     try {
//         await poolConnect;
//         const result = await pool.request().query('SELECT * FROM pets');
//         res.json(result.recordset);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.get('/pets/:id', async (req, res) => {
//     try {
//         await poolConnect;
//         const result = await pool.request()
//             .input('id', sql.NVarChar, req.params.id)
//             .query('SELECT * FROM pets WHERE id = @id');
//         if (result.recordset.length === 0) return res.status(404).json({ error: 'mascota no encontrada' });
//         res.json(result.recordset[0]);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.post('/pets', async (req, res) => {
//     try {
//         await poolConnect;
//         const { nombre, edad, raza, peso, idDueno } = req.body;
//         const id = require('crypto').randomUUID();
//         await pool.request()
//             .input('id',      sql.NVarChar,     id)
//             .input('nombre',  sql.NVarChar,     nombre)
//             .input('edad',    sql.Int,           edad)
//             .input('raza',    sql.NVarChar,     raza)
//             .input('peso',    sql.Decimal(5,2), peso)
//             .input('idDueno', sql.NVarChar,     idDueno)
//             .query('INSERT INTO pets (id, nombre, edad, raza, peso, idDueno) VALUES (@id, @nombre, @edad, @raza, @peso, @idDueno)');
//         res.status(201).json({ message: 'mascota creada', id });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.put('/pets/:id', async (req, res) => {
//     try {
//         await poolConnect;
//         const { nombre, edad, raza, peso, idDueno } = req.body;
//         await pool.request()
//             .input('id',      sql.NVarChar,     req.params.id)
//             .input('nombre',  sql.NVarChar,     nombre)
//             .input('edad',    sql.Int,           edad)
//             .input('raza',    sql.NVarChar,     raza)
//             .input('peso',    sql.Decimal(5,2), peso)
//             .input('idDueno', sql.NVarChar,     idDueno)
//             .query('UPDATE pets SET nombre=@nombre, edad=@edad, raza=@raza, peso=@peso, idDueno=@idDueno WHERE id=@id');
//         res.json({ message: 'mascota actualizada' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.delete('/pets/:id', async (req, res) => {
//     try {
//         await poolConnect;
//         await pool.request()
//             .input('id', sql.NVarChar, req.params.id)
//             .query('DELETE FROM pets WHERE id=@id');
//         res.json({ message: 'mascota eliminada' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// app.listen(PORT, () => console.log(`servidor corriendo en http://localhost:${PORT}`));
























//-------------trabajo realizado con Express
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './conexion.js';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// =================== CLIENTES ===================

app.get('/_cliente', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM _cliente');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/_cliente/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM _cliente WHERE ID_cliente=?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/_cliente', async (req, res) => {
    try {
        const { nombre, email } = req.body;
        const id = crypto.randomUUID();
        await pool.query('INSERT INTO _cliente (ID_cliente, Nombre, email) VALUES (?, ?, ?)', [id, nombre, email]);
        res.status(201).json({ message: 'cliente creado', id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/_cliente/:id', async (req, res) => {
    try {
        const { nombre, email } = req.body;
        await pool.query('UPDATE _cliente SET Nombre=?, email=? WHERE ID_cliente=?', [nombre, email, req.params.id]);
        res.json({ message: 'Cliente actualizado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/_cliente/:id', async (req, res) => {
    try {
        await pool.query('DELETE FROM _cliente WHERE ID_cliente=?', [req.params.id]);
        res.json({ message: 'Cliente eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// =================== PRODUCTOS ===================

app.get('/productos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/productos/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos WHERE id=?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Producto no encontrado' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/productos', async (req, res) => {
    try {
        const { nombre, precio, descripcion } = req.body;
        const id = crypto.randomUUID();
        await pool.query('INSERT INTO productos (id, nombre, precio, descripcion) VALUES (?, ?, ?, ?)', [id, nombre, precio, descripcion]);
        res.status(201).json({ message: 'producto creado', id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/productos/:id', async (req, res) => {
    try {
        const { nombre, precio, descripcion } = req.body;
        await pool.query('UPDATE productos SET nombre=?, precio=?, descripcion=? WHERE id=?', [nombre, precio, descripcion, req.params.id]);
        res.json({ message: 'Producto actualizado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/productos/:id', async (req, res) => {
    try {
        await pool.query('DELETE FROM productos WHERE id=?', [req.params.id]);
        res.json({ message: 'Producto eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// =================== PETS ===================

app.get('/pets', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pets');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/pets/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pets WHERE id=?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Mascota no encontrada' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/pets', async (req, res) => {
    try {
        const { nombre, edad, raza, peso, idDueno } = req.body;
        const id = crypto.randomUUID();
        await pool.query('INSERT INTO pets (id, nombre, edad, raza, peso, idDueno) VALUES (?, ?, ?, ?, ?, ?)', [id, nombre, edad, raza, peso, idDueno]);
        res.status(201).json({ message: 'mascota creada', id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/pets/:id', async (req, res) => {
    try {
        const { nombre, edad, raza, peso, idDueno } = req.body;
        await pool.query('UPDATE pets SET nombre=?, edad=?, raza=?, peso=?, idDueno=? WHERE id=?', [nombre, edad, raza, peso, idDueno, req.params.id]);
        res.json({ message: 'Mascota actualizada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/pets/:id', async (req, res) => {
    try {
        await pool.query('DELETE FROM pets WHERE id=?', [req.params.id]);
        res.json({ message: 'Mascota eliminada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`servidor corriendo en http://localhost:${PORT}`));