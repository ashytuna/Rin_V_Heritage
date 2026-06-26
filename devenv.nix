{ pkgs, ... }:

{
  packages = [
    pkgs.nodejs
  ];

  processes.serve.exec = "node serve.js";
}
