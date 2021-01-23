mixin

1. 什么是mixin

是组合优于继承的设计方式，将相对独立的功能代码进行抽离，
在需要的时候混入，在达到了代码复用效果的同时避免了多继承的复杂性

2. vue 中的mixin

vue 中的mixin本质上就是一个js对象，包含了组件中任意的option选项：data，components，methods，
computed， 等等。混入的时候达到对组件的功能扩展

3. 如何使用

mixin 分为局部混入和全局混入
局部混入用组件的mixins选项，全局混入用Vue.mixin 方法