exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/som_assistance';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/somm_assistance_test';
exports.PORT = process.env.PORT || 8080;
// exports.PORT = process.env.PORT || 9000;
exports.JWT_SECRET = process.env.JWT_SECRET || 'jellopudding';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';