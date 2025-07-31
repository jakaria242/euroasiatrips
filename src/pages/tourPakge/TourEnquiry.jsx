// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TourEnquiry = () => {
//   const [activeTab, setActiveTab] = useState("Overview");
//   const [packageData, setPackageData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPackage = async () => {
//       try {
//         const res = await axios.get("https://bdtravel.net/api/single-umrah-package-data/2");
//         setPackageData(res.data.singleUmrahPackageData);
//       } catch (error) {
//         console.error("Failed to fetch package data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPackage();
//   }, []);



//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "Overview":
//         return (
//           <>
//             <h2 className="text-lg font-semibold text-[#1e1e1e] mb-1">Overview</h2>
//             <p className="text-sm font-semibold text-[#1e1e1e] mb-2" dangerouslySetInnerHTML={{ __html: packageData.post_details }}></p>
//           </>
//         );
//       case "Itinerary":
//         return (
//           <>
//             <h2 className="text-lg font-semibold text-[#1e1e1e] mb-2">Itinerary</h2>
//             <ul className="list-disc ml-5 space-y-1 text-base text-[#333]">
//               <li><strong dangerouslySetInnerHTML={{ __html: packageData.itinerary_details }}>Day 1:</strong> Arrival in Kathmandu, transfer to hotel, free evening.</li>
//             </ul>
//           </>
//         );
//       case "Cost":
//         return (
//           <>
//             <h2 className="text-lg font-semibold text-[#1e1e1e] mb-2">Cost Details</h2>
//             <ul className="list-disc ml-5 space-y-1 text-base text-[#333]">
//               <li><strong  dangerouslySetInnerHTML={{ __html: packageData.package_price }}>Adult:</strong> ৳ 16,900 per person</li>
//             </ul>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-[#f6f9fb] py-10 px-4 lg:px-0">
//       <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8">
//         {/* Left Section */}
//         <div className="w-full lg:w-[68%]">
//           {/* Title */}
//           <h1 className="text-2xl md:text-3xl font-semibold mb-1 text-[#1e1e1e]">
//             {packageData.title}
//           </h1>

//           {/* Tabs */}
//           <div className="flex gap-6 text-[15px] text-[#d12f2f] border-b border-[#e3e3e3] mb-6 mt-2">
//             {["Overview", "Itinerary", "Cost"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`pb-2 ${
//                   activeTab === tab
//                     ? "border-b-2 border-[#d12f2f] text-[#d12f2f]"
//                     : "text-[#555] hover:text-[#d12f2f]"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           {renderTabContent()}

//           {/* Form */}
//           <div className="bg-[#f7f7f7] p-5 md:p-6 border border-[#ddd] rounded mt-6">
//             <p className="text-[16px] font-semibold mb-4">
//               You can send your enquiry via the form below.
//             </p>
//             <form className="space-y-4 text-sm">
//               <input
//                 type="text"
//                 disabled
//                 value="Trip name: * NEPAL 3 NIGHTS 4 DAYS"
//                 className="w-full border border-[#ccc] bg-[#efefef] px-3 py-2 rounded text-gray-700"
//               />
//               <input
//                 type="text"
//                 placeholder="Enter Your Name *"
//                 className="w-full border border-[#ccc] px-3 py-2 rounded"
//               />
//               <input
//                 type="email"
//                 placeholder="Enter Your Email *"
//                 className="w-full border border-[#ccc] px-3 py-2 rounded"
//               />
//               <div className="flex flex-col md:flex-row gap-4">
//                 <select className="w-full md:w-1/2 border border-[#ccc] px-3 py-2 rounded text-gray-500">
//                   <option>Choose a country *</option>
//                   <option>Bangladesh</option>
//                   <option>India</option>
//                   <option>Nepal</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Contact Number *"
//                   className="w-full md:w-1/2 border border-[#ccc] px-3 py-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col md:flex-row gap-4">
//                 <input
//                   type="number"
//                   placeholder="Enter Number of Adults *"
//                   className="w-full md:w-1/2 border border-[#ccc] px-3 py-2 rounded"
//                 />
//                 <input
//                   type="number"
//                   placeholder="Enter Number of Children"
//                   className="w-full md:w-1/2 border border-[#ccc] px-3 py-2 rounded"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Enquiry Subject"
//                 className="w-full border border-[#ccc] px-3 py-2 rounded"
//               />
//               <textarea
//                 rows={5}
//                 placeholder="Enter Your message *"
//                 className="w-full border border-[#ccc] px-3 py-2 rounded"
//               ></textarea>
//               <div className="flex items-start gap-2">
//                 <input type="checkbox" className="mt-1" />
//                 <label className="text-[13px] text-gray-600">
//                   By contacting us, you agree to our
//                   <span className="text-[#d12f2f] underline ml-1">Privacy Policy</span>.
//                 </label>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-[#d12f2f] text-white text-sm font-medium px-5 py-2 rounded hover:bg-[#b52727] transition"
//               >
//                 Send Email
//               </button>
//             </form>
//           </div>
//         </div>



