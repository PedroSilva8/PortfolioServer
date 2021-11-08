import Error from '@Global/Error'
import rest from '@Global/Rest'
import express from 'express'
import fs from 'fs'
import path from 'path'

const Portfolio = express.Router()

Portfolio.get('/timeline', async(req, res, next) => {
    
    fs.readFile(path.join(__dirname,'./portfolio/timeline.json'), 'utf8', function (err,data) {
        if (err) {
            rest.SendErrorInternalServer(res, "Missing Timeline");
            return;
        }
        rest.SendSuccess(res, Error.SuccessError(data))
      });
})

Portfolio.get('/projects', async(req, res, next) => {
    
    fs.readFile(path.join(__dirname,'./portfolio/projects.json'), 'utf8', function (err,data) {
        if (err) {
            rest.SendErrorInternalServer(res, "Missing Projects File");
            return;
        }
        rest.SendSuccess(res, Error.SuccessError(data))
      });
})

Portfolio.get('/pic/:id', async(req, res, next) => {
    res.sendFile(path.join(__dirname,'./portfolio/' + req.params.id + '.png'))
})

Portfolio.get('/logo', async(req, res, next) => {
    res.sendFile(path.join(__dirname,'./portfolio/Logo.svg'))
})

export default Portfolio;