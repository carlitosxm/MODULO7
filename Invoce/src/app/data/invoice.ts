import { Invoice } from "../components/model/Invoice";

export const invoiceData:Invoice= {
    id: "string",
    company: {
        ruc: "ruc",
        name: "name",
        address: {
            city: "city",
            principalStreet: "principalStreet",
            secondaryStreet: "secondaryStreet",
            code: "code",
        },
    },
    customer: {
        id: "id",
        name: "name",
        surname: "surname",
        address: {
            city: "city",
            principalStreet: "principalStreet",
            secondaryStreet: "secondaryStreet",
            code: "code",
        },
    },
    items: [
        {
            id: 100,
            product: {
                id: 1,
                name: "name",
                price: 0.40,
                description: "description",
                category:{
                    id:1,
                    name:"string",
                },
            },
            quanty: 10,
        },
        {
            id: 101,
            product: {
                id: 1,
                name: "name",
                price: 0.80,
                description: "description",
                category:{
                    id:1,
                    name:"string",
                },
            },
            quanty: 14,
        },
        {
            id: 102,
            product: {
                id: 1,
                name: "name",
                price: 0.30,
                description: "description",
                category:{
                    id:1,
                    name:"string",
                },
            },
            quanty: 45,
        },
    ],
}