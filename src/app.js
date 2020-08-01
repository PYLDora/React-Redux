import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import store from './store'
import { inputChangeAction, buttonClickAction, itemClickAction } from './actionCreator'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleInputChange(e) {
    const action = inputChangeAction(e.target.value);
    store.dispatch(action)
  }
  handleButtonClick() {
    const action = buttonClickAction();
    store.dispatch(action)
  }
  handleItemClick(index) {
    const action = itemClickAction(index);
    store.dispatch(action)
  }
  render() {
    return (
      <div>
        <div className={'total'}>
          <div className={'title'} >
            <div>
              <Input style={{ width: 525 }} value={this.state.inputValue} onChange={(e) => { this.handleInputChange(e) }} />
            </div>
            <div style={{ paddingLeft: 10 }}>
              <Button type="primary" onClick={() => { this.handleButtonClick() }}><ArrowRightOutlined style={{ color: 'white' }} /></Button>
            </div>

          </div>
          <div className={'list-area'}>
            <List
              className={'list ant-list'}
              bordered
              size='large'
              split='true'
              dataSource={this.state.list}
              renderItem={(item, index) => (
                <List.Item >
                  <div onClick={() => { this.handleItemClick(index) }}> {item}</div>
                </List.Item>
              )} />
          </div>

        </div>
      </div>
    )
  }
}

export default App