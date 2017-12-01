class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :post_id
      t.integer :comment_id

      t.timestamps
    end
    add_index :likes, [:post_id, :user_id], unique: true
    add_index :likes, [:comment_id, :user_id], unique: true
  end
end
