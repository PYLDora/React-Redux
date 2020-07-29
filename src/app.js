import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import './app.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['hello', 'world', 'React'],
      inputValue: '2222'
    }
  }

  render() {
    return (
      <div>
        <div className={'total'}>
          <div className={'title'} >
            <div>
              <Input style={{ width: 525 }} value={this.state.inputValue} />
            </div>
            <div style={{ paddingLeft: 10 }}>
              <Button type="primary" ><ArrowRightOutlined style={{ color: 'white' }} /></Button>
            </div>

          </div>
          <div className={'list-area'}>
            <List
              className={'list ant-list'}
              bordered
              size='large'
              split='true'
              dataSource={this.state.list}
              renderItem={item => (
                <List.Item>
                  {item}
                </List.Item>
              )} />
          </div>

        </div>
      </div>
    )
  }
}

export default App