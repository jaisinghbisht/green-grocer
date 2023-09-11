module.exports = {
  apps: [
    {
      name: "backend",
      script: "server.js",
      cwd: "/home/ubuntu/apps/green-grocer/backend",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
