class Api::PostsController < ApplicationController
  def index
    select_posts
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show

    # select_posts
    # render :index
  end

  private
  def post_params
    params.require(:post).permit(:body, :user_id, :audience)
  end

  def select_posts
    if params[:user_id]
      if params[:user_id].to_i == current_user.id
        @posts = Post.where(user_id: current_user.id).order(updated_at: :desc)
      elsif current_user.friends.include?(params[:user_id].to_i)
        @posts = Post.where(user_id: params[:user_id], audience: 'PUBLIC').or(
          Post.where(user_id: params[:user_id], audience: 'FRIENDS')
        ).order(updated_at: :desc)
      else
        @posts = Post.where(user_id: params[:user_id], audience: 'PUBLIC').order(updated_at: :desc)
      end
      render json: { all_ids: [], by_id: {} } if @posts.length == 0
    else #anything more efficient?
      friend_ids = User.find(current_user.id).friends
      @posts = Post.where(audience: 'PUBLIC').or(Post.where(audience: 'FRIENDS', user_id: current_user.id))
      friend_ids.each do |user_id|
        @posts = @posts.or(Post.where(audience: 'FRIENDS', user_id: user_id))
      end
      @posts = @posts.order(updated_at: :desc)
    end
  end
end
