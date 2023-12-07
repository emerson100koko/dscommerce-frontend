import { categorieDTO } from "./categorie";

export type ProductDTO = {
    id: number;
    name: string;
    description: string
    price: number;
    imgUrl: string;
    categories: categorieDTO[];
}

