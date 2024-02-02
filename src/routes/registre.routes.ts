import { Router } from "express";
import { saveRegistre } from "../controller";

export const registreRoutes = Router()
registreRoutes.post('/save-registre', saveRegistre)
