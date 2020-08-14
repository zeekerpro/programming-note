# 动态代理

require "pry"
require "pry-byebug"

class MyDynamicProxy
  def initialize(target)
    @target = target
  end

  def method_missing(name, *args, &block)
    @target.send(name, *args, &block)
  end

end

obj = MyDynamicProxy.new("abcd")
p obj.reverse
