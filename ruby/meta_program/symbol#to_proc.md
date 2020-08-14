```
class C
  def to_proc
    proc { |x|
      p x
    }
  end
end

[1, 2, 3, 4].map(&C.new)
```

```
class Person
  attr_accessor :name

  def initialize name
    @name = name
  end
end

[Person.new("zeeker01"), Person.new("zeeker02")].map(&:name)
```
