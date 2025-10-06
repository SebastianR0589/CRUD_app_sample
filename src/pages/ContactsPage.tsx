import type { JSX } from "react"
import ContactCard from "../components/ContactCard"

export default function ContactsPage(): JSX.Element {
    return (
       <>
       <ContactCard/>
       <ContactCard/>
       <ContactCard/>
       </>
    )
}