import './signup.css'
import {useState , useEffect} from 'react'
import axios from 'axios'
import {createUserWithEmailAndPassword , getIdToken ,getAuth} from 'firebase/auth'




export default function Signup() {

    //get token first by signup using front end code

    const [uid, setuid] = useState('');
    const [email, setemail] = useState('');
    const [mobile ,setmobile] = useState('');
    const [username , setusername] = useState('');
    const [password , setpassword] = useState('');
    const [token , settoken] = useState('');

      useEffect(() => {
          console.log('token: from use effect:' , token)
      }, [token]);

    
    
    const signup = () => {
        
       console.log(uid , email , mobile , username , password)
        // call createUser after token is received
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                const userid = user.uid

                setuid(userid)

                

               const tokenRes = user.getIdTokenResult()

               settoken(tokenRes.token)

               console.log(tokenRes)


              console.log('token:' , token , '  userid' , userid)



                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });


    }
  
    const createUser = async (token) => {

        const customHeaders = {
            Authorization : 'Bearer' + token
        }
        
        
        const res = await axios.post('https://major-user-service.herokuapp.com/users/signup',
        {
            username:username,
            uid :uid,
            mobile:mobile,
            email:email

        },{
            headers:customHeaders
        })


        console.log(res);
    }
      
    return (
        <div>
            <h1>Signup page</h1>
            <form>
                 
                 username: <input value={username} type="text" name="username" id="username" onChange={(e) => {setusername(e.target.value)}}/> <br/>
                 email:<input value={email} type="text" name="email" id="email" onChange={(e) => {setemail(e.target.value)}}/> <br/>
                 mobile:<input value={mobile} type="text" name="mobile" id="mobile" onChange={(e) => {setmobile(e.target.value)}}/> <br/>
                 password:<input value={password} type="text" name="password" id="password" onChange={(e) => {setpassword(e.target.value)}}/> <br/>
                 <button type="button" onClick={signup}>Sign up</button>
            </form>
        </div>
    )
}
