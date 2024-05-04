import React from "react";
import { REGIST_PAGE_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="login__container">
      <div className="row mt-5 mb-5">
        <div className="col-md-3 mx-auto">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              <Link to={REGIST_PAGE_ROUTE}>
                <span>Еще нет аккаунта?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
