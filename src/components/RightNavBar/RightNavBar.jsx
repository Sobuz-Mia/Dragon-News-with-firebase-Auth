import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightNavBar = () => {
  return (
    <div>
      <div className="p-3">
        <h2 className="text-lg font-semibold mb-3">Login With</h2>
        <button className="btn w-full normal-case text-lg mb-2 btn-outline">
          <FaGoogle></FaGoogle>
          Login with google
        </button>
        <button className="btn w-full normal-case text-lg btn-outline">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div className="p-3">
        <h2 className="text-lg font-semibold mb-3">Find Us on</h2>
        <div className="flex items-center gap-3 p-3 rounded-t-lg border">
          <FaFacebook></FaFacebook>
          <p>Facebook</p>
        </div>
        <div className="flex items-center gap-3 p-3 border-x">
          <FaTwitter></FaTwitter>
          <p>Twitter</p>
        </div>
        <div className="flex items-center gap-3 p-3 border">
          <FaInstagram></FaInstagram>
          <p>Instagram</p>
        </div>
      </div>
      <div className="p-3">
        <h2 className="text-lg font-semibold mb-3">Q-Zone</h2>
        <img className="mb-3" src={qZone1} alt="" />
        <img className="mb-3" src={qZone2} alt="" />
        <img className="mb-3" src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightNavBar;
