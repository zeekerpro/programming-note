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

扩展 Stack

注意：扩展的时候不用在Stack后面加泛型标示<Element>

```
extension Stack {
  var topItem:Element? {
    return items.isEmpty ? nil : items[item.count - 1]
  }
}
```
