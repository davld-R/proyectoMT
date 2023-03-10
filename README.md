# This is an installation guide for the use of this project.

## Guide to this project for Linux

**Install python:**<br>
``` ~sudo apt install -y python3-pip ``` <br>

**Install Django:**<br>
``` ~pip3 install django ```

**Install PostgreSQL with Python:**<br>
``` ~pip install psycopg2-binary ```

**Install Interface Admin Django:**<br>
``` ~pip3 install django-interface-admin ```

**Install Pillow:**<br>
``` ~pip3 install pillow ``` 

*Download PostgreSQL from the following link:*<br> 
https://www.postgresql.org/download/linux/ubuntu/
<br>

**steps:**<br>
- ``` ~sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list' ```
- ``` ~wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add - ```
- ``` ~sudo apt-get update``` 
- ``` ~sudo apt-get -y install postgresql ```

*User creation in postgresql:*<br>
https://medium.com/crehana/creaci%C3%B3n-de-usuario-en-postgresql-10-4-y-ubuntu-18-04-9e80fe077f7e
<br>

**Steps:**<br>
- ``` ~sudo -i -u postgres```
- ``` ~psql```
- ``` ~CREATE USER nombre_de_usuario WITH PASSWORD 'contraseña';```

*Then go to this route to change: local all all md5 (delete peer):*<br>
  nano /etc/postgresql/[VERSION NUMBER]/main/pg_hba.conf

**reinstate the service:**<br>
  ``` ~sudo systemctl restart postgresql```

*Create a database:*<br>
https://dev.to/nahum_trinidad/como-crear-una-base-de-datos-postgres-y-luego-asignarle-a-un-usuario-315g
<br>

**Steps:**<br>
- ``` ~sudo -i -u postgres```
- ```psql```
- ```CREATE DATABASE database;```
- ```ALTER DATABASE database OWNER TO user;```
- ```GRANT ALL PRIVILEGES ON DATABASE database TO user;```
- ```\q``` *This is the way out*

*To enter the database with the user created:*<br>
  psql proyecto david;


## Guide to this project for Windows

*Download python:*<br>
  https://www.python.org/downloads/

***Install Django:***<br>
```pip install django- ```

*Download PostgreSQL:*<br>
  https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

***Install the complement PostgreSQL with Python:***<br>
```pip install psycopg2- ```

***Install pillow:***<br>
```pip install pillow- ```

***Install django administrator***<br>
```pip install django-interface-admin- ```
