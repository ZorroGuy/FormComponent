// import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const fields = [
    { name: "firstname", label: "First name", type: "text" },
    { name: "lastname", label: "Last name", type: "text" },
    { name: "email", label: "E-mail", type: "email" },
    { name: "city", label: "City", type: "text" },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "others", label: "Others" },
      ],
    },
    {
      name: "material",
      label: "Material",
      type: "select",
      options: [
        { value: "unmarried", label: "Unmarried" },
        { value: "married", label: "Married" },
      ],
    },
  ];

  ///static values given to the dynamic form..........
  const initialFormValues = {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    city: "New York",
    gender: "male",
    material: "married",
  };

  const handleSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="App">
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        initialFormValues={initialFormValues}
      />
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Form from "./components/Form";
// import "./index.css";

// export default function App() {
//   const [submittedFormData, setsubmittedFormData] = useState([]);

//   const value = [
//     {
//       firstname: "Firstname",
//       lastname: "lastname",
//       email: "email",
//       city: "city",
//       gender: "gender",
//       material: "Material",
//     },
//   ];

//   console.log(value);

//   const handleFormSubmit = (formdata) => {
//     setsubmittedFormData(formdata);
//     console.log(formdata);
//   };

//   return (
//     <>
//       <p>
//         orem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ipsum passages, and more recently
//         with desktop publishing software like Aldus PageMaker including versions
//         of Lorem Ipsum.
//       </p>

//       {/* //////////////////// child component*/}
//       <Form value={value} onSubmit={handleFormSubmit} />

//       <div>
//         <h1>SUBMITTED FORM DATA </h1>
//         <p> FIRST NAME :{submittedFormData.firstname}</p>
//         <p> LAST NAME :{submittedFormData.lastname}</p>
//         <p> EMAIL :{submittedFormData.email}</p>
//         <p> CITY:{submittedFormData.city}</p>
//         <p> GENDER :{submittedFormData.gender}</p>
//         <p> MATERIAL :{submittedFormData.material}</p>
//       </div>
//     </>
//   );
// }
