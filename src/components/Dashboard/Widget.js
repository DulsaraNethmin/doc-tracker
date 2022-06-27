


import "../../screens/Branch/dashboard.css";
import "../User.css"
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import "../components/User.css"
import { useNavigate } from "react-router-dom"
const originData = [];
const Tbl =()=> {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const navigate = useNavigate();
    const [table_body, settable_body] = useState([]);

    const isEditing = (record) => record.key === editingKey;

    useEffect(() => {
        var data = job_data();
        console.log(data);
        //setData();
    }, [])

    

    const job_data = async () => {
        try {
            var response3 = await axios.get(`http://localhost:8080/user/get/customer?branch_id=${localStorage.getItem("branch_id")}`);

            console.log(response3.data);
            const obj = response3.data.map((e) => {
                return (

                    <div className="WidgetLg">
                           
                             <table >
                                 <tr className="widgetLgTr">

                                 <td className="widgetLgTh"><img src={e.image_url} alt=""  className="widgetSmImg"/></td>
                                     <td>  <h4 className="widgetLgTitle">{e.name}</h4></td>
                                </tr>
                                
                             </table>
                         </div>
                );
            })
            setData(obj);
            settable_body(obj);
            return response3.data;
        } catch (e) {
            console.log(e);
        }
    }
    const columns = [
        {
        //   title: 'id',
          dataIndex: 'id',
          width: '50%',
          
        },
        {
        //   title: 'Name',
          dataIndex: 'name',
          width: '50%',
      
        },]

    const mergedColumns = columns.map((col) => {
        return {
          ...col,
        };
      });
    
      return (
        <div className='Table'>
          
            <h2>Customers</h2>
            <Form form={form} component={false}>
    
         
          <table>
      
            {table_body}
          </table>
        </Form>
        </div>
      )
}

export default Tbl;


