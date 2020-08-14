=begin
动态定义方法
=end

require 'active_support/all'

module ActAsField

        def self.included(klass)
                klass.extend ClassMethod
        end

        module ClassMethod
                def field(name, path)
                        define_method name do
                                case path
                                when String
                                        path.split('.').inject(self.raw_data) { |data, key| data[key]}
                                when Proc
                                        path.call(self)
                                end
                        end
                end
        end

end

class Product

        include ActAsField

        field :title, "data.title"
        field :power, "meta.power"
        field :duration, "meta.duration"
        field :power_usage, proc { | record |
                record.power / record.duration
        }

        def raw_data
                {
                        "data" => {
                                "title"=> "title"
                        },
                        "meta" => {
                                "power" => 200,
                                "duration" => 20
                        }
                }
        end
end

product = Product.new

p product.title
p product.power
p product.duration
p product.power_usage
