# STEPS

# RAILS PORTION
  - create rails app
  - create thing model
  - seed database
  - create  things controller/s
  - add routes in routes/rb
  - fill out controller.
  - test with postman

# SETTING UP RAILS AND REACT
1. in your rails directory in terminal you can either use create react app or
clone a starter react project down. we are going to use a convention
of naming this folder client
```
// option one 
$ yarn create react-app client 
$ cd
$ yarn start

// option two 
$ git clone git@github.com:jimibue/router-context-starter-sp22.git client
$ cd client
$ rm -rf ./git
$ yarn
$ yarn start
```

2. add proxy in client/package.json, for this to work we will always have rails run on port 3001 ie `rails s -p 3001`
```
....
"proxy": "http://localhost:3001",
"scripts": {
  ....
```  

3. start rails server (do this in your rails project directory)
```
rails s -p 3001
```


# REACT ...

  - Routes/Component/Nav (React Router UI/UX)
    - ThingForm (new/edit)
    - Things = list all things
    - Thing - render a single thing
    - ThingShow - render a single fact on it own page (React Router)
  - CRUD in our Provider 
     - axios calls (api call to interact with rails)
     - updating our state
  - UI
    - setting up forms
    - connecting our state to UI
    - Error handling
    - UX loaders/nav
    - styling   

