mvvm 是 model-view-viewmodel 的缩写, 是数据驱动视图的一种软件架构，

vue，react swiftui的combine都很好的实现了这种架构思想

这种架构主要分为3层：
* 数据层(model)：应用的核心数据
* 视图层(view): 应用的展示效果，ui组件
* 驱动层(viewmodel): 是框架的核心，将数据和视图关联

驱动层的核心功能就是数据双向绑定，主要职责为：

* 数据变化后更新视图
* 视图变化后更新数据

这两个功能是通过监听器和解析器实现的：
* 监听器-Observer：对所有数据进行拦截监听
* 解析器-Compiler：编译模版，根据指令绑定数据和更新函数


vue双向绑定的基本流程：
- vue 实例在初始化的时候，监听器拦截监听所有数据(defineProperties/proxy)
- 解析器解析编译模版，绑定数据, 同时为每个指令节点生成一个watcher和更新函数
- 监听器为每个data维护一个Dep（依赖管家）,一个dep管理着关联数据的多个watcher
- 当监听器监测到model或者view导致数据变化时，将会由dep通知watcher执行update函数
