export const PaymentDetails = () => {
  const data = [
    { name: "Manoj", address: "Dindugul" , date: "2021/25/09", amount: "2400"  },
    { name: "Kanwal Kishore", address: "Rajapalayam" , date: "2013/24/05",amount: "4200"  },
    { name: "Jayasuriya", address: "Chennai" , date: "2010/20/09", amount: "2480"  },
    { name: "Joshua Rubert", address: "Pollachi" , date: "2014/12/02", amount: "5400"  },
    { name: "Kathirvel", address: "Kinathukadavu" , date: "2016/26/11",amount: "1800"  },
    { name: "Jayatheerthan", address: "Pollachi" , date: "2011/08/12",amount: "2900"  },
    { name: "Haripriyan", address: "Coimbatore" , date: "2010/13/10",amount: "4630" },
    { name: "Harshad", address: "Udumalpet" , date: "2006/28/01",amount: "6740"  },
    { name: "Vbinchandar", address:"Negamam" , date: "2011/19/08", amount: "1072"  },
    { name: "Harish", address: "Chennai" , date: "2011/23/09",amount: "9121"  },
    { name: "Harinath", address: "Coimbatore" , date: "2016/24/10", amount: "5813"  },
    { name: "Mohankarthick",  address: "Coimbatore" , date: "2016/25/10",amount: "9115"  },
    { name: "Krishnavarun",  address: "Coimbatore" , date: "2016/16/10",amount: "1460"  },
    { name: "Harishbalajee", address: "Tirupur" , date: "2012/17/01",amount: "4862"  },
    { name: "ManojKumar",  address: "Coimbatore" , date: "2015/08/07", amount: "5614"  },
    { name: "Logaprabhu", address: "Kinathukadavu" ,date: "2015/08/07",amount: "2866"  },
    { name: "Mohammed Asif", address: "Tirunelveli" , date: "2015/08/07",amount: "1462"  },
  ];

  return (
    <div>
      <h1 className="mb-4 mt-4 font-bold text-3xl">Payment Details</h1>
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="border-b border-gray-600">
            {["Name", "Address", "Date", "Amount" , "Invoice"].map((header) => (
              <th key={header} className="px-4 py-3">
                <span className="flex items-center">
                  {header}
                  <svg className="w-4 h-4 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                  </svg>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="px-1.5 py-1.5 font-medium whitespace-nowrap">{entry.name}</td>
              <td className="px-1.5 py-1.5">{entry.address}</td>
              <td className="px-1.5 py-1.5">{entry.date}</td>
              <td className="px-1.5 py-1.5">{entry.amount}</td>
              <td className="px-1.5 py-1.5">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
