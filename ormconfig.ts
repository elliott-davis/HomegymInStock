export = {
    type: "postgres",
    url: process.env.DATABASE_URL || "postgres://rsb:test@localhost:5432/homegym",
    entities: ["src/entity/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    synchronize: true,
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
   },
   seeds: ["src/seeds/**/*{.ts,.js}"]
}
