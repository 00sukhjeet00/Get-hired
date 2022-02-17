import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function Login() {
  return (
    <main className="main text-center">
      <form className='form-signin' style={{width:"40%"}}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted"><Link to="/register">Already have account ?</Link></p>
      </form>
    </main>
  )
}
