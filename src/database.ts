import mongoose from 'mongoose';
import DatabaseError from 'models/errors/database.error.model';

class MongoDatabase {
    public async connect() {
        try {
            const mongoUrl = ''

            await mongoose.connect(mongoUrl);
        }
        catch (error: any) {
            console.error("Database Error: ", error.message);
            process.exit(1);
        }
    }
};

export default MongoDatabase;