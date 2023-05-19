import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }))
  };

  return (
    <div className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-8 is-offset-2">
            <h3 className="title has-text-white">Login</h3>
            <hr className="login-hr" />
            <p className="subtitle has-text-white">Please login to see our cool stuff!</p>
            <div className="box">
              <form onSubmit={Auth} className="box">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <span className="icon is-small is-left is-black">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field mt-5">
                  <button type="submit" className="button is-success is-fullwidth">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <section className="hero is-fullheight is-fullwidth">
    //   <div className="hero-body">
    //     <div className="container">
    //       <div className="columns is-centered">
    //         <div className="column is-4">
    //           <form onSubmit={Auth} className="box">  
    //             {isError && <p className="has-text-centered">{message}</p>}
    //             <h1 className="title is-2">Sign In</h1>
    //             <div className="field">
    //               <label className="label">Email</label>
    //               <div className="control">
    //                 <input
    //                   type="text"
    //                   className="input"
    //                   value={email}
    //                   onChange={(e) => setEmail(e.target.value)}
    //                   placeholder="Email"
    //                 />
    //               </div>
    //             </div>
    //             <div className="field">
    //               <label className="label">Password</label>
    //               <div className="control">
    //                 <input
    //                   type="password"
    //                   className="input"
    //                   value={password}
    //                   onChange={(e) => setPassword(e.target.value)}
    //                   placeholder="******"
    //                 />
    //               </div>
    //             </div>
    //             <div className="field mt-5">
    //               <button
    //                 type="submit"
    //                 className="button is-success is-fullwidth"
    //               >
    //                 {isLoading ? "Loading..." : "Login"}
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Login;
