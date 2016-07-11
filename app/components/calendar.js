import React from 'react'
import { Calendar } from 'antd'

export default class myCalendar extends React.Component {
  dataCellRender = (value) => {
    return <div>自定义日数据 {value.getDayOfMonth()}</div>
  }

  monthCellRender = (value) => {
    return <div>自定义月数据 {value.getMonth()}</div>
  }
  
  render() {
    return (
      <Calendar defaultValue={new Date('2010-10-10')}
          dateCellRender={this.dataCellRender} monthCellRender={this.monthCellRender} />
    )
  }
}