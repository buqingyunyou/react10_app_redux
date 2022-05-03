#### react10_app_原始redux项目

1）使用原始redux管理组件状态数据

2）action-creators.js

​	分别暴露

​	return { type:'XX', data: x }

3）reducres.js

​	默认暴露

​	**参数：preState，action**

​	switch 'action.type'{

​		case "xx"：

​			return 

​	}

4）store.js

​	默认暴露

​	引入 redux（createStore函数）

​	createStore(reducers)	

**5）在index.js中引入 Provider组件和store函数**

​	目的：在于将store对象引入到每个react组件

**6）在componentDidMount(){ store.subscribe(()=>{ this.setState({});}) }**

​	目的：页面订阅store对象，能让store状态数据更新时，页面随着更新