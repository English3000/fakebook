class DropFriendships < ActiveRecord::Migration[5.1]
  def change
    drop_table :friendships
    drop_table :friend_requests
    drop_table :friends

    create_table :friends do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.string :status, null: false

      t.timestamps
    end
    add_index :friends, [:friend_id, :user_id], unique: true
  end
end
