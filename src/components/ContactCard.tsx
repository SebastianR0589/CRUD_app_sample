import type {JSX} from "react"
import { useState } from "react"


type ContactCardProps = {
    id: string,
    name: string,
    email: string,
    phone: string
    removeContact: (email: string) => void;
    updateContact: (formData: FormData) => void;

}

export default function ContactCard({id, name, email, phone, removeContact, updateContact}: ContactCardProps): JSX.Element {

    const [isEditing, setIsEditing] = useState<boolean>(false);


    return(
        <>
        <section>
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
        <div> <button onClick={() => removeContact(email)}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit Contact</button></div>
        </section>
        {isEditing && (
            <form
          action={(formData) => {
            updateContact(formData);
            setIsEditing(false);
          }}
        >
        <input type="hidden" name="id" value={id || ""}/>
          <input type="text" name="name" defaultValue={name} required />
          <input type="email" name="email" defaultValue={email} required />
          <input type="tel" name="phone" defaultValue={phone} required />
          <button
            type="submit"
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
        </form>
        )}              
      
       
        </>
    )
}