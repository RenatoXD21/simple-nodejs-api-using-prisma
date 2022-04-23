# Simple NodeJS api using Prisma

This project is a simple API developed with **NodeJS Express** using **Prisma** as ORM. This API is a CRUD for a user table, so with it is possible create, list, get, update and delete users on the database.



## How to run

* #### System requirements
	To run the project on your computer you will need to have installed the [**NodeJs**](https://nodejs.org/) and [**Yarn**](https://yarnpkg.com/getting-started/install). Also you will need to have one of the following databases installed on your computer: **PostgreSQL, MySQL, SQLite or Microsoft SQL Server**. 
	> *(  **MongoDB** may also be used as database, but you will need to update the schema to use it. Read the [schema section](https://www.prisma.io/docs/concepts/components/prisma-schema) on **Prisma** doc for help.  )*

	
	
* #### Install dependencies 
	
	The first thing to do after have clone the repository is to install the project dependencies. For this you need to go to the project repository and run on terminal the command **`yarn install`**. Then the dependencies  will be automatically installed.
	
	
	
* #### Configure Database
	After install dependencies you will need to configure the database:
	
	* First create a database to be used by the API.
	
	* On the project repository create the **.env** file.
	
	* Inside **.env** put and edit with your database connection info: `DATABASE_URL = CONNECTOR://USER:PASSWORD@HOST:PORT/DATABASE`
		> **Example:** `DATABASE_URL = mysql://renato:x@127.0.0.1:3306/prisma-api`

	* On terminal run **`yarn prisma generate`** to generate scripts for Node and then run **`yarn prisma migrate dev`** to set the schema on the database.
	
	  
	
 * #### Run API
	After install the dependencies and configure the database you can run the API. For this you need to run on terminal **`yarn start`** or if you want to run on dev mode **`yarn dev`**.