import { Request, Response } from 'express';
import User from '../models/userModel';

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const createManyUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.insertMany(req.body);
        res.status(201).send(users);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ uid: req.body.uid });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.uid, req.body, {
            new: true,
        });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const updateManyUsers = async (req: Request, res: Response) => {
    try {
        const { filter, update } = req.body;
        const result = await User.updateMany(filter, update, { new: true });
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const partialUpdateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.body.uid,
            { $set: req.body },
            { new: true },
        );
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const partialUpdateManyUsers = async (req: Request, res: Response) => {
    try {
        const { filter, update } = req.body;
        const result = await User.updateMany(
            filter,
            { $set: update },
            { new: true },
        );
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.body.uid);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send({ message: 'User deleted' });
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const deleteManyUsers = async (req: Request, res: Response) => {
    try {
        const { filter } = req.body;
        const result = await User.deleteMany(filter);
        res.status(200).send({
            message: `${result.deletedCount} users deleted`,
        });
    } catch (error) {
        res.status(500).send({ error: error });
    }
};

export const deleteAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await User.deleteMany({});
        res.status(200).send({
            message: `${result.deletedCount} users deleted`,
        });
    } catch (error) {
        res.status(500).send({ error: error });
    }
};
