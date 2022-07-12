const sentensify = str => 
  str
    .split(/\W/)
    .join(" ");

sentensify("May-the-force-be-with-you");