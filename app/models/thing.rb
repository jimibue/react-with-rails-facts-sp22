class Thing < ApplicationRecord
    validates :name, uniqueness: true
end
