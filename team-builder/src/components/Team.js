import React from "react";

const Team = props => {
  return (
    <div className="team">
      {props.team.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};
export default Team;
