var playlist=[
    {
        title:"Education"
    },
    {
        title:"Software"
    },
    {
        title:"Advertizing"
    },
    {
        title:"Services"
    },
    {
        title:"More"    
    },
    {
        title:"Education"
    },
    {
        title:"Software"
    },
    {
        title:"Advertizing"
    },
    {
        title:"Services"
    },
    {
        title:"More"    
    },
]


playlist.forEach ( serv => 
    {

        services=document.querySelector(".services");

        var card=document.createElement("div");
        card.className="card";
    
        var h1=document.createElement("h1");
        h1.className="Service";
        h1.textContent=serv.title;
    
        card.appendChild(h1);
    
        services.appendChild(card);


    }
)





