import type { JSX } from "react"; 

type AddContactFormProps = {
   addContact: (formData: FormData) => void;
}

export default function AddContactForm({ addContact }: AddContactFormProps): JSX.Element {
    return (
        <form action={addContact}>
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <input type="tel" placeholder="Phone" name="phone" required />
            <button type="submit">Add Contact</button>
        </form>
    );
}   
