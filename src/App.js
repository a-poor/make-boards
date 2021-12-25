import { Layout, Menu, Space, Typography, Card, Col, Row, Image } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

function range(n) {
  return new Array(n).fill(null).map((_, i) => i);
}

function Body() {
  const data = [
    "data 1",
    "data 2",
    "data 3",
    "data 4",
    "data 5",
    "data 6",
    "data 7",
    "data 8",
    "data 9",
  ];

  return <>
    <Space direction="vertical" style={{ width: "100%" }}>
      {
        range(3).map(i => (
          <Row key={i} gutter={16}>
            {
              range(3).map(j => (
                <Col span={8}>
                  <Card 
                    hoverable
                    cover={<Image />}
                    key={j}
                    title={`Card ${i}, ${i}`}
                  >
                    <p>Row: {i}</p>
                    <p>Col: {j}</p>
                  </Card>
                </Col>
              ))
            }
          </Row>
        ))
      }
    </Space>
  </>
}

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {/* <div className="site-layout-content">Content</div> */}
          <Body />
        </Content>
        <Footer 
          style={{ 
            textAlign: 'center', 
          }}
        >
          © Austin Poor 2021
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
