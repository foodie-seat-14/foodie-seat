import "../Styles/RightComponent.css"
import Slider from '@mui/material/Slider';
function RightComponent() 
{
    return (
      <div>
        <p className="text_one">Campagin Balance</p>
        <Slider track="inverted" />
        <input type="text" className="right_text"></input>
        <p className="text_two">Contribute</p>
        <div className="text_three_container">
        <p className="text_three">
          Click the button below to see how funds are being used and if you are
          a contributor, you can also approve the withdrawal request.
        </p>
        </div>
        <p className="text_two">View Withdrawal Requests</p>
      </div>
    );
}

export default RightComponent;