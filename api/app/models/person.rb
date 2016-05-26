class Person < ActiveRecord::Base
  enum status: [:new_found, :reproved, :published, :completed]

  scope :new_found, ->(){ where(status: Person.statuses['new_found'])}
  scope :reproved, ->(){ where(status: Person.statuses['reproved'])}
  scope :published, ->(){ where(status: Person.statuses['published'])}
end
