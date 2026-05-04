import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./conexion.js";

dotenv.config();

const app = express();//llamadas a expres em variables 
app.use(cors());// use de cors 
app.use(express.json());//useo de archivos json



//GET
app.get("/_cliente", async (req, res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM _cliente")
        res.json(rows);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});


//GET POR ID
app.get("/cliente/:id", async (req, res) => {
    try{
        const [rows]= await pool.query(
            "SELECT * FROM _cliente WHERE id=?", [req.params.id]
        )//Verificacion de que existe el cliente
    }catch(err){res.status(500).json({error: err.message})}
})



//POST CREAR CLIENTE
app.post("/cliente", async (req, res)=>{
    try{
        const {id, nombre, email}=req.body;
        await pool.query(
            "INSERT INTO _cliente (id, nombre, email) VALUES (?, ?, ?)", [id, nombre, email]
        );
        res.status(201).json({id, nombre, email});
    }catch(err){
        res.status(500).json({error: err.message});
    }
})



//PUT ACTUALIZAR CLIENTE
app.put("/cliente/:id", async (req, res)=>{
    try{
        const {nombre, email}=req.body;
        await pool.query(
            "UPDATE _cliente SET nombre=?, email=? WHERE id=?", [nombre, email, req.params.id]
        );
        res.json({message: "Cliente actualizado"});
    }catch(err){
        res.status(500).json({error: err.message});
    }
})




//DELETE CLIENTE ELIMINAR
app.delete("/cliente/:id", async(req, res)=>{
    try{
        await pool.query(
            "DELETE FROM _cliente WHERE id=?",[req.params.id]
        )
        res.json({message:"ELIMINADO"});
    }catch (err){
        res.status(500).json({err: err.message})
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server corriendo en el puerto ${process.env.PORT}`);
});