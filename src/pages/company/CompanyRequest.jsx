import React from 'react';
import Sidebar from '../../components/Layouts/Sidebar';
import star from '../../assets/start.png';

const CompanyRequest = () => {

  return (
    <div>
      <Sidebar />
      <h1 className="text-center pt-10 text-2xl bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 to-[#5588a399] text-transparent bg-clip-text font-bold">
        Requested service
      </h1>
      <div className="mt-10 overflow-x-scroll mx-3">
        <table class="table-auto border border-collapse border-slate-600 ">
          <thead>
            <tr>
              <th class="border border-black inline-block w-max">User Name</th>
              <th class="border border-black">Phone</th>
              <th class="border border-black">Address</th>
              <th class="border border-black">Services</th>
              <th class="border border-black">Status</th>
              {/* <th class="border border-black">Feedback</th> */}
              <th class="border border-black">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-black">Gilbert</td>
              <td class="border border-black">0786744553</td>
              <td class="border border-black">K106st</td>
              <td class="border border-black">
                <ul>
                  <li className='inline-block w-max p-2'> Fuel Refilled</li>
                </ul>
              </td>
              <td class="border border-black" id="approved"> Approved
              </td>
              <td class="border border-black">
                <div><img src={star} alt="star" className="w-50" /></div>
              </td>
            </tr>
            <tr>
              <td class="border border-black">Christine</td>
              <td class="border border-black">0786745672</td>
              <td class="border border-black"> KK102st</td>
              <td class="border border-black">
                <ul>
                  <li className='inline-block w-max p-2'>Coocking Gas</li>
                </ul>
              </td>
              <td class="border border-black" id='pending'> Pending
              </td>
              <td class="border border-black">
                <div><img src={star} alt="star" className="w-50" /></div>
              </td>
            </tr>
            <tr>
              <td class="border border-black">Kalisa</td>
              <td class="border border-black">0786345678</td>
              <td class="border border-black"> KK100st</td>
              <td class="border border-black">
                <ul>
                  <li className='inline-block w-max p-2'> Diesel Refill</li>
                </ul>

              </td>
              <td class="border border-black" id='pending'> Pending
              </td>
              <td class="border border-black">
                <div><img src={star} alt="star" className="w-50" /></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default CompanyRequest;