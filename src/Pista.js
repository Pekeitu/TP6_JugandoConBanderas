function Pista({paises, paisCorrecto, letrasDePista}) {
    if(typeof paisCorrecto === "undefined" || paises.length === 0) return (<div></div>);
    
    let str = paises[paisCorrecto].name;
    let strArr = str.split('');
    strArr = strArr.map((element, index) => {
        if(!letrasDePista.includes(index) && paises[paisCorrecto].name[index] != ' ') return '_';
        return element; 
    })
    str = strArr.join('');

    return (
        <h1>{str}</h1>
    )
}

export default Pista;