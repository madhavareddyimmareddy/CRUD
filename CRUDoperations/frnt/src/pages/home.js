import React ,{ useState,useEffect  }from 'react'

import { Link } from 'react-router-dom';

import axios from 'axios';

const Home = () => {
    const[users,setUsers] = useState([]);
    const [render,setRender]=useState(false);
    const[input,setinput]= useState(
        {
            name: "",
            email: "",
            age: "",
        }
    );

    const handleSubmit =async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/v1/users",input);
        setRender(true);
        setinput(
            {
                name:"",
                email:"",
                age:"",
            }
        )
    }  

    const handleDelete = async(id) => {
        await axios.delete("http://localhost:8000/api/v1/users/"+id );
        const newUsers=users.filter( (item)=>  {return item._id !==id});
        setUsers(newUsers)
    }
    useEffect(
        ()=>{ const getAllData=async() => {
         const res=await axios.get("http://localhost:8000/api/v1/users")
         setUsers(res.data);
        }
        getAllData();
},[render])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                        <div style={{ backgroundColor: " orange" }}>
                            <h1 className="text-white text-center mt-8">
                                basic create read update delete app using MERN stack
                            </h1>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form  onSubmit={handleSubmit} >
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input name='name'
                                       value={input.name}
                                       onChange={(e)=> setinput({...input,[e.target.name]: e.target.value   })} 
                                      type="text" 
                                      class="form-control"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Email</label>
                                <input  
                                  name='email'
                                  value={input.email}
                                  onChange={(e)=> setinput({...input,[e.target.name]: e.target.value   })} 
                                
                                
                                type="email" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">age</label>
                                <input 
                                 name='age'
                                 value={input.age}
                                 onChange={(e)=> setinput({...input,[e.target.name]: e.target.value   })} 
                               
                                type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>


                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>


                    </div>


                    <div className='col-md-6'>


                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">age</th>
                                    <th scope="col">edit</th>
                                    <th scope="col">delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                { users && users.map((user)=> {
                                    return (

                                        <tr  key={user._id}>
                                   
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td><Link to={'/edit/'+ user._id}><button className='btn btn-primary'> edit</button></Link></td>
                                        <td><button 
                                          onClick={()=>handleDelete(user._id)} className='btn btn-danger'> delete</button></td>
                                    </tr>

                                    )
                                }
                                ) }
                                
                                
                            </tbody>
                        </table>



                    </div>


                </div>
            </div>

        </>
    )
};

export default Home;
