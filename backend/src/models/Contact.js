// Contact Model with Local mock database

const fallbackMessages = [];

class Contact {
  static async create(contactData) {
    const mockCreated = { id: fallbackMessages.length + 1, created_at: new Date().toISOString(), ...contactData };
    fallbackMessages.push(mockCreated);
    return mockCreated;
  }

  static async getAll() {
    return fallbackMessages;
  }
}

module.exports = Contact;

