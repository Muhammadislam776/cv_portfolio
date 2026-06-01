// Form Validator Middleware for Contact Submissions

exports.validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const errors = {};

  if (!name || !name.trim()) {
    errors.name = "Name is required";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!email || !email.trim()) {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address";
    }
  }

  if (!subject || !subject.trim()) {
    errors.subject = "Subject is required";
  } else if (subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters";
  }

  if (!message || !message.trim()) {
    errors.message = "Message content is required";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  // Sanitize values
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.subject = subject.trim();
  req.body.message = message.trim();

  next();
};
