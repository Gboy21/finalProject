import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/arrow-left-solid.svg";
import Bell from "../../assets/bell-solid.svg";
import star from "../../assets/start.png";
import { logoutUser } from "../../firebase/services/authentication";
import { removeUserFromLocalStorage } from "../../utils/auth";


const UserRequest = () => {
  const navigate = useNavigate();

  async function handleLogout() {
    await logoutUser();
    removeUserFromLocalStorage();
    navigate("/welcome");
  }

  return (
    <div className="mx-3">
      <div className="flex items-center justify-between py-3 text-xl font-bold text-primary">
        <Link to={"/user/home"}>
          <span className="flex items-center gap-2">
            <img src={ArrowLeft} alt="" className="w-5 h-5" />
            Back
          </span>
        </Link>
        <div className="flex items-center gap-3 cursor-pointer">
          <span>
            <img src={Bell} alt="Notification" className="w-6 h-6" />
          </span>
          <button onClick={handleLogout}>
            <span className="p-1 border rounded-md cursor-pointer text-primary border-primary">Logout</span>
          </button>
        </div>
      </div>
      <h1 className="text-center pt-10 text-2xl bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-transparent bg-clip-text font-bold">
        My Requests
      </h1>
      <div className="mt-10 overflow-x-scroll" id="table">
        <table class="border border-collapse table-auto border-slate-600 " >
          <thead>
            <tr>
              <th class="border border-black py-2 px-8">Gas Station Name</th>
              <th class="border border-black p-2">Phone</th>
              <th class="border border-black p-2">Address</th>
              <th class="border border-black py-2 px-8">Services</th>
              <th class="border border-black p-4">Status</th>
              <th class="border border-black p-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-black p-2">Kobil Kicukiro</td>
              <td class="border border-black p-2">0786744553</td>
              <td class="border border-black p-2">K106st</td>
              <td class="border border-black">
                <ul>
                  <li className="px-2"> Diesel Refill</li>
                </ul>
              </td>
              <td class="border border-black p-2" id="approved"> Approved
              </td>
              <td class="border border-black">
                <div>
                  <img src={star} alt="star" className="w-50" />
                </div>
              </td>
            </tr>
            <tr>
              <td class="border border-black p-2">SP Kicukiro</td>
              <td class="border border-black p-2">0786745672</td>
              <td class="border border-black p-2"> KK102st</td>
              <td class="border border-black">
                <ul>
                  <li className="px-2"> Oil change</li>
                </ul>

              </td>
              <td class="border border-black p-2" id="pending"> Pending
              </td>
              <td class="border border-black">
                <div>
                  <img src={star} alt="star" className="w-50" />
                </div>
              </td>
            </tr>
            <tr>
              <td class="border border-black p-2">Lake Sonatubes</td>
              <td class="border border-black p-2">0786345678</td>
              <td class="border border-black p-2"> KK100st</td>
              <td class="border border-black">
                <ul>
                  <li className="px-2"> Fuel Refill</li>
                </ul>
              </td>
              <td class="border border-black p-2" id="pending"> Pending
              </td>
              <td class="border border-black">
                <div>
                  <img src={star} alt="star" className="w-50" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRequest;
