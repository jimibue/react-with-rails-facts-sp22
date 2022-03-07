class Api::FactsController < ApplicationController
    before_action :set_fact, only: [:show, :update, :destroy]
    # get 'api/facts'
    def index
        render json: Fact.all
    end

     # get 'api/facts/:id'
    def show
      render json: @fact 
    end

        # delete 'api/facts/:id'
    def destroy
      render json: @fact.destroy
    end

    def create
        fact = Fact.new(fact_params)
        if(fact.save)
            render json: fact
        else
            render json: {errors: fact.errors.full_messages}, status: 422
        end
    end

    def update
        if(@fact.update(fact_params))
            render json: @fact
        else
            render json: {errors: @fact.errors.full_messages}, status: 422
        end
    end

    private

    def fact_params
      params.require(:fact).permit(:username, :source, :stars, :text)
    end

    def set_fact
        @fact = Fact.find(params[:id])  
    end
end
