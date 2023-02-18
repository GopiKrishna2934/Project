function visible()
        {
            document.getElementById("b").removeAttribute("type");
            document.getElementById("a").setAttribute("src","../Asset/Images/open.jpeg");
        }
        function hide()
        {
            document.getElementById("b").setAttribute("type","password")
            document.getElementById("a").setAttribute("src","../Asset/Images/close.jpeg")
        }
        function bb()
        {
        var id="123456";
        var pass="asdf1234";
        var ID=document.getElementById("aa").value;
        var PASS=document.getElementById("b").value;
        if(id==ID && pass==PASS)
        {   
            document.getElementById("c").setAttribute("type","submit");
            document.getElementById("good").setAttribute("action","../HTML/Index.html");
        }
        else if(id!=ID && pass==PASS)
        {
            document.getElementById("aa").style.borderColor="red";
            document.getElementById("cont").style.borderColor="white";
        }
        else if(id==ID && pass!=PASS)
        {
            document.getElementById("cont").style.borderColor="red";
            document.getElementById("aa").style.borderColor="white";

        }
        else 
        {
            document.getElementById("aa").style.borderColor="red";
            document.getElementById("cont").style.borderColor="red";
            // let x=document.getElementById("aa")
            // document.querySelector{}
        }
        }