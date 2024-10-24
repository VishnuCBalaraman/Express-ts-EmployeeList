"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empController_1 = require("../controllers/empController");
const router = (0, express_1.Router)();
// Route to get all Employees
router.get('/employees', empController_1.getAllEmployees);
exports.default = router;
