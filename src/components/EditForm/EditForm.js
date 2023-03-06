import React from 'react';
import "./EditForm.css";
import { Button, Form, Input,Select } from 'antd';
import {v4 as uuid} from "uuid";
// import {PhoneOutlined,UserOutlined,MailOutlined} from '@ant-design/icons';
import { FaUserCircle } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";



export const EditForm = ({eachTableRow,handleCancel,setEditedValues}) => {
  
const {Option}=Select;
  return (
    <Form className='edited-form-container' key={uuid()} autoComplete='on' onFinish={(values)=>{
        setEditedValues(values,eachTableRow); 

        // console.log(values)
        // setFinish(true)
        }} initialValues={{name:eachTableRow.name,email:eachTableRow.email,location:eachTableRow.location,phoneNumber:eachTableRow.phoneNumber,title:eachTableRow.title,birthday:eachTableRow.birthday,status:eachTableRow.status,lastOnline:eachTableRow.lastOnline}}>
        <Form.Item label="Name" name="name" labelCol={{span:24}}>
            <Input prefix={<FaUserCircle />}  />
        </Form.Item>
        <Form.Item  label="Email" name="email" labelCol={{span:24}} >
            <Input prefix={<GrMail />}/>
        </Form.Item>
        <Form.Item  label="Location" name="location" labelCol={{span:24}}>
            <Input prefix={<ImLocation/>} />
        </Form.Item>
        <Form.Item  label="Phone Number" name="phoneNumber" labelCol={{span:24}}>
            <Input prefix={<BsTelephoneFill />} />
        </Form.Item>
        <Form.Item  label="Title" name="title" labelCol={{span:24}}>
            <Input prefix={<BsTelephoneFill />} />
        </Form.Item>
        <Form.Item  label="Birthday" name="birthday" labelCol={{span:24}}>
            <Input />
        </Form.Item>
        <Form.Item  label="Status" name="status" labelCol={{span:24}}>
            {/* <Input defaultValue={item.status}/> */}
            <Select>
              <Option value="Active">Active</Option>
              <Option value="Blocked">Blocked</Option>
            </Select>
        </Form.Item>
        <Form.Item  label="LastOnline" name="lastOnline" labelCol={{span:24}}>
            <Input/>
        </Form.Item>
        {/* <div className='wallet-button-container'> */}
        <Form.Item>
          <Button type="primary" onClick={handleCancel} htmlType="submit">Save</Button>
        </Form.Item>
        {/* </div>  */}
    </Form>
  )
}
