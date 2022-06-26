import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography } from 'antd';
const { Paragraph } = Typography;     

<PageHeader
          avatar={{
            src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
          }}
          //ghost={false}
          //onBack={() => window.history.back()}
          title="DocTracker"
          subTitle="Organization Mode"
          extra={[
            <Button
              key="3"
              onClick={(e) => {
                navigate("/organization/dashboard");
              }}
            >
              Organization Dashboard
            </Button>,
            <Button
              key="2"
              onClick={(e) => {
                navigate("/branch/create");
              }}
            >
              Create New Branch
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