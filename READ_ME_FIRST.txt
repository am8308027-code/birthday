HAPPY BIRTHDAY WEBSITE — SIMPLE INSTRUCTIONS
================================================

WHAT YOU HAVE
--------------
A small folder called "birthday-website" with 4 pages:
  1. index.html      -> the envelope opening page (start here)
  2. memories.html    -> her photo + memory cards
  3. letter.html      -> animated typewriter love letter
  4. surprise.html    -> blow-out-the-candle + confetti finale

HOW TO OPEN IT (no install needed)
------------------------------------
1. Unzip the folder if it's zipped.
2. Double-click "index.html".
3. It opens in your normal browser (Chrome, Safari, Edge...) and just works.
   You do NOT need internet, a server, or to install anything to view it,
   except the fonts need internet the first time to load (any wifi is fine).

HOW TO SET THE COUNTDOWN TO HER BIRTHDAY
--------------------------------------------
The first page (index.html) now shows a live countdown (days, hours,
minutes, seconds) to her birthday.

1. Open index.html with a text editor.
2. Find this line near the bottom:
       const BIRTHDAY_DATE = '2026-09-14T00:00:00';
3. Change the date to hers, keeping the same format:
       'YYYY-MM-DDTHH:MM:SS'
   Example: birthday is March 5, 2027 at midnight ->
       '2027-03-05T00:00:00'
4. Save the file and refresh the browser. That's it — once the date
   arrives, the countdown automatically changes to "It's her day! 🎉"

HOW TO ADD HER REAL PHOTO
----------------------------
1. Find her photo on your computer/phone.
2. Rename it to exactly:  her-photo.jpg
3. Drop it into the "images" folder, replacing the placeholder file.
   (If your photo is a .png or .jpeg, that's fine too — just also open
   memories.html in a text editor and change "her-photo.jpg" in the
   <img src="images/her-photo.jpg"> line to match your file name.)

HOW TO CHANGE THE TEXT (all optional, all easy)
---------------------------------------------------
Open any .html file with a plain text editor (Notepad, TextEdit, or
even right-click -> Open With -> Notepad). Look for lines marked like:

   <!-- EDIT HERE: ... -->

Those tell you exactly what to change and where:
  - index.html    -> change "Sweetheart" to her real name
  - memories.html -> change the photo caption + 4 memory lines
  - letter.html   -> rewrite the whole letter (near top of the <script> tag)
  - surprise.html -> change the final message if you want

You don't need to know how to code — just replace the words between
the quotes or between the tags, save the file, and refresh your browser.

HOW TO SEND IT TO HER (pick whichever is easiest)
------------------------------------------------------
Option A — Easiest, on her device:
  Zip the whole "birthday-website" folder, send it to her (WhatsApp,
  AirDrop, email, USB), she unzips it and double-clicks index.html.

Option B — A real shareable link (still free, takes 2 minutes):
  1. Go to https://app.netlify.com/drop in your browser.
  2. Drag the whole "birthday-website" folder onto the page.
  3. It gives you a live link (like https://xyz123.netlify.app) —
     send that link to her and it opens on any phone or computer.

That's it. Everything is already built and animated —
you only need to swap the photo and, if you want, the words.

Happy birthday to her, from you. 💛
