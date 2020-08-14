```
class C
  def fun &block
    yield self if block_given?
  end
end

c = C.new
c.fun do |x|
  p x.class
end
```
