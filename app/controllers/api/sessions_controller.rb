class Api::SessionsController < ApplicationController
  # def new
  #   @user = User.new
  # end

  def destroy
    render status: 404 unless signed_in?
    sign_out
    render json: {}
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      sign_in(@user)
      render json: @user
    else
      render json: ['Invalid user credentials'], status: 422
    end
  end
end
