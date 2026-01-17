import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.json({message: 'users'})
})

router.get('/:id', (req, res) => {
    res.json({message: 'got user'})
})

router.put('/', (req, res) => {
    res.json({message: 'user updated'})
})

router.delete('/:id', (req, res) => {
    res.json({message: `user deleted ${req.params.id}`})
})

export default router