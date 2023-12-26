import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice'
import { PokemonsApp } from './Pokemons/pages/PokemonsApp'

 const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  console.log(count)

  return (
    <div className='App-header container'>
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
      <p>Valor: {count}</p>
      <div > 
        <button type='button' className='btn btn-primary mx-2' onClick={()=>{dispatch(increment())}}>Increment</button>
        <button type='button' className='btn btn-primary mx-2' onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button type='button' className='btn btn-primary mx-2'  onClick={()=>{dispatch(incrementByAmount(2))}}>Increment by 2</button>
      </div>

      <PokemonsApp />
    </div>
  )
}

export default App
