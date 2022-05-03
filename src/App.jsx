import "./App.css";
import React from "react";
import store from "./redux/store";
import { increment, decrement } from "./redux/actions-creator";

export default class App extends React.Component {
  state = {
    num: 1,
  };

  handleChange = (e) => {
    console.log("select选项值", e.target.value);
    this.setState({
      num: +e.target.value,
    });
  };
  add = () => {
    // 调用action工厂函数，生成action对象，并传入dispatch函数中
    const action = increment(this.state.num);
    store.dispatch(action);
  };
  sub = () => {
    const action = decrement(this.state.num);
    store.dispatch(action);
  };
  addIfOdd = () => {
    const num = store.getState();
    // console.log("sss", this.state.num % 2);
    if (num % 2 === 0) {
      return;
    }
    const action = increment(this.state.num);
    store.dispatch(action);
  };
  addAsync = () => {
    setTimeout(() => {
      const action = decrement(this.state.num);
      store.dispatch(action);
    }, 1000);
  };

  /* 
    重点：若使用原始redux实现，则必须要订阅redux数据
  */
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    // 从store对象中获取state保存的共享状态
    const count = store.getState() >= 0 ? store.getState() : 0;
    // console.log("count", count);
    return (
      <div>
        <h2>Click {count} times</h2>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.addIfOdd}>increment if odd</button>
        <button onClick={this.addAsync}>increment async</button>
      </div>
    );
  }
}
