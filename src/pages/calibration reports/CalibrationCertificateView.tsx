import React from "react"

const CalibrationCertificateView = () => {

  // mock data (replace with API)
  const data = {
    customerName: "UNIVERSAL WEIGHING",
    address: "1 McGlone Street Mitcham 3132",
    location: "",
    contact: "",
    makeModel: "CAS SW-1C",
    capacity: "2kg x 0.5/1g",
    serial: "130753256",
    reportNo: "RPT001",
    loads: ["0g", "200g", "500g", "1000g", "2000g"],
    calibratedBy: "L. CHAPMAN",
    frequency: "90 Days",
    mpe: "0.5e",
    verificationDate: "2023-10-01",
    dateDue: "2024-01-01"
  }

  return (
    <div 
    id="print-area"
    className="bg-white text-sm text-black w-[210mm] h-[297mm] mx-auto p-[10mm] overflow-hidden">

        <button
        onClick={() => window.print()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded print:hidden"
      >
        Print PDF
      </button>

      {/* Header */}
      <div className="text-center border-b pb-2">
        <h1 className="text-xl font-bold">UNIVERSAL WEIGHING</h1>
        <div>1 Mcglone Street, Mitcham, VIC 3132</div>
        <div>Phone: (03) 9874 4000 Fax: (03) 9874 7722</div>
        <div>ABN: 94 063 128 844</div>

        <h2 className="mt-2 font-bold text-lg underline">
          TEST / CALIBRATION CERTIFICATE
        </h2>
      </div>

      {/* Customer Info */}
      <div className="mt-4 border">
        <div className="grid grid-cols-2 border-b">
          <div className="p-2 border-r"><b>Customer Name:</b> {data.customerName}</div>
          <div className="p-2"><b>Address:</b> {data.address}</div>
        </div>
        <div className="grid grid-cols-2 border-b">
          <div className="p-2 border-r"><b>Scale Location:</b> {data.location}</div>
          <div className="p-2"><b>Contact Name:</b> {data.contact}</div>
        </div>
      </div>

      {/* Report Info */}
      <div className="mt-4 border">
        <div className="grid grid-cols-5 text-center font-medium border-b">
          <div className="p-2 border-r">Report Number</div>
          <div className="p-2 border-r">Make & Model</div>
          <div className="p-2 border-r">Capacity</div>
          <div className="p-2 border-r">S/Number</div>
          <div className="p-2">ID</div>
        </div>
        <div className="grid grid-cols-5 text-center">
          <div className="p-2 border-r">{data.reportNo}</div>
          <div className="p-2 border-r">{data.makeModel}</div>
          <div className="p-2 border-r">{data.capacity}</div>
          <div className="p-2 border-r">{data.serial}</div>
          <div className="p-2">-</div>
        </div>
      </div>

      {/* Calibration Table */}
      <div className="mt-4 border">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border p-2">Load Applied</th>
              <th className="border p-2">Before Calibration</th>
              <th className="border p-2">Error +/-</th>
              <th className="border p-2">After Calibration</th>
              <th className="border p-2">Error +/-</th>
            </tr>
          </thead>
          <tbody>
            {data.loads.map((l, i) => (
              <tr key={i}>
                <td className="border p-2 text-center">{l}</td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Result */}
      <div className="mt-4 grid grid-cols-2 border text-center">
        <div className="p-3 border-r">
          <b>Before Calibration</b><br />PASS / FAIL
        </div>
        <div className="p-3">
          <b>After Calibration</b><br />PASS / FAIL
        </div>
      </div>

      {/* Comments */}
      <div className="mt-4 border p-3">
        <b>Comments:</b>
      </div>

      {/* Extra Info */}
      <div className="mt-4 border">
        <div className="grid grid-cols-3 text-center border-b">
          <div className="p-2 border-r">Frequency</div>
          <div className="p-2 border-r">Maximum Permissible Error</div>
          <div className="p-2">Verification Code</div>
        </div>
        <div className="grid grid-cols-3 text-center">
          <div className="p-2 border-r">{data.frequency}</div>
          <div className="p-2 border-r">{data.mpe}</div>
          <div className="p-2"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 border">
        <div className="grid grid-cols-3 text-center border-b">
          <div className="p-2 border-r">Scale Certified</div>
          <div className="p-2 border-r">Scale Used For Trade</div>
          <div className="p-2">Verification Date</div>
        </div>
        <div className="grid grid-cols-3 text-center border-b">
          <div className="p-2 border-r">YES / NO</div>
          <div className="p-2 border-r">YES / NO</div>
          <div className="p-2">{data.verificationDate}</div>
        </div>

        <div className="grid grid-cols-3 text-center">
          <div className="p-2 border-r">
            Calibrated By: {data.calibratedBy}
          </div>
          <div className="p-2 border-r">Date:</div>
          <div className="p-2">Date Due: {data.dateDue}</div>
        </div>
      </div>

      {/* Note */}
      <div className="text-xs mt-4 text-center">
        The test weights used for calibration have been checked and verified under Regulation 13.
      </div>

    </div>
  )
}

export default CalibrationCertificateView