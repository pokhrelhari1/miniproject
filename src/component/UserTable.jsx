import { useEffect, useState }  from 'react'
import DataTable from 'react-data-table-component'
import userdetails from '../users';

const UserTable = () => {

    const[users, setUsers] = useState([]);

const getUsers= async()=>{
  try{
    //for api
    // const response = await axios.get("")
    setUsers(userdetails)
  }catch(error){
    console.log(error);
  }
};

const columns = [{
  name : "Name",
  selector:row =>row.name,
},
{
  name : "Username",
  selector:row =>row.username,
  
},
{
  name : "Email",
  selector:row =>row.email,
},
{
    name : "Phone",
    selector:row =>row.phone,
  },
  {
    name : "Website",
    selector:row =>row.website,
  },
{
  name : "Address",
selector:row => row.address
},

]

useEffect(()=>{getUsers()},[])

  return (
    <DataTable columns={columns} data={users} pagination selectableRows 
    actions={
        <>
 <nav class="navbar navbar-light bg-light justify-content-between">
   <form class="form-inline">
   <i class="bi bi-search"></i> &nbsp;
    <button class="btn btn-info my-2 my-sm-0" type="submit">+ New User</button>
  </form>
</nav>
        </>
        
    }/>
  )
}

export default UserTable