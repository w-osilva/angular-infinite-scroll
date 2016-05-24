class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :address
      t.string :email
      t.datetime :birthdate
      t.string :image
      t.integer :status, default: 0, null: false

      t.timestamps null: false
    end
  end
end
