import { Router } from 'express';

const router = Router();

import { isLoggedIn } from "../middleware/auth.js";

//route til at tjekke om brugeren er logget ind
router.get("/me", isLoggedIn, (req, res) => {
    res.send({ loggedIn: true, user: req.session.user });
});

//route til at tjekke logge brugeren ud / slette sessionen
router.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.send({ message: "Logged out" });
    });
});

export default router;
