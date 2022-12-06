import { Request, Response } from 'express'
import User from '../models/user'

export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await User.findAll();

        res.json({
            ok: true,
            users
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        })
    }
}


export const getUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ ok: true, msg: `It doenst exist an user with ${id}` })
        }
        res.json({ ok: true, user })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        })
    }
}

export const postUser = async (req: Request, res: Response) => {

    try {
        const { body } = req;

        const existUser = await User.findOne({
            where: {
                email: body.email
            }
        })


        if (existUser) {
            return res.status(400).json({
                ok: false,
                message: 'There is already an user with that email'
            })
        }

        const newUser = await User.create(body)

        res.json({
            ok: true,
            newUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const { body } = req;

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: `it doesnt exist an user with ${id}`
            })
        }


        let { email, ...data } = body
        await user.update(data)

        res.json({
            ok: true,
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: `it doesnt exist an user with ${id}`
            })
        }

        await user.destroy();

        res.json({
            ok: true,
            message: 'User deleted'
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            message: 'Unexpected error'
        })
    }
}