import React, { useState } from 'react';
import "./pages.css";
import {
    Form,
    Input,
    Button,
    DatePicker,
    Row,
    Col,
    Card,
    Image
} from 'antd';
// import "../components/User.css"

const { RangePicker } = DatePicker;
const { TextArea } = Input;

// const UserProfile = ({ props }) => {
//     const [componentDisabled, setComponentDisabled] = useState(true);

//     const onFormLayoutChange = ({ disabled }) => {
//         setComponentDisabled(disabled);
//     };


const UserProfile = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div className='Background'>
            <div className='Cards'>
                <Row gutter={16}>

                    <Col span={5}>
                        <label htmlFor=""></label><br/><br/>
                        <Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        /><br />
                        <label htmlFor=""><h2>User Name</h2></label>
                    </Col>

                    <Col span={11}>
                        {/* <Card bordered={false}> */}
                            <Form
                                labelCol={{
                                    span: 4,
                                }}
                                wrapperCol={{
                                    span: 14,
                                }}
                                layout="horizontal"
                                initialValues={{
                                    size: componentSize,
                                }}
                                onValuesChange={onFormLayoutChange}
                                size={componentSize}
                            >
                                <Form.Item name="customer_id">

                                </Form.Item>
                                <Form.Item label="Id" name="customer_id">
                                    <label htmlFor=""><Input /></label>
                                </Form.Item>

                                <Form.Item label="Name" name="id">
                                    <label htmlFor=""><Input /></label>
                                </Form.Item>

                                <Form.Item label="User Name" name="admin_id">
                                    <label htmlFor=""><Input /></label>
                                </Form.Item>

                                <Form.Item label="Email" name="customer_id">
                                    <label htmlFor=""><Input /></label>
                                </Form.Item>

                                <Form.Item label="Telephone" name="customer_id">
                                    <label htmlFor=""><Input /></label>
                                </Form.Item>
                                <Form.Item label="Job role" name="customer_id">
                                    <label htmlFor=""><Input /></label>
                                </Form.Item>

                            </Form>
                            <Button>Save changes</Button>
                        {/* </Card> */}
                    </Col>


                </Row>
                <div className='saveButton'>
                    {/* <Button type="primary">Save Changes</Button> */}
                </div>
            </div>
        </div>
    );
};

export default () => <UserProfile />;