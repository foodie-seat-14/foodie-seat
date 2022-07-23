import Header from "./Header";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import "../Styles/AvengersSite.css"

function AvengersSite () {
    return (
      <div className="full_screen">
      <div className="top_screen">
        <div className="header">
          <Header />
        </div>
        <div className="row">
        <div className="lcomponent">
          <LeftComponent />
        </div>
        <div className="rcomponent">
          <RightComponent />
        </div>
        </div>
      </div>
      </div>
    );
}
export default AvengersSite;