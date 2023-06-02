
import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';




const Edit = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const[input,setinput]= useState(
        {
            name: "",
            email: "",
            age: "",
        }
    );

    useEffect(
        ()=>{ const getAllData=async() => {
         const res=await axios.get('http://localhost:8000/api/v1/users/single/'+id)
         setinput(res.data);
        }
        getAllData();
},[id])

const handleEditData=async(e)=>{
    e.preventDefault();
    await axios.put('http://localhost:8000/api/v1/users/'+id,input)

}






    return (
        <>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                        <div style={{ backgroundColor: " orange" }}>
                            <h1 className="text-white text-center mt-8">
                               update
                            </h1>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <form  onSubmit={handleEditData}>
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


                            <button type="submit" class="btn btn-primary">update</button>
                        </form>


                    </div>
                    
                  

                </div>
                <button onClick={()=>navigate('/')} type="submit" class="btn btn-primary mt-2">go to home</button>

            </div>

        </>
    )
};

export default Edit;
