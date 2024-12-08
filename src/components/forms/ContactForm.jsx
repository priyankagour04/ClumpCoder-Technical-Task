import React from "react";

const ContactForm = () => {
  return (

   <div className= "bg-white shadow-md rounded-md ">
   <div className="font-semibold">
   <p className="px-6 my-3"> Contact Form 2</p>
    <hr/>
   </div>
     <form className="px-6 py-4 space-y-4">
      <div className="flex grid-cols-2 gap-4 ">
        <div className="space-y-3">
          <label className="font-semibold">First name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="space-y-3">
          <label className="font-semibold">Last name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="font-semibold"> Email</label>
          <input
            type="email"
            placeholder="yourmail@gmail.com"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="space-y-3">
          <label className="font-semibold">Phone</label>
          <input
            type="tel"
            placeholder="(321) 5556-0115"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
      </div>

      <div className="space-y-3">
  <p>Select option:</p>
  <div className="grid grid-cols-1 sm:grid-cols-3">
    <div>
      <label className="flex items-center">
        <input type="radio" name="option" className="mr-2" />
        Graphics Design
      </label>
    </div>
    <div>
      <label className="flex items-center">
        <input type="radio" name="option" className="mr-2" />
        Web Development
      </label>
    </div>
    <div>
      <label className="flex items-center">
        <input type="radio" name="option" className="mr-2" />
        Logo Design
      </label>
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    <div>
      <label className="flex items-center">
        <input type="radio" name="option" className="mr-2" />
        Others
      </label>
    </div>
  </div>
</div>

      <textarea
        placeholder="Type your message"
        className="border border-gray-300 p-2 w-full h-44 rounded"
        rows="4"
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 w-full
       rounded hover:bg-blue-600">
        Send Message
      </button>
    </form>
   </div>
  );
};

export default ContactForm;
