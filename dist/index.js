"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.get("/", function (req, res) {
    res.json({ status: "OK" });
});
var port = Number((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
app.listen(port, "0.0.0.0", function () {
    console.log("Server started at port ".concat(port));
});
