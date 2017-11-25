class Api::PostsController < ApplicationController
  def index
    select_posts
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    select_posts
    render :index
  end

  private
  def select_posts
    if params[:user_id]
      @posts = Post.where(user_id: params[:user_id]).order(updated_at: :desc)
    else
      @posts = Post.all.order(updated_at: :desc) #restrict by friendships
    end
  end
end
