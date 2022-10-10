
function Login() {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span classNme="login-for-title"> Bem vindo! </span>

                    <div className= "wrap-input">
                        <input type="email" />
                        <span className="focus-input" data-placeholder="email"> </span>     
                        </div>


                              <div className= "wrap-input">
                        <input type="senha" />
                        <span className="focus-input" data-placeholder="senha"> </span>                     
                         </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">
                                Login
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;