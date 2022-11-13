// import React, { useMemo } from 'react'
// import {useTable} from 'react-table'
// import MOCK_DATA from './Mock_Data.json'
// import {Columns} from './Columns'
// import './Table.css'

// const Table = () => {

//     const columns = useMemo(()=> Columns,[]) 
//     const data = useMemo(()=> MOCK_DATA,[]) 

//     const tableInstance =  useTable({
//         columns,
//         data
//     })

//     const{
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRows
//     } = tableInstance

//   return (
//     <table {...getTableProps()}>
//     <thead>
//         {headerGroups.map((headerGroup)=>(
//             <tr {...headerGroup.getHeaderGroupProps()}>
//                 {
//                     headerGroup.headers.map( columns => (
//                         <th {...column.getHeaderProps()}>{column.render('Header')}</th>

//                     ))
//                 }
//             </tr>
//         ))}
        
//     </thead>
//     <tbody {...getTableBodyProps()}>
//         {
//             rows.map((row)=>{
//                 prepareRow(row)
//                 return(

//                     <tr{...row.getRowProps()}>
//                         {row.cells.map((cell)=>{
//                             return (<td{...cell.getCellProps()}>{cell.render('Cell')}</td>)
//                         })}
//                     </tr>
//                 )
//             })
//         }
//     </tbody>
// </table>
//   )

// }

// export default Table


// import React from 'react'
// import './Table.css'

// import Edit from "../../assets/EditButton.png"
// import Delete from "../../assets/DeleteButton.png"
// export default function Table() {
   
//   return (
//     <div className='Table'>
//         <table>
//             <tr>
//                 <th>No.</th>
//                 <th>Shop Number</th>
//                 <th>Shop Name</th>
//                 <th>Owner Name</th>
//                 <th>Purpose</th>
//                 <th>Demand</th>
//                 <th>Floor</th>
//                 <th>Area</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//             </tr>
//             <tr>
//                 <td>1</td>
//                 <td>Xzone - 101</td>
//                 <td>Germany</td>
//                 <td>Fatima Bilal</td>
//                 <td><button className="PurposetagRent">For Rent</button></td>
//                 <td>50k</td>
//                 <td>1st</td>
//                 <td>200sq</td>
//                 <td><button className="StatustagAvailable">Available</button></td>
//                 <td><img src={Edit} alt="" className="edit" /><img src={Delete} alt="" className="delete" /></td>
            
                
                
//             </tr>
//             <tr>
//                 <td>2</td>
//                 <td>Xzone - 102</td>
//                 <td>Germany</td>
//                 <td>Fatima Bilal</td>
//                 <td><button className="PurposetagSell">For Sell</button></td>
//                 <td>50k</td>
//                 <td>1st</td>
//                 <td>200sq</td>
//                 <td><button className="StatustagAvailable">Available</button></td>
//                 <td><img src={Edit} alt="" className="edit" /><img src={Delete} alt="" className="delete" /></td>
//             </tr>
//             <tr>
//                 <td>3</td>
//                 <td>Xzone - 103</td>
//                 <td>Germany</td>
//                 <td>Fatima Bilal</td>
//                 <td><button className="PurposetagRent">For Rent</button></td>
//                 <td>50k</td>
//                 <td>1st</td>
//                 <td>200sq</td>
//                 <td><button className="StatustagAvailable">Available</button></td>
//                 <td><img src={Edit} alt="" className="edit" /><img src={Delete} alt="" className="delete" /></td>
//             </tr>
//             <tr>
//                 <td>4</td>
//                 <td>Xzone - 104</td>
//                 <td>Germany</td>
//                 <td>Fatima Bilal</td>
//                 <td><button className="PurposetagRent">For Rent</button></td>
//                 <td>50k</td>
//                 <td>1st</td>
//                 <td>200sq</td>
//                 <td><button className="StatustagNotAvailable">Not Available</button></td>
//                 <td><img src={Edit} alt="" className="edit" /><img src={Delete} alt="" className="delete" /></td>
//             </tr>
//             <tr>
//                 <td>5</td>
//                 <td>Xzone - 105</td>
//                 <td>Germany</td>
//                 <td>Fatima Bilal</td>
//                 <td><button className="PurposetagSell">For Sell</button></td>
//                 <td>50k</td>
//                 <td>1st</td>
//                 <td>200sq</td>
//                 <td><button className="StatustagAvailable">Available</button></td>
//                 <td><img src={Edit} alt="" className="edit" /><img src={Delete} alt="" className="delete" /></td>
//             </tr>
//             <tr>
//                 <td>6</td>
//                 <td>Xzone - 106</td>
//                 <td>Germany</td>
//                 <td>Fatima Bilal</td>
//                 <td><button className="PurposetagSell">For Sell</button></td>
//                 <td>50k</td>
//                 <td>1st</td>
//                 <td>200sq</td>
//                 <td><button className="StatustagNotAvailable">Not Available</button></td>
//                 <td><img src={Edit} alt="" className="edit" /><img src={Delete} alt="" className="delete" /></td>
//             </tr>
//         </table>
//         <button className="Purposetag">For Rent</button>
        
//     </div>
//   )
// }


import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHead";
import './Table.css'

const Table = ({ theadData, tbodyData, customClass }) => {
    return (
        <table className={customClass}  >
            <thead>
                <tr>
                    {theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items} />;
                })}
            </tbody>
        </table>
    );
};

export default Table;