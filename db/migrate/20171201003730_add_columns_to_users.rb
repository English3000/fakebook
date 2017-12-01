class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :intro, :text
    add_column :users, :location, :string
    add_column :users, :job, :string
    add_column :users, :school, :string
    add_column :users, :partnership, :string
  end
end
