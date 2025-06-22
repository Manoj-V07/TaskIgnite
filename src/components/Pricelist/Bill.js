import { useLocation } from 'react-router-dom';
import { useState, useRef , useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Bill = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];

  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem('billForm');
    return saved
      ? JSON.parse(saved)
      : {
          name: '',
          email: '',
          address: '',
          district: '',
          state: '',
          phone: '',
          altPhone: '',
          date: '',
        };
  });

  const invoiceRef = useRef();

  const handleChange = (e) => {
    setForm((prev) => {
      const updated = { ...prev, [e.target.name]: e.target.value };
      localStorage.setItem('billForm', JSON.stringify(updated)); // 2. Save on change
      return updated;
    });
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('billForm', JSON.stringify(form));
    };
  }, [form]);

  const handleDownload = async (e) => {
    e.preventDefault();
  const isFormValid = Object.values(form).every((val) => val && val.trim() !== "");
  if (!isFormValid) {
    alert("Please fill all the fields before downloading the invoice.");
    return;
  }

  const invoiceEl = invoiceRef.current;
  const prevOverflow = invoiceEl.style.overflowY;
  const prevMaxHeight = invoiceEl.style.maxHeight;
  invoiceEl.style.overflowY = "visible";
  invoiceEl.style.maxHeight = "none";

  const canvas = await html2canvas(invoiceEl);

  invoiceEl.style.overflowY = prevOverflow;
  invoiceEl.style.maxHeight = prevMaxHeight;
  
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imgProps = pdf.getImageProperties(imgData);
  const imgWidth = pdfWidth;
  const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pdfHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save('invoice.pdf');
};
  

  const total = selectedItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 ml-72">
      <div className="flex items-center justify-center w-[500px] min-h-[500px]">
        <div ref={invoiceRef} className="overflow-y-auto mr-10 bg-white border shadow-md p-6 w-[340px] min-h-[500px] max-h-[80vh] flex flex-col justify-between dark:bg-gray-800 text-gray-700 dark:text-white relative">
          <div>
            <div className="border-b pb-4 mb-4">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center">ARTSY FRAME STUDIO</h1>
              <p className="text-sm text-gray-500 dark:text-gray-300 text-center">Make all checks payable to Artsy India Pvt Ltd</p>
            </div>
            <div className="text-sm text-gray-700 dark:text-white mb-4 space-y-1">
              <p><strong>TO:</strong> {form.name}</p>
              <p><strong>EMAIL:</strong> {form.email}</p>
              <p><strong>PHONE:</strong> {form.phone}</p>
              <p><strong>ADDRESS:</strong> {form.address} {form.district} {form.state}</p>
              <p><strong>DELIVERY DATE:</strong>{form.date
                  ? new Date(form.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </p>
            </div>
            <table className="w-full text-sm border mt-4">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr className="border-b">
                  <th className="text-left p-2">QTY</th>
                  <th className="text-left p-2">DESCRIPTION</th>
                  <th className="text-left p-2">UNIT PRICE</th>
                  <th className="text-left p-2">LINE TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">{item.quantity}</td>
                    <td className="p-2">{item.title} ({item.size})</td>
                    <td className="p-2">Rs. {item.price}</td>
                    <td className="p-2">Rs. {item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="text-right mt-4 pr-2">
              <p className="font-semibold">UNIT TOTAL: Rs. {total}</p>
              <p className="font-semibold">DELIVERY CHARGE: Rs. 0</p>
              <p className="text-lg font-bold text-green-600">TOTAL: Rs. {total}</p>
            </div>
            <div className="text-center text-sm text-gray-500 dark:text-gray-300 mt-6">
              <p>Thank you for shopping with us!</p>
              <p>Artsy Frame Studio, Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
        </div>
   

      <div className="w-full md:w-3/4 bg-white border shadow-md p-6 self-start rounded-xl dark:bg-gray-800 text-gray-900 dark:text-white relative">
        <h2 className="text-xl font-bold mb-4">User Details</h2>
        <form className="space-y-3" onSubmit={e => { e.preventDefault(); /* handle submit here */ }}>
          {[
            ["Full Name", "name"],
            ["Email", "email"],
            ["Address", "address"],
            ["District", "district"],
            ["State", "state"],
            ["Phone No.", "phone"],
            ["Alternate Phone No.", "altPhone"],
            ["Delivery Date", "date", "date"],
          ].map(([label, name, type = "text"]) => (
            <div key={name}>
              <label className="text-sm font-medium">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
              />
            </div>
          ))}
          <button
            type="submit"
            onClick={handleDownload}
            className="mt-5 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Download Invoice
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bill;
