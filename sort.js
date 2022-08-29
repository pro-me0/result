 var x, points, i, y, co, p, ar, hide, z, dem, student, sn, table, tab, tabh;
i = 0;
y = 1;
z = 1;
points = [];ar = [];
            
hide = document.getElementById("hide");
sn = document.getElementById("in");
x = document.getElementById("in1");
co = document.getElementById("col");
p = document.getElementById("demo");
dem = document.getElementById("dem");

table = "<table> <tr> <th>Name</th> <th>Total</th> </tr>";
tab = "<table> <tr> <th>Name</th> <th>Position</th> </tr>"; 
tabh = "<table> <tr> <th>Name</th> <th>Total</th> <th>Position</th> </tr>"; 
function sortx(){
    student = new Object();
    student.Name = sn.value; student.Total = x.valueAsNumber;
    points.push(student);
        

    table += "<tr>";
    table += "<td>" + student.Name + "</td>";
    table += "<td>" + student.Total + "</td>";
    table += "</tr>";
    dem.innerHTML = table;
    x.value = "";
    sn.value = "";
    sn.focus();
    dem.style.height = "60vh";
}
function delx(){
    points = points.slice(0, points.length - 1);
    let j= 0;
    dem.innerHTML = "";
    while (j < points.length){
        dem.innerHTML += "<span>" + points[j] + "<span>, ";
        j++;
    }
    x.value = "";
    sn.focus()="true";
}
function sort(){
    table+="</table>";
    points.sort(function(a, b){return  b.Total - a.Total})
   /*  while (i < points.length){
        tab += "<tr>";
        tab += "<td> " + points[points.length-1].Name + "</td>";
        points[points.length-1].Position = y;
        tab += "<td> " + points[points.length-1].Position + "</td>";
        tab+= "</tr>";
        i++;
        y++;
    }
    p.innerHTML = tab;
    ar.push("<hr><code><b>Set " + z + "</b><br>" + p.innerHTML + "</code>" + "<br>");
    hide.innerHTML = "<hr><code><b>Set " + z + "</b><br>" + p.innerHTML + "</code>" + "<br>"; */
    i = 0; z++;
    p.style.height = "60vh";

    let a, k, kk;
    a = points.length;
    k=1;
    kk=0;
    while (k <= a){
        points[kk].Position = k;
        k++;
        kk++;
    }

    for (let i = 0; i< points.length; i++){
        tab += "<tr>";
        tab += "<td>" + points[i].Name + "</td>";
        tab += "<td>" + points[i].Position + "</td>";
        tab += "</tr>";
    }
    p.innerHTML = tab;
    table+="</table>";
    tab+="</table>";
    history();
}
function history() {
    let x, i;
    x = 0; i = 1;
    for (let i = 0; i< points.length; i++){
    tabh += "<tr>";
    tabh += "<td>" + points[i].Name + "</td>";
    tabh += "<td>" + points[i].Total + "</td>";
    tabh += "<td>" + points[i].Position + "</td>";
    tabh += "</tr>";
    }
    ar.push(tabh);
    hide.innerHTML = ar;
    i++;
}
function clean(){
    ar = [];
    p.innerHTML = "";
    p.style.height = "0";
    dem.style.height = "0";
    dem.innerHTML = "";
    points = [];
    table = "<table> <tr> <th>Name</th> <th>Total</th> </tr>";
    tab = "<table> <tr> <th>Name</th> <th>Position</th> </tr>";
    tabh += "<table> <tr> <th>Name</th> <th>Total</th> <th>Position</th>";
}
function del(){
    hide.innerHTML = " ";
    student = {};
    z=1;
}

function log(){
    hide.style.width = "74vw";
    hide.style.height = "68vh";

    setTimeout(() => {
        document.getElementById("four").style.filter = "blur(.49em)";
        document.getElementById("hix").style.filter = "blur(.49em)";
        document.getElementById("d2").style.filter = "blur(.49em)";
        document.getElementById("img").style.filter = "blur(.49em)";
},400)
   
    
    document.getElementById("hidex").style.height = "83vh";
    document.getElementById("hidex").style.width = "80vw";
    document.getElementById("hidex").style.zIndex = "1";
    document.getElementById("b").style.width= "140px"
    
    document.getElementById("b").style.display="inline";
    document.getElementById("b").style.width="90px";
    document.getElementById("cross").style.display="inline";
    document.getElementById("del").style.display="block";
    document.getElementById("del").style.width="100px";
    document.getElementById("two").style.width="240px";

    document.getElementById("four").style.zIndex = "-1";
    // document.getElementById("sec").style.zIndex = "-2";
}

function cl(){
    setTimeout(() => {
    hide.style.width = "0";
    hide.style.height = "0";
    document.getElementById("hidex").style.height = "0";

    document.getElementById("hidex").style.width = "0";
    document.getElementById("b").style.width= "0"

    document.getElementById("b").style.display="none";
    document.getElementById("cross").style.display="none";
    document.getElementById("del").style.display="none";
    document.getElementById("two").style.width="0";
    document.getElementById("four").style.zIndex = "1";
    // document.getElementById("sec").style.zIndex = "1";

    },);
    document.getElementById("four").style.filter = "initial";
    document.getElementById("hix").style.filter = "initial";
    document.getElementById("d2").style.filter = "initial";
    document.getElementById("img").style.filter = "initial";

    
}

function hi(){
    document.getElementById("hix").style.top = "0";
    setTimeout(function(){
        document.getElementById("h1").style.color = "black";
        styler(ii);
    }, 500);
}

var ii, id;
ii = 0;
id = ["in", "in1", "but", "butd", "but1", "but2"];    

function styler(ii){
            document.getElementById(id[ii]).style.padding = "0.65em";
            document.getElementById(id[ii]).style.background = "rgba(255,255,255,1)";
            document.getElementById(id[ii]).style.fontSize = "calc(.5em + .5vw)";
            if (ii > 1){
            document.getElementById(id[ii]).style.width = "12vw";
            }
			if(ii < id.length - 1){
				setTimeout(function (){
					styler(ii += 1);
				}, 100)
			}
    }
    
window.addEventListener("load", hi(), false);


/* function stylus(){
    document.getElementById(id[ii]).style.padding = "0.7em";
    document.getElementById(id[ii]).style.background = "rgba(255,255,255,1)";
    setTimeout(function (){
        stylus()
    }, 100)
    ii++;
        } */



/* function ins(){
    document.getElementById("in").style.padding = ".7em";
    document.getElementById("in").style.background = "rgba(255,255,255,1)";
    setTimeout(function(){but()}, 100);
}

function but(){
    document.getElementById("but").style.padding = ".7em";
    document.getElementById("but").style.background = "rgba(255,255,255,1)";
    setTimeout(function(){but1()}, 100);
}
function but1(){
    document.getElementById("but1").style.padding = ".7em";
    document.getElementById("but1").style.background = "rgba(255,255,255,1)";
    setTimeout(function(){but2()}, 100);
}
function but2(){
    document.getElementById("but2").style.padding = ".7em";
    document.getElementById("but2").style.background = "rgba(255,255,255,1)";
    load1();
} */
