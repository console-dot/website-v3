// import React from "react";
// import { Link } from "react-router-dom";

// export const Breadcrumb = ({ section = "" }) => { // Provide a default value for the section prop
//   // Split the section string into an array of sections
//   const sections = section.split("/").filter((s) => s !== "");

//   return (
//     <div className="bg-gray-200 p-4">
//       <nav className="text-sm">
//         <ol className="list-none p-0 inline-flex">
//           {sections.map((item, index) => (
//             <li key={index} className="flex items-center">
//               {index !== 0 && <span className="mx-2">/</span>}
//               {index === sections.length - 1 ? (
//                 <span className="text-gray-500">{item}</span>
//               ) : (
//                 <Link
//                   to={`/${sections.slice(0, index + 1).join("/")}`}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   {item}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ol>
//       </nav>
//     </div>
//   );
// };
