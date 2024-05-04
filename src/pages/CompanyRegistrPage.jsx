import React from "react";

export default function CompanyRegistrPage() {
  return (
    <div className="company-register__container">
      <div className="row mt-5 mb-5">
        <div className="col-md-3 mx-auto">
          <div className="card">
            <div className="card-header">Company Registration</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="companyEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="companyEmail"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="companyPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="companyPassword"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Register Company
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
