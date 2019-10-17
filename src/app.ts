import express, { Application } from "express";
import morgan = require("morgan");

// Application Imports
const routes = require("./routes");

export class App {
  /**
   * Express instance
   * @public
   */
  public app: Application;

  constructor() {
    this.app = express();
    this.setting();
    this.middlewares();
    this.routes();
  }

  /**
   * Setting basic variables to use it furthur
   */
  private setting() {
    this.app.set("port", process.env.PORT || 3000);
  }

  /**
   * Middlewares
   */
  private middlewares() {
    // HTTP request logger middleware
    this.app.use(morgan("dev"));
    // parse body params and attach them to req.body
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  /**
   * Navigate to Routes
   */
  private routes() {
    this.app.use("/", routes);
  }
}
