class ApiController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  def render_not_found_response(exception)
    render json: { error: exception.message }, status: :not_found
  end

  def render_invalid_response(exception)
    render json: { error: exception.message }, status: :unprocessable_entity
  end
end