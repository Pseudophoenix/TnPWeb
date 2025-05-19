import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const StatisticsDashboard = ({title}) => {
  // Dummy data for pie chart
  const pieData = [
    { name: 'Completed', value: 400 },
    { name: 'In Progress', value: 300 },
    { name: 'Pending', value: 200 },
    { name: 'On Hold', value: 100 },
  ];

  // Dummy data for bar chart
  const barData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
  ];

  // Color scheme matching the timeline gradient
  const COLORS = ['#2ecc71', '#27ae60', '#2980b9', '#3498db'];
  const barColor = 'url(#barGradient)';

  return (
    <div className="card-container-about-message">
      <div className="about-message">
        <div className="min-h-screen bg-gray-50" style={{padding:" 4rem 4rem"}}>
          <div className="max-w-6xl mx-auto">
            {/* <h1 className="text-3xl font-bold mb-8 text-[#2c3e50]">Placement Statistics</h1> */}
<h2 className="team-profiles__heading">{title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pie Chart Card */}
              <div className="bg-white rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.12)] p-6">
                <h2 className="text-xl font-semibold mb-4 text-[#2c3e50]">Task Distribution</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bar Chart Card */}
              <div className="bg-white rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.12)] p-6">
                <h2 className="text-xl font-semibold mb-4 text-[#2c3e50]">Monthly Progress</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={barData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#2980b9" stopOpacity={0.8} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill={barColor} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Total Tasks', value: '1,024', change: '+12%' },
                { title: 'Completion Rate', value: '78%', change: '+5%' },
                { title: 'Avg. Time', value: '3.2 days', change: '-0.5' },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-[#2ecc71] to-[#2980b9] rounded-lg p-6 text-white shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <div className="flex items-end justify-between mt-2">
                    <span className="text-3xl font-bold">{item.value}</span>
                    <span className="text-sm bg-white/20 rounded-full px-3 py-1">{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
StatisticsDashboard.defaultProps = {
  // pdfSrc: './hindu-rashtra-darshan-en-v002.pdf',
  title: 'Default'
};
export default StatisticsDashboard;


// import React, { useState, useRef } from 'react';
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const DocumentViewer = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [scale, setScale] = useState(1.0);
//   const [file, setFile] = useState(null);
//   const [isWordView, setIsWordView] = useState(true);
//   const fileInputRef = useRef(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//     setPageNumber(1);
//   };

//   const changePage = (offset) => {
//     setPageNumber(prevPageNumber => Math.max(1, Math.min(prevPageNumber + offset, numPages)));
//   };

//   const changeScale = (newScale) => {
//     setScale(Math.max(0.5, Math.min(newScale, 2.0)));
//   };

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div className="card-container-about-message">
//       <div className="about-message">
//         <div className="min-h-screen p-8 bg-gray-50">
//           <div className="max-w-6xl mx-auto">
//             <h1 className="text-3xl font-bold mb-8 text-[#2c3e50]">Document Viewer</h1>

//             <div className="bg-white rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.12)] p-6">
//               {/* Toolbar */}
//               <div className="flex flex-wrap items-center justify-between mb-6 p-3 bg-gray-100 rounded-lg">
//                 <div className="flex space-x-2 mb-2 sm:mb-0">
//                   <button 
//                     onClick={triggerFileInput}
//                     className="px-3 py-1 bg-gradient-to-r from-[#2ecc71] to-[#2980b9] text-white rounded hover:opacity-90 transition"
//                   >
//                     Open File
//                   </button>
//                   <input
//                     type="file"
//                     ref={fileInputRef}
//                     onChange={handleFileChange}
//                     accept=".pdf,.doc,.docx,.txt"
//                     className="hidden"
//                   />
//                   <button 
//                     onClick={() => setIsWordView(!isWordView)}
//                     className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//                   >
//                     {isWordView ? 'PDF View' : 'Word View'}
//                   </button>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <button 
//                     onClick={() => changeScale(scale - 0.1)}
//                     disabled={scale <= 0.5}
//                     className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition disabled:opacity-50"
//                   >
//                     -
//                   </button>
//                   <span className="text-sm">{(scale * 100).toFixed(0)}%</span>
//                   <button 
//                     onClick={() => changeScale(scale + 0.1)}
//                     disabled={scale >= 2.0}
//                     className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition disabled:opacity-50"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {file && (
//                   <div className="flex items-center space-x-2">
//                     <button 
//                       onClick={() => changePage(-1)}
//                       disabled={pageNumber <= 1}
//                       className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition disabled:opacity-50"
//                     >
//                       Previous
//                     </button>
//                     <span className="text-sm">
//                       Page {pageNumber} of {numPages || '--'}
//                     </span>
//                     <button 
//                       onClick={() => changePage(1)}
//                       disabled={pageNumber >= (numPages || 1)}
//                       className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition disabled:opacity-50"
//                     >
//                       Next
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* Document Display Area */}
//               <div className={`border rounded-lg overflow-hidden ${isWordView ? 'bg-white' : 'bg-gray-100'}`}>
//                 {file ? (
//                   file.type === 'application/pdf' || file.name.endsWith('.pdf') ? (
//                     <div className={`p-4 ${isWordView ? 'bg-white' : 'bg-gray-50'}`}>
//                       <div className="flex justify-center">
//                         <Document
//                           file={file}
//                           onLoadSuccess={onDocumentLoadSuccess}
//                           loading={<div className="text-center py-8">Loading PDF...</div>}
//                         >
//                           <Page 
//                             pageNumber={pageNumber} 
//                             scale={scale}
//                             renderTextLayer={!isWordView}
//                             renderAnnotationLayer={!isWordView}
//                             className={isWordView ? 'shadow-md' : ''}
//                           />
//                         </Document>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className={`p-8 ${isWordView ? 'bg-white' : 'bg-gray-50'}`}>
//                       <div className={`max-w-4xl mx-auto ${isWordView ? 'bg-white p-8 shadow-md' : ''}`}>
//                         <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">{file.name}</h3>
//                         <p className="text-gray-600">
//                           {file.name.endsWith('.txt') ? (
//                             <span>Text file content would be displayed here in a Word-like interface.</span>
//                           ) : (
//                             <span>Word document content would be rendered here with formatting preserved.</span>
//                           )}
//                         </p>
//                         <div className="mt-6 text-center py-12 border-t border-gray-200">
//                           <p className="text-gray-500">
//                             Note: This is a demo. In a real application, you would use a library like 
//                             mammoth.js for .docx or extract text from .txt files.
//                           </p>
//                           <button 
//                             onClick={() => setIsWordView(!isWordView)}
//                             className="mt-4 px-4 py-2 bg-gradient-to-r from-[#2ecc71] to-[#2980b9] text-white rounded hover:opacity-90 transition"
//                           >
//                             Toggle View Mode
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 ) : (
//                   <div className="text-center py-16 bg-gray-50">
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
//                       />
//                     </svg>
//                     <h3 className="mt-2 text-lg font-medium text-gray-900">No document selected</h3>
//                     <p className="mt-1 text-gray-500">Upload a PDF or Word document to view it here.</p>
//                     <div className="mt-6">
//                       <button
//                         onClick={triggerFileInput}
//                         className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#2ecc71] to-[#2980b9] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2980b9]"
//                       >
//                         <svg
//                           className="-ml-1 mr-2 h-5 w-5"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                           aria-hidden="true"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                         Upload Document
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentViewer;