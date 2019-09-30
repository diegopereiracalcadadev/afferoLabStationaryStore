export class Product {
    public id: number;
    public codBarras: string;
    public name: string;
    public description: string;
    public quantity: number;
    public categoryId: number;

    constructor(codBarras: string, name: string, description: string, quantity: number, id: number){
        this.id = id;
        this.codBarras = codBarras;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}