import React from "react";

const Users = [
  {
    id: 1,
    selected: false,
    name: "Hari",
    username:"pokhrelhari1",
    email: "pokhrelhari1@gmail.com",
    phone: "1234567890",
    website: "hello.com.np",
    address:"Bhaktapur"
  },
  {
    id: 2,
    selected: false,
    name: "Hari",
    username:"pokhrelhari1",
    email: "pokhrelhari1@gmail.com",
    phone: "1234567890",
    website: "hello.com.np",
    address:"Bhaktapur"
  },
  {
    id: 3,
    selected: false,
    name: "Hari",
    username:"pokhrelhari1",
    email: "pokhrelhari1@gmail.com",
    phone: "1234567890",
    website: "hello.com.np",
    address:"Bhaktapur"
  },
  {
    id: 4,
    selected: false,
    name: "Hari",
    username:"pokhrelhari1",
    email: "pokhrelhari1@gmail.com",
    phone: "1234567890",
    website: "hello.com.np",
    address:"Bhaktapur"
  },
  {
    id: 5,
    selected: false,
    name: "Hari",
    username:"pokhrelhari1",
    email: "pokhrelhari1@gmail.com",
    phone: "1234567890",
    website: "hello.com.np",
    address:"Bhaktapur"
  },
];

class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedList: [],
    };
  }
  onMasterCheck(e) {
    let tempList = this.state.List;
 

    tempList.map((user) => (user.selected = e.target.checked));

    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

  
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
             <thead className="tablehead">
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Website</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
             
              <tbody>
                {this.state.List.map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectTableComponent;