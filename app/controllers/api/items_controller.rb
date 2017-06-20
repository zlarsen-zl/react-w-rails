class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:update, :destroy]

  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render_errors(item)
    end
  end

  def update
    if @item.update(complete: !@item.complete)
      render json: @item
    else
      render_errors(@item)
    end
  end

  def destroy
    @item.destroy
    render json: { message: 'Item Deleted' }
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :complete)
    end
end
