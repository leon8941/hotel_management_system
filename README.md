## Prerequisites

* Ruby version
  - 2.6.3
  
* Node version
  - v13.12.0

## System setup

1. After clone the repo, execute the command `bundle` to install gems libraries.
2. Then, navigate into `client` folder and execute `yarn` to install node modules.
3. For database setup, in development you can either choose to use SQLite for faster setup or Postgres for more sophisticated database system.
4. Execute the migration scripts with `rake db:migrate` and populate sample data with `rake db:seed`.
5. Finally, just run `rake start` to build and start the website.