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

 <section>
  <div className="bg-stone-100 border border-gray-200 rounded-lg shadow-md shadow-gray-200/50 p-6 m-4 flex flex-col gap-4">
  <div className="space-y-1 text-slate-700">
    <p className="font-semibold text-lg">{name}</p>
    <p className="text-sm">{email}</p>
    <p className="text-sm">{phone}</p>
  </div>

  <div className="flex gap-2">
    <button
      className="flex-1 font-bold bg-rose-500 hover:bg-rose-600 text-white rounded-lg py-2"
      onClick={() => removeContact(email)}
    >
      Delete
    </button>
    <button
      className="flex-1 font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2"
      onClick={() => setIsEditing(true)}
    >
      Edit
    </button>
  </div>

  {isEditing && (
    <form
      action={(formData) => {
        updateContact(formData);
        setIsEditing(false);
      }}
      className="flex flex-col gap-2 mt-4"
    >
      <input type="hidden" name="id" value={id || ""} />
      <input
        type="text"
        name="name"
        defaultValue={name}
        required
        className="p-2 border border-gray-300 rounded text-slate-700"
      />
      <input
        type="email"
        name="email"
        defaultValue={email}
        required
        className="p-2 border border-gray-300 rounded text-slate-700"
      />
      <input
        type="tel"
        name="phone"
        defaultValue={phone}
        required
        className="p-2 border border-gray-300 rounded text-slate-700"
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 font-bold bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-2"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="flex-1 font-bold bg-gray-400 hover:bg-gray-500 text-white rounded-lg py-2"
        >
          Cancel
        </button>
      </div>
    </form>
  )}
</div>

</section>

       
      
       

    )
}