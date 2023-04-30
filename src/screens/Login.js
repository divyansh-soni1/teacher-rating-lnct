import React from 'react'

function Login() {
      
     
       
  return (
    <div  style={ 
      {"display":"flex", "justifyContent":"center", "alignItems":"center", "width":"100%", "height":"100vh"
   , "backgroundColor": "lightblue" }
    }>
      
      <button style={
        {
          "fontFamily":"verdana", "background":"black","color":"black","borderRadius": "12px","fontSize": "1.5em"
        }
      } ><a  style={{"color":'white'}} href='https://teacher-rate.onrender.com/auth'>Login With Google</a></button>
      
    
    </div>
  )
}

export default Login