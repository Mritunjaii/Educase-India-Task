const express=require('express');
const {config}=require('./src/config');
const app=express();
const cors = require('cors');
const apiRoutes = require('./src/routes');
app.use(cors({
    origin:"*",
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
}));
// app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',apiRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({
        message: "Welcome to the School API"
    });
});

app.listen(config.BACKEND_PORT,()=>{
    console.log(`Server is running on port ${config.BACKEND_PORT}`);
})