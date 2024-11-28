# FlySwatter

An in-brower fly-swuatter game in which random targets show up.
If you can hit them, you gain or lose points.

The goal is to collect as many points as you can in the limited time frame.

A standard target is worth 3 points.
An extra target is worth 10 points.
If you hit the target that you should avoid, you lose 3 points.

## Summer edition

- Standard target: grey fly
- Extra target: golden fly
- Target to avoid: ladybug

### Index page

![Summer edition screenshot](./Images/index-summer-edition.png)

### Game

![Summer edition screenshot](./Images/game-summer-edition.png)

## Winter edition

- Standard target: a stocking
- Extra target: Krampus
- Target to avoid: Santa

### Specifics of this edition

If you hit Santa (who you should avoid), a dizzy Santa shows up.

If you hit the extra target, the Krampus, it will turn into an elf.

### Index page 

![Winter edition screenshot](./Images/index-winter-edition.png)

### Game

![Winter edition screenshot](./Images/game-winter-edition.png)

## Switch between Winter and Summer mode

Change the value of AppSettings.Edition in appsettings.json to either "summer" or "winter"

## How to run

1) Open a command prompt (cmd.exe)
2) Run Flyswatter.exe

The following messages should show up:

info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5000
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Production
info: Microsoft.Hosting.Lifetime[0]
      Content root path: C:\Users\hu2r0405\OneDrive - Siemens Energy\001_Management\2023\Családi nap játékok\Flyswatter\
warn: Microsoft.AspNetCore.HttpsPolicy.HttpsRedirectionMiddleware[3]
      Failed to determine the https port for redirect.

If you don't see the info lines above but the error below:

Unhandled exception. System.IO.IOException: Failed to bind to address http://127.0.0.1:5000: address already in use.

That means the port 5000 is in use. You have to stop the process blocking the port.
Here are the steps to do that:

2.1) Command prompt
2.2) netstat -ano | find "5000"

You should get similar results to this:

TCP    127.0.0.1:5000         0.0.0.0:0              LISTENING       7064

This means that the process with PID 7064 is using the port.

2.3) Task manager / Details
2.4) Find the PID in the list, then "End task"
2.5) Try again starting from step 2

3) Open a browser
4) Open the address: http://localhost:5000
5) Enjoy!

## Contributors
matraiBarnabas - author
ignotus87 / Takács Zsolt - Winter edition
Szekely Ferencz - images for Winter edition