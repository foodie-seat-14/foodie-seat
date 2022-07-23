import Avengers from "../Images/Avengers.jfif";
import "../Styles/LeftComponent.css";
function LeftComponent() {
  return (
    <div>
      <p>view on Etherscan</p>
      <img src={Avengers} className="avengers_pic" />
      <h1>iPhone 13 Mini</h1>
      <p>Description</p>
      <p>
        This iPhone 13 mini display has rounded corners that fellow a beautiful
        curved design, and are within a standard rectangle
      </p>
      <p>
        This iPhone 13 mini display has rounded corners that fellow a beautiful
        curved design, and are within a standard rectangle. More
      </p>
      <p>
        This iPhone 13 mini display has rounded corners that fellow a beautiful
        curved design, and are within a standard rectangle. More
      </p>
      <div className="left_row">
        <div className="left_side">
          <p>Minimum Contribution Amount</p>
          <input type="text" className="left_text"></input>
          <p>Total Requests</p>
          <input type="text" className="req_box"></input>
        </div>
        <div className="right_side">
          <p>Creator's wallet address</p>
          <input type="text" className="right_text"></input>
          <p>Total Approvers</p>
          <input type="text" className="approve_box"></input>
        </div>
        
      </div>
    </div>
  );
}
export default LeftComponent;
