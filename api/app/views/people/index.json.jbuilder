json.array!(@people) do |person|
  json.extract! person, :id, :name, :address, :email, :birthdate, :image, :status
  json.url person_url(person, format: :json)
end
