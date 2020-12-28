//obtiene la diferencia de años
export function getDifYear(year:number): number {

  return new Date().getFullYear() - year;
}

// calcula el total a pagar segun la marca

export function calcularMarca(marca:string):number{
  let incremento = 0;
  switch(marca){
    case 'europeo':
          incremento = 1.30;
          break;
    case 'americano':
          incremento = 1.15;
          break;
    case 'asiatico':
          incremento = 1.05;
          break;
    default :
          break;
  }
  return incremento;
}

//calcula el tipo de seguros

export function getPlan(plan:string):number {
  return(plan === 'basico' ? 1.20 : 1.50);
}
