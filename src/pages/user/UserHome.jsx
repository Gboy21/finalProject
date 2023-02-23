import { Icon } from "leaflet";
import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import xmark from "../../assets/xmark-solid.svg";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";
import { getAllCompaniesFromDb } from "../../firebase/services/company";
import { AiFillHome } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

const locationIcon = new Icon({
  iconUrl: "https://phantom.co.rw/c97f193e6c1a855b89a74e5aa12bc350.png",
  iconSize: [25, 35],
});


const UserHome = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const handleCompaniesFetch = async () => {
      try {
        const allCompanies = await getAllCompaniesFromDb();
        setCompanies(allCompanies);
      } catch (error) { }
    };
    handleCompaniesFetch();
  }, []);

  const [position, setPosition] = useState(null);
  const [request, setRequest] = useState(false);
  const [locations, setLocations] = useState([]);

  

  const LocationMarker = () => {
    const successCallback = (position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });

      // Filter near location
      if (companies && companies.length) {
        let nearLocation = [];
        for (let company of companies) {
          if (company) {
            nearLocation.push(
              {
                name: company.companyName,
                phone: company.phoneNumber,
                address: company.address,
                avariable: company.hours,
                geo: { ...company.location },
                services: company.services,
              }
            )
          }
        }
        setLocations(nearLocation);
      };

    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  //Used during company registration
  const DetectLocation = () => {
    const successCallback = (position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  return (
    <div className="relative flex flex-col w-full h-fit overflow-y-scroll">
      <MapContainer center={[-1.98076, 30.104811]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position === null ? null : (
          <Marker
            position={position}
            zIndexOffset={9999}
            autoPan={true}
            autoPanOnFocus={true}
            zoom={10}
            icon={locationIcon}
          >
            <Popup>Your Location</Popup>
          </Marker>
        )}
        {locations &&
          locations.length > 0 &&
          locations.map((loc, i) => (
            <Marker key={i} position={loc.geo}>
              <Popup>
                <div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">Gas Station Name</span>
                    <span>Ratings</span>
                    <span>{loc.name}</span>
                    <span>{loc.address}</span>
                    <span>{loc.avariable}</span>
                    <span className="flex flex-col">
                      <h3 className="font-semibold">Services</h3>
                      <ul className="flex flex-wrap gap-2">
                        {loc.services.map((service, i) => {
                          return <span key={i}>{service}</span>;
                        })}
                      </ul>
                    </span>
                  </div>
                  <span>
                    <input type="tel" name="" id="" value={loc.phone} />
                    {/* {location.phone} */}
                  </span>
                  <button className="p-2 mt-2 font-semibold text-white bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500" onClick={() => setRequest(!request)}>
                    Request Service
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        <div className="px-4 left-14">
          <button
            className="bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-white p-3 font-semibold text-lg top-3 left-20 absolute z-[99999]"
            onClick={LocationMarker}
          >
            Find Nearby Gas Station
          </button>
        </div>
        {request && (
          <div className="absolute bottom-0 justify-center bg-white w-fit h-fit z-[9999]">
            <img
              src={xmark}
              alt="close"
              className="flex float-right w-10 h-10 p-2"
              onClick={() => setRequest(!request)}
            />
            <form action="#" className="flex flex-col gap-5 p-10">
              <AppInput
                fieldName="Email"
              />
              <AppInput
                fieldName="Phone Number"
              />
              <AppInput
                fieldName="Address"
              />
              <div
                className="w-full flex gap-2 flex-col 
              "
              >
                <label> Services</label>
                <Multiselect
                  displayValue="key"
                  onKeyPressFn={function noRefCheck() { }}
                  onRemove={function noRefCheck() { }}
                  onSearch={function noRefCheck() { }}
                  onSelect={function noRefCheck() { }}
                  options={[
                    {
                      cat: "Group 1",
                      key: "Fuel Refill",
                    },
                    {
                      cat: "Group 2",
                      key: "Diesel Refill",
                    },
                    {
                      cat: "Group 3",
                      key: "Oil Change",
                    },
                  ]}
                />
              </div>
              <div className="flex flex-col rounded-md border border-gray-400 p-2 gap-2 text-gray-800">
                <span className="flex gap-1 w-full">
                  longitude:
                  <input
                    type="text"
                    name="long"
                    value={position?.lng ?? ""}
                    placeholder="Gas Station longitude"
                    id="long"
                    className="rounded-md border border-gray-400 outline-none pl-2"
                  />
                </span>
                <span className="flex gap-1 w-full">
                  Latitude:
                  <input
                    type="text"
                    value={position?.lat ?? ""}
                    placeholder="Company latitude"
                    name="lat"
                    id="lat"
                    className="rounded-md border border-gray-400 outline-none pl-2"
                  />
                </span>
                <span>
                  <input type="checkbox" id="location" name="location" onClick={DetectLocation} />
                  &nbsp;
                  <label for="location">
                    Please check to Enter Gas Station location and &nbsp;
                    <span className="text-[#0D98E5] cursor-pointer">Make sure you are on Site</span>
                  </label>
                </span>
              </div>
              <AppButton>Send</AppButton>
            </form>
          </div>
        )}
      </MapContainer>
      
      <div className="w-full h-[10vh] bottom-0 rounded-tr-3xl rounded-tl-3xl overflow-hidden flex items-center justify-between px-5 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500">
        <div className="relative flex items-center justify-center w-10 h-10">
          <div className="border-2 border-red-900 animate-ping rounded-full  absolute w-[90%] h-[90%] -z-10 bg-transparent"></div>
          <Link to="/user/home">
            <AiFillHome className="icons"/>
          </Link>
        </div>

        <Link to="/user/request">
          <FiHelpCircle className="icons" />
                  </Link>
        <Link to="/user/profile">
          <CgProfile className="icons"/>
        </Link>
      </div>
    </div>
  );
};

export default UserHome;
