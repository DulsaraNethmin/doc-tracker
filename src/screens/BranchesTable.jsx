import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
//import "../components/User.css"
import { useNavigate } from "react-router-dom";
const originData = [];

const BranchesTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const navigate = useNavigate();

  const isEditing = (record) => record.key === editingKey;

  useEffect(() => {
    var data = user_data();
    console.log(data);
    setData();
  }, []);

  const user_data = async () => {
    try {
      //console.log('aaaaaa');
      //     var response=await axios.get('http://localhost:8080/user/get/all?branch_id=782da681-3ee8-4ba6-acb9-607eee52e0f6');
      //     console.log(response.data);
      //     const obj=response.data.map((e)=>{
      //       return(
      //         {
      //           "name":e.name,
      //           "Usrname":e.username,
      //           "email":e.email,
      //           "Job role":e.role,
      //         }
      //       );
      //     })
      //     setData(obj);
      //     return response.data;
      //   }catch(e){
      //     console.log(e);
      //   }
      // }
      // const columns = [
      //   {
      //     title: 'Name',
      //     dataIndex: 'name',
      //     //width: '25%',
      //     editable: true,
      //   },
      //   {
      //     title: 'Usrname',
      //     dataIndex: 'Usrname',
      //     //width: '15%',
      //     editable: true,
      //   },
      //   {
      //     title: 'email address',
      //     dataIndex: 'email',
      //     //width: '20%',
      //     editable: true,
      //   },
      //   {
      //       title: 'Job role',
      //       dataIndex: 'Job role',
      //       //width: '25%',
      //       editable: true,
      //     },
      //   {
      //     title: 'Profile',
      //     dataIndex: 'Profile',
      //     render: (_, record) => {
      //       const editable = isEditing(record);
      //       return (
      //         <Typography.Link disabled={editingKey !== ''} onClick={() => navigate('/user/profile',{state:{}})}>
      //           View
      //         </Typography.Link>
      //       );
      //     },
      //   },
      // ];


      // let data = {
      //   branch_id:localStorage.getItem("branch_id"),
      // };
      // console.log(data);
      // let response = await axios.post(
      //   "http://localhost:8080/user/add",
      //   data
      // );

      var data = localStorage.getItem("organization_id");

      var response = await axios.get(
        `http://localhost:8080/organization/get/all?organization_id=${data}`
      );
      //console.log(response.data);
      const obj = response.data.map((e) => {
        return {
          Branch_Name: e.b_name,
          Address1: e.b_number,
          Address2: e.b_street,
          Address3: e.b_town,
          Br_Owner: e.name,
          Br_Owner_Username: e.username,
          Br_Owner_Password: e.password,
          
        };
      });
      setData(obj);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
      {
        title: "Branch Name",
        dataIndex: "Branch_Name",
        //width: '25%',
        editable: true,
      },
      {
        title: "Address1",
        dataIndex: "Address1",
        //width: '15%',
        editable: true,
      },
      {
        title: "Address2",
        dataIndex: "Address2",
        //width: '20%',
        editable: true,
      },
      {
        title: "Address3",
        dataIndex: "Address4",
        //width: '25%',
        editable: true,
      },
      {
        title: "Br. Owner",
        dataIndex: "Br_Owner",
        //width: '25%',
        editable: true,
      },
      {
        title: "Br. Owner Username",
        dataIndex: "Br_Owner_Username",
        //width: '25%',
        editable: true,
      },
      {
        title: "Br. Owner Password",
        dataIndex: "Br_Owner_Password",
        //width: '25%',
        editable: true,
      },
      
    ];
  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     //width: '25%',
  //     editable: true,
  //   },
  //   {
  //     title: "Usrname",
  //     dataIndex: "Usrname",
  //     //width: '15%',
  //     editable: true,
  //   },
  //   {
  //     title: "email address",
  //     dataIndex: "email",
  //     //width: '20%',
  //     editable: true,
  //   },
  //   {
  //     title: "Job role",
  //     dataIndex: "Job role",
  //     //width: '25%',
  //     editable: true,
  //   },
  //   {
  //     title: "Profile",
  //     dataIndex: "Profile",
  //     render: (_, record) => {
  //       const editable = isEditing(record);
  //       return (
  //         <Typography.Link
  //           disabled={editingKey !== ""}
  //           onClick={() => navigate("/user/profile", { state: {} })}
  //         >
  //           View
  //         </Typography.Link>
  //       );
  //     },
  //   },
  // ];

  const mergedColumns = columns.map((col) => {
    return {
      ...col,
    };
  });

  return (
    <div className="Table">
      <h2>Branch Details</h2>
      <Form form={form} component={false}>
        <Table
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
        />
      </Form>
    </div>
  );
};

