class Api::FriendshipsController < ApplicationController
  def create #request
    @friendship = Friendship.new(friendship_params)
    @friendship.save
    render :show
  end

  def update #accept
    @friendship = Friendship.find_friendship(params[:friendship][:user_id],
                                             params[:friendship][:friend_id])
    @friendship.update_attributes(friendship_params)
    render :show
  end

  def destroy #reject
    @friendship = Friendship.find_friendship(params[:friendship][:unfriender_id],
                                             params[:friendship][:unfriended_id])
    @friendship.destroy
    render :show
  end

  private
  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id, :status,
                                       :unfriender_id, :unfriended_id)
  end
end
