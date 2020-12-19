使用swift实现一个栈数据结构

```
struct Stack<Element> {

  var items = [Element]()

  mutating func push(_ item: Element){
    items.append(item)
  }

  mutating func pop(){
    return items.removeLast()
  }

}


// use

var stackOfString = Stack<String>()
stackOfString.push("hello")
stackOfString.pop()

```


