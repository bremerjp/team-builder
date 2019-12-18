import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Team from "./components/Team";

import "./App.css";

function App() {
  const [teamData, setTeamData] = useState([
    {
      name: "Jacob Bremer",
      email: "Jacob@gmail.com",
      role: "Full Stack Developer"
    },
    {
      name: "Nicholas Sandomeno",
      email: "Nicholas@gmail.com",
      role: "Full Stack Developer"
    },
    {
      name: "Michael Phelps",
      email: "Michael@gmail.com",
      role: "Full Stack Developer"
    },
    {
      name: "Igor Atakhanov",
      email: "Igor@gmail.com",
      role: "Full Stack Developer"
    },
    {
      name: "Gerard Crockenberg II",
      email: "Gerard@gmail.com",
      role: "Full Stack Developer"
    },
    {
      name: "Hudson Chamberlain",
      email: "Hudson@gmail.com",
      role: "Full Stack Developer"
    }

  ]);

  const addTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    const newMembers = [...teamData, newTeamMember];
    setTeamData(newMembers);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addTeamMember={addTeamMember} />
      <Team team={teamData} />
    </div>
  );
}

export default App;
