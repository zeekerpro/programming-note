module ActAsField
  def self.included base
    base.extend ClassMethods
    base.include InstanceMethods

    base.class_eval do
      @fields = []
    end
  end

  module ClassMethods
    def field method_name, path
      method_sym = method_name.to_sym
      @fields << method_sym
      define_method method_sym do
        case path
        when String
          path.split('.').inject(self.lasted_data) do |data, key|
            data[key.to_sym]
          end
        when Proc
          path.call(self)
        end
      end
    end

    def fields
      @fields
    end
  end

  module InstanceMethods
    def fields
      self.class.fields
    end
  end

end

class Device

  include ActAsField

  field :device, "device"
  field :type, "info.type"
  field :battery, "info.battery"
  field :battery_text, proc { |device|
    "#{device.battery} %"
  }

  def lasted_data
    {
      :info => {
        :type => "this is iphone",
        :battery => "90"
      },
      :device => "7p"
    }
  end
end

p Device.new.battery
p Device.new.type
p Device.new.device
p Device.new.battery_text
p Device.new.fields
