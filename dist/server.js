"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db")); // Adjust the path as necessary
// Connect to MongoDB and start the server
(0, db_1.default)()
    .then(() => {
    app_1.default.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
})
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
});
