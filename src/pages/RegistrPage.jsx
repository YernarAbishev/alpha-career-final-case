import React from "react";
import { Link } from "react-router-dom";
import { REGIST_COMPANY_PAGE_ROUTE } from "../utils/consts";

export default function RegistrPage() {
  return (
    <div className="regist__container">
      <div class="row mt-5 mb-5">
        <div class="col-md-3 mx-auto">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label htmlFor="fullName" class="form-label">
                    First Name
                  </label>
                  <input type="text" class="form-control" id="fullName" />
                </div>
                <div class="mb-3">
                  <label htmlFor="fullName" class="form-label">
                    Last Name
                  </label>
                  <input type="text" class="form-control" id="fullName" />
                </div>
                <div class="mb-3">
                  <label htmlFor="registerEmail" class="form-label">
                    Email address
                  </label>
                  <input type="email" class="form-control" id="registerEmail" />
                </div>
                <div class="mb-3">
                  <label htmlFor="registerPassword" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="registerPassword"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Register
                </button>
              </form>
              <Link to={REGIST_COMPANY_PAGE_ROUTE}>
                <span>Зарегестрироваться как компания</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
