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
    id: crypto.randomUUID(),
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
  };
  setContactList((prev) => [...prev, contact]);
}

function removeContact(email: string) {
  const updatedContacts = contactList.filter((contact) => contact.email !== email);
  setContactList(updatedContacts);
}

function updateContact(formData: FormData) {
  const id = (formData.get("id") as string | null)?.trim();
  if (!id) return; 

  const updatedContact: Contact = {
    id: (formData.get("id") as  string).trim(),
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
  };

  setContactList((prev) =>
    prev.map((contact) =>
     contact.id.toString().trim() === updatedContact.id ? updatedContact : contact
    )
  );
}


    return (
        <>
    <AddContactForm addContact={addContact} />
    <div className="flex flex-wrap justify-center">
      {contactList.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          removeContact={removeContact}
          updateContact={updateContact}
        />
      ))}
      </div>
    </>
    )
}