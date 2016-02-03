var myFirebaseRef = new Firebase("https://booksinformation.firebaseio.com/");

myFirebaseRef.child("Title").on("value", function(snapshot) {
  var s1 = snapshot.val(); 
  document.getElementById("d1").innerHTML = s1;
});

myFirebaseRef.child("Author").on("value", function(snapshot) {
  var s2 = snapshot.val(); 
  document.getElementById("d2").innerHTML = s2;
});

myFirebaseRef.child("DescWings").on("value", function(snapshot) {
  var s3 = snapshot.val();  
  document.getElementById("demo").innerHTML = s3;
});

myFirebaseRef.child("DescIndia").on("value", function(snapshot) {
  var s7 = snapshot.val();  
	document.getElementById("demo").innerHTML = s7;
});

myFirebaseRef.child("DesAPJ").on("value", function(snapshot) {
  var s5 = snapshot.val();  
	document.getElementById("demo").innerHTML = s5;
});

myFirebaseRef.child("DescIgnited").on("value", function(snapshot) {
  var s6 = snapshot.val();  
	document.getElementById("demo").innerHTML = s6;
});

