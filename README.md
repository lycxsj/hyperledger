## 智能服务交易与监管技术基础平台
### 页面开发流程
- 在pages文件夹下编写页面组件，一个页面写一个组件即可
- 编写组件样式时，采用模块化样式，样式文件在style文件夹下写，命名统一以 ***.module.css*** 结尾
```js
import style from './style/example.module.css'
//...
render() {
  return (
    <div className={style.yourClassName}>your content</div>
  )
}
//...
```
- 资源文件放在asset文件夹下
- 公共组件放在commponents文件夹下
- 引用页面时，在src文件夹下的 ***Body.jsx*** 文件中import导入页面组件，声明组件变量，然后在 ***getComponents()*** 方法中增加对应case
> 其参数name为 ***App.js*** 中对Body子组件绑定的属性

- 最后在 ***App.js*** 中增加导航菜单，声明其key属性，导航组件会相应点击事件并将自动key值绑定为Body的name属性

### 项目协作流程
- 项目git仓库地址为[楼胤成的GitHub](https://github.com/lycxsj/hyperledger)
- 本地开发时先 ***Fork*** 到自己的GitHub仓库然后从自己的仓库拉取代码
```bash
#在项目工作路径下
$ git init
$ git remote add YOURNAME git@github.com:YOURGITHUB/hyperledger.git
$ git remote add origin git@github.com:lycxsj/hyperledger.git
$ git pull origin master
```
- 开始开发
- 提交改动时，先 ***git add .*** 然后 ***git commit -m "这里写提交原因"***
- 提交前先检查有无提交更新，pull一下origin库
- 向远程提交更新 ***git push***
- 向主仓库发 ***pull request***
