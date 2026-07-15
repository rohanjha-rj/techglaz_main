import fs from "fs";
import path from "path";

const dbFilePath = process.env.VERCEL
  ? path.join("/tmp", "localDb.json")
  : path.join(process.cwd(), "src/lib/localDb.json");

interface LocalDbSchema {
  users: any[];
  applications: any[];
}

function readDb(): LocalDbSchema {
  try {
    if (!fs.existsSync(dbFilePath)) {
      const initial = { users: [], applications: [] };
      const dir = path.dirname(dbFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(dbFilePath, JSON.stringify(initial, null, 2));
      return initial;
    }
    const data = fs.readFileSync(dbFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return { users: [], applications: [] };
  }
}

function writeDb(data: LocalDbSchema) {
  try {
    const dir = path.dirname(dbFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Failed to write to local mock database:", error);
  }
}

let fallbackModeEnabled = !process.env.MONGODB_URI;

export const dbFallback = {
  get isFallback() {
    return fallbackModeEnabled;
  },

  setFallbackMode(enabled: boolean) {
    fallbackModeEnabled = enabled;
  },

  async findUserByEmail(email: string) {
    const db = readDb();
    const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) return null;
    return {
      ...user,
      _id: user._id || user.id,
      id: user.id || user._id,
      select: function() {
        return this; // simulates mongoose chaining
      }
    };
  },

  async createUser(data: any) {
    const db = readDb();
    const id = Math.random().toString(36).substring(2, 9);
    const newUser = {
      _id: id,
      id: id,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    db.users.push(newUser);
    writeDb(db);
    return newUser;
  },

  async updateUserImage(email: string, image: string) {
    const db = readDb();
    const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
      user.image = image;
      user.updatedAt = new Date().toISOString();
      writeDb(db);
    }
    return user;
  },

  async createApplication(data: any) {
    const db = readDb();
    const id = Math.random().toString(36).substring(2, 9);
    const newApp = {
      _id: id,
      id: id,
      ...data,
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    db.applications.push(newApp);
    writeDb(db);
    return newApp;
  },

  async findApplications(userId: string, email: string) {
    const db = readDb();
    const lowerEmail = email.toLowerCase();
    const apps = db.applications.filter(
      app => app.userId === userId || app.email?.toLowerCase() === lowerEmail
    );
    // Sort by createdAt descending
    return apps.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async createContact(data: any) {
    const db = readDb();
    const id = Math.random().toString(36).substring(2, 9);
    const newContact = {
      _id: id,
      id: id,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    if (!(db as any).contacts) (db as any).contacts = [];
    (db as any).contacts.push(newContact);
    writeDb(db);
    return newContact;
  }
};
