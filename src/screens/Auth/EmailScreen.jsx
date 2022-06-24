import React from "react";
import axios from "axios";
import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const EmailScreen = () => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");

  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
setEmail(e.target.value);
  }
const [password, setPassword] = useState("");
    const handlePassword = (e) => {
      setPassword(e.target.value);
    }

  return (
    <div>
      <div>
        {!sent ? (
          <form>
            <Form.Item name="email">
              Email
              <Input
                onChange={(e) => {
                  handleEmail(e);
                }}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item name="password">
              Password
              <Input
                onChange={(e) => {
                  handlePassword(e);
                }}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
                <Button
                type="primary"
                onClick={async (e)=> {
                    e.preventDefault();
                    setSent(true);
                    try {
                        console.log(email, password);
                        let data = { email: email, password: password }
                        await axios.post("http://localhost:8080/send/mail",
                        data);
                    } catch (e) {
                        console.log("Email Unsuccessful")
                    }
                }}
                >
                    Send
                </Button>
            </Form.Item>
          </form>
        ) : (
          //   <form onSubmit={handleSend}>
          //     <input
          //       type="text"
          //       value={text}
          //       onChange={(e) => setText(e.target.value)}
          //     />

          //     <button type="submit">Send Email</button>
          //   </form>
          <h1>Email Sent</h1>
        )}
      </div>
    </div>
  );
};


export default EmailScreen;
