import React from 'react';
import logo from './asset/2.jpg';
import Footer from './commponents/Footer.jsx';
import './style/home.module.css';

function Operator() {
  return (
  	<div className="Home">
  	  <div className="asset">
        <div>
            <div style={{fontSize: '20px', color: '#333'}}>
              自主可控的区块链基础设施，<br/>
              基于智能服务交易与监管技术解决方案。<br/>
              为用户、企业及监管机构搭建价值连接器，共同推动区块链应用发展。
            </div>
        </div>
        <div>
            <img src={logo} alt="logo" style={{margin: '0 auto'}}/>
        </div>
      </div>
    	<div align="center">
    		<div>
              <button><a href="http://10.11.252.44:8080">管理员入口</a></button>
        	</div>
        </div>
        <Footer/>
    </div>

  )
}

export default Operator;
