import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { db } from "../db/db.js";

const router = Router();

router.post('/signup', async (req, res) => {
    const { fullname, username, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 14);

    try {
        await db.run(
            'INSERT INTO users (fullname, username, email, password) VALUES (?, ?, ?, ?)',
            fullname, username, email, hashed
        );

        res.send({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await db.get('SELECT * FROM users WHERE username = ?', username);

    if (!user) return res.status(401).send({ message: 'Invalid username' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).send({ message: 'Invalid password' });

    req.session.user = { id: user.id, username: user.username, role: user.role };
    res.send({ message: 'Logged in successfully', user: req.session.user });
});

export default router;
