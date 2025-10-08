import type { JSX } from "react"
import { useState } from "react"
import ContactCard from "../components/ContactCard"
import AddContactForm from "../components/AddContactForm"
import {contacts} from "../helper/contacts"
import type { Contact } from "../helper/contacts"







   

export default function ContactsPage(): JSX.Element {

const [contactList, setContactList] = useState<Contact[]>(contacts);

function addContact(formData: FormData) {
  const contact: Contact = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
  };
  setContactList((prev) => [...prev, contact]);
}

function removeContact(email: string) {

}



    return (
        <>
    <AddContactForm addContact={addContact} />
      {contactList.map((contact) => (
        <ContactCard
          key={contact.email}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          removeContact={removeContact}
        />
      ))}
    </>
    )
}