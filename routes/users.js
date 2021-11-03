const express = require('express')
const router = express.Router()

//get all
router.get('/', (req, res)=> {
    res.send("Hello all")
})
//get one
router.get('/:id', (req, res)=> {
    res.send(req.params.id)
})
//create one
router.post('/', (req, res)=> {
    
})
//update one
router.patch('/:id', (req, res) => {

})
//delete one
router.delete('/:id', (req, res) => {

})


module.exports = router