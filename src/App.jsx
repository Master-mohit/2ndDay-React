import React, { useState } from 'react'

const App = () => {
  const [username, setusername]=useState("")
  const [gender, setgender] = useState("")
  const [city, setcity] = useState("mumbai")
  const [text. settext] = useState("")
  const handler = (event)
  return (
    <div>
      <form >
        <input onChange={(e) =>setusername(e.target.value)} value={username} type="text"placeholder='username' /> <br />
        <input type="password" placeholder='password' /> <br />
        <input type="email" placeholder='email' /> <br />
        <input onChange={(e)=>setgender(e.target.value)}
        value= "male"
        checked = {gender === "male" ? true: false}
         type="radio" /> male <br />
        <input type="radio" /> female <br />
        <input type="search" /> <br />
        <input type="checkbox" /> <br />
        <select defaultValue={city}
        onChange={(e)=>setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <textarea onChange={(e)=>settext(e.target.value)}
        value={text}>
          placeholder = "text...."
        </textarea>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App


//two way binding ...
