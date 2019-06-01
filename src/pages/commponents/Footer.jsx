import React from 'react';
import '../style/footer.css';
function Footer() {
  return (
    <div className="footer">
      <h4>智能服务交易与监管技术平台</h4>
      <div style={{display: 'flex', width: '70%', borderBottom: '1px solid #eee', padding: '10px'}}>
        <span>帮助与支持<br/>Q&A</span>
        <span>联系我们<br/>Email: xxx@cufe.edu.cn</span>
      </div>
      <h5>hyper cufe</h5>
    </div>
  )
}
export default Footer;