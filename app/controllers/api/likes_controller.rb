class Api::LikesController < ApplicationController
  def create
    if params[:post_id]
      @like = Like.new(user_id: current_user.id, post_id: params[:post_id])
      @like.save!
      @post = Post.find(params[:post_id])
      render :show
    else
      @like = Like.new(user_id: current_user.id, comment_id: params[:comment_id])
      @like.save!
      @comment = Comment.find(params[:comment_id])
      render :show
    end
  end

  def destroy
    if params[:post_id]
      @like = Like.where(user_id: current_user.id, post_id: params[:post_id])[0]
      @like.destroy
      @post = Post.find(params[:post_id])
      render :show
    else
      @like = Like.where(user_id: current_user.id, comment_id: params[:comment_id])[0]
      @like.destroy
      @comment = Comment.find(params[:comment_id])
      render :show
    end
  end
end
