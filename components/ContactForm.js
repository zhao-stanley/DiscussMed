import { useState } from 'react'
import submitForm from '../lib/utils/submitForm'

const initialValues = {
  fname: '',
  lname: '',
  subject: '',
  emailBody: '',
}

export const ContactForm = () => {
  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="fname" className="text-black dark:text-gray-200">
          First Name
        </label>
        <input
          className="rounded-lg px-2 py-1 text-black"
          type="text"
          value={values.fname}
          onChange={handleInputChange}
          placeholder="John"
          id="fname"
          name="fname"
        />
        <label htmlFor="lname" className="text-black dark:text-gray-200">
          Last Name
        </label>
        <input
          className="rounded-lg px-2 py-1 text-black"
          type="text"
          value={values.lname}
          onChange={handleInputChange}
          placeholder="Doe"
          id="lname"
          name="lname"
        />
        <label htmlFor="subject" className="text-black dark:text-gray-200">
          Subject
        </label>
        <input
          className="rounded-lg px-2 py-1 text-black"
          type="text"
          value={values.subject}
          onChange={handleInputChange}
          placeholder="Partnership"
          id="subject"
          name="subject"
        />
        <label htmlFor="emailBody" className="text-black dark:text-gray-200">
          Question/Concern
        </label>
        <textarea
          className="max-h-[400px] min-h-[200px] rounded-lg px-2 text-black"
          type="text"
          value={values.emailBody}
          onChange={handleInputChange}
          id="emailBody"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          name="emailBody"
          rows="6"
          cols="50"
        />
        <button
          className="w-min select-none whitespace-nowrap rounded-xl bg-gradient-to-tr from-[#1e7a9f] to-[#26c784] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[5s] ease-linear hover:hue-rotate-15 active:scale-95"
          onClick={() => {
            submitForm(values)
          }}
        >
          Submit
        </button>
      </div>
    </>
  )
}
