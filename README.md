# proglog
Progress Logger - application for tracking progress of R/C Model Aircraft training.


Setup
-----
Install dependencies:
cd /path/to/proglog
npm install

Run dev server:
nmp start

http://localhost:8000/app/index.html




Functional overview
-------------------

Logged information:
date
duration (min)
environment (sim/irl)
model
weather (multiple choice - windy, cold, raining, ...)
exercise (hover, lazy 8s, ...)
exercise options (multiple choice, type dependent)
rating (1-5)
crashes
comments


Exercises:
slow piros
upright lazy 8s
flips & rolls
slow inverted piros
upright forward circles
upright backward circles
inverted backward circles
inverted forward circles
true 8s
funnels
funnel 8s
transitional 8s including funnels
8 point slow piro hover
compass piro hover
piro circles
loops
hurricanes
auto-rotation


Exercise "slow piros" options:
speed (60%, 70% 80%, 90%, 100%, 110%, 120%)
orientation (upright, inverted)
rotation (1rpm, 2rpm, 3rpm, 4rpm, 5rpm)
direction (cw, ccw)
control (multiple choice - cyclic, collective, rudder)

