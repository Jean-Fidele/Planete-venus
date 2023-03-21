import { Categorie } from "src/app/categorie/models/Categorie";

export interface Produit {
    code: number;
    name: string;
    categorie: Categorie;
}