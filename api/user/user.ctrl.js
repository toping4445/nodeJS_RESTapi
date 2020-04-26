let users = [
    {id : 1, name:'Alice'},
    {id : 2, name:'Bek'},
    {id : 3, name:'Chris'}
]


const index = (req, res) => {
    req.query.limit = req.query.limit || 10
    const limit = parseInt(req.query.limit, 10)

    if(Number.isNaN(limit)){
        res.status(400).end()
    } else {
        res.json(users.slice(0,limit))
    }
}

const show = (req,res)=>{
    //id값을 얻어낸다
    const id = parseInt(req.params.id,10)
    if(Number.isNaN(id)){
        res.status(400).end()
        return  
    }


    const user = users.filter(user => user.id === id)[0]
    if(!user){
        res.status(404).end()
        return
    }
    res.json(user)

}

const destroy = (req,res)=>{
    //id값을 얻어낸다
    const id = parseInt(req.params.id,10)
    if(Number.isNaN(id)){
        res.status(400).end()
        return  
    }

    users = users.filter(user => user.id !== id)
    res.status(204).end()

}

const create = (req,res)=>{

    const name = req.body.name
    if(!name){
        res.status(400).end()
        return 
    }

    const found = users.filter(user => user.name === name).length
    if(found){
        res.status(409).end() 
        return 
    }

    const id = Date.now()
    const user = {id,name}
    users.push(user)
    res.status(201).json(user)


}

module.exports = {
    index,
    show,
    destroy,
    create,

}