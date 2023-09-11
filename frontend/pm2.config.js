module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm",
      args: "start",
      cwd: "/home/ubuntu/apps/green-grocer/frontend",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
