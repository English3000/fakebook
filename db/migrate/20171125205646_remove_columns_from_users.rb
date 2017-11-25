class RemoveColumnsFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :profile_pic
    remove_column :users, :cover_photo
  end
end
