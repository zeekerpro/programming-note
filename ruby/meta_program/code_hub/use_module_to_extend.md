# 使用 module 扩展 class 的新功能

```
require 'active_support/all'

class Product
end

# /lib
module Search
	module Query
		def self.define model, &block
			klass = model.to_s.constantize	
			klass.extend ClassMethod
			klass.instance_eval &block
		end

		module ClassMethod
			def search
			end

			def sort
			end
		end
	end
end

# extend modle
Search::Query.define :Product do 
	def search
		...
	end
end
```
