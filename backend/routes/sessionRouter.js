import { Router } from 'express';

const router = Router();

router.get("/session/user", (req, res) => {
    if (!req.session.user) return res.status(401).send({ loggedIn: false });
    res.send({ loggedIn: true, user: req.session.user, role: req.session.user.role });
});

router.post("/session/logout", (req, res) => {
    req.session.destroy(() => {
        res.send({ message: "Logged out" });
    });
});

export default router;
