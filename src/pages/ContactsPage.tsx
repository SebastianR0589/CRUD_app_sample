import type { JSX } from "react"
import ContactCard from "../components/ContactCard"

type Contact = {
    name: string,
    email: string,
    phone: string
}

const contacts: Contact[] = [
    {
        name: "John Doe",
        email: "johndoe@email.com",
        phone: "123-456-7890"
    },
    {
        name: "Jane Smith",
        email: "janesmith@email.com",
        phone: "987-654-3210"
    },
    {
        name: "Alice Johnson",
        email: "alicejohnson@email.com",
        phone: "555-555-5555"
    }
]

export default function ContactsPage(): JSX.Element {
    return (
        <>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.email}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </>
    )
}