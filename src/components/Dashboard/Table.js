// import React from 'react';
// import { Table, Tag, Space } from 'antd';
// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         render: (text) => <a>{text}</a>,
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
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
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];

// const Tbl = () => <Table columns={columns} dataSource={data} />;

// export default Tbl;

// import "./WidgetLg.css"
import React from "react";
import "../Dashboard.css";
export default function Tbl() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };

    return (
        <div className="WidgetLg">
            <h3 className="widgetLgTitle">Job Status</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Deliverer</th>
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Document ID</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr>
                    <td className="widgetLgTr">Anne</td>
                    <td className="widgetCust">John</td>
                    <td className="widgetDocID">001</td>
                    <td className="widgetStatus"><Button type="Pending" /></td>
                </tr>
                <tr>
                    <td className="widgetLgTr">Anne</td>
                    <td className="widgetCust">John</td>
                    <td className="widgetDocID">019</td>
                    <td className="widgetStatus"><Button type="Declined" /></td>
                </tr>
                <tr>
                    <td className="widgetLgTr">Anne</td>
                    <td className="widgetCust">John</td>
                    <td className="widgetDocID">009</td>
                    <td className="widgetStatus"><Button type="Done" /></td>
                </tr>
                <tr>
                    <td className="widgetLgTr">Anne</td>
                    <td className="widgetCust">John</td>
                    <td className="widgetDocID">005</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr>
                    <td className="widgetLgTr">Anne</td>
                    <td className="widgetCust">John</td>
                    <td className="widgetDocID">001</td>
                    <td className="widgetStatus"><Button type="Pending" /></td>
                </tr>
                <tr>
                    <td className="widgetLgTr">Anne</td>
                    <td className="widgetCust">John</td>
                    <td className="widgetDocID">001</td>
                    <td className="widgetStatus"><Button type="Pending" /></td>
                </tr>
            </table>
        </div>
    );
}

