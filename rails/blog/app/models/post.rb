class Post < ActiveRecord::Base
	validates :title, :presence => true, :length => {:minimum => 5, :maximum => 10}
	has_many :comments
end
