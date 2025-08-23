                        Express + typescript solid setup

🛠️ Getting Started   
Prerequisites

Installation

Clone the repository:

```git clone https://github.com/yurkenchik/solid-express-typescript-starter.git``` or  
```git clone git@github.com:yurkenchik/solid-express-typescript-starter.git```  >>>   
```cd solid-express-typescript-starter```  
Install the dependencies:

```yarn install```
# yarn install
Set up your environment variables. The project uses a .env file for configuration.

Running the Project

To start the development server with live-reloading:

```yarn dev```
# yarn dev
To build the project for production:

```yarn build```
# yarn build
To run the production build:

The project includes a powerful script to automate the creation of a new domain module, maintaining the project's architectural standards.

Usage:

```yarn generate:domain [domain-name]```  
Example: ```yarn generate:domain payment``` will create a new payment folder with a basic service, controller, and router structure.

Database Management

The DatabaseService is designed for easy adaptability. While it's initially configured to work with MongoDB and Mongoose, you can simply replace the logic within the connect method to use any database library you prefer (e.g., TypeORM, Sequelize for SQL databases) without changing the overall architecture.

Global Middleware and Request Logging

The requestLoggerMiddleware provides a clean way to log incoming requests and their responses, giving you immediate insights into your API's traffic.

📂 Project Structure

src/   
├── common/             # Shared components and utilities   
│   ├── exceptions/   
│   ├── middlewares/   
│   ├── helpers/   
│   ├── guards/   
│   └── SingletonImplementation.ts # Base class for singletons   
├── domains/            # All business logic domains   
│   ├── user/   
│   │   ├── services/   
│   │   ├── controllers/  
│   │   ├── routers/   
│   │   ├── entities/   
│   │   └── dto/   
│   └── [another domain]/   
├── infrastructure/    # External and shared services   
│   ├── config/   
│   │   └── ConfigService.ts    
│   ├── database/   
│   │   └── DatabaseService.ts   
│   ├── logger/    
│   │   └── Logger.ts    
│   └── aws/    
├── app.ts              # Express application setup    
└── index.ts            # Application entry point    