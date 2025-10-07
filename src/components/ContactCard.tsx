import type {JSX} from "react"

type ContactCardProps = {
    name: string,
    email: string,
    phone: string
}

export default function ContactCard({name, email, phone}: ContactCardProps): JSX.Element {
    return(
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}