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


import "../Dashboard.css"
// import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
    return (
        <div className="WidgetSm">
            <span className="widgetSmTitle">Available Deliverers</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmName">
                        <div className="span widgetSmname">John </div>
                    </div>
                    <button className="widgetSmButton">
                        {/* <VisibilityIcon/> */}
                        Display
                    </button>
                </li>


                <li className="widgetSmListItem">
                    <img src="https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmName">
                        <div className="span widgetSmname">John </div>
                    </div>
                    <button className="widgetSmButton">
                        {/* <VisibilityIcon className="widgetSmIcon"/> */}
                        Display
                    </button>
                </li>



                <li className="widgetSmListItem">
                    <img src="https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmName">
                        <div className="span widgetSmname">John </div>
                    </div>
                    <button className="widgetSmButton">
                        {/* <VisibilityIcon/> */}
                        Display
                    </button>
                </li>



                <li className="widgetSmListItem">
                    <img src="https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmName">
                        <div className="span widgetSmname">John </div>
                    </div>
                    <button className="widgetSmButton">
                        {/* <VisibilityIcon/> */}
                        Display
                    </button>
                </li>

 

                <li className="widgetSmListItem">
                    <img src="https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmName">
                        <div className="span widgetSmname">John </div>
                    </div>
                    <button className="widgetSmButton">
                        {/* <VisibilityIcon/> */}
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

