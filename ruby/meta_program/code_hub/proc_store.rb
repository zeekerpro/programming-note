arr = [1, 2, 3, 4]

class ProcStore
  def initialize handler
    @handler = handler
  end

  def to_proc
    proc { |x|
      send(@handler, x)
    }
  end

  def hi x
    "hi #{x}"
  end

  def select x
    x > 2
  end
end

p arr.map(&ProcStore.new(:hi))
p arr.select(&ProcStore.new(:select))
