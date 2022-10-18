import React from "react";
import { Link } from 'react-router-dom'
import { SignUpWrapper, FormWrapper, LineSection, AccountCheck, SignUpHeader, RedirectLink}  from "./signup.style";



const SignupOption = ()=>{
return(
    <SignUpWrapper>

        <FormWrapper>
             <SignUpHeader>
                    Welcome ! To continue,
                </SignUpHeader>

            <RedirectLink to="/signup">
                  Sign Up as Student
                </RedirectLink>
            <LineSection>
                    <span></span><div>or</div> <span></span>
            </LineSection>
            <RedirectLink to="/signup-teacher">
                  Sign Up as Teacher
                </RedirectLink>
            <AccountCheck>
                        <p>Already have an account?
                            <Link to="/login" style={{color:"#80B918", textDecoration:"none"}}> Sign In</Link>
                             </p>
            </AccountCheck>
        </FormWrapper>
        
    </SignUpWrapper>
)

}
export default SignupOption