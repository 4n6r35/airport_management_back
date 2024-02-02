import { DocumentSnapshot } from "firebase/firestore";
import { IRegistre } from "../interfaces";

export class RegistreModel implements IRegistre {
    id: string;
    company: string;
    code: string;
    models: [];

    constructor(data: IRegistre) {
        this.id = data.id;
        this.company = data.company;
        this.code = data.code;
        this.models = data.models;
    }

    toString() {
        return (
            this.id +
            ", " +
            this.company +
            ", " +
            this.code +
            ", " +
            JSON.stringify(this.models)
        );
    }
}

export const modelRegistre = {
    toFirestore: (registreModel: RegistreModel): Record<string, any> => {
        return {
            id: registreModel.id,
            company: registreModel.company,
            code: registreModel.code,
            models: registreModel.models
        };
    },

    fromFirestore: (snapshot: DocumentSnapshot, options: any): RegistreModel | null => {
        const data = snapshot.data(options);
        if (data) {
            return new RegistreModel({
                id: snapshot.id,
                company: data.company,
                code: data.code,
                models: data.models
            });
        }
        
        return null;
    }
};
