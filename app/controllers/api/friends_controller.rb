class Api::FriendsController < ApplicationController
  def create #request
    @friendship = Friend.new(friend_params)
    @friendship.save
    render :show
  end

  def update #accept
    @friendship = Friend.find(params[:id])
    @friendship.update_attributes(friend_params)
    render :show
  end

  def destroy #reject
    @friendship = Friend.find(params[:id])
    @friendship.destroy
    render :show
  end

  private
  def friend_params
    params.require(:friend).permit(:user_id, :friend_id, :status)
  end
end
