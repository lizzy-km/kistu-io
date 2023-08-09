import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomeFeed from "./Pages/HomeFeed";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import './App.css'
import './App.scss'
import NavBar from "./components/Header/NavBar";
import React, { useState } from "react";
import Review from "./Pages/Review";

const REACT_APP_CLERK_PUBLISHABLE_KEY='pk_test_aW1wcm92ZWQtZ2xpZGVyLTU4LmNsZXJrLmFjY291bnRzLmRldiQ'
if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerkPubKey = REACT_APP_CLERK_PUBLISHABLE_KEY;

function PublicPage() {
  return (
    <>
      <h1>Public page</h1>
      <a href="/protected">Go to protected page</a>
    </>
  );
}

function ProtectedPage() {
  return (
    <>
      <h1>Protected page</h1>
      <UserButton />
    </>
  );
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   parms()
  // },[])

 const[isAnime,setIsAnime] = useState(true)

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        {/* <Route path="/hcfbhdjfyxhbnfwetexckhtbttwmtewewtecbmjeerwrw35e3bf2879jkcxjhf" element={<PublicPage />} /> */}
        <Route
          path="/sign-in/*"
          element={<Login routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<Signup routing="path" path="/sign-up" />}
        />
        <Route
          path="/*"
          element={
          <>
            <SignedIn>
              <NavBar/>
              <HomeFeed isAnime={isAnime} setIsAnime={setIsAnime} />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
         <Route
          path="/review/:id"
          element={
          <>
            <SignedIn>
              <NavBar/>
              <Review isAnime={isAnime}/>
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {

  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;