import "./header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="container-fluid" style={containerFluid}>
        <div className="row">
          <div className="col-12 head-sections">
            <div className="left-section">
              {/* <div className="logo">
                <img src="/logo.png" alt="Logo" />
              </div> */}
              <div className="title">
                <h1>Todo</h1>
              </div>
            </div>
            <div className="right-section">
              
              <div class="user-box dropdown-toggle">
                <a
                  class=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  username
                </a>
                <ion-icon name="person-circle"></ion-icon>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
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
