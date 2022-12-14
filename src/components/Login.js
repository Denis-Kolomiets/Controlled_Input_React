import { useState } from 'react'

function Login() {
  const [data, setData] = useState({ username: '', password: '' })
  function handleFormSubmit(event) {
    event.preventDefault() // что бы реакт не обновлял станицу при логине
    console.log(data)
    // alert(JSON.stringify(data))
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text.target.value })
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            placeholder="input login"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="input password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