//         {/* Right Section (same as before) */}
// <div className="w-full lg:w-[32%] flex flex-col gap-6">
//   {/* Price Card */}
//   <div className="bg-white border border-[#ddd] rounded-xl shadow-md overflow-hidden">
//     <div className="flex flex-col items-center px-6 py-8">
//       <div className="w-full grid grid-cols-3 gap-4 text-center">
//         <div>
//           <p className="text-gray-500 text-sm">From</p>
//           <p className="text-[#d12f2f] text-xl font-bold">৳ 16900</p>
//           <p className="text-gray-500 text-sm">/ Adult</p>
//         </div>
//         <div>
//           <p className="text-gray-500 text-sm">From</p>
//           <p className="text-[#d12f2f] text-xl font-bold">৳ 13600</p>
//           <p className="text-gray-500 text-sm">/ Child</p>
//         </div>
//         <div>
//           <p className="text-gray-500 text-sm">From</p>
//           <p className="text-[#d12f2f] text-xl font-bold">৳ 3400</p>
//           <p className="text-gray-500 text-sm">/ Infant</p>
//         </div>
//       </div>

//       <button className="mt-8 w-full bg-[#d12f2f] text-white py-3 rounded-full font-semibold hover:bg-[#b52d2d] transition text-sm tracking-wider">
//         CHECK AVAILABILITY
//       </button>

//       <p className="text-xs text-gray-500 mt-3 text-center">
//         Need help with booking? <span className="text-[#d12f2f] underline">Send Us A Message</span>
//       </p>
//     </div>
//   </div>

//   {/* Contact Info */}
//   <div className="bg-white border border-[#ddd] rounded-xl p-6 text-sm shadow-md">
//     <h4 className="font-semibold mb-4 text-base">Contact Us</h4>
//     <p className="mb-2 font-medium text-gray-700 text-[14px]">📞 (+88) 01940-181860</p>
//     <p className="mb-2 font-medium text-gray-700 text-[14px]">✉ visa@eurasiatrips.com</p>
//     <p className="text-[14px] text-gray-700 leading-relaxed">
//       🏢 Ka-8 (1st Floor), Bashundhara R/A (Main Gate), Ainuddin Munshi Road, Vatara Dhaka, Dhaka, Bangladesh, 1229
//     </p>
//   </div>
// </div>



//       </div>
//     </div>
//   );
// };

// export default TourEnquiry;


import React, { useEffect, useState } from "react";
import axios from "axios";

