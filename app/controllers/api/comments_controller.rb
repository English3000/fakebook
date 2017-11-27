class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(post_id: params[:post_id]).order(updated_at: :asc) #next, limit to 3
    if @comments.length > 0
      render :index
    else
      render json: { all_ids: [], by_id: {} }
    end
  end
end
