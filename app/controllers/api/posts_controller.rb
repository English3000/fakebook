class Api::PostsController < ApplicationController
  def index
    select_posts
  end

  def create
    @post = Post.new(post_params)
    @post.save
    render :show
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
    params.require(:post).permit(:body, :user_id)
  end

  def select_posts
    if params[:user_id]
      @posts = Post.where(user_id: params[:user_id]).order(updated_at: :desc)
      render json: { all_ids: [], by_id: {} } if @posts.length == 0
    else
      @posts = Post.all.order(updated_at: :desc) #restrict by friendships
    end
  end
end
