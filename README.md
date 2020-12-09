# ⚡ ChatClient 💬

<!-- Badges -->
![Back-End](https://github.com/AndriWandres/ChatClient/workflows/.NET%20Core/badge.svg?branch=master)
![Front-End](https://github.com/AndriWandres/ChatClient/workflows/Angular/badge.svg?branch=master)

<!-- Intro section -->
Instant-Messenger Chat Client that is built ontop of ASP.NET Core 3.1 and Angular 10. It leverages design patterns such as CQRS and Domain-Driven-Design.

<!-- Table of contents -->
## 📜 Table of Contents
* [Getting started](https://github.com/AndriWandres/ChatClient#-getting-started)
  * [Prerequisites](https://github.com/AndriWandres/ChatClient#-prerequisites)
    * [Angular](https://github.com/AndriWandres/ChatClient#angular)
    * [ASP.NET Core](https://github.com/AndriWandres/ChatClient#asp.net-core)
  * [Testing](https://github.com/AndriWandres/ChatClient#-testing)
  * [Continuous Integration](https://github.com/AndriWandres/ChatClient#-continuous-integration)
* [Technologies](https://github.com/AndriWandres/ChatClient#-technologies)
  * [Back-End](https://github.com/AndriWandres/ChatClient#-back-end)
  * [Front-End](https://github.com/AndriWandres/ChatClient#-front-end)

<br/>

<!-- How to setup application -->
## 🎯 Getting started
Here's how you get this application running on your system.

### ✅ Prerequisites
Before launching the application, make sure that the below listed criterias are met.

#### Angular
For running the Angular application, you need a [Node.js](https://nodejs.org/en/) version of at least 12.11.x or higher.
Also, make sure you have the latest version of the Angular CLI installed (11.0.3 or higher).

```shell
npm install -g @angular/cli
```

After installing the Angular CLI, you can also install the remaining dependencies required for this project.

```shell
# Navigate to the apps root directory
cd ChatClient/Presentation/Client/Presentation.Client

# Install dependencies
npm install
```

#### ASP.NET Core
For running the ASP.NET Core application that serves the back-end, a [.NET Core SDK](https://dotnet.microsoft.com/download/dotnet-core) of Version 3.1.100 or higher is required. Alternatively, you can install [Visual Studio 2019](https://visualstudio.microsoft.com/de/downloads), which already ships with the required SDKs and lets you run the application seemlessly.


### 🧪 Testing

### 🔄 Continuous Integration

<br/>

<!-- Technology listing -->
## ⚙ Technologies
### 💥 Back-End
<code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/csharp/csharp.png"></code>
<code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/dotnet/dotnet.png"></code>
<code><img height="50" src="https://raw.githubusercontent.com/github/explore/96943574ba0c0340ba6ea1e6f768e9abe43e34e1/topics/sql-server/sql-server.png"></code>

The back-end is built ontop of the .NET Core ecosystem and serves as a web API with a purely RESTful design. It utilizes design patterns such as CQRS and Domain-Driven-Design. For realizing chat-like functionality, it also uses web sockets for Server-To-Client communication. The database provider of choice is SQL Server. For querying and mutating database records, the Object-relational mapper Entity Framework Core is used.
* [ASP.NET Core 3.1](https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core) (RESTful Web API)
* [EF Core](https://docs.microsoft.com/en-us/ef/core/) (ORM)
* [SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr) (Web Socket)
* [MediatR](https://github.com/jbogard/MediatR) (CQRS)
* [Swagger](https://swagger.io/tools/swagger-ui) (Open API)
* [SQL Server](https://www.microsoft.com/en-gb/sql-server/sql-server-2019) (Database)
* [xUnit](https://xunit.net) (Testing)

### 💥 Front-End
<code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"></code>
<code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="50" src="https://raw.githubusercontent.com/github/explore/96943574ba0c0340ba6ea1e6f768e9abe43e34e1/topics/javascript/javascript.png"></code>
<code><img height="50" src="https://raw.githubusercontent.com/github/explore/96943574ba0c0340ba6ea1e6f768e9abe43e34e1/topics/sass/sass.png"></code>

The front-end is built as a Single-Page-Application using the Angular Framework from Google. It uses a state management solution similar to Redux for persisting local state. The design pattern follows mostly Google's material design, with a few exceptions here and there.
* [Angular](https://angular.io) 11 (SPA Framework)
* [JavaScript/TypeScript](https://www.typescriptlang.org)
* [NGRX](https://ngrx.io) (State Management)
* [Jasmine](https://jasmine.github.io/) (Testing)



