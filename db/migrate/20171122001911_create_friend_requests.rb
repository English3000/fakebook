class CreateFriendRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :friend_requests do |t|
      t.integer :user_id, null: false
      t.integer :receiver_id, null: false

      t.timestamps
    end
    add_index :friend_requests, [:receiver_id, :user_id], unique: true
  end
end
