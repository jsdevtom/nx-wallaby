// Remove the environment variable that may be causing a problem
delete process.env.SWCRC;

// Temporary in case we need to debug
console.log(process.env);

// Export an empty config so that Wallaby will use its
// auto-configuration feature
module.exports = () => ({});
