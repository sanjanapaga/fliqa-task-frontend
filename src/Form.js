import React from 'react'
import {useState} from 'react'
//import {Input,Form,Button} from 'antd'

const UserForm=()=>{
    const [name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

const handleSubmit=async(e)=>{
   e.preventDefault()
const formData={
    name,
    email,
    password

}
 const response=await axios.post('http://localhost:3001/api/user')
 
}

 return (
    // <Form onFinish={onFinish}>
    // <Form.item label="name" name="name" 
    // rules={[{ required: true, message: 'Please enter your name' }]}>
    // <Input />
    // </Form.item>
    // <Form.item label="email" name="email"
    // rules={[{required:true, meassage:"please enter your email"}]}>
    // <Input />
    // </Form.item>
    // <Form.item label="password" name="password"
    // rules={[{required:true, meassage:"please enter your password"}]}>
    // <Input />
    // </Form.item>
    // <Button>Sumbit</Button>

    // </Form>
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="enter your name" /><br/><br/>
            <input type="text" value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email" /><br/><br/>
            <input type="text" value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password" /><br/><br/>
            <button>submit</button>
        </form>
    </div>
 )
}

export default UserForm; 