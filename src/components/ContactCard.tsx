import type {JSX} from "react"

type ContactCardProps = {
    name: string,
    email: string,
    phone: string
    removeContact: (email: string) => void;
}

export default function ContactCard({name, email, phone, removeContact}: ContactCardProps): JSX.Element {


    return(
        <>
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
        <button onClick={() => removeContact(email)}>Delete</button>
        </>
    )
}