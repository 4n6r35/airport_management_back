import { Request, Response } from "express";
import { RegistreInputDTO } from "../Dto/Registre.dto";
import { fireStore } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export const saveRegistre = async (req: Request, res: Response) => {
    try {
        const body: RegistreInputDTO = req.body;
        const { ...data } = body;

        const collectionFirestore = collection(fireStore, "Registre")
        await addDoc(collectionFirestore, { ...data});

        res.status(200).json({
            message: 'Regsitro exitoso'
        })

    } catch (error) {
        res.status(500).json({
            error: 'Ups, ha ocurrido un error en el registro'
        })
        // console.log(error)
    }
}