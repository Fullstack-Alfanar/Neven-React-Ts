import React, { useState } from "react";

const Validation: React.FC =()=>{
       const [email,setEmail]=useState("");
       const[password ,setPassword]=useState("")
       const [message,setMessage]=useState("")

const Validation =()=>{
       const   Emailregex= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
       var PasswordgRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
       
       if(Emailregex.test(email))
       {
              console.log("true");
              setMessage("Email is valid")
       }
       if(PasswordgRegex.test(password))
       {
              console.log("true");
              setMessage("psw is valid")   
       }
       else if(!Emailregex.test(email) && email !="" )
       {
              setMessage("The Email is Not valid ")
       }
       else if(!PasswordgRegex.test(password)&& password != "")
       {
              setMessage("The password is Not valid ")    
       }
}

const handleOnchangeEmail = (e:any)=>{
setEmail(e.target.value)
};

const handleOnchangePsw = (ev:any)=>{
setPassword(ev.target.value)
};
       return(
        <div>
          <div>
              <label>Email:</label>
              <input type="email" placeholder="E-mail" value={email} onChange={handleOnchangeEmail} />
       </div>
       <div>
              <label> password </label>
              <input type="password" placeholder="password " value={password} onChange={handleOnchangePsw}  />
              </div>  
              <div>
              <button onClick={Validation}>Check</button>
              <div>{message} </div>
              
                     </div>  
        </div>
       )
}

export default Validation ;
