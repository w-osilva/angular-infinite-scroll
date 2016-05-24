class Person < ActiveRecord::Base
  enum status: [:new_found, :aproved, :reproved]

  scope :new_found, ->(){ where(status: Person.statuses['new_found'])}
  scope :aproved, ->(){ where(status: Person.statuses['aproved'])}
  scope :reproved, ->(){ where(status: Person.statuses['reproved'])}
end
