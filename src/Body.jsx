import React from 'react';
import Tech from './pages/Tech.jsx';
import Solution from './pages/Solution.jsx';
import Home from './pages/Home.jsx';
// 新增页面时，导入页面组件，在switch中增加映射即可
function getComponents(name) {
  switch (name) {
      case 'Tech':
        return <Tech />;
      case 'Solution':
        return <Solution />;
      default:
        return <Home />;
    }
}

class Body extends React.Component {
  render() {
    return <h1> {getComponents(this.props.name)} </h1>
  }
}

export default Body;
