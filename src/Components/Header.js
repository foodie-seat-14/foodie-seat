import "../Styles/Header.css"
import DotCircle from "../Images/DotCircle.jfif"

function Header() {

  const getDotCircleImages=()=>{
    return"";
  }

    return(
      <div className="hed">
      <div className="hed_left">
      <h3>GiveStation</h3>
      <div className="hed_right">
      <p className="cont_one">Create Campagin</p>
      <p className="cont_two">How it works</p>
      <p className="cont_three">Connect Wallet</p>
      <img src={DotCircle} className="img"/>
      </div>
      </div>
      </div>
    );

}
export default Header;