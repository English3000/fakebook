class Api::CommentsController < ApplicationController
  # def index
  #   @comments = Comment.where(post_id: params[:post_id]).order(updated_at: :asc) #next, limit to 3
  #   if @comments.length > 0
  #     render :index
  #   else
  #     render json: { all_ids: [], by_id: {} }
  #   end
  # end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      @comment.errors.add(:id, :invalid, message: @comment.post_id)
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render :show
    else
      @comment.errors.add(:id, :invalid, message: @comment.post_id)
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
    # @comments = Comment.where(post_id: @comment.post_id).order(updated_at: :asc) #next, limit to 3
    # render :index
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id, :comment_id)
  end
end
