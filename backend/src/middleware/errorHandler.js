// Global Error Handler Middleware
module.exports = (err, req, res, next) => {
  console.error("Global Error Interceptor:", err.stack || err.message || err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      status: statusCode
    }
  });
};
