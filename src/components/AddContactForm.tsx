import type { JSX } from "react"; 
import { useState } from "react";

type AddContactFormProps = {
   addContact: (formData: FormData) => void;
}

export default function AddContactForm({ addContact }: AddContactFormProps): JSX.Element {
 const [isOpen, setIsOpen] = useState(false);
    
   return (
    <div className="max-w-md mx-auto my-4">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-sky-300 hover:bg-sky-400 font-bold text-lg p-3 rounded-lg border border-sky-400"
      >
        {isOpen ? "Close Form" : "Add Contact"}
      </button>


      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <form
        className="bg-sky-50 border border-sky-200 rounded-lg shadow-md p-6 m-4 flex flex-col gap-4"

         action={(formData) => {
    addContact(formData);
    setIsOpen(false);    
  }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sky-300 text-slate-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sky-300 text-slate-700"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sky-300 text-slate-700"
          />
          <button
            type="submit"
            className="font-bold bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg"

          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
}