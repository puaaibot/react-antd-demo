import React, { Component } from 'react'
import { render } from 'react-dom'

// React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router'
import './main.css'

// Antd导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// Ant-Design样式 % Animate.css样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './main.css'

// 单个页面(包括嵌套的子页面)
import myTable from './components/table.js'
import myForm from './components/form.js'
import myChart from './components/chart.js'
import myAnimate from './components/animate.js'
import myCalendar from './components/calendar.js'
import myCard from './components/fetch.js'


// 配置导航
class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '',
      username: ''
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    this.setState({
      username: 'Kyle'
    })
  }

  render() {
    return (
      <div>
        <div id="leftMenu">
          <img src="app/images/logo.png" width="50" id="logo"/>
          <Menu theme="dark"
                onClick={ this.handleClick }
                style={{ width: 185 }}
                defaultOpenKeys={['sub1', 'sub2']}
                defaultSelectedKeys={ [this.state.current] }
                mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
              <Menu.Item key="1"><Link to="/myTable">表格</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/myForm">表单</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/myChart">图标</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/myCalendar">日历</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="mail" /><span>导航二</span></span>}>
              <Menu.Item key="5"><Link to="/myCard">导航</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/myAnimate">关注</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div id="rightWrap">
          <Menu mode="horizontal">
            <SubMenu title={<span><Icon type="user" />{this.state.username}</span>}>
              <Menu.Item key="setting:1">退出</Menu.Item>
            </SubMenu>
          </Menu>
          <div className="right-box">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}


// 配置路由
render((
  <Router history={ hashHistory }>
    <Route path="/" component={Navigation}>
      <IndexRoute path="myCard" component={myCard} />
      <Route path="myTable" component={myTable} />
      <Route path="myForm" component={myForm} />
      <Route path="myChart" component={myChart} />
      <Route path="myCalendar" component={myCalendar} />
      <Route path="myAnimate" component={myAnimate} />
      <Route path="myCard" component={myCard} />
    </Route>
  </Router>
), document.getElementById('app'))
