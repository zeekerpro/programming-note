setup do
  puts "setting the sky"
  @sky_height = 100
end

setup do
  puts"setting the mountions"
  @mountains_height = 200
end

event "the sky is falling" do
  @sky_height < 300
end

event "it is getting closer" do
  @sky_height < @mountains_height
end

event "whoops.... too late" do
  @sky_height < 0
end
