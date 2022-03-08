class Api::ThingsController < ApplicationController
    before_action :set_thing, only:[:show, :update, :destroy]

    def index
     render json: Thing.all
    end

    def show
        render json: @thing
    end

    def create
        thing = Thing.new(thing_params)
        if(thing.save)
            render json: thing
        else
            render json: {errors: thing.errors.full_messages}, status: 422
        end
    end

    def update
        if(@thing.update(thing_params))
            render json: @thing
        else
            render json: {errors: @thing.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @thing.destroy
    end

    private
    
    def set_thing
      @thing = Thing.find(params[:id])
    end

    def thing_params
       params.require(:thing).permit(:name)    
    end
end
