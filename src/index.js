const express = require('express');
const app = express();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const errorHandler = require('./errorHandler')

app.use(express.json());

app.route('/user')
    .get( async (req, res, next) => { 
        try{
            const userList = await prisma.user.findMany({})
            
            res.send(userList)
        } 
        catch(error) { next(error) } 
    })
    .post( async (req, res, next) => { 
        try{
            const reqData = {
                name: req.body.name,
                email: req.body.email,
                userName: req.body.userName
            }

            await prisma.user.create({ data: reqData })

            res.sendStatus(200);
        } 
        catch(error) { next(error) } 
    })

app.route('/user/:id')
    .get( async (req, res, next) => { 
        try{
            const paramsId = parseInt(req.params.id);
            
            const user = await prisma.user.findUnique({where: {id: paramsId}})

            if(user) res.send(user)
            else res.sendStatus(404) 
        } 
        catch(error) { next(error) } 
    })
    .patch( async (req, res, next) => { 
        try{
            const paramsId = parseInt(req.params.id);

            const existUser = await prisma.user.count({where: {id: paramsId}}) == 1

            if(existUser == false) throw new Error("Cannot update invalid user")

            const reqData = {
                name: req.body.name,
                email: req.body.email,
                userName: req.body.userName
            }
            
            await prisma.user.update({
                where: {id: paramsId},
                data: reqData
            })

            res.sendStatus(200)
        } 
        catch(error) { next(error) } 
    })
    .delete( async (req, res, next) => { 
        try{
            const paramsId = parseInt(req.params.id);

            const existUser = await prisma.user.count({where: {id: paramsId}}) == 1

            if(existUser == false) throw new Error("Cannot delete invalid user")

            await prisma.user.delete({where: {id: paramsId}})

            res.sendStatus(200)
        } 
        catch(error) { next(error) } 
    })

app.use(errorHandler)

app.listen(3000, () => console.info('Server running on port 3000') )