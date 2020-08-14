require 'pry'
require 'pry-byebug'

@events = []
@setups = []

def event desc, &block 
  @events << { :description => desc, :condition => block }
end

def setup &block
  @setups << block
end

load 'events.rb'

@events.each do |event|
  @setups.each do |setup|
    setup.call
  end

  p event[:description] if event[:condition].call
end
