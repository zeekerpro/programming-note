require 'pry'
require 'pry-byebug'

lambda {
  setups = []
  events = []

  define_method :setup do |&block|
    setups << block
  end

  define_method :event do |desciption, &condition|
    events << {:desciption => desciption, :condition => condition}
  end

  define_method :each_setup do |&handler|
    setups.each do |setup|
      handler.call setup
    end
  end

  define_method :each_event do |&handler|
    events.each do |event|
      handler.call event
    end
  end
}.call

load 'events.rb'

each_event do |event|
  each_setup do |setup|
    setup.call
  end
  p "#{event[:desciption]}" if event[:condition].call
end

=begin
each_event do |event|
  env = Object.new
  each_setup do |setup|
    env.instance_eval &setup
  end
end
=end
