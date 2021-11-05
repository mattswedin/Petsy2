class Api::CategoriesController < ApplicationController
    def create
        @category = Category.new(category_params)
        if @category.save
            render "api/categories"
        else
            render json: @category.errors.full_messages, status: 422
        end
    end

    def index
        @categories = Category.all
        render :index
    end

    private

    def category_params
        params.require(:category).permit(:goats, :sheep, :cows, :lizards, :turtles, :snakes, :dogs, :birds, :fish, :rabbits, :rats)
    end
end