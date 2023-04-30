import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const SignUp =()=> {
    const [cred,setcred] = useState({name:'',email:'',password:'',location:'',});
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const { name,email, password,location} = cred;



       const res = await fetch("http/localhost:5000/api/creatuser",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name,email, password,location
        })
       });

       const data = await res.json();

   if(data.status=== 422 || !data){
    window.alert("Invalid registration");
    console.log(" Invalid registration");
   }
   else{
    window.alert("successfull registration");
    console.log(" successfull registration");
      
        

    }
  }
  const onChange=(event)=>{
    setcred({...cred,[event.target.name]:[event.target.value]});
  }

  return (
    <>
    <div className="container">
    <form className='ide' method='POST' >
    <div className="form-group ">
      <label htmlFor="name"> Name</label>
      <input type="text" className="form-control" name='name' value={cred.name} onChange={onChange} />
    </div>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} name='email' value={cred.email} placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" name='password'onChange={onChange} value={cred.password} placeholder="Password" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Address</label>
      <input type="text" className="form-control" id="exampleInputPassword1"  name='location'onChange={onChange} value={cred.location}placeholder="Password" />
    </div>
   
    <button type="submit" onSubmit={handleSubmit} className="btn btn-primary">Submit</button>
    <Link to="/login" className='m-3 btn btn-danger' > Already a user</Link>
  </form>
  </div>
  </>
  )
}

export default SignUp