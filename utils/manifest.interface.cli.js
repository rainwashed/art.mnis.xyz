#!/usr/bin/env node

import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import chalk from "chalk";
import inquirer from "inquirer";

const __dirname = join(dirname(fileURLToPath(import.meta.url)), "../");
let manifest = JSON.parse(
  fs.readFileSync(join(__dirname, "public", "manifest.json"))
);

console.log("loaded manifest");
console.log(manifest);

function askWriteChanges() {
  console.log("new manifest");
  console.log(manifest);
  inquirer
    .prompt([
      {
        name: "x",
        message: chalk.bold.red("CONFIRM WRITE TO FILE CHANGES?"),
        type: "confirm",
        default: false,
      },
    ])
    .then((answer) => {
      if (answer.x === false) return process.exit(1);
      fs.writeFileSync(
        join(__dirname, "public", "manifest.json"),
        JSON.stringify(manifest),
        {
          encoding: "utf-8",
        }
      );
    });
}

function insertNewPost() {
  inquirer
    .prompt([
      {
        name: "title",
        message: chalk.italic("Post Title?"),
        type: "input",
      },
      {
        name: "description",
        message: chalk.italic("Post Description?"),
        type: "input",
      },
      {
        name: "timestamp",
        message: chalk.italic("Post Timestamp?"),
        type: "number",
        default: Date.now(),
      },
      {
        name: "thumbnail",
        message: chalk.italic("Post Thumbnail Link?"),
        type: "input",
      },
      {
        name: "src",
        message: chalk.italic("Post Markdown Source?"),
        type: "input",
      },
      {
        name: "uid",
        message: chalk.italic("Post UID?"),
        type: "input",
      },
    ])
    .then((answers) => {
      let obj = {
        title: answers.title,
        description: answers.description,
        timestamp: answers.timestamp,
        thumbnail: answers.thumbnail,
        src: answers.src,
        uid: answers.uid,
      };

      console.log("moving file...");
      fs.renameSync(
        join(__dirname, answers.src),
        join(__dirname, "public", "posts", answers.src)
      );
      console.log("moved file");

      manifest["posts"].push(obj);
      manifest["metadata"]["postCount"] += 1;

      askWriteChanges();
    });
}

function deletePost() {
  inquirer
    .prompt([
      {
        name: "uid",
        message: "UID to Remove?",
        type: "input",
      },
    ])
    .then((answer) => {
      Array.from(manifest["posts"]).forEach((x, y) => {
        if (x.uid === answer.uid) {
          console.log("found:", x);

          manifest["metadata"]["postCount"] -= 1;
          manifest["posts"].splice(y, 1);
        }
      });

      askWriteChanges();
    });
}

async function root() {
  inquirer
    .prompt([
      {
        name: "x",
        message: chalk.italic("< Root >"),
        type: "list",
        choices: ["Insert", "Delete", "Update MOTD"],
      },
    ])
    .then((answer) => {
      switch (String(answer.x).toString().toLowerCase()) {
        case "insert":
          console.log("insert");
          insertNewPost();
          break;
        case "delete":
          console.log("delete");
          deletePost();
          break;
        case "update motd":
          console.log("update motd");
          break;
      }
    });
}

root();
