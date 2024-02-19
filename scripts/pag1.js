var values = {
    gaza:{
    value1: "Gaza",
    value2: "Oraș",
    value3: "Cel mai mare oraș din Fâșia Gaza, reprezintă un centru al luptelor din regiune. Potrivit armatei israeliene, aici se află baze militare secrete ale Hamas, interconectate prin tuneluri subterane."},
    
    khan: {
    value1: "Khan Younis",
    value2: "Oraș",
    value3: "Principalul oraș din sudul regiunii, este considerat „casa liderilor Hamas”. În urma atacurilor din nord, foarte mulți locuitori s-au refugiat aici."},
    
    ierusalim: {
    value1: "Ierusalim",
    value2: "Oraș",
    value3: "Cel mai important oraș în contextul conflictului. Este considerat sfânt pentru religiile iudaică, creștină și musulmană. Ambele state (Israel și Palestina) îl recunosc drept capitală."}
    ,
    haserim:{
        value1:"Baza Aeriană Haserim",
        value2:"Unitate militară",
        value3:"Bază militară importantă situată în deșertul Negev. În 2017, S.U.A. a inaugurat aici un sistem performant de radar, primul din parteneriatul israelo-american și are în permanență aici un contingent de soldați americani."
    }
    ,
    mossad:{
        value1:"Institutul de informații și operațiuni speciale - Mossad",
        value2:"Sediu al unei instituții",
        value3:"Sediul central al serviciilor israeliene de informații, situat în Tel Aviv. Acesta este un complex securizat și bine păzit, care adăpostește birourile unuia dintre cele mai puternice servicii de informații din lume."
    }
    ,
    erez:{
        value1:"Trecerea Erez",
        value2:"Punct de trecere a frontierei",
        value3:"Punct de trecere principal între Gaza și Israel esențial pentru fluxul de persoane și bunuri între cele două teritorii. Controlul asupra acestui punct de frontieră poate influența semnificativ capacitatea de a monitoriza și controla mișcările persoanelor și a bunurilor, precum și de a preveni infiltrările teroriste și contrabanda de arme în Gaza."
    }
};

// Functia de actualizare a paragrafelor
function updateValues(checkpoint) {
    document.getElementById('value1').innerText = values[checkpoint].value1;
    document.getElementById('value2').innerText = values[checkpoint].value2;
    document.getElementById('value3').innerText = values[checkpoint].value3;
}