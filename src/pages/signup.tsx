import Quote from "../components/Quote";
import Auth from "../components/Auth"

function Signup() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <Auth type="signup"></Auth>
        </div>
        <div >
            <Quote />
        </div>
      </div>
    </>
  );
}

export default Signup;
