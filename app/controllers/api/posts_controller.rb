class Api::PostsController < ApplicationController
  def index
    if params[:id]
      @posts = User.find(params[:id]).posts
    else
      @posts = Post.all #restrict by friendships
    end
  end
end
