import React from "react";

const SurveyForm = () => {
  return (
  <div className="bg-white shadow-md rounded-md">
  <div className="font-semibold">
   <p className="px-6 my-3"> Survey Form </p>
    <hr/>
   </div>
      <form className=" px-6 py-4 space-y-4">
      <div className="space-y-3">
      <label className="font-semibold">Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="border border-gray-300 p-2 w-full rounded"
      />
      </div>
      <div className="space-y-3"><label className="font-semibold">Email</label>
      <input
        type="email"
        placeholder="Enter your email address"
        className="border border-gray-300 p-2 w-full rounded"
      /></div>
     <div className="space-y-3">
     <label className="font-semibold">Age</label>
      <input
        type="number"
        placeholder="Enter your age"
        className="border border-gray-300 p-2 w-full rounded"
      />
      <div>
      <label className="font-semibold">Which option best describe you?</label>
      <select className="border border-gray-300 opacity-50 bg-white p-2 w-full rounded">
        <option>Select your subject</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      </div>
     </div>
  
      <div className="space-y-2">
        <p>Would you recommend our site to a friend?</p>
        <div className="flex items-center space-x-4">
          <label>
            <input type="radio" name="recommend" className="mr-2" />
            Yes
          </label>
          <label>
            <input type="radio" name="recommend" className="mr-2" />
            No
          </label>
          <label>
            <input type="radio" name="recommend" className="mr-2" />
            Maybe
          </label>
        </div>
      </div>
      <div className="space-y-2">
        <p>Which language & framework do you know?</p>
        <div className="flex items-center space-x-4">
          <label>
            <input type="radio" name="recommend" className="mr-2" />
            C
          </label>
          <label>
            <input type="radio" name="recommend" className="mr-2" />
            JAVA
          </label>
          <label>
            <input type="radio" name="recommend" className="mr-2" />
            Python
          </label>
          <label>
            <input type="radio" name="recommend" className="mr-2" />
            React.js
          </label>
          <label>
            <input type="radio" name="recommend" className="mr-2" />
            Node.js
          </label>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  </div>
  );
};

export default SurveyForm;
