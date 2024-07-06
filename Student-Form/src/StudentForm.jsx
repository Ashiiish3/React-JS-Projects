import React from "react";

export default function StudentForm() {
  return (
    <div>
      <form>
        <h1>Form</h1>
        <div>
          <label htmlFor="">Full Name:</label>
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div>
            <label htmlFor="">Select:</label>
          <select>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Gender:</label>
          Male <input type="radio" />
          Female <input type="radio" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