export default BranchesTable;

// import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
// import React, { useState } from "react";
// const originData = [];

// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

// const EditableCell = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{
//             margin: 0,
//           }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`,
//             },
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children
//       )}
//     </td>
//   );
// };

// const BranchesTable = () => {
//   const [form] = Form.useForm();
//   const [data, setData] = useState(originData);
//   const [editingKey, setEditingKey] = useState("");

//   const isEditing = (record) => record.key === editingKey;

//   const edit = (record) => {
//     form.setFieldsValue({
//       name: "",
//       age: "",
//       address: "",
//       ...record,
//     });
//     setEditingKey(record.key);
//   };

//   const cancel = () => {
//     setEditingKey("");
//   };

//   const save = async (key) => {
//     try {
//       const row = await form.validateFields();
//       const newData = [...data];
//       const index = newData.findIndex((item) => key === item.key);

//       if (index > -1) {
//         const item = newData[index];
//         newData.splice(index, 1, { ...item, ...row });
//         setData(newData);
//         setEditingKey("");
//       } else {
//         newData.push(row);
//         setData(newData);
//         setEditingKey("");
//       }
//     } catch (errInfo) {
//       console.log("Validate Failed:", errInfo);
//     }
//   };

//   const columns = [
//     {
//       title: "name",
//       dataIndex: "name",
//       width: "25%",
//       editable: true,
//     },
//     {
//         title: "username",
//         dataIndex: "username",
//         width: "25%",
//         editable: true,
//       },
//       {
//         title: "password",
//         dataIndex: "password",
//         width: "25%",
//         editable: true,
//       },
//     {
//       title: "address 1",
//       dataIndex: "address 1",
//       width: "40%",
//       editable: true,
//     },
//     {
//         title: "address 2",
//         dataIndex: "address 2",
//         width: "40%",
//         editable: true,
//       },
//       {
//         title: "address 3",
//         dataIndex: "address 3",
//         width: "40%",
//         editable: true,
//       },
//     {
//       title: "operation",
//       dataIndex: "operation",
//       render: (_, record) => {
//         const editable = isEditing(record);
//         return editable ? (
//           <span>
//             <Typography.Link
//               onClick={() => save(record.key)}
//               style={{
//                 marginRight: 8,
//               }}
//             >
//               Save
//             </Typography.Link>
//             <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//               <a>Cancel</a>
//             </Popconfirm>
//           </span>
//         ) : (
//           <Typography.Link
//             disabled={editingKey !== ""}
//             onClick={() => edit(record)}
//           >
//             Edit
//           </Typography.Link>
//         );
//       },
//     },
//   ];
//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }

//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         inputType: col.dataIndex === "age" ? "number" : "text",
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//       }),
//     };
//   });
//   return (
//     <div>
//       <Form form={form} component={false}>
//         <Table
//           components={{
//             body: {
//               cell: EditableCell,
//             },
//           }}
//           bordered
//           dataSource={data}
//           columns={mergedColumns}
//           rowClassName="editable-row"
//           pagination={{
//             onChange: cancel,
//           }}
//         />
//       </Form>
//     </div>
//   );
// };

// export default BranchesTable;
