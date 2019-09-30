export class Product {
    public id: number;
    public codBarras: string;
    public description: string;
    public categoryId: number;

    constructor(codBarras: string, description: string, id: number){
        this.id = id;
        this.codBarras = codBarras;
        this.description = description;
    }
}