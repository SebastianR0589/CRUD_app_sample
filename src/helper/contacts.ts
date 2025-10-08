export type Contact = {
    id: string,
    name: string,
    email: string,
    phone: string
}

export const contacts: Contact[] = [
    {
        id: "1",
        name: "John Doe",
        email: "johndoe@email.com",
        phone: "123-456-7890"
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "janesmith@email.com",
        phone: "987-654-3210"
    },
    {
        id: "3",
        name: "Alice Johnson",
        email: "alicejohnson@email.com",
        phone: "555-555-5555"
    }
]