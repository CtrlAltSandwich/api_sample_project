var output = document.getElementById("output");
        var list = document.getElementById("list");
        function myFunction(){
            var buildHTML = "";
            if(this.readyState == 4 && this.status == 200){
                var json = JSON.parse(this.responseText);
                for (var i = 0 ; i < json.length; i++){
                  buildHTML += "<li>";
                    buildHTML += json[i].name.first + " " +json[i].name.last + " ";
                    buildHTML += json[i].balance;
                    buildHTML += "</li>";
                }
            }
            list.innerHTML = buildHTML;
        }
        
        var myRequest = new XMLHttpRequest();
        myRequest.onreadystatechange = myFunction;
        myRequest.open("GET","https://api.myjson.com/bins/vo0wt");
        myRequest.send();
        console.log(myRequest)    