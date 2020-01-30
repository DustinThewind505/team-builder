import React, { useState } from "react";

const TeamForm = props => {
  //console.log("this is our props", props);
  const [team, setTeam] = useState({
    name: "",
    email: "",
    role: "",
  })

  const handleChanges = event => {
    //console.log(team)
    setTeam({
      ...team,
      [event.target.name]: event.target.value
    })
  }

  const submitForm = event => {
    event.preventDefault()
    props.addTeam(team);
    setTeam({ name: "", email: "", role: "", })}


  return (
    <form onSubmit={submitForm}>
      <label>Name:
          <input type="text" name="name" id="name" placeholder="Name" onChange={handleChanges} />
      </label>
      <label>Email:
          <input type="text" name="email" id="email" placeholder="email" onChange={handleChanges} />
      </label>
      <label>Role:
          <input type="text" name="role" id="role" placeholder="role" onChange={handleChanges} />
      </label>
      <button type="submit">Sum-bit</button>
    </form>
  )
};

export default TeamForm;