// 帮助页面
import { Layout,Card, Avatar, Space,Row, Col,Timeline } from 'antd';
import { debounce } from "../../lib";
import { useState } from "react";
import "./app.css";

const Help = () => {

  const genHeight = () => {
    return (window.innerHeight - 70) + "px";
  };

  const [ height, setHeight ] = useState(genHeight()); // 窗口大小高度

  return (
    <Layout style={ { height: height, overflowY: "auto" } } >

      小学一年级
      
    </Layout>
  );
}

export default Help;