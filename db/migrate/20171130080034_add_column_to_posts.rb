class AddColumnToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :audience, :string, null: false
  end
end
