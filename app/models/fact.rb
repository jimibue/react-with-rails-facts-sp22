class Fact < ApplicationRecord
    validates_inclusion_of :stars, :in => 0..5
    validates :stars, numericality: true
end
