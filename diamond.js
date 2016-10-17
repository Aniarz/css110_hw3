function diamond(n) {
n = parseInt(n,10);
if (n% 2 == 0 )   {
alert( "Odd numbers only!" );
return false;
}

console.log("<pre>");

// top
for(i=1; i<=n; i+=2) {
for (s=0; s<(n-i/2-n/2); s++) { 
console.log(" ");
}
for (j=1; j<=i; j++) {
console.log("*");
}
console.log("<br>")
}

// bottom
for (i=n-2; i>=0; i=i-2) {
for (s=0; s<(n-i/2-n/2); s++) {
console.log(" ");
}
for (j=1; j<=i; j++) {
console.log("*");
}
console.log("<br>")
}

console.log("</pre>");
}

diamond(7);
