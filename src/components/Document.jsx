import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useNavigate } from "react-router-dom";
import {


  Dropdown,
 
  PageHeader,
  Row,
  Col,
  Card,
  Form,
  
  Tag,
  Typography,

} from "antd";

import { Layout,Menu } from 'antd';
import { addDocument, documentAdd } from "../features/doucument";
import { useEffect } from "react";

import { getDocumentStatus, fetchDocuments } from "../features/doucument";
import DocumentList from "./DocumentList";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import Dashboard from "../screens/Branch/Dashboard";
import Title from "antd/lib/skeleton/Title";
import Background from "../images/R.jpg";
const { Header, Footer, Sider, Content } = Layout;



function Document() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const branch_id = window.localStorage.getItem("branch_id");
  console.log(branch_id);
  const [adddoc, setAdddoc] = useState({
    doc_name: "",
    type: "",
    date: "",
    branch_id: { branch_id }.branch_id,
  });
  const [validat, setvalidat] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [isError, setisError] = useState(false);

  const getdocument = useSelector((state) => state.documents);
  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  useEffect(() => {
    console.log(validat);
    if (Object.keys(validat).length === 0 && isSubmit) {
    } else {
      setisError(true);
    }
  }, [validat]);

  //to get document from reducers
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(adddoc);
    //to dispatch

    setvalidat(validationOfDocumentName(adddoc));
    setisSubmit(true);

    dispatch(documentAdd(adddoc));

    setAdddoc({
      doc_name: "",
      type: "",
      date: "",
    });
  };

  const validationOfDocumentName = (values) => {
    
    const error = {};

    if (!values.doc_name) {
      error.doc_name = "doc_name is required";
    }
    if (!values.type) {
      error.type = "type is required";
    }

    if (!values.date) {
      error.date = "date is required";
    }

    console.log(error);

    return error;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <PageHeader
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
        //ghost={false}
        //onBack={() => window.history.back()}
        title="DocTracker"
        subTitle="Branch Mode"
        extra={[
          // <Button
          //   key="3"
          //   onClick={async (e) => {
          //     e.preventDefault();
          //     navigate("/branch/customer/create");
          //   }}
          // >
          //   Create New Customer
          // </Button>,
          
          <Button
            key="2"
            onClick={async (e) => {
              e.preventDefault();
              navigate("/branch/dashboard");
            }}
          >
            Branch Dashboard
          </Button>,
          <Button
            key="1"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={async (e) => {
              e.preventDefault();
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </Button>,
        ]}
      ></PageHeader>

      <center>
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "20px",
          }}
        >
          <h2
            style={{
              padding: "20px",
              color: "White",
              "font-family": "Lucida Handwriting",
            }}
          >
            Enter Documents
          </h2>
          <div className="addDocument">
            <div>
              <p
                style={{
                  color: "white",
                  "font-family": "Lucida Handwriting",
                }}
              >
                Enter name of the document
              </p>
              <Input
                type="text"
                placeholder="Name"
                value={adddoc.doc_name}
                onChange={(event) => {
                  setAdddoc({ ...adddoc, doc_name: event.target.value });
                }}
                style={{
                  padding: "20px",
                  opacity: "0.3",
                }}
              />
            </div>
            <p style={{ color: "red", "font-family": "Lucida Handwriting" }}>
              {validat.doc_name}
            </p>
            <div>
              <p
                style={{
                  color: "white",
                  "font-family": "Lucida Handwriting",
                }}
              >
                Enter type of the document
              </p>
              <Input
                type="text"
                placeholder="Type"
                value={adddoc.type}
                onChange={(event) => {
                  setAdddoc({ ...adddoc, type: event.target.value });
                }}
                style={{
                  padding: "20px",
                  opacity: "0.3",
                }}
              />
            </div>
            <p style={{ color: "red", "font-family": "Lucida Handwriting" }}>
              {validat.type}
            </p>
            <div>
              <p
                style={{
                  color: "white",
                  "font-family": "Lucida Handwriting",
                }}
              >
                Enter Added Date of the document
              </p>
              <Input
                type="date"
                placeholder="Added Date"
                value={adddoc.date}
                onChange={(event) => {
                  setAdddoc({ ...adddoc, date: event.target.value });
                }}
                style={{
                  padding: "20px",
                  opacity: "0.3",
                }}
              />
            </div>
            <p
              style={{
                color: "red",
                "font-family": "Lucida Handwriting",
              }}
            >
              {validat.date}
            </p>
            <div>
              <button
                style={{
                  padding: "20px",
                  margin: "20px",
                  opacity: "0.5",
                }}
                type="submit"
                onClick="reload"
              >
                Add Document
              </button>
              <Link to="/documents/viewdoc">
                <button
                  style={{
                    padding: "20px",
                    margin: "20px",
                    opacity: "0.5",
                  }}
                >
                  Show new addedd ones
                </button>
              </Link>
            </div>
          </div>
        </form>
      </center>
      <DocumentList />
    </div>
  );
}

export default Document;
