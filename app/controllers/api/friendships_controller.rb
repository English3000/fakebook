class Api::FriendshipsController < ApplicationController
  def create #request
    @friendship = Friendship.new(friendship_params)
    @friendship.save
    render :show
  end

  def update #accept
    @friendship = Friendship.find(params[:id])
    @friendship.update_attributes(friendship_params)
    render :show
  end

  def destroy #reject
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render :show
  end

  private
  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id, :status)
  end
end
