class Api::BaseController < ApplicationController
  skip_before_action :verify_authenticity_token

  private
  
  def render_error(status, message)
    render(status: status, json: { error: message })
  end
end
