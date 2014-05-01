
function listAll() {
console.log("Listing all users");
var url = "/User";
$.getJSON(url , function(data) {
console.log(data);
var tbl_body = "<tr><th width='300px'>username</th><th width='300px'>password</th><th>role</th><th>action</th></tr>";
var reallength = data.length; 
        var tbl_row = ""; //alert(data[0].url); 
	for (var i = 0; i< (reallength) ;i++) { 
	 var tbl_row = "<td>" + data[i].username + "</td><td>" + data[i].password + "</td><td>role</td><td><span class='glyphicon glyphicon-wrench' onclick='editID(\""+data[i].id+"\");'</span></td>";
tbl_body += "<tr>"+tbl_row+"</tr>";
console.log(tbl_body);
}
$("#machineTable").html(tbl_body);
	});
}



