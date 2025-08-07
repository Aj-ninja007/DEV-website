const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createAdmins() {
  const admins = [
    { email: 'princelko@gmail.com', password: 'admin123' },
    { email: 'devlko@gmail.com', password: 'dev456' }
  ];

  for (let admin of admins) {
    const existing = await Admin.findOne({ email: admin.email });
    if (!existing) {
      const hashedPassword = await bcrypt.hash(admin.password, 10);
      await new Admin({ email: admin.email, password: hashedPassword }).save();
      console.log(`Admin ${admin.email} created.`);
    } else {
      console.log(`Admin ${admin.email} already exists.`);
    }
  }

  mongoose.disconnect();
}

createAdmins();
