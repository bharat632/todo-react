import "./header.scss";

import pp from "../../assets/img/pp.jpg";

import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";


function Header(props) {
  return (
    <header className="header">
      <div className="container-fluid" style={containerFluid}>
        <div className="row">
          <div className="col-12 head-sections">
            <div className="left-section">
              <div className="title">
                <h1>Todo</h1>
              </div>
            </div>

            <div className="middle-section">
              <ul className="route-list gap-3">
                <li>PENDING</li>
                <li>COMPLETED</li>
                <li>YET TO START</li>
              </ul>
            </div>
            <div className="right-section">
              <div className="add-todo btn btn-success">Add Todo</div>
              <div className="user-box dropdown-toggle no-caret" data-bs-toggle="dropdown" aria-expanded="true">
                <a role="button" className="d-flex align-items-center gap-2">
                  username
                  <div className="image">
                    <img src={pp} alt="profile" className="img" width="40" height="40" />
                  </div>
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <CgProfile size={20} color="grey" className="me-2"/>
                      Profile
                    </a>
                  </li>

                  <li className="text-center">
                    <hr className="custom-divider" />
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      <AiOutlineLogout size={20} color="grey" className="me-2"/>
                      Logout
                      {/* <AiOutlineLogout size={24} color="grey" className="ms-2"/> */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const containerFluid = {
  padding: "0",
  margin: "0",
  width: "100%",
  height: "100%",
};

export default Header;
