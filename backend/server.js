import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";

import "./passport/github.auth.js"
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js"
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();
const app = express();
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.get("/", (req, res) => {
    res.send("server is ready");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
    console.log("server started on http://localhost:5000");
    connectMongoDB();
})