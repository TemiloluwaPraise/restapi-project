const express = require('express')
const router = express.Router()
const user = require('../model/user')

//getting all
router.get('/', async (req, res) =>  {
   try {
    const user = await user.find()
    res.json(user)
   } catch (err) {
    res.status(5000).json({message:err.message})
   }
})

// getting one
router.get('/:id', getUser, (req, res) => {
    res.json(res.user.name)
})
// creating one
router.post('/', async (req, res) => {
const user = new User({
    name: req.body.name,
    user: req.body.user
})
try {
    const newUser = await User.save()
    res.status(201).json(newUser)
} catch (err) {
    res.status(400).json({message: err.message})
}
})


// deleting one
router.delete('/:id', getuser, async (req, res) => {
    try {
      await res.user.remove()
      res.json({ message: 'Deleted user' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })


async function getUser(req, res, next) {
    let subscriber
    try {
      user = await user.findById(req.params.id)
      if (subscriber == null) {
        return res.status(404).json({ message: 'Cannot find user' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.user = user
    next()
  }


module.exports = router