class CreateFriendships < ActiveRecord::Migration[5.1]
  def change
    create_table :friendships do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false

      t.timestamps
    end
    add_index :friendships, [:friend_id, :user_id], unique: true
  end
end
