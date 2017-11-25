class RemoveColumnFromPosts < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :image_url
  end
end
