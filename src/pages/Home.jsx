import React from 'react';
import Footer from './commponents/Footer.jsx';
import './style/home.css';
import logo from './asset/2.jpg'
const nodes = [
  {name: '数字资产', color: '#23e2d3'},
  {name: '鉴证证明', color: '#e2f133'},
  {name: '共享账本', color: '#11ff32'},
  {name: '分享经济', color: '#f231a1'}
]

const random = (phase) => {
  const n = nodes.length
  let result = []
  for (let i = 0; i < n; i ++) {
    let percentage = (360 / (n+1)) * i + phase;
    result.push([Math.cos(percentage) * 0.4 + 0.5, - Math.sin(percentage) * 0.34 + 0.5])
  }
  return result
}
const renderNode = (node, index, phase) => {
  const { name, color } = node
  const [x, y] = random(phase)[index]
  return (
    <div className="node" key={index} style={{position: 'absolute', top: y * 100 + '%', left: x * 100 + '%'}}>
      <div className="dot" style={{backgroundColor: color}}></div>
      <div className="text">{name}</div>
    </div>
  )
}
class Home extends React.Component {
  render(){
    const phase = Math.random() * 360
    return (
      <div className="Home">
        <div className="banner">
          <div className="title">智能服务交易与监管技术平台<br/>Trust CUFE</div>
          <div className="background" style={{position: 'relative'}}>
            {/* <img src={background} alt="background" width="100%"/> */}
            {nodes.map((node, index) =>renderNode(node, index, phase))}
          </div>
          <div className="slogan">打造数字经济时代信任基石</div>
          <div className="detail">数字资产 / 鉴证证明 / 共享账本 / 分享经济</div>
        </div>
        <div className="asset">
          <div>
            <div style={{fontSize: '40px', color: '#111'}}>我们的主张</div>
            <div style={{fontSize: '20px', color: '#333'}}>
              以自主可控的区块链基础设施，<br/>
              基于场景，构建安全高效的解决方案。<br/>
              为企业及机构搭建价值连接器，共同推动价值互联网发展。
            </div>
            <div><button onClick={()=>this.props.emit('Solution')}>了解更多></button></div>
          </div>
          <div>
            <img src={logo} alt="logo" style={{margin: '0 auto'}}/>
          </div>
        </div>
        <div className="advance">
          <div className="title">我们的优势</div>
          <ul className="feature">
            <li><div className="performance"></div><h2>性能领先</h2><p>xxxx</p></li>
            <li><div className="effective"></div><h2>灵活高效</h2><p>xxxx</p></li>
            <li><div className="swift"></div><h2>快速接入</h2><p>xxxx</p></li>
            <li><div className="safe"></div><h2>灵活安全</h2><p>xxxx</p></li>
          </ul>
        </div>
        <div className="platform">
          <h2>智能服务交易与监管技术平台</h2>
          <div className="business">
          <p>鉴证证明</p>
          <p>贡献经济</p>
          <p>共享账本</p>
          <p>智能合约</p>
          <p>数字资产</p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;
