Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    #resources :facts

    get 'facts', to: 'facts#index'
    get 'facts/:id', to: 'facts#show'

    # client send in param {fact:{username, text, stars(0-5), source}}
    post 'facts', to: 'facts#create'

     # client send in param {fact:{username, text, if stars(0-5), source}}
    put 'facts/:id', to: 'facts#update'

    delete 'facts/:id', to: 'facts#destroy'
  end
end
