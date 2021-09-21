const text = "Hola Mundo";


test('Debe contener un texto', ()=>{
  expect(text).toMatch(/Mundo/)
})

// Los // delimitan la palabra a buscar.


// Probar si un array contiene un valor.
const fruits = ['manzana', 'melon', 'banana']
test('Tenemos una banana?', ()=>{
  expect(fruits).toContain('banana')
})

// Comparar numeros
test('Mayor que',()=>{
  expect(10).toBeGreaterThan(3)
})

// Conocer si un valor es true o no.
test('Verdadero',()=>{
  expect(true).toBeTruthy()
})

// Probar si un callback funciona.
const reverseString = (str,callback)=>{
  callback(str.split("").reverse().join(""))
}

test('Probar un callback',()=>{
  reverseString("Hola",(str)=>{
    expect(str).toBe('aloH')
  })
})

// Probando promesas
const reverseString2 = str => {
  return new Promise((resolve, reject)=>{
    if(!str){
      reject(Error('Error'))
    }
    resolve(str.split("").reverse().join(""))  
  })
}

test('Probar nuestra promesa',()=>{
  return reverseString2('Hola')
  .then(string=>{
    expect(string).toBe('aloH')
  })
})

// Probar Async/Await
test('Probar nuestra promesa',async ()=>{
  const string = await reverseString2('Hola')
  expect(string).toBe('aloH')
})

// Funciones que se ejecutaran antes o despues de cada prueba
// Útil por ejemplo para montar y desmontar una base de datos y testearla.

// afterEach(()=>{
//   console.log('Despues de cada prueba')
// })

// afterAll(()=>{
//   console.log('Despues de todas las pruebas')
// })

// beforeEach(()=>{
//   console.log('Antes de cada prueba')
// })

// beforeAll(()=>{
//   console.log('Antes de todas las pruebas')
// })