const TourEnquiry = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await axios.get("https://bdtravel.net/api/single-umrah-package-data/2");
        setPackageData(res.data.singleUmrahPackageData);
      } catch (error) {
        console.error("Failed to fetch package data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackage();
  }, []);

  if (loading) {
    return <div className="py-10 text-center text-lg text-gray-600">Loading...</div>;
  }

  if (!packageData) {
    return <div className="py-10 text-center text-lg text-red-500">Failed to load package data.</div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <>
            <h2 className="text-lg font-semibold text-[#1e1e1e] mb-1">Overview</h2>
            <p className="text-sm font-semibold text-[#1e1e1e] mb-2" dangerouslySetInnerHTML={{ __html: packageData.post_details }}></p>
          </>
        );
      case "Itinerary":
        return (
          <>
            <h2 className="text-lg font-semibold text-[#1e1e1e] mb-2">Itinerary</h2>
            <p className="text-sm text-[#333]" dangerouslySetInnerHTML={{ __html: packageData.itinerary_details }} />
          </>
        );
      case "Cost":
        return (
          <>
            <h2 className="text-lg font-semibold text-[#1e1e1e] mb-2">Cost Details</h2>
            <p className="text-sm text-[#333]" dangerouslySetInnerHTML={{ __html: packageData.package_price }} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#f6f9fb] py-10 px-4 lg:px-0">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-[68%]">
          <h1 className="text-2xl md:text-3xl font-semibold mb-1 text-[#1e1e1e]">
            {packageData.title}
          </h1>

          {/* Tabs */}
          <div className="flex gap-6 text-[15px] text-[#d12f2f] border-b border-[#e3e3e3] mb-6 mt-2">
            {["Overview", "Itinerary", "Cost"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-[#d12f2f] text-[#d12f2f]"
                    : "text-[#555] hover:text-[#d12f2f]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {renderTabContent()}

          {/* Enquiry Form */}
          <div className="bg-[#f7f7f7] p-5 md:p-6 border border-[#ddd] rounded mt-6">
            <p className="text-[16px] font-semibold mb-4">
              You can send your enquiry via the form below.
            </p>
            <form className="space-y-4 text-sm">
              <input
                type="text"
                disabled
                value={`Trip name: * ${packageData.title || "Package"}`}
                className="w-full border border-[#ccc] bg-[#efefef] px-3 py-2 rounded text-gray-700"
              />
              <input
                type="text"
                placeholder="Enter Your Name *"
                className="w-full border border-[#ccc] px-3 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Enter Your Email *"
                className="w-full border border-[#ccc] px-3 py-2 rounded"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <select className="w-full md:w-1/2 border border-[#ccc] px-3 py-2 rounded text-gray-500">
                  <option>Choose a country *</option>
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter Your Contact Number *"
                  className="w-full md:w-1/2 border border-[#ccc] px-3 py-2 rounded"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="number"
                  placeholder="Enter Number of Adults *"
                  className="w-full md:w-1/2 border border-[#ccc] px-3 py-2 rounded"
                />
                <input
                  type="number"
                  placeholder="Enter Number of Children"
                  className="w-full md:w-1/2 border border-[#ccc] px-3 py-2 rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Enquiry Subject"
                className="w-full border border-[#ccc] px-3 py-2 rounded"
              />
              <textarea
                rows={5}
                placeholder="Enter Your message *"
                className="w-full border border-[#ccc] px-3 py-2 rounded"
              ></textarea>
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-[13px] text-gray-600">
                  By contacting us, you agree to our
                  <span className="text-[#d12f2f] underline ml-1">Privacy Policy</span>.
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#d12f2f] text-white text-sm font-medium px-5 py-2 rounded hover:bg-[#b52727] transition"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[32%] flex flex-col gap-6">
          {/* Price Card */}
          <div className="bg-white border border-[#ddd] rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col items-center px-6 py-8">
              <div className="w-full grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-gray-500 text-sm">From</p>
                  <p className="text-[#d12f2f] text-xl font-bold">৳ 16900</p>
                  <p className="text-gray-500 text-sm">/ Adult</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">From</p>
                  <p className="text-[#d12f2f] text-xl font-bold">৳ 13600</p>
                  <p className="text-gray-500 text-sm">/ Child</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">From</p>
                  <p className="text-[#d12f2f] text-xl font-bold">৳ 3400</p>
                  <p className="text-gray-500 text-sm">/ Infant</p>
                </div>
              </div>

              <button className="mt-8 w-full bg-[#d12f2f] text-white py-3 rounded-full font-semibold hover:bg-[#b52d2d] transition text-sm tracking-wider">
                CHECK AVAILABILITY
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                Need help with booking? <span className="text-[#d12f2f] underline">Send Us A Message</span>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white border border-[#ddd] rounded-xl p-6 text-sm shadow-md">
            <h4 className="font-semibold mb-4 text-base">Contact Us</h4>
            <p className="mb-2 font-medium text-gray-700 text-[14px]">📞 (+88) 01940-181860</p>
            <p className="mb-2 font-medium text-gray-700 text-[14px]">✉ visa@eurasiatrips.com</p>
            <p className="text-[14px] text-gray-700 leading-relaxed">
              🏢 Ka-8 (1st Floor), Bashundhara R/A (Main Gate), Ainuddin Munshi Road, Vatara Dhaka, Dhaka, Bangladesh, 1229
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourEnquiry;
