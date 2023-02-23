import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/arrow-left-solid.svg";
import Bell from "../../assets/bell-solid.svg";
import { getAllUsersFromDb } from "../../firebase/services/user";
import { toast } from "react-hot-toast";

function User() {
  const [users, setUsers] = useState([]);
  const [ErrorMessage, setErrorMessage] = useState(null)
  const [Loadings, setLoadings] = useState(false)

  useEffect(() => {
    handleDataFetch();
  }, []);

  const handleDataFetch = async () => {
    setLoadings(true)
    try {
      const allUsers = await getAllUsersFromDb();
      setUsers(allUsers);
      setLoadings(false);
    } catch (e) {
      console.log(e);
      toast.error("Error network");
      setErrorMessage(e);
      setLoadings(false);
    };
  };

  return (
    <>
      <div className="flex items-center justify-between py-3 mx-3 text-xl font-bold">
        <Link to={"/admin"}>
          <span className="flex items-center gap-2">
            <img src={ArrowLeft} alt="" className="w-5 h-5" />
            Back
          </span>
        </Link>
        <div className="flex items-center gap-3 cursor-pointer">
          <span>
            <img src={Bell} alt="Notification" className="w-6 h-6" />
          </span>
          <Link to={"/welcome"}>
            <span className="p-1 border rounded-md cursor-pointer border-primary">Logout</span>
          </Link>
        </div>
      </div>
      <h1 className="text-center pt-10 text-2xl bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 to-[#5588a399] text-transparent bg-clip-text font-bold">
        Users
      </h1>

      {!Loadings ?
        <div className="mx-3 mt-10 overflow-x-scroll">
          {!ErrorMessage && users && users.length > 0 ?
            <table className="border border-collapse table-auto border-slate-600 ">
              <thead>
                <tr>
                  <th className="p-2 border border-black">Name</th>
                  <th className="p-2 border border-black">Phone Number</th>
                  <th className="p-2 border border-black">Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, i) => {
                    return (
                      <tr key={i}>
                        <td className="py-2 px-8 border border-black">{user.userName}</td>
                        <td className="p-2 px-8 border border-black">
                          {user.phoneNumber}</td>
                        <td className="p-2 px-8 border border-black">{user.email}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            :
            <div>
              There is no connection try again later!
            </div>
          }
        </div>
        :
        <div>Loading...</div>
      }


    </>
  );
}

export default User;
