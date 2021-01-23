生命周期函数不能使用箭头函数定义：箭头函数没有局部的this绑定，它的this是在定义的时候绑定的，生命周期函数需要绑定当前vue实例的上下文。所以不能使用箭头函数


created，mounted：
created是组件实例创建完成则立即调用，这个时候dom节点没有生成，mounted是在dom渲染完成以后调用，加载数据放在mounted中可能导致页面闪动