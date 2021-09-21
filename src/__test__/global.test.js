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
