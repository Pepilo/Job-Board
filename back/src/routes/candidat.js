import express from "express";
import { createCandidat, getAllCandidat, updateCandidat, deleteCandidat } from "./../controlers/candidat.js";
import { authenticateToken } from "./../middlewares/jsonwebtoken.js";
import { verifEmail } from "../middlewares/verifEmail.js";

const router = express.Router();

router.post('/', verifEmail, createCandidat);
router.get('/', getAllCandidat);
router.put('/:id', authenticateToken(['candidat']), updateCandidat);
router.delete('/:id', authenticateToken(['candidat', 'admin']), deleteCandidat);

export default router;