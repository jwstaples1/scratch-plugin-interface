import { exec, execFile, fork, spawn } from "child_process";
import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const command = "wsl";
  const args = ["-e", "./compiler", "test"];

  const compiler = spawn(command, args);

  const outputArray: string[] = [];
  compiler.stdout.on("data", (data) => {
    outputArray.push(data);
  });

  compiler.stdout.on("close", () => {
    const outputString = outputArray.join("\n");
    res.send(outputString);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
