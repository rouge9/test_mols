// // BaseOssTable.tsx
// import React from "react";
// import { useQuery } from "@apollo/client";
// import { useTable } from "@tanstack/react-table";
// import { GET_BASE_OSSC } from "./queries"; // Import your query

// const BaseOssTable: React.FC = () => {
//   const { loading, error, data } = useQuery(GET_BASE_OSSC);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   // Prepare the data for the table
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "ID",
//         accessor: "id", // accessor is the "key" in the data
//       },
//       {
//         Header: "Name",
//         accessor: "name",
//       },
//       {
//         Header: "Region ID",
//         accessor: (row: any) => row.region.id, // Access nested data
//       },
//       {
//         Header: "Description",
//         accessor: "description",
//       },
//     ],
//     []
//   );

//   const tableData = React.useMemo(() => data.base_ossc, [data]);

//   const tableInstance = useTable({ columns, data: tableData });

//   return (
//     <table>
//       <thead>
//         {tableInstance.getHeaderGroups().map((headerGroup) => (
//           <tr key={headerGroup.id}>
//             {headerGroup.headers.map((column) => (
//               <th key={column.id}>{column.render("Header")}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody>
//         {tableInstance.getRowModel().rows.map((row) => (
//           <tr key={row.id}>
//             {row.getVisibleCells().map((cell) => (
//               <td key={cell.id}>{cell.render("Cell")}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default BaseOssTable;
