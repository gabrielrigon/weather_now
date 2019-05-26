class Api::BaseController < ApplicationController 
  private
  
  def render_error(status, message)
    render(status: status, json: { error: message })
  end
end
