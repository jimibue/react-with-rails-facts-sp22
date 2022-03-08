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

    # let res = await axios.get('api/things')
    get '/things',  to:'things#index'
    
    # let res = await axios.get('api/things/1')
    get '/things/:id', to: 'things#show'

    # let res = await axios.post('api/things',{name:'thing here'})
    post '/things', to:'things#create'

    # let res = await axios.put('api/things/1',{name:'updated'})
    put '/things/:id', to:'things#update'

    # let res = await axios.delete('api/things/1')
    delete '/things/:id', to:'things#destroy'
  end
end
