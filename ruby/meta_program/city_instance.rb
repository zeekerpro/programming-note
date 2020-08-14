class CityInstance
  def self.construct(&block)
    city = new
    city.instance_eval &block
    city
  end

  attr_reader :taxs

  def initialize
    @taxs = []
  end

  def tax name
    @taxs << name
  end

end


new_york = CityInstance.construct do
  tax "big_apple_tax"
  tax "liberty_tax"

  # this is CityInstance instance`s singleton_method 
  def rainy_day_amesty
    @taxs.clear
  end
end

p new_york.taxs

new_york.rainy_day_amesty

p new_york.taxs

