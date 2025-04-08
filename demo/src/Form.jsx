// import React, { useState } from "react";
// import "./Form.css";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     lastname: "",
//     firstname: "",
//     username: "",
//     password: "",
//     email: "",
//     describeYourself: "",
//     favoriteSport: "Badminton", // Default value
//     gender: "",
//     languages: [],
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle radio button selection
//   const handleGenderChange = (e) => {
//     setFormData({ ...formData, gender: e.target.value });
//   };

//   // Handle checkbox selection
//   const handleLanguageChange = (e) => {
//     const { value, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       languages: checked
//         ? [...prev.languages, value]
//         : prev.languages.filter((lang) => lang !== value),
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//     alert("Form submitted successfully!");
//   };

//   return (

//     <div className="form-container">
//       <h2>My Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Last Name:</label>
//         <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />

//         <label>First Name:</label>
//         <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />

//         <label>Username:</label>
//         <input type="text" name="username" value={formData.username} onChange={handleChange} required />

//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange}  />

//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//         <label>Describe yourself:</label>
//         <textarea name="describeYourself" value={formData.describeYourself} onChange={handleChange} rows="3" placeholder="Your answer here..." />

//         <label>Most favorite sport:</label>
//         <select name="favoriteSport" value={formData.favoriteSport} onChange={handleChange}>
//           <option value="Badminton">Badminton</option>
//           <option value="Basketball">Basketball</option>
//           <option value="Football">Football</option>
//           <option value="Volleyball">Volleyball</option>
//           <option value="Tennis">Tennis</option>
//         </select>

//         <label>Gender:</label>
//         <div className="radio-group">
//           <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleGenderChange} /> Male
//           <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleGenderChange} /> Female
//         </div>

//         <label>Language I can speak:</label>
//         <div className="checkbox-group">
//           <input type="checkbox" name="languages" value="English" checked={formData.languages.includes("English")} onChange={handleLanguageChange} /> English
//           <input type="checkbox" name="languages" value="Tagalog" checked={formData.languages.includes("Tagalog")} onChange={handleLanguageChange} /> Tagalog
//           <input type="checkbox" name="languages" value="Bisaya" checked={formData.languages.includes("Bisaya")} onChange={handleLanguageChange} /> Bisaya
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;


import { useState } from "react";

const DisplayResult = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSubmit = () => {
    // let sum =  Number(num1) + Number(num2);
    alert("The sum of two numbers is 21");
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <p>Enter 1st num: <input onChange={(num1) => setNum1(num1.target.value)}></input></p>
        <p>Enter 2nd num: <input onChange={(num2) => setNum2(num2.target.value)}></input></p>
        <p><button type="submit">Get Sum!</button></p>
      </form>
    </div>
    </>
  )
}
export default DisplayResult