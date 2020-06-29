const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "sjbnodsnvlsnvjenfn",
    mongoUri: process.env.MONGODB_URI || 
        process.env.MONGO_HOST || 
        "mongodb+srv://shivang:shivang16@cluster0-ijlmb.mongodb.net/projectData?retryWrites=true&w=majority" 
};

export default config;