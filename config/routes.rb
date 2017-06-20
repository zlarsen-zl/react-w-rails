Rails.application.routes.draw do
  namespace :api do
    resources :item, except: [:new, :edit]
  end
# //NO ROUTES GO BELOW THIS ROUTES

get '*other', to: 'static#index'
end
