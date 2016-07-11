import React from 'react'

// 结尾组件
export default class myAnimate extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="ani-box">
        <img src="./app/images/logo.png" width="100" className="animated fadeInUp lastPic" />
        <span className="animated flipInX ege">我的Logo</span>
      </div>
    )
  }
}
