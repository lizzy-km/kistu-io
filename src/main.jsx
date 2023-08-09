import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { UNSAFE_RouteContext } from 'react-router-dom'


// function useContext(Context) {
//   var dispatcher = resolveDispatcher();

//   {
//     // TODO: add a more generic warning for invalid values.
//     if (Context._context !== undefined) {
//       var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
//       // and nobody should be using this in existing code.

//       if (realContext.Consumer === Context) {
//         error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
//       } else if (realContext.Provider === Context) {
//         error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
//       }
//     }
//   }

//   return dispatcher.useContext(Context);
// }

//  const  useNavigate=()=> {
//   let {
//     isDataRoute
//   } = useContext(UNSAFE_RouteContext);
//   return isDataRoute ? useNavigateStable() : useNavigateUnstable();
// }

// const navigate = useNavigate();
//   const[url,setUrl] = useState('')
//   const parms =()=> {
//     let {matches}= useContext(UNSAFE_RouteContext);
//     let routeMatch = matches[matches.length-1];
//     console.log(routeMatch);
//     setUrl(routeMatch)
//      if (url === '/') {
//       navigate('/anime')
//      }
    
//   }

//   const plah = parms()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>,
)
