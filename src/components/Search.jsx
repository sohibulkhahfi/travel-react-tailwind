import React, { useState } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  const today = new Date().toISOString().split("T")[0];
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleCheckInChange = (e) => {
    const selectedDate = e.target.value;
    setCheckInDate(selectedDate);
    setCheckOutDate("");
  };

  const handleCheckOutChange = (e) => {
    const selectedDate = e.target.value;
    setCheckOutDate(selectedDate);
  };

  return (
    <div className="max-w-[1240px] mx-auto grid  lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at BEACHES Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica,
            Antigua, The Bahamas, Grenada, Barbados and Curaçao, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and
            certified scuba diving at most resorts. If you are planning a wedding, BEACHES is the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEAR IN A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEAR IN A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="py-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800  text-gray-200 py-2 cursor-pointer">BOOK NOW AND SAVE</p>
        </div>
        <form action="" className="w-full">
          <div className="flex flex-col my-2">
            <label htmlFor="">Destination</label>
            <select name="" id="" className="border rounded-md p-2 cursor-pointer">
              <option value="">Grande Antigua</option>
              <option value="">Key West</option>
              <option value="">Maldives</option>
              <option value="">Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="checkIn">Check In</label>
            <input type="date" name="checkIn" id="checkIn" value={checkInDate} min={today} onChange={handleCheckInChange} className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="checkOut">Check Out</label>
            <input
              type="date"
              name="checkOut"
              id="checkOut"
              value={checkOutDate}
              min={checkInDate}
              onChange={handleCheckOutChange}
              disabled={!checkInDate} // Disable check-out input if check-in date is not selected
              className="border rounded-md p-2"
            />
          </div>
          <button className="w-full btn" type="">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
