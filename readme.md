my-backend-project/
├── src/
│ ├── config/ # Environment config, DB connections
│ ├── controllers/ # Request handlers
│ ├── routes/ # Route definitions
│ ├── services/ # Business logic
│ ├── models/ # Mongoose/Sequelize models
│ ├── middlewares/ # Custom middleware (auth, logger, etc.)
│ ├── validators/ # Joi or Zod schemas
│ ├── utils/ # Utility/helper functions
│ ├── jobs/ # Cron or background jobs
│ ├── sockets/ # Socket.io logic (if using)
│ ├── app.ts # Express app setup
│ └── server.ts # Entry point (starts server)
├── .env
├── .gitignore
├── tsconfig.json
└── package.json

<!-- PROFILE FLOW DIAGRAM -->

User (Parent / Guardian) ← phone unique
├── Profile (Parent)
├── Profile (Child 1)
├── Profile (Child 2)
└── Profile (Elderly Parent)
