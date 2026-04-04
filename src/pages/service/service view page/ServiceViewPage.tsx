const ServiceViewPage = () => {
  return (
     <div 
    id="print-area"
    className="bg-white text-sm text-black w-[210mm] min-h-[297mm] mx-auto p-[10mm]">


      {/* Paper */}
      <div className="bg-white max-w-5xl mx-auto p-6 text-sm">

        
      
      <button
        onClick={() => window.print()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded print:hidden"
      >
        Print PDF
      </button>

        {/* Header */}
        <div className="text-center border-b pb-4">
          <h1 className="text-2xl font-bold">UNIVERSAL WEIGHING</h1>
          <p className="text-xs">THE AUSTRALIAN WEIGH</p>
          <p className="text-xs mt-1">
            ABN: 94 063 128 844 Tel: 1300 669 996 24Hrs 7 Days
          </p>
        </div>

        {/* Top Info */}
        <div className="grid grid-cols-2 mt-4 gap-4">
          <div>Date: 2026-03-30</div>
          <div className="text-right">No: 12299</div>
        </div>

        <div className="grid grid-cols-2 mt-2 gap-4">
          <div>Company: UNIVERSAL WEIGHING</div>
          <div>Contact: -</div>
        </div>

        <div className="mt-1">
          Address: 1 McGlone Street Mitcham 3132
        </div>

        {/* Scale Details */}
        <div className="mt-4 border p-3">
          <h3 className="font-semibold mb-2">Scale Details</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>Make: ____________</div>
            <div>Capacity: ____________</div>
            <div>Model: ____________</div>
            <div>Serial No: ____________</div>
          </div>
        </div>

        {/* Comments */}
        <div className="mt-4 border p-3 min-h-[80px]">
          <strong>Customer Comments:</strong>
          <p className="mt-2">
            Check & calibrate scales
          </p>
        </div>

        {/* Loan Section */}
        <div className="mt-4 border p-3">
          <h3 className="font-semibold mb-2">Loan / Hire Scale Details</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              Make: ____________
              <br />
              Model: ____________
              <br />
              Capacity: ____________
              <br />
              Serial No: ____________
            </div>

            <div>
              Signed: ____________
              <br />
              Signed Date: ____________
              <br />
              Returned: YES / NO
              <br />
              Return Date: ____________
            </div>
          </div>
        </div>

        {/* Trade Section */}
        <div className="mt-4 border p-2 text-xs flex justify-between">
          <div>SCALES USED FOR TRADE: YES / NO</div>
          <div>SCALES CERTIFIED: YES / NO</div>
          <div>TMV CERTIFICATE NO:</div>
        </div>

        {/* Description */}
        <div className="mt-4 border p-3 min-h-[120px]">
          <strong>Description:</strong>
        </div>

        {/* Work Table */}
        <div className="mt-4 border">

          <table className="w-full text-xs border-collapse">

            <thead>
              <tr className="bg-slate-100">
                <th className="border p-2">Date</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Hours Worked</th>
                <th className="border p-2">Technician</th>
              </tr>
            </thead>

            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td className="border p-2 h-8"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

        {/* Signature */}
        <div className="mt-6 flex justify-between">
          <div>
            Customer Signature: ______________________
            <br />
            <span className="text-xs">
              Work carried out satisfactorily
            </span>
          </div>

          <div>
            Date: __________________
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs border-t pt-3">
          <p>
            MEDICAL SCALES - INDUSTRIAL SYSTEMS - Q.A. SERVICING - WIRELESS SYSTEMS
          </p>
          <p className="mt-2">
            All goods remain the property of Universal Weighing until payment made in full
          </p>
        </div>

      </div>
    </div>
  )
}

export default ServiceViewPage