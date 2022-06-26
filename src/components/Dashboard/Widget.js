// import React from 'react';
// import { Table, Tag } from 'antd';
// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         render: (text) => <a>{text}</a>,
//     },
//     {
//         title: 'Tags',
//         key: 'tags',
//         dataIndex: 'tags',
//         render: (_, { tags }) => (
//             <>
//                 {tags.map((tag) => {
//                     let color = tag.length > 5 ? 'geekblue' : 'green';

//                     if (tag === 'loser') {
//                         color = 'volcano';
//                     }

//                     return (
//                         <Tag color={color} key={tag}>
//                             {tag.toUpperCase()}
//                         </Tag>
//                     );
//                 })}
//             </>
//         ),
//     },
// ];
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
        
//     },
// ];

// const Widget = () => <Table columns={columns} dataSource={data} />;

// // function Widget (){
// //     return(
// // <div></div>
// //     );
// // }


// export default Widget;

import "../../screens/Branch/dashboard.css";
import { Button } from "antd";
// import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
    return (
        
        <div className="WidgetLg">
        <h2 className="widgetLgTitle">Job Status</h2>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Employee</th>
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Document ID</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr>
                <td className="widgetLgTr">Anne</td>
                <td className="widgetCust">John</td>
                <td className="widgetDocID">001</td>
                <td className="widgetStatus"></td>
            </tr>
            <tr>
                <td className="widgetLgTr">Anne</td>
                <td className="widgetCust">John</td>
                <td className="widgetDocID">019</td>
                <td className="widgetStatus"></td>
            </tr>
            <tr>
                <td className="widgetLgTr">Anne</td>
                <td className="widgetCust">John</td>
                <td className="widgetDocID">009</td>
                <td className="widgetStatus"></td>
            </tr>
            <tr>
                <td className="widgetLgTr">Anne</td>
                <td className="widgetCust">John</td>
                <td className="widgetDocID">005</td>
                <td className="widgetLgStatus">
                    
                </td>
            </tr>
            <tr>
                <td className="widgetLgTr">Anne</td>
                <td className="widgetCust">John</td>
                <td className="widgetDocID">001</td>
                <td className="widgetStatus"></td>
            </tr>
            <tr>
                <td className="widgetLgTr">Anne</td>
                <td className="widgetCust">John</td>
                <td className="widgetDocID">001</td>
                <td className="widgetStatus"></td>
            </tr>
        </table>
    </div>
    )
}

