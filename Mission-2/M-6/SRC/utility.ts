// Utility types

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
}

type ProductSummaary = Pick<Product, 'id' | 'name' | "price">

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
    id: 222,
    name: "Mouse",
    price: "20",
    stock: 100,
    color: "black"
};

type OptionalProduct = Partial<Product>;

type ProductReadonly = Readonly<Product>;

// const emptyObj : Object = {};
const emptyObj : Record<string, unknown> = {};

const  Product1 = {
     id: 222,
    name: "Mouse",
    price: "20",
}


 