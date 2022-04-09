import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>ples Login</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={singInWithGoogle}>Google Sing In</button>
            </div>

            <form>
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <br />
                <input type="password" name="" id="" placeholder="Your Password" />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;