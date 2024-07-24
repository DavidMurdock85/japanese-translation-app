"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("./middleware/cors"));
const index_1 = __importDefault(require("./routes/index"));
const data_1 = __importDefault(require("./routes/data"));
const translate_1 = __importDefault(require("./routes/translate"));
const app = (0, express_1.default)();
// Middleware
app.use(cors_1.default);
app.use(body_parser_1.default.json());
// Routes
app.use('/', index_1.default);
app.use('/', data_1.default);
app.use('/', translate_1.default);
exports.default = app;
