import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { RegisterFailure , RegisterSuccess , RegisterStart } from "./RegisteruserRedux";
import { publicRequest } from "../../requestMethos";

export const login = async(dispatch , user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login" , user);
        dispatch(loginSuccess(res.data))
   }catch(err){
     dispatch(loginFailure())
  }
}

export const Register = async(dispatch , user)=>{
  dispatch(RegisterStart());
  try {
    const res = await publicRequest.post("/auth/register" , user);
    dispatch(RegisterSuccess(res.data))
  } catch (error) {
    dispatch(RegisterFailure())
  }
}