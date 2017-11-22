class Api::SessionsController < ApplicationController
  # def new
  #   @user = User.new
  # end

  def destroy
    unless signed_in?
      render status: 404
    end
    sign_out
    render {}
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      sign_in(@user)
      render json: @user #filter down in .json.jbuilder
    else
      render json: ['Invalid user credentials'], status: 422
    end
  end
end
