import React, { useState } from "react";

const TeamForm = ({ addTeamMember }) => {
  const [TeamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setTeamMember({ ...TeamMember, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    addTeamMember(TeamMember);
    setTeamMember({ name: "", email: "", role: "" });
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChanges}
        value={TeamMember.name}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChanges}
        value={TeamMember.email}
      />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        type="text"
        name="role"
        placeholder="Enter role"
        onChange={handleChanges}
        value={TeamMember.role}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};
export default TeamForm;